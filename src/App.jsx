import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import localforage from 'localforage'
import Home from './pages/Home'
import Sessions from './pages/Sessions'
import SessionList from './pages/SessionList'
import SessionPlayer from './pages/SessionPlayer'
import Tracker from './pages/Tracker'
import Progress from './pages/Progress'
import Settings from './pages/Settings'
import Onboarding from './pages/Onboarding'
import BottomNav from './components/BottomNav'

// Initialize storage
localforage.config({
  name: 'LiahonaMind',
  storeName: 'app_data'
})

const defaultUserData = {
  onboardingComplete: false,
  selectedVoice: 'male-english',
  completedSessions: {},
  streaks: {
    nailBiting: { current: 0, best: 0, lastUpdate: null },
    pornography: { current: 0, best: 0, lastUpdate: null },
    anxiety: { sessionsCompleted: 0 },
    overthinking: { sessionsCompleted: 0 }
  },
  dailyUsage: [],
  milestones: [],
  settings: {
    notifications: true,
    binauralBeats: true,
    ambientVolume: 0.5,
    voiceVolume: 0.8
  }
}

export default function App() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    loadUserData()
  }, [])

  const loadUserData = async () => {
    try {
      const data = await localforage.getItem('userData')
      if (data) {
        setUserData({ ...defaultUserData, ...data })
      } else {
        setUserData(defaultUserData)
      }
    } catch (error) {
      console.error('Error loading user data:', error)
      setUserData(defaultUserData)
    }
    setLoading(false)
  }

  const saveUserData = async (newData) => {
    const updated = { ...userData, ...newData }
    setUserData(updated)
    await localforage.setItem('userData', updated)
  }

  const updateStreak = async (category, increment = true) => {
    const today = new Date().toISOString().split('T')[0]
    const streaks = { ...userData.streaks }
    const streak = streaks[category]

    if (increment) {
      if (streak.lastUpdate !== today) {
        streak.current += 1
        streak.best = Math.max(streak.best, streak.current)
        streak.lastUpdate = today

        // Check for milestone achievements
        checkMilestones(category, streak.current)
      }
    } else {
      streak.current = 0
      streak.lastUpdate = today
    }

    await saveUserData({ streaks })
  }

  const checkMilestones = (category, days) => {
    const milestoneThresholds = [1, 3, 7, 14, 21, 30, 60, 90, 180, 365]
    const newMilestones = [...(userData.milestones || [])]

    milestoneThresholds.forEach(threshold => {
      if (days >= threshold) {
        const milestoneId = `${category}-${threshold}`
        if (!newMilestones.includes(milestoneId)) {
          newMilestones.push(milestoneId)
        }
      }
    })

    saveUserData({ milestones: newMilestones })
  }

  const completeSession = async (category, sessionNumber) => {
    const completedSessions = { ...userData.completedSessions }
    if (!completedSessions[category]) {
      completedSessions[category] = []
    }
    if (!completedSessions[category].includes(sessionNumber)) {
      completedSessions[category].push(sessionNumber)
    }

    // Record daily usage
    const today = new Date().toISOString().split('T')[0]
    const dailyUsage = [...(userData.dailyUsage || [])]
    if (!dailyUsage.find(d => d.date === today)) {
      dailyUsage.push({ date: today, sessions: [{ category, sessionNumber }] })
    } else {
      const todayEntry = dailyUsage.find(d => d.date === today)
      todayEntry.sessions.push({ category, sessionNumber })
    }

    await saveUserData({ completedSessions, dailyUsage })
  }

  const isSessionUnlocked = (category, sessionNumber) => {
    if (sessionNumber === 1) return true
    const completed = userData?.completedSessions?.[category] || []
    return completed.includes(sessionNumber - 1)
  }

  const isSessionCompleted = (category, sessionNumber) => {
    const completed = userData?.completedSessions?.[category] || []
    return completed.includes(sessionNumber)
  }

  if (loading) {
    return (
      <div className="app-container flex items-center justify-center" style={{ height: '100vh' }}>
        <div className="text-center">
          <div className="glow" style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #d69e2e, #b7791f)',
            margin: '0 auto 20px'
          }}></div>
          <h2 className="text-gold">Liahona Mind</h2>
          <p className="text-muted mt-1">Loading...</p>
        </div>
      </div>
    )
  }

  if (!userData.onboardingComplete) {
    return <Onboarding onComplete={() => saveUserData({ onboardingComplete: true })} saveUserData={saveUserData} />
  }

  const hideNav = location.pathname.includes('/player')

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home userData={userData} />} />
        <Route path="/sessions" element={<Sessions userData={userData} />} />
        <Route path="/sessions/:category" element={
          <SessionList
            userData={userData}
            isSessionUnlocked={isSessionUnlocked}
            isSessionCompleted={isSessionCompleted}
          />
        } />
        <Route path="/sessions/:category/:sessionNumber/player" element={
          <SessionPlayer
            userData={userData}
            completeSession={completeSession}
          />
        } />
        <Route path="/tracker" element={
          <Tracker
            userData={userData}
            updateStreak={updateStreak}
          />
        } />
        <Route path="/progress" element={<Progress userData={userData} />} />
        <Route path="/settings" element={
          <Settings
            userData={userData}
            saveUserData={saveUserData}
          />
        } />
      </Routes>
      {!hideNav && <BottomNav />}
    </div>
  )
}
