import React, { useState } from 'react'
import { format, subDays, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns'

const milestones = [
  { days: 1, title: 'First Day', description: 'You\'ve taken the first step!', icon: '🌱' },
  { days: 3, title: 'Three Days', description: 'Building momentum', icon: '🌿' },
  { days: 7, title: 'One Week', description: 'A week of strength!', icon: '🌳' },
  { days: 14, title: 'Two Weeks', description: 'Half a month strong', icon: '⭐' },
  { days: 21, title: 'Three Weeks', description: 'New habits forming', icon: '🌟' },
  { days: 30, title: 'One Month', description: 'A month of victory!', icon: '🏆' },
  { days: 60, title: 'Two Months', description: 'Growing stronger', icon: '💪' },
  { days: 90, title: 'Three Months', description: 'Incredible progress', icon: '🎯' },
  { days: 180, title: 'Six Months', description: 'Half a year free!', icon: '👑' },
  { days: 365, title: 'One Year', description: 'A year of freedom!', icon: '🏅' }
]

export default function Tracker({ userData, updateStreak }) {
  const [activeTab, setActiveTab] = useState('pornography')
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [celebrating, setCelebrating] = useState(null)

  const tabs = [
    { id: 'pornography', name: 'Purity', icon: '🕊️' },
    { id: 'nailBiting', name: 'Nail Biting', icon: '✋' }
  ]

  const streak = userData.streaks[activeTab] || { current: 0, best: 0, lastUpdate: null }

  const handleCheckIn = async () => {
    const today = new Date().toISOString().split('T')[0]
    if (streak.lastUpdate === today) return

    await updateStreak(activeTab, true)

    // Check for milestone celebration
    const newDays = streak.current + 1
    const milestone = milestones.find(m => m.days === newDays)
    if (milestone) {
      setCelebrating(milestone)
      setTimeout(() => setCelebrating(null), 3000)
    }
  }

  const handleReset = async () => {
    await updateStreak(activeTab, false)
    setShowResetConfirm(false)
  }

  const today = new Date()
  const todayStr = today.toISOString().split('T')[0]
  const hasCheckedInToday = streak.lastUpdate === todayStr

  // Generate calendar days
  const monthStart = startOfMonth(today)
  const monthEnd = endOfMonth(today)
  const calendarDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Calculate which days were successful (simplified - in real app would track each day)
  const getSuccessfulDays = () => {
    const days = []
    if (streak.lastUpdate && streak.current > 0) {
      const lastUpdate = new Date(streak.lastUpdate)
      for (let i = 0; i < streak.current; i++) {
        days.push(subDays(lastUpdate, i).toISOString().split('T')[0])
      }
    }
    return days
  }

  const successfulDays = getSuccessfulDays()

  return (
    <div className="fade-in">
      {/* Celebration Modal */}
      {celebrating && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 300,
          padding: 20
        }}>
          <div className="card text-center fade-in" style={{ maxWidth: 300 }}>
            <div style={{ fontSize: '4rem', marginBottom: 16 }}>{celebrating.icon}</div>
            <h2 className="text-gold mb-2">{celebrating.title}!</h2>
            <p className="text-muted mb-3">{celebrating.description}</p>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              "I can do all things through Christ which strengtheneth me." — Philippians 4:13
            </p>
          </div>
        </div>
      )}

      {/* Reset Confirmation */}
      {showResetConfirm && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 300,
          padding: 20
        }}>
          <div className="card" style={{ maxWidth: 320 }}>
            <h3 className="mb-3">Reset Counter?</h3>
            <p className="text-muted mb-4">
              It's okay to stumble. What matters is that you get back up. This will reset your current streak to 0.
            </p>
            <div className="scripture-quote mb-4">
              <p>"For a just man falleth seven times, and riseth up again"</p>
              <p className="scripture-reference">— Proverbs 24:16</p>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setShowResetConfirm(false)}>
                Cancel
              </button>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleReset}>
                Reset & Start Fresh
              </button>
            </div>
          </div>
        </div>
      )}

      <h1 className="mb-4">Habit Tracker</h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-secondary'}`}
            style={{ flex: 1 }}
            onClick={() => setActiveTab(tab.id)}
          >
            <span style={{ marginRight: 8 }}>{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </div>

      {/* Current Streak */}
      <div className="streak-display mb-4">
        <div className="streak-number">{streak.current}</div>
        <div className="streak-label">
          {streak.current === 1 ? 'Day' : 'Days'} {activeTab === 'pornography' ? 'Clean' : 'Free'}
        </div>
        {streak.best > 0 && streak.best !== streak.current && (
          <p className="text-muted mt-2" style={{ fontSize: '0.85rem' }}>
            Personal best: {streak.best} days
          </p>
        )}
      </div>

      {/* Check-in Button */}
      <button
        className={`btn btn-full mb-4 ${hasCheckedInToday ? 'btn-secondary' : 'btn-primary glow'}`}
        onClick={handleCheckIn}
        disabled={hasCheckedInToday}
      >
        {hasCheckedInToday ? (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20,6 9,17 4,12" />
            </svg>
            Checked In Today
          </>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            Check In for Today
          </>
        )}
      </button>

      {/* Calendar */}
      <div className="card mb-4">
        <h4 className="mb-3">{format(today, 'MMMM yyyy')}</h4>
        <div className="calendar-grid">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="text-muted text-center" style={{ fontSize: '0.75rem', paddingBottom: 8 }}>
              {day}
            </div>
          ))}
          {/* Empty cells for days before month starts */}
          {Array(monthStart.getDay()).fill(null).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {/* Calendar days */}
          {calendarDays.map(day => {
            const dayStr = day.toISOString().split('T')[0]
            const isSuccess = successfulDays.includes(dayStr)
            const isToday = isSameDay(day, today)

            return (
              <div
                key={dayStr}
                className={`calendar-day ${isSuccess ? 'completed' : ''} ${isToday ? 'today' : ''}`}
              >
                {format(day, 'd')}
              </div>
            )
          })}
        </div>
      </div>

      {/* Milestones */}
      <h3 className="mb-3">Milestones</h3>
      {milestones.slice(0, 6).map(milestone => {
        const achieved = streak.current >= milestone.days || streak.best >= milestone.days
        const isNext = !achieved && streak.current < milestone.days &&
          (milestones.findIndex(m => m.days === milestone.days) === 0 ||
            streak.current >= milestones[milestones.findIndex(m => m.days === milestone.days) - 1].days)

        return (
          <div key={milestone.days} className={`milestone ${achieved ? 'achieved' : ''}`}>
            <div className="milestone-icon">{milestone.icon}</div>
            <div style={{ flex: 1 }}>
              <h4>{milestone.title}</h4>
              <p className="text-muted" style={{ fontSize: '0.85rem' }}>
                {milestone.description}
              </p>
            </div>
            {achieved ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2">
                <polyline points="20,6 9,17 4,12" />
              </svg>
            ) : isNext ? (
              <span className="text-gold" style={{ fontSize: '0.85rem' }}>
                {milestone.days - streak.current} days
              </span>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            )}
          </div>
        )
      })}

      {/* Reset Button */}
      <div className="card mt-4" style={{ background: 'rgba(255,100,100,0.1)', borderColor: 'rgba(255,100,100,0.2)' }}>
        <h4 className="mb-2">Had a Setback?</h4>
        <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
          Recovery isn't linear. If you've had a slip, reset your counter and start fresh.
          The Savior's Atonement covers all our mistakes.
        </p>
        <button className="btn btn-secondary" onClick={() => setShowResetConfirm(true)}>
          Reset Counter
        </button>
      </div>
    </div>
  )
}
