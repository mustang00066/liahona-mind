import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { categories, sessions as sessionData, getSession } from '../data/allSessions'
import BinauralBeatsGenerator from '../audio/BinauralBeats'

export default function SessionPlayer({ userData, completeSession }) {
  const { category, sessionNumber } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const sessionNum = parseInt(sessionNumber)

  // Get session type from URL params (default to 'deep')
  const sessionType = searchParams.get('type') || 'deep'

  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const audioRef = useRef(null)
  const binauralRef = useRef(null)

  const categoryData = categories[category]
  const session = getSession(category, sessionNum)

  // Get voice preference from settings
  const voiceGender = userData?.selectedVoice?.includes('female') ? 'female' : 'male'

  // Build audio path
  const getAudioUrl = () => {
    if (!categoryData || !session) return null
    return `/audio/${categoryData.folder}/${voiceGender}/${session.id}-${sessionType}.mp3`
  }

  useEffect(() => {
    return () => {
      cleanup()
    }
  }, [])

  const cleanup = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ''
    }
    if (binauralRef.current) {
      binauralRef.current.stop()
    }
  }

  const startSession = async () => {
    setLoading(true)
    setError(null)

    try {
      // Create audio element
      const audioUrl = getAudioUrl()
      if (!audioUrl) {
        throw new Error('Audio file not found')
      }

      audioRef.current = new Audio(audioUrl)

      // Set up audio event listeners
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current.duration)
        setLoading(false)
      })

      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current.currentTime)
      })

      audioRef.current.addEventListener('ended', () => {
        handleSessionComplete()
      })

      audioRef.current.addEventListener('error', (e) => {
        console.error('Audio error:', e)
        setError('Could not load audio file. Please try again.')
        setLoading(false)
      })

      // Load and play audio
      await audioRef.current.load()

      // Start binaural beats
      if (userData?.settings?.binauralBeats !== false) {
        binauralRef.current = new BinauralBeatsGenerator()
        const presets = BinauralBeatsGenerator.getPresets()
        await binauralRef.current.start({
          ...presets.lightTheta,
          volume: 0.25
        })
      }

      // Play the session audio
      await audioRef.current.play()
      setIsPlaying(true)

    } catch (err) {
      console.error('Error starting session:', err)
      setError('Could not start session. Please check your connection and try again.')
      setLoading(false)
    }
  }

  const handleSessionComplete = async () => {
    cleanup()
    setIsComplete(true)
    await completeSession(category, sessionNum)
  }

  const pauseSession = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    if (binauralRef.current) {
      binauralRef.current.setVolume(0.08)
    }
    setIsPaused(true)
  }

  const resumeSession = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
    if (binauralRef.current) {
      binauralRef.current.setVolume(0.25)
    }
    setIsPaused(false)
  }

  const stopSession = () => {
    cleanup()
    navigate(`/sessions/${category}`)
  }

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  if (!session || !categoryData) {
    return (
      <div className="session-player flex items-center justify-center">
        <div className="text-center">
          <p>Session not found</p>
          <button className="btn btn-primary mt-3" onClick={() => navigate('/sessions')}>
            Back to Sessions
          </button>
        </div>
      </div>
    )
  }

  // Ready State
  if (!isPlaying && !isComplete) {
    return (
      <div className="session-player">
        <div className="session-content">
          {/* Close Button */}
          <button
            onClick={() => navigate(`/sessions/${category}`)}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="session-visual glow">
            <span style={{ fontSize: '3rem' }}>{categoryData?.icon}</span>
          </div>

          <h2 className="session-title">{session.title}</h2>
          <p className="text-muted mb-1">{session.subtitle}</p>
          <p className="text-gold mb-1">
            {sessionType === 'deep' ? session.deepDuration : session.quickDuration}
          </p>
          <p className="badge badge-gold mb-2" style={{ textTransform: 'capitalize' }}>
            {sessionType} Session • {voiceGender === 'female' ? 'Female' : 'Male'} Voice
          </p>

          <p className="text-muted mb-3" style={{ maxWidth: 300, fontSize: '0.9rem' }}>
            {session.description}
          </p>

          {error && (
            <div className="card mb-3" style={{ background: 'rgba(229, 62, 62, 0.2)', maxWidth: 300 }}>
              <p style={{ color: '#fc8181', fontSize: '0.85rem', margin: 0 }}>{error}</p>
            </div>
          )}

          <div className="card mb-3" style={{ maxWidth: 300, textAlign: 'left', padding: '14px' }}>
            <h4 className="text-gold mb-2" style={{ fontSize: '1rem' }}>Before You Begin</h4>
            <ul style={{ paddingLeft: 16, fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
              <li>Put on stereo headphones</li>
              <li>Find a comfortable position</li>
              <li>Do not drive during or after</li>
            </ul>
          </div>
        </div>

        <div className="session-controls text-center">
          <button
            className="btn btn-primary btn-full glow"
            onClick={startSession}
            disabled={loading}
          >
            {loading ? (
              <>Loading...</>
            ) : (
              <>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
                Begin Session
              </>
            )}
          </button>
        </div>
      </div>
    )
  }

  // Complete State
  if (isComplete) {
    return (
      <div className="session-player">
        <div className="session-content">
          <div className="session-visual" style={{ background: 'radial-gradient(circle, rgba(72, 187, 120, 0.3) 0%, transparent 70%)' }}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22,4 12,14.01 9,11.01" />
            </svg>
          </div>

          <h2 className="text-green mb-2">Session Complete</h2>
          <p className="text-muted mb-4">
            Well done. Take a moment to return to full awareness.
          </p>

          <div className="scripture-quote mb-4" style={{ maxWidth: 300 }}>
            <p>"Be still, and know that I am God"</p>
            <p className="scripture-reference">— Psalm 46:10</p>
          </div>

          <div className="card mb-4" style={{ maxWidth: 300 }}>
            <div className="flex justify-between">
              <span className="text-muted">Duration</span>
              <span className="text-gold">{formatTime(currentTime)}</span>
            </div>
          </div>
        </div>

        <div className="session-controls text-center">
          <button
            className="btn btn-primary btn-full"
            onClick={() => navigate(`/sessions/${category}`)}
          >
            Continue Your Journey
          </button>
        </div>
      </div>
    )
  }

  // Playing State
  return (
    <div className="session-player">
      {/* Confirm Exit Modal */}
      {showConfirm && (
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
          <div className="card" style={{ maxWidth: 320, textAlign: 'center' }}>
            <h3 className="mb-3">End Session Early?</h3>
            <p className="text-muted mb-4">
              For best results, complete the full session. Your progress won't be saved if you leave now.
            </p>
            <div className="flex gap-2">
              <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setShowConfirm(false)}>
                Continue
              </button>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={stopSession}>
                End Session
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="session-content">
        {/* Close Button */}
        <button
          onClick={() => setShowConfirm(true)}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Visual */}
        <div className={`session-visual ${!isPaused ? 'pulse' : ''}`}>
          <span style={{ fontSize: '3rem' }}>{categoryData?.icon}</span>
        </div>

        {/* Time */}
        <div className="time-display">{formatTime(currentTime)}</div>
        <p className="text-muted mb-3" style={{ fontSize: '0.85rem' }}>
          of {formatTime(duration)}
        </p>

        {/* Status */}
        <div className="badge badge-gold mb-3">
          {isPaused ? 'Paused' : 'Playing'}
        </div>

        {/* Session Info */}
        <div style={{ maxWidth: 320, textAlign: 'center' }}>
          <p className="text-muted" style={{ fontSize: '0.95rem', fontStyle: 'italic' }}>
            Relax and listen...
          </p>
        </div>
      </div>

      <div className="session-controls">
        <p className="text-center text-muted mb-3" style={{ fontSize: '0.85rem' }}>
          {session.title}
        </p>

        {/* Progress Bar */}
        <div className="progress-bar mb-4">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <button
            className="icon-btn"
            onClick={isPaused ? resumeSession : pauseSession}
            style={{ width: 64, height: 64 }}
          >
            {isPaused ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            )}
          </button>
        </div>

        <p className="text-center text-muted mt-3" style={{ fontSize: '0.75rem' }}>
          {isPaused ? 'Tap to resume' : 'Tap to pause'}
        </p>
      </div>
    </div>
  )
}
