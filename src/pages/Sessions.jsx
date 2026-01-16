import React from 'react'
import { useNavigate } from 'react-router-dom'
import { categories } from '../data/allSessions'

export default function Sessions({ userData }) {
  const navigate = useNavigate()

  return (
    <div className="fade-in">
      <h1 className="mb-2">Programs</h1>
      <p className="text-muted mb-4">
        Choose a program to begin or continue your healing journey.
      </p>

      {Object.values(categories).map(category => {
        const completed = (userData.completedSessions[category.id] || []).length
        const percentage = Math.round((completed / category.totalSessions) * 100)
        const isComplete = percentage === 100

        return (
          <div
            key={category.id}
            className="category-card"
            onClick={() => navigate(`/sessions/${category.id}`)}
          >
            <div className="flex items-center gap-3">
              <div
                className="category-icon"
                style={{
                  background: `${category.color}33`,
                  border: `2px solid ${category.color}`,
                  margin: 0
                }}
              >
                {category.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div className="flex justify-between items-center">
                  <h3>{category.name}</h3>
                  {isComplete && (
                    <span className="badge badge-green">Complete</span>
                  )}
                </div>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                  {category.description}
                </p>
              </div>
            </div>

            <div className="category-progress">
              <div className="flex justify-between mb-1">
                <span className="text-muted" style={{ fontSize: '0.85rem' }}>
                  {completed} of {category.totalSessions} sessions
                </span>
                <span className="text-gold" style={{ fontSize: '0.85rem' }}>
                  {percentage}%
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${percentage}%`,
                    background: category.color
                  }}
                ></div>
              </div>
            </div>

            {category.trackable && (
              <div className="flex items-center gap-2 mt-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-green)' }}>
                  Includes habit tracking
                </span>
              </div>
            )}
          </div>
        )
      })}

      <div className="card mt-4" style={{ background: 'rgba(214, 158, 46, 0.1)', borderColor: 'rgba(214, 158, 46, 0.3)' }}>
        <h4 className="text-gold mb-2">About the Sessions</h4>
        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
          Each session includes binaural beats to help you reach a deeply relaxed state.
          Choose between Deep sessions (~10 min) for full experience or Quick sessions (~5 min) when time is limited.
          Sessions are progressive, building upon each other. Complete them in order for best results.
        </p>
        <p className="text-muted mt-2" style={{ fontSize: '0.9rem' }}>
          <strong>Best practices:</strong> Use headphones, find a quiet space,
          and avoid operating machinery during or immediately after sessions.
        </p>
      </div>
    </div>
  )
}
