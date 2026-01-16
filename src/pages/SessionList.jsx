import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { categories, sessions as sessionData } from '../data/allSessions'

export default function SessionList({ userData, isSessionUnlocked, isSessionCompleted }) {
  const { category } = useParams()
  const navigate = useNavigate()
  const [selectedSession, setSelectedSession] = useState(null)

  const categoryData = categories[category]
  const sessions = sessionData[category] || []

  if (!categoryData) {
    return (
      <div className="text-center mt-4">
        <p>Category not found</p>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/sessions')}>
          Back to Programs
        </button>
      </div>
    )
  }

  const handleSessionClick = (session, unlocked) => {
    if (!unlocked) return
    setSelectedSession(session)
  }

  const startSession = (type) => {
    if (selectedSession) {
      navigate(`/sessions/${category}/${selectedSession.number}/player?type=${type}`)
    }
  }

  return (
    <div className="fade-in">
      {/* Session Type Selection Modal */}
      {selectedSession && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 300,
          padding: 20
        }}>
          <div className="card" style={{ maxWidth: 340, textAlign: 'center' }}>
            <h3 className="mb-2">{selectedSession.title}</h3>
            <p className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>
              {selectedSession.description}
            </p>

            <p className="text-gold mb-3" style={{ fontSize: '0.85rem' }}>
              Choose your session length:
            </p>

            <button
              className="btn btn-primary btn-full mb-2"
              onClick={() => startSession('deep')}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}
            >
              <span style={{ fontWeight: 600 }}>Deep Session</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>{selectedSession.deepDuration} - Full experience</span>
            </button>

            <button
              className="btn btn-secondary btn-full mb-3"
              onClick={() => startSession('quick')}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}
            >
              <span style={{ fontWeight: 600 }}>Quick Session</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>{selectedSession.quickDuration} - When time is limited</span>
            </button>

            <button
              className="btn"
              onClick={() => setSelectedSession(null)}
              style={{ background: 'transparent', color: 'var(--text-muted)' }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Back Button */}
      <button
        className="icon-btn mb-3"
        onClick={() => navigate('/sessions')}
        style={{ background: 'transparent', border: 'none' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6" />
        </svg>
      </button>

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="category-icon"
          style={{
            background: `${categoryData.color}33`,
            border: `2px solid ${categoryData.color}`,
            margin: 0,
            width: 60,
            height: 60
          }}
        >
          {categoryData.icon}
        </div>
        <div>
          <h1>{categoryData.name}</h1>
          <p className="text-muted">{sessions.length} Sessions</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted mb-4">{categoryData.description}</p>

      {/* Session List */}
      {sessions.map((session) => {
        const unlocked = isSessionUnlocked(category, session.number)
        const completed = isSessionCompleted(category, session.number)

        return (
          <div
            key={session.number}
            className={`session-item ${completed ? 'completed' : ''} ${!unlocked ? 'locked' : ''}`}
            onClick={() => handleSessionClick(session, unlocked)}
          >
            <div
              className="session-number"
              style={completed ? { background: categoryData.color } : {}}
            >
              {completed ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a202c" strokeWidth="3">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
              ) : !unlocked ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              ) : (
                session.number
              )}
            </div>
            <div style={{ flex: 1 }}>
              <h4>{session.title}</h4>
              <p className="text-muted" style={{ fontSize: '0.85rem' }}>
                {session.subtitle}
              </p>
              <p className="text-muted" style={{ fontSize: '0.8rem' }}>
                Deep: {session.deepDuration} | Quick: {session.quickDuration}
              </p>
            </div>
            {unlocked && !completed && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </div>
        )
      })}

      {/* Info Card */}
      <div className="card mt-4">
        <h4 className="mb-2">Session Guidelines</h4>
        <ul style={{ paddingLeft: 20, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <li>Use stereo headphones for binaural beats</li>
          <li>Find a quiet, comfortable space</li>
          <li>Sessions unlock progressively as you complete them</li>
          <li>Do not use while driving or operating machinery</li>
          <li>Complete each session fully for best results</li>
        </ul>
      </div>
    </div>
  )
}
