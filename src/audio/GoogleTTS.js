// Native TTS Audio Player using Capacitor Text-to-Speech
// Uses Android's built-in TTS engine for reliable audio playback

import { TextToSpeech } from '@capacitor-community/text-to-speech'
import { Capacitor } from '@capacitor/core'

export class GoogleTTS {
  constructor() {
    this.isPlaying = false
    this.isPaused = false
    this.queue = []
    this.currentIndex = 0
    this.volume = 1.0
    this.rate = 0.85 // Slower for hypnotherapy
    this.pitch = 1.0
  }

  // Speak text using native TTS
  async speak(text, options = {}) {
    if (!text || text.trim().length === 0) {
      return
    }

    const {
      lang = 'en-GB',
      pauseAfter = 1000
    } = options

    this.isPlaying = true

    // Wait if paused
    while (this.isPaused) {
      await this.delay(100)
    }

    if (!this.isPlaying) return

    try {
      // Use native TTS on mobile, fallback to Web Speech API on web
      if (Capacitor.isNativePlatform()) {
        await TextToSpeech.speak({
          text: text,
          lang: lang,
          rate: this.rate,
          pitch: this.pitch,
          volume: this.volume,
          category: 'playback'
        })
      } else {
        // Web fallback using SpeechSynthesis
        await this.speakWeb(text, lang)
      }
    } catch (e) {
      console.error('TTS error:', e)
      // Try web fallback if native fails
      try {
        await this.speakWeb(text, lang)
      } catch (webError) {
        console.error('Web TTS fallback error:', webError)
      }
    }

    // Pause after speaking
    await this.delay(pauseAfter)
  }

  // Web Speech API fallback
  speakWeb(text, lang) {
    return new Promise((resolve, reject) => {
      if (!window.speechSynthesis) {
        resolve() // Silently continue if not available
        return
      }

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = lang
      utterance.rate = this.rate
      utterance.pitch = this.pitch
      utterance.volume = this.volume

      utterance.onend = () => resolve()
      utterance.onerror = (e) => {
        console.error('Web speech error:', e)
        resolve() // Continue even on error
      }

      // Timeout fallback
      const timeout = setTimeout(() => {
        window.speechSynthesis.cancel()
        resolve()
      }, 60000)

      utterance.onend = () => {
        clearTimeout(timeout)
        resolve()
      }

      window.speechSynthesis.speak(utterance)
    })
  }

  // Play a full session
  async playSession(segments, options = {}) {
    const {
      onSegmentStart,
      onSegmentEnd,
      onComplete,
      voiceType = 'male-english'
    } = options

    // Select language based on voice type
    // en-GB for male (British), en-US for female (American)
    const lang = voiceType === 'female' ? 'en-US' : 'en-GB'

    this.queue = segments
    this.currentIndex = 0
    this.isPlaying = true

    for (let i = 0; i < segments.length; i++) {
      if (!this.isPlaying) break

      this.currentIndex = i
      const segment = segments[i]

      if (onSegmentStart) {
        onSegmentStart(segment, i)
      }

      // Handle different segment types
      if (segment.type === 'pause') {
        await this.delay(segment.duration || 3000)
      } else if (segment.text) {
        // Determine pause based on segment type
        let pauseAfter = segment.pauseAfter || 2000

        if (segment.type === 'breath') {
          pauseAfter = segment.pauseAfter || 4000
        } else if (segment.type === 'deepening') {
          pauseAfter = segment.pauseAfter || 3000
        } else if (segment.type === 'scripture') {
          pauseAfter = segment.pauseAfter || 3000
        } else if (segment.type === 'emergence') {
          pauseAfter = segment.pauseAfter || 1500
        }

        await this.speak(segment.text, { lang, pauseAfter })
      }

      if (onSegmentEnd) {
        onSegmentEnd(segment, i)
      }

      // Check for pause
      while (this.isPaused && this.isPlaying) {
        await this.delay(100)
      }
    }

    this.isPlaying = false

    if (onComplete) {
      onComplete()
    }
  }

  pause() {
    this.isPaused = true
    if (Capacitor.isNativePlatform()) {
      TextToSpeech.stop().catch(console.error)
    } else if (window.speechSynthesis) {
      window.speechSynthesis.pause()
    }
  }

  resume() {
    this.isPaused = false
    if (!Capacitor.isNativePlatform() && window.speechSynthesis) {
      window.speechSynthesis.resume()
    }
  }

  stop() {
    this.isPlaying = false
    this.isPaused = false
    if (Capacitor.isNativePlatform()) {
      TextToSpeech.stop().catch(console.error)
    } else if (window.speechSynthesis) {
      window.speechSynthesis.cancel()
    }
    this.queue = []
    this.currentIndex = 0
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol))
  }

  setRate(rate) {
    this.rate = Math.max(0.5, Math.min(2, rate))
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  // Test if audio works
  async test(name = '') {
    const testText = name
      ? `Hello ${name}. Welcome to Liahona Mind.`
      : 'Hello. Welcome to Liahona Mind.'

    try {
      await this.speak(testText, { pauseAfter: 500 })
      return { success: true, message: 'Audio working' }
    } catch (e) {
      return { success: false, message: e.message }
    }
  }
}

export default GoogleTTS
