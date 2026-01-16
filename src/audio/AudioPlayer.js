// Audio Player for pre-recorded hypnotherapy sessions
// Plays MP3 files with support for pause/resume

export class AudioPlayer {
  constructor() {
    this.audio = null
    this.isPlaying = false
    this.isPaused = false
    this.onComplete = null
    this.onTimeUpdate = null
    this.onError = null
  }

  async load(audioPath) {
    return new Promise((resolve, reject) => {
      this.audio = new Audio(audioPath)

      this.audio.addEventListener('loadedmetadata', () => {
        resolve({
          duration: this.audio.duration
        })
      })

      this.audio.addEventListener('error', (e) => {
        console.error('Audio load error:', e)
        if (this.onError) this.onError(e)
        reject(e)
      })

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false
        if (this.onComplete) this.onComplete()
      })

      this.audio.addEventListener('timeupdate', () => {
        if (this.onTimeUpdate) {
          this.onTimeUpdate({
            currentTime: this.audio.currentTime,
            duration: this.audio.duration,
            progress: this.audio.currentTime / this.audio.duration
          })
        }
      })
    })
  }

  async play() {
    if (!this.audio) {
      throw new Error('No audio loaded')
    }

    try {
      await this.audio.play()
      this.isPlaying = true
      this.isPaused = false
    } catch (e) {
      console.error('Audio play error:', e)
      if (this.onError) this.onError(e)
      throw e
    }
  }

  pause() {
    if (this.audio && this.isPlaying) {
      this.audio.pause()
      this.isPaused = true
    }
  }

  resume() {
    if (this.audio && this.isPaused) {
      this.audio.play()
      this.isPaused = false
    }
  }

  stop() {
    if (this.audio) {
      this.audio.pause()
      this.audio.currentTime = 0
      this.isPlaying = false
      this.isPaused = false
    }
  }

  setVolume(volume) {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume))
    }
  }

  seek(time) {
    if (this.audio) {
      this.audio.currentTime = time
    }
  }

  getCurrentTime() {
    return this.audio ? this.audio.currentTime : 0
  }

  getDuration() {
    return this.audio ? this.audio.duration : 0
  }

  destroy() {
    if (this.audio) {
      this.stop()
      this.audio.src = ''
      this.audio = null
    }
  }
}

// Helper to get audio path based on category, session, voice, and type
export function getAudioPath(category, sessionId, voiceGender = 'male', sessionType = 'deep') {
  // Map category names to folder names
  const categoryFolders = {
    nailBiting: 'nail-biting',
    'nail-biting': 'nail-biting',
    pornography: 'pornography-addiction',
    'pornography-addiction': 'pornography-addiction',
    anxiety: 'anxiety',
    overthinking: 'overthinking',
    selfConfidence: 'self-confidence',
    'self-confidence': 'self-confidence',
    phoneAddiction: 'phone-addiction',
    'phone-addiction': 'phone-addiction',
    presentWithFamily: 'present-with-family',
    'present-with-family': 'present-with-family'
  }

  const folder = categoryFolders[category] || category
  const voice = voiceGender === 'female' ? 'female' : 'male'

  // Session filename format: session-01-title-deep.mp3 or session-01-title-quick.mp3
  return `/audio/${folder}/${voice}/${sessionId}-${sessionType}.mp3`
}

export default AudioPlayer
