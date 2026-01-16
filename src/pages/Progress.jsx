import React from 'react'
import { useNavigate } from 'react-router-dom'
import { categories } from '../data/sessions'
import { format, parseISO, subDays } from 'date-fns'

export default function Progress({ userData }) {
  const navigate = useNavigate()

  const getTotalStats = () => {
    let completed = 0
    let total = 0

    Object.keys(categories).forEach(key => {
      total += categories[key].totalSessions
      completed += (userData.completedSessions[key] || []).length
    })

    return { completed, total }
  }

  const stats = getTotalStats()

  const getSessionsThisWeek = () => {
    const weekAgo = subDays(new Date(), 7)
    return (userData.dailyUsage || [])
      .filter(d => parseISO(d.date) >= weekAgo)
      .reduce((acc, d) => acc + (d.sessions?.length || 0), 0)
  }

  const getDailyStreak = () => {
    const usage = userData.dailyUsage || []
    if (usage.length === 0) return 0

    let streak = 0
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    for (let i = 0; i <= 365; i++) {
      const checkDate = new Date(today)
      checkDate.setDate(checkDate.getDate() - i)
      const dateStr = checkDate.toISOString().split('T')[0]

      if (usage.find(u => u.date === dateStr)) {
        streak++
      } else if (i > 0) {
        break
      }
    }
    return streak
  }

  const getRecentActivity = () => {
    const recent = []
    const usage = userData.dailyUsage || []

    usage.slice(-10).reverse().forEach(day => {
      day.sessions?.forEach(session => {
        recent.push({
          date: day.date,
          category: session.category,
          sessionNumber: session.sessionNumber
        })
      })
    })

    return recent.slice(0, 5)
  }

  const recentActivity = getRecentActivity()
  const dailyStreak = getDailyStreak()
  const weekSessions = getSessionsThisWeek()

  return (
    <div className="fade-in">
      <h1 className="mb-4">Your Progress</h1>

      {/* Overall Progress */}
      <div className="card mb-4">
        <h3 className="mb-3">Overall Journey</h3>
        <div className="flex justify-between mb-2">
          <span className="text-muted">Sessions Completed</span>
          <span className="text-gold">{stats.completed} / {stats.total}</span>
        </div>
        <div className="progress-bar mb-3">
          <div
            className="progress-fill"
            style={{ width: `${(stats.completed / stats.total) * 100}%` }}
          ></div>
        </div>
        <p className="text-muted" style={{ fontSize: '0.85rem' }}>
          {Math.round((stats.completed / stats.total) * 100)}% of your healing journey complete
        </p>
      </div>

      {/* Quick Stats */}
      <div className="flex gap-2 mb-4">
        <div className="card" style={{ flex: 1, textAlign: 'center' }}>
          <div className="text-gold" style={{ fontSize: '2rem', fontFamily: 'Cormorant Garamond' }}>
            {dailyStreak}
          </div>
          <p className="text-muted" style={{ fontSize: '0.8rem' }}>Day Streak</p>
        </div>
        <div className="card" style={{ flex: 1, textAlign: 'center' }}>
          <div className="text-green" style={{ fontSize: '2rem', fontFamily: 'Cormorant Garamond' }}>
            {weekSessions}
          </div>
          <p className="text-muted" style={{ fontSize: '0.8rem' }}>This Week</p>
        </div>
        <div className="card" style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontFamily: 'Cormorant Garamond', color: 'var(--accent-purple)' }}>
            {(userData.dailyUsage || []).reduce((acc, d) => acc + (d.sessions?.length || 0), 0)}
          </div>
          <p className="text-muted" style={{ fontSize: '0.8rem' }}>All Time</p>
        </div>
      </div>

      {/* Program Progress */}
      <h3 className="mb-3">Program Progress</h3>
      {Object.values(categories).map(category => {
        const completed = (userData.completedSessions[category.id] || []).length
        const percentage = Math.round((completed / category.totalSessions) * 100)

        return (
          <div
            key={category.id}
            className="card mb-2"
            onClick={() => navigate(`/sessions/${category.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <div className="flex items-center gap-3">
              <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
              <div style={{ flex: 1 }}>
                <div className="flex justify-between mb-1">
                  <h4>{category.name}</h4>
                  <span className="text-gold">{percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${percentage}%`, background: category.color }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Habit Tracking Stats */}
      <h3 className="mb-3 mt-4">Habit Tracking</h3>
      <div className="flex gap-2 mb-4">
        <div className="card" style={{ flex: 1 }}>
          <div className="flex items-center gap-2 mb-2">
            <span>🕊️</span>
            <span className="text-muted" style={{ fontSize: '0.85rem' }}>Purity</span>
          </div>
          <div className="text-gold" style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond' }}>
            {userData.streaks.pornography.current} days
          </div>
          <p className="text-muted" style={{ fontSize: '0.75rem' }}>
            Best: {userData.streaks.pornography.best} days
          </p>
        </div>
        <div className="card" style={{ flex: 1 }}>
          <div className="flex items-center gap-2 mb-2">
            <span>✋</span>
            <span className="text-muted" style={{ fontSize: '0.85rem' }}>Nail Free</span>
          </div>
          <div className="text-green" style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond' }}>
            {userData.streaks.nailBiting.current} days
          </div>
          <p className="text-muted" style={{ fontSize: '0.75rem' }}>
            Best: {userData.streaks.nailBiting.best} days
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      {recentActivity.length > 0 && (
        <>
          <h3 className="mb-3">Recent Activity</h3>
          {recentActivity.map((activity, index) => {
            const cat = categories[activity.category]
            return (
              <div key={index} className="card mb-2" style={{ padding: 12 }}>
                <div className="flex items-center gap-3">
                  <span>{cat?.icon}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.9rem' }}>
                      {cat?.name} - Session {activity.sessionNumber}
                    </p>
                    <p className="text-muted" style={{ fontSize: '0.8rem' }}>
                      {format(parseISO(activity.date), 'MMM d, yyyy')}
                    </p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
              </div>
            )
          })}
        </>
      )}

      {/* Motivational Quote */}
      <div className="scripture-quote mt-4">
        <p>"Wherefore, be not weary in well-doing, for ye are laying the foundation of a great work."</p>
        <p className="scripture-reference">— D&C 64:33</p>
      </div>
    </div>
  )
}
