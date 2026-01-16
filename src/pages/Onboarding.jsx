import React, { useState, useEffect, useRef } from 'react'

export default function Onboarding({ onComplete, saveUserData }) {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [selectedVoice, setSelectedVoice] = useState('male-english')
  const [testingVoice, setTestingVoice] = useState(false)
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

      // Play a sample from the pre-recorded ElevenLabs audio
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
        alert('Could not play audio sample.')
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

  const handleComplete = async () => {
    await saveUserData({
      name: name.trim(),
      selectedVoice,
      onboardingComplete: true
    })
    onComplete()
  }

  const steps = [
    // Welcome
    <div key="welcome" className="fade-in text-center">
      <div className="glow" style={{
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #d69e2e, #b7791f)',
        margin: '0 auto 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1a202c" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      </div>
      <h1 className="text-gold mb-2">Liahona Mind</h1>
      <p className="text-muted mb-4">Your Spiritual Compass for Mental Peace</p>
      <div className="scripture-quote mb-4">
        <p>"The Liahona... did work according to their faith and diligence"</p>
        <p className="scripture-reference">— 1 Nephi 16:28</p>
      </div>
      <p className="mb-4">
        Welcome to a transformative journey of healing through faith-centered hypnotherapy.
        Guided by the teachings of Jesus Christ and Latter-day Saint principles,
        you will find freedom from habits and peace from anxiety.
      </p>
      <button className="btn btn-primary btn-full" onClick={() => setStep(1)}>
        Begin Your Journey
      </button>
    </div>,

    // Name Entry
    <div key="name" className="fade-in">
      <h2 className="text-center mb-3">What Should We Call You?</h2>
      <p className="text-muted text-center mb-4">
        Your sessions will be personalized with your name for a more powerful experience.
      </p>
      <div className="card mb-4">
        <label style={{ display: 'block', marginBottom: 8, color: 'var(--text-muted)' }}>
          Your First Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: 'var(--radius)',
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            fontSize: '1rem'
          }}
        />
      </div>
      <div className="flex gap-2">
        <button className="btn btn-secondary" onClick={() => setStep(0)}>Back</button>
        <button
          className="btn btn-primary"
          style={{ flex: 1 }}
          onClick={() => setStep(2)}
          disabled={!name.trim()}
        >
          Continue
        </button>
      </div>
    </div>,

    // Voice Selection
    <div key="voice" className="fade-in">
      <h2 className="text-center mb-2">Choose Your Guide's Voice</h2>
      <p className="text-muted text-center mb-4">
        Select the voice that will guide you through your sessions.
      </p>

      <div
        className={`voice-option ${selectedVoice === 'male-english' ? 'selected' : ''}`}
        onClick={() => setSelectedVoice('male-english')}
      >
        <div className="flex justify-between items-center">
          <div>
            <h4>Adam Stone</h4>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              Smooth, deep, and relaxed male voice
            </p>
          </div>
          <div style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            border: selectedVoice === 'male-english' ? 'none' : '2px solid rgba(255,255,255,0.3)',
            background: selectedVoice === 'male-english' ? 'var(--accent-green)' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {selectedVoice === 'male-english' && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a202c" strokeWidth="3">
                <polyline points="20,6 9,17 4,12" />
              </svg>
            )}
          </div>
        </div>
        <button
          className="btn btn-secondary btn-full mt-2"
          onClick={(e) => { e.stopPropagation(); testVoice('male-english') }}
          disabled={testingVoice}
        >
          {testingVoice ? 'Playing...' : '▶ Test Voice'}
        </button>
      </div>

      <div
        className={`voice-option ${selectedVoice === 'female' ? 'selected' : ''}`}
        onClick={() => setSelectedVoice('female')}
      >
        <div className="flex justify-between items-center">
          <div>
            <h4>Serene Presence</h4>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              Calm, grounded female voice
            </p>
          </div>
          <div style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            border: selectedVoice === 'female' ? 'none' : '2px solid rgba(255,255,255,0.3)',
            background: selectedVoice === 'female' ? 'var(--accent-green)' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {selectedVoice === 'female' && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a202c" strokeWidth="3">
                <polyline points="20,6 9,17 4,12" />
              </svg>
            )}
          </div>
        </div>
        <button
          className="btn btn-secondary btn-full mt-2"
          onClick={(e) => { e.stopPropagation(); testVoice('female') }}
          disabled={testingVoice}
        >
          {testingVoice ? 'Playing...' : '▶ Test Voice'}
        </button>
      </div>

      <div className="flex gap-2 mt-3">
        <button className="btn btn-secondary" onClick={() => setStep(1)}>Back</button>
        <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => setStep(3)}>
          Continue
        </button>
      </div>
    </div>,

    // Headphones Notice
    <div key="headphones" className="fade-in text-center">
      <div style={{
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: 'rgba(66, 153, 225, 0.2)',
        margin: '0 auto 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" strokeWidth="2">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      </div>
      <h2 className="mb-3">Headphones Recommended</h2>
      <p className="text-muted mb-4">
        For the best experience with binaural beats,
        please use stereo headphones during your sessions.
        The binaural beats require different sounds in each ear to create the calming effect.
      </p>
      <div className="card mb-4">
        <h4 className="text-gold mb-2">What are Binaural Beats?</h4>
        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
          Binaural beats are a gentle audio technology that helps your brain
          enter a deeply relaxed theta state, making the hypnotherapy more effective.
          You'll hear soft, pleasant tones in the background during sessions.
        </p>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-secondary" onClick={() => setStep(2)}>Back</button>
        <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleComplete}>
          Start Using Liahona Mind
        </button>
      </div>
    </div>
  ]

  return (
    <div className="app-container" style={{ paddingTop: 40, paddingBottom: 40 }}>
      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mb-4">
        {[0, 1, 2, 3].map(i => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: i === step ? 'var(--gold-light)' : 'rgba(255,255,255,0.2)'
            }}
          />
        ))}
      </div>
      {steps[step]}
    </div>
  )
}
