// Voice Synthesis for Hypnotherapy Sessions
// Supports male (English accent) and female voices
// Enhanced for Android compatibility

export class VoiceSynthesis {
  constructor() {
    this.synth = window.speechSynthesis
    this.voices = []
    this.currentUtterance = null
    this.isPaused = false
    this.isPlaying = false
    this.currentVoice = null
    this.onEndCallback = null
    this.onWordCallback = null
    this.queue = []
    this.currentIndex = 0
    this.isAvailable = 'speechSynthesis' in window
  }

  async init() {
    if (!this.isAvailable) {
      console.warn('Speech synthesis not available')
      return false
    }

    return new Promise((resolve) => {
      let attempts = 0
      const maxAttempts = 10

      const loadVoices = () => {
        this.voices = this.synth.getVoices()
        console.log('Loaded voices:', this.voices.length, this.voices.map(v => v.name))

        if (this.voices.length > 0) {
          resolve(true)
        } else if (attempts < maxAttempts) {
          attempts++
          setTimeout(loadVoices, 200)
        } else {
          console.warn('No voices loaded after max attempts')
          resolve(false)
        }
      }

      // Initial attempt
      loadVoices()

      // Also listen for voiceschanged event
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => {
          this.voices = this.synth.getVoices()
          console.log('Voices changed, now have:', this.voices.length)
        }
      }
    })
  }

  getAvailableVoices() {
    return {
      maleEnglish: this.findBestMaleEnglishVoice(),
      female: this.findBestFemaleVoice(),
      all: this.voices
    }
  }

  findBestMaleEnglishVoice() {
    if (this.voices.length === 0) return null

    // Priority order for male English accent voices (including Android voices)
    const preferredPatterns = [
      /en[_-]gb/i,           // British English
      /english.*uk/i,
      /uk.*english/i,
      /daniel/i,
      /george/i,
      /ryan/i,
      /james/i,
      /en[_-]us/i,           // US English as fallback
      /english/i,
      /en/i
    ]

    for (const pattern of preferredPatterns) {
      const voice = this.voices.find(v =>
        pattern.test(v.name) || pattern.test(v.lang)
      )
      if (voice) return voice
    }

    // Last resort: first available voice
    return this.voices[0]
  }

  findBestFemaleVoice() {
    if (this.voices.length === 0) return null

    // Priority order for calming female voices
    const preferredPatterns = [
      /samantha/i,
      /female/i,
      /woman/i,
      /en[_-]us/i,
      /en[_-]gb/i,
      /english/i,
      /en/i
    ]

    for (const pattern of preferredPatterns) {
      const voice = this.voices.find(v =>
        pattern.test(v.name) || pattern.test(v.lang)
      )
      if (voice) return voice
    }

    // Last resort: first available voice
    return this.voices[0]
  }

  setVoice(voiceType = 'male-english') {
    const voices = this.getAvailableVoices()
    this.currentVoice = voiceType === 'female' ? voices.female : voices.maleEnglish

    if (!this.currentVoice && this.voices.length > 0) {
      this.currentVoice = this.voices[0]
    }

    console.log('Selected voice:', this.currentVoice?.name)
  }

  // Speak text with hypnotherapy-optimized settings
  speak(text, options = {}) {
    return new Promise((resolve, reject) => {
      if (!this.isAvailable) {
        console.warn('Speech synthesis not available, skipping:', text.substring(0, 50))
        setTimeout(resolve, options.pauseAfter || 1000)
        return
      }

      if (!this.currentVoice) {
        this.setVoice()
      }

      // If still no voice, resolve after delay
      if (!this.currentVoice) {
        console.warn('No voice available, skipping speech')
        setTimeout(resolve, options.pauseAfter || 1000)
        return
      }

      const {
        rate = 0.75,
        pitch = 0.95,
        volume = 1.0,
        pauseAfter = 1000
      } = options

      // Cancel any pending speech first
      this.synth.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.voice = this.currentVoice
      utterance.rate = rate
      utterance.pitch = pitch
      utterance.volume = volume
      utterance.lang = this.currentVoice.lang || 'en-US'

      let resolved = false

      utterance.onend = () => {
        if (!resolved) {
          resolved = true
          setTimeout(resolve, pauseAfter)
        }
      }

      utterance.onerror = (event) => {
        console.error('Speech error:', event.error)
        if (!resolved) {
          resolved = true
          // Don't reject, just continue
          setTimeout(resolve, pauseAfter)
        }
      }

      // Timeout fallback - estimate duration and resolve anyway
      const estimatedDuration = (text.split(/\s+/).length / (150 * rate)) * 60 * 1000
      setTimeout(() => {
        if (!resolved) {
          resolved = true
          console.log('Speech timeout, continuing...')
          resolve()
        }
      }, estimatedDuration + pauseAfter + 5000)

      this.currentUtterance = utterance

      // Workaround for Android: small delay before speaking
      setTimeout(() => {
        try {
          this.synth.speak(utterance)
          this.isPlaying = true
        } catch (e) {
          console.error('Speech failed:', e)
          if (!resolved) {
            resolved = true
            setTimeout(resolve, pauseAfter)
          }
        }
      }, 100)
    })
  }

  // Play a full session script with proper pacing
  async playSession(segments, options = {}) {
    const {
      onSegmentStart,
      onSegmentEnd,
      onComplete,
      voiceType = 'male-english'
    } = options

    // Re-init and set voice
    await this.init()
    this.setVoice(voiceType)

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
      } else if (segment.type === 'breath') {
        await this.speak(segment.text, {
          rate: 0.6,
          pauseAfter: segment.pauseAfter || 4000
        })
      } else if (segment.type === 'suggestion') {
        await this.speak(segment.text, {
          rate: 0.7,
          pitch: 0.9,
          pauseAfter: segment.pauseAfter || 2000
        })
      } else if (segment.type === 'deepening') {
        await this.speak(segment.text, {
          rate: 0.65,
          pitch: 0.85,
          pauseAfter: segment.pauseAfter || 3000
        })
      } else if (segment.type === 'scripture') {
        await this.speak(segment.text, {
          rate: 0.7,
          pitch: 1.0,
          pauseAfter: segment.pauseAfter || 3000
        })
      } else if (segment.type === 'emergence') {
        await this.speak(segment.text, {
          rate: 0.8,
          pitch: 1.0,
          pauseAfter: segment.pauseAfter || 1500
        })
      } else {
        // Default speaking
        await this.speak(segment.text, {
          rate: segment.rate || 0.75,
          pauseAfter: segment.pauseAfter || 2000
        })
      }

      if (onSegmentEnd) {
        onSegmentEnd(segment, i)
      }

      // Wait between segments if paused
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
    if (this.synth) {
      this.synth.pause()
    }
    this.isPaused = true
  }

  resume() {
    if (this.synth) {
      this.synth.resume()
    }
    this.isPaused = false
  }

  stop() {
    if (this.synth) {
      this.synth.cancel()
    }
    this.isPlaying = false
    this.isPaused = false
    this.queue = []
    this.currentIndex = 0
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  // Check if TTS is working
  async test() {
    await this.init()
    if (this.voices.length === 0) {
      return { success: false, message: 'No voices available' }
    }
    this.setVoice()
    if (!this.currentVoice) {
      return { success: false, message: 'Could not select voice' }
    }
    return {
      success: true,
      message: `Ready with voice: ${this.currentVoice.name}`,
      voiceCount: this.voices.length
    }
  }

  static estimateDuration(text, rate = 0.75) {
    const words = text.split(/\s+/).length
    const wordsPerMinute = 150 * rate
    return (words / wordsPerMinute) * 60 * 1000
  }

  static calculateSessionDuration(segments) {
    let totalMs = 0
    segments.forEach(segment => {
      if (segment.type === 'pause') {
        totalMs += segment.duration || 3000
      } else {
        totalMs += this.estimateDuration(segment.text, segment.rate || 0.75)
        totalMs += segment.pauseAfter || 2000
      }
    })
    return totalMs
  }
}

export default VoiceSynthesis
