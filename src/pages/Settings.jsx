import React, { useState, useRef } from 'react'

export default function Settings({ userData, saveUserData }) {
  const [name, setName] = useState(userData.name || '')
  const [selectedVoice, setSelectedVoice] = useState(userData.selectedVoice || 'male-english')
  const [binauralBeats, setBinauralBeats] = useState(userData.settings?.binauralBeats !== false)
  const [testingVoice, setTestingVoice] = useState(false)
  const [saved, setSaved] = useState(false)
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const audioRef = useRef(null)

  const testVoice = async (voiceType) => {
    if (testingVoice) return
    setTestingVoice(true)

    try {
      // Stop any currently playing audio
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }

      // Play a sample from the pre-recorded audio
      const samplePath = voiceType === 'female'
        ? '/audio/anxiety/female/session-01-foundation-of-peace-deep.mp3'
        : '/audio/anxiety/male/session-01-foundation-of-peace-deep.mp3'

      audioRef.current = new Audio(samplePath)
      audioRef.current.volume = 0.8

      // Only play first 15 seconds
      audioRef.current.addEventListener('timeupdate', () => {
        if (audioRef.current && audioRef.current.currentTime > 15) {
          audioRef.current.pause()
          setTestingVoice(false)
        }
      })

      audioRef.current.addEventListener('ended', () => {
        setTestingVoice(false)
      })

      audioRef.current.addEventListener('error', () => {
        setTestingVoice(false)
        alert('Could not play audio sample. The audio files may still be generating.')
      })

      await audioRef.current.play()

      // Auto-stop after 15 seconds
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause()
          audioRef.current = null
          setTestingVoice(false)
        }
      }, 15000)

    } catch (error) {
      console.error('Voice test error:', error)
      alert('Could not play audio. Please check your volume.')
      setTestingVoice(false)
    }
  }

  const stopTest = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    setTestingVoice(false)
  }

  const handleSave = async () => {
    await saveUserData({
      name: name.trim(),
      selectedVoice,
      settings: {
        ...userData.settings,
        binauralBeats
      }
    })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = async () => {
    await saveUserData({
      onboardingComplete: false,
      completedSessions: {},
      streaks: {
        nailBiting: { current: 0, best: 0, lastUpdate: null },
        pornography: { current: 0, best: 0, lastUpdate: null },
        anxiety: { sessionsCompleted: 0 },
        overthinking: { sessionsCompleted: 0 }
      },
      dailyUsage: [],
      milestones: []
    })
    window.location.reload()
  }

  return (
    <div className="fade-in">
      <h1 className="mb-4">Settings</h1>

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
            <h3 className="mb-3">Reset All Data?</h3>
            <p className="text-muted mb-4">
              This will erase all your progress, including completed sessions, streaks, and milestones.
              This action cannot be undone.
            </p>
            <div className="flex gap-2">
              <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setShowResetConfirm(false)}>
                Cancel
              </button>
              <button
                className="btn"
                style={{ flex: 1, background: '#e53e3e', color: 'white' }}
                onClick={handleReset}
              >
                Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Personal Info */}
      <div className="card mb-4">
        <h3 className="mb-3">Personal Information</h3>

        <label style={{ display: 'block', marginBottom: 8, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            fontSize: '1rem',
            marginBottom: 8
          }}
        />
        <p className="text-muted" style={{ fontSize: '0.8rem' }}>
          Your name will be used in future personalized sessions.
        </p>
      </div>

      {/* Voice Selection */}
      <div className="card mb-4">
        <h3 className="mb-3">Session Voice</h3>

        <div
          className={`voice-option ${selectedVoice === 'male-english' ? 'selected' : ''}`}
          onClick={() => setSelectedVoice('male-english')}
        >
          <div className="flex justify-between items-center">
            <div>
              <h4>Adam Stone</h4>
              <p className="text-muted" style={{ fontSize: '0.85rem' }}>
                Smooth, deep, and relaxed male voice
              </p>
            </div>
            <div style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              border: selectedVoice === 'male-english' ? 'none' : '2px solid rgba(255,255,255,0.3)',
              background: selectedVoice === 'male-english' ? 'var(--accent-green)' : 'transparent'
            }} />
          </div>
          <button
            className="btn btn-secondary btn-full mt-2"
            onClick={(e) => { e.stopPropagation(); testingVoice ? stopTest() : testVoice('male') }}
            style={{ fontSize: '0.85rem', padding: '8px 16px' }}
          >
            {testingVoice && selectedVoice === 'male-english' ? '■ Stop' : '▶ Preview Voice'}
          </button>
        </div>

        <div
          className={`voice-option ${selectedVoice === 'female' ? 'selected' : ''}`}
          onClick={() => setSelectedVoice('female')}
        >
          <div className="flex justify-between items-center">
            <div>
              <h4>Serene Presence</h4>
              <p className="text-muted" style={{ fontSize: '0.85rem' }}>
                Calm, grounded female voice
              </p>
            </div>
            <div style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              border: selectedVoice === 'female' ? 'none' : '2px solid rgba(255,255,255,0.3)',
              background: selectedVoice === 'female' ? 'var(--accent-green)' : 'transparent'
            }} />
          </div>
          <button
            className="btn btn-secondary btn-full mt-2"
            onClick={(e) => { e.stopPropagation(); testingVoice ? stopTest() : testVoice('female') }}
            style={{ fontSize: '0.85rem', padding: '8px 16px' }}
          >
            {testingVoice && selectedVoice === 'female' ? '■ Stop' : '▶ Preview Voice'}
          </button>
        </div>
      </div>

      {/* Audio Settings */}
      <div className="card mb-4">
        <h3 className="mb-3">Audio Settings</h3>

        <div className="setting-row">
          <div>
            <h4>Binaural Beats</h4>
            <p className="text-muted" style={{ fontSize: '0.85rem' }}>
              Theta wave audio for deeper relaxation
            </p>
          </div>
          <div
            className={`toggle ${binauralBeats ? 'active' : ''}`}
            onClick={() => setBinauralBeats(!binauralBeats)}
          />
        </div>
      </div>

      {/* Save Button */}
      <button
        className={`btn btn-full mb-4 ${saved ? 'btn-secondary' : 'btn-primary'}`}
        onClick={handleSave}
      >
        {saved ? (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20,6 9,17 4,12" />
            </svg>
            Saved!
          </>
        ) : (
          'Save Changes'
        )}
      </button>

      {/* About Section */}
      <div className="card mb-4">
        <h3 className="mb-3">About Liahona Mind</h3>
        <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
          Liahona Mind combines clinical hypnotherapy best practices with the teachings
          of Jesus Christ and LDS principles to help you overcome habits and find lasting peace.
        </p>
        <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
          The app is named after the Liahona, the spiritual compass that guided Lehi's
          family through the wilderness - a perfect metaphor for finding your way through
          life's challenges with divine guidance.
        </p>
        <p className="text-muted" style={{ fontSize: '0.85rem' }}>
          Version 1.0.0
        </p>
      </div>

      {/* Support Section */}
      <div className="card mb-4">
        <h3 className="mb-3">Need More Support?</h3>
        <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
          This app is a tool to support your journey, but it is not a replacement
          for professional help. If you're struggling, please reach out to:
        </p>
        <ul style={{ paddingLeft: 20, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <li>Your Bishop or Branch President</li>
          <li>LDS Family Services</li>
          <li>A licensed therapist or counselor</li>
          <li>The Addiction Recovery Program (ARP)</li>
        </ul>
      </div>

      {/* Danger Zone */}
      <div className="card" style={{ background: 'rgba(255,100,100,0.1)', borderColor: 'rgba(255,100,100,0.2)' }}>
        <h3 className="mb-2">Reset Data</h3>
        <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
          Clear all progress and start fresh. This cannot be undone.
        </p>
        <button
          className="btn btn-secondary"
          onClick={() => setShowResetConfirm(true)}
        >
          Reset All Data
        </button>
      </div>
    </div>
  )
}
