import React from 'react'
import { useNavigate } from 'react-router-dom'
import { categories } from '../data/sessions'

export default function Home({ userData }) {
  const navigate = useNavigate()

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  const getTotalProgress = () => {
    let completed = 0
    let total = 0
    Object.keys(categories).forEach(key => {
      total += categories[key].totalSessions
      completed += (userData.completedSessions[key] || []).length
    })
    return { completed, total, percentage: Math.round((completed / total) * 100) }
  }

  const progress = getTotalProgress()

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

  const dailyStreak = getDailyStreak()

  return (
    <div className="fade-in">
      {/* Header */}
      <div className="mb-4">
        <p className="text-muted">{getGreeting()},</p>
        <h1 className="text-gold">{userData.name || 'Friend'}</h1>
      </div>

      {/* Daily Quote */}
      <div className="scripture-quote mb-4">
        <p>"Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid."</p>
        <p className="scripture-reference">— John 14:27</p>
      </div>

      {/* Progress Overview */}
      <div className="card mb-3" onClick={() => navigate('/progress')} style={{ cursor: 'pointer' }}>
        <div className="flex justify-between items-center mb-2">
          <h3>Your Journey</h3>
          <span className="badge badge-gold">{progress.percentage}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress.percentage}%` }}></div>
        </div>
        <p className="text-muted mt-2" style={{ fontSize: '0.9rem' }}>
          {progress.completed} of {progress.total} sessions completed
        </p>
      </div>

      {/* Quick Stats */}
      <div className="flex gap-2 mb-4">
        <div className="card" style={{ flex: 1, textAlign: 'center' }}>
          <div className="text-gold" style={{ fontSize: '2rem', fontFamily: 'Cormorant Garamond' }}>
            {dailyStreak}
          </div>
          <p className="text-muted" style={{ fontSize: '0.85rem' }}>Day Streak</p>
        </div>
        <div className="card" style={{ flex: 1, textAlign: 'center' }} onClick={() => navigate('/tracker')}>
          <div className="text-green" style={{ fontSize: '2rem', fontFamily: 'Cormorant Garamond' }}>
            {userData.streaks.pornography.current || 0}
          </div>
          <p className="text-muted" style={{ fontSize: '0.85rem' }}>Days Clean</p>
        </div>
      </div>

      {/* Quick Actions */}
      <h3 className="mb-2">Continue Your Healing</h3>
      {Object.values(categories).map(category => {
        const completed = (userData.completedSessions[category.id] || []).length
        const nextSession = completed + 1
        const isComplete = completed >= category.totalSessions

        return (
          <div
            key={category.id}
            className="session-item"
            onClick={() => !isComplete && navigate(`/sessions/${category.id}`)}
          >
            <div
              className="category-icon"
              style={{
                background: `${category.color}33`,
                width: 50,
                height: 50,
                fontSize: '1.5rem'
              }}
            >
              {category.icon}
            </div>
            <div style={{ flex: 1 }}>
              <h4>{category.name}</h4>
              <p className="text-muted" style={{ fontSize: '0.85rem' }}>
                {isComplete
                  ? 'Completed!'
                  : `Session ${nextSession} of ${category.totalSessions}`}
              </p>
            </div>
            {!isComplete && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6" />
              </svg>
            )}
          </div>
        )
      })}

    </div>
  )
}
