// Binaural Beats Audio Generator using Web Audio API
// Creates theta waves (4-7 Hz) for deep hypnotic relaxation

export class BinauralBeatsGenerator {
  constructor() {
    this.audioContext = null
    this.leftOscillator = null
    this.rightOscillator = null
    this.leftGain = null
    this.rightGain = null
    this.merger = null
    this.masterGain = null
    this.isPlaying = false

    // Ambient pad oscillators for soft background music
    this.padOscillators = []
    this.padGains = []
    this.noiseNode = null
    this.noiseGain = null
  }

  async init() {
    if (this.audioContext) return

    this.audioContext = new (window.AudioContext || window.webkitAudioContext)()

    // Create stereo merger for binaural effect
    this.merger = this.audioContext.createChannelMerger(2)
    this.masterGain = this.audioContext.createGain()
    this.masterGain.gain.value = 0

    this.merger.connect(this.masterGain)
    this.masterGain.connect(this.audioContext.destination)
  }

  async start(options = {}) {
    const {
      baseFrequency = 200,      // Base carrier frequency (Hz)
      beatFrequency = 6,        // Binaural beat frequency (Hz) - 6Hz is deep theta
      volume = 0.3,
      includeAmbient = true
    } = options

    await this.init()

    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume()
    }

    if (this.isPlaying) {
      this.stop()
    }

    // Create binaural beat oscillators
    this.leftOscillator = this.audioContext.createOscillator()
    this.rightOscillator = this.audioContext.createOscillator()
    this.leftGain = this.audioContext.createGain()
    this.rightGain = this.audioContext.createGain()

    // Set frequencies for binaural effect
    // Left ear: base frequency
    // Right ear: base + beat frequency
    // The brain perceives the difference as the "beat"
    this.leftOscillator.frequency.value = baseFrequency
    this.rightOscillator.frequency.value = baseFrequency + beatFrequency

    // Use sine waves for smooth tones
    this.leftOscillator.type = 'sine'
    this.rightOscillator.type = 'sine'

    // Set individual channel volumes
    this.leftGain.gain.value = 0.15
    this.rightGain.gain.value = 0.15

    // Connect left channel (channel 0)
    this.leftOscillator.connect(this.leftGain)
    this.leftGain.connect(this.merger, 0, 0)

    // Connect right channel (channel 1)
    this.rightOscillator.connect(this.rightGain)
    this.rightGain.connect(this.merger, 0, 1)

    // Start oscillators
    this.leftOscillator.start()
    this.rightOscillator.start()

    // Add ambient pad sounds for more pleasant experience
    if (includeAmbient) {
      this.createAmbientPad()
    }

    // Fade in smoothly
    const now = this.audioContext.currentTime
    this.masterGain.gain.setValueAtTime(0, now)
    this.masterGain.gain.linearRampToValueAtTime(volume, now + 3)

    this.isPlaying = true
  }

  createAmbientPad() {
    // Create multiple detuned oscillators for rich pad sound
    const padFrequencies = [
      { freq: 110, type: 'sine', vol: 0.08 },      // A2 - root
      { freq: 165, type: 'sine', vol: 0.06 },      // E3 - fifth
      { freq: 220, type: 'sine', vol: 0.05 },      // A3 - octave
      { freq: 277.18, type: 'sine', vol: 0.04 },   // C#4 - major third
      { freq: 329.63, type: 'sine', vol: 0.03 },   // E4 - fifth
    ]

    padFrequencies.forEach(({ freq, type, vol }) => {
      const osc = this.audioContext.createOscillator()
      const gain = this.audioContext.createGain()

      osc.type = type
      osc.frequency.value = freq

      // Add slight detuning for warmth
      osc.detune.value = Math.random() * 10 - 5

      gain.gain.value = vol

      osc.connect(gain)
      gain.connect(this.masterGain)

      osc.start()

      this.padOscillators.push(osc)
      this.padGains.push(gain)
    })

    // Add filtered pink noise for atmosphere
    this.createPinkNoise()
  }

  createPinkNoise() {
    const bufferSize = 2 * this.audioContext.sampleRate
    const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate)
    const output = noiseBuffer.getChannelData(0)

    // Generate pink noise using Paul Kellet's algorithm
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1
      b0 = 0.99886 * b0 + white * 0.0555179
      b1 = 0.99332 * b1 + white * 0.0750759
      b2 = 0.96900 * b2 + white * 0.1538520
      b3 = 0.86650 * b3 + white * 0.3104856
      b4 = 0.55000 * b4 + white * 0.5329522
      b5 = -0.7616 * b5 - white * 0.0168980
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11
      b6 = white * 0.115926
    }

    this.noiseNode = this.audioContext.createBufferSource()
    this.noiseNode.buffer = noiseBuffer
    this.noiseNode.loop = true

    // Create low-pass filter for softer sound
    const filter = this.audioContext.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 400
    filter.Q.value = 1

    this.noiseGain = this.audioContext.createGain()
    this.noiseGain.gain.value = 0.02

    this.noiseNode.connect(filter)
    filter.connect(this.noiseGain)
    this.noiseGain.connect(this.masterGain)

    this.noiseNode.start()
  }

  setVolume(volume) {
    if (this.masterGain && this.audioContext) {
      const now = this.audioContext.currentTime
      this.masterGain.gain.linearRampToValueAtTime(volume, now + 0.5)
    }
  }

  // Transition between different beat frequencies (for session phases)
  transitionBeatFrequency(newBeatFrequency, duration = 10) {
    if (!this.isPlaying || !this.rightOscillator) return

    const now = this.audioContext.currentTime
    const currentFreq = this.rightOscillator.frequency.value
    const baseFreq = this.leftOscillator.frequency.value
    const newRightFreq = baseFreq + newBeatFrequency

    this.rightOscillator.frequency.linearRampToValueAtTime(newRightFreq, now + duration)
  }

  stop() {
    if (!this.isPlaying) return

    const now = this.audioContext.currentTime

    // Fade out smoothly
    this.masterGain.gain.linearRampToValueAtTime(0, now + 2)

    // Stop all oscillators after fade
    setTimeout(() => {
      if (this.leftOscillator) {
        this.leftOscillator.stop()
        this.leftOscillator.disconnect()
        this.leftOscillator = null
      }
      if (this.rightOscillator) {
        this.rightOscillator.stop()
        this.rightOscillator.disconnect()
        this.rightOscillator = null
      }

      this.padOscillators.forEach(osc => {
        osc.stop()
        osc.disconnect()
      })
      this.padOscillators = []
      this.padGains = []

      if (this.noiseNode) {
        this.noiseNode.stop()
        this.noiseNode.disconnect()
        this.noiseNode = null
      }

      this.isPlaying = false
    }, 2500)
  }

  // Create specific presets for different session phases
  static getPresets() {
    return {
      // Deep theta for main hypnotic work
      deepTheta: {
        baseFrequency: 200,
        beatFrequency: 5,
        volume: 0.35
      },
      // Light theta for induction
      lightTheta: {
        baseFrequency: 180,
        beatFrequency: 7,
        volume: 0.3
      },
      // Alpha-theta border for suggestions
      alphaTheta: {
        baseFrequency: 190,
        beatFrequency: 7.5,
        volume: 0.32
      },
      // Alpha for emergence
      alpha: {
        baseFrequency: 200,
        beatFrequency: 10,
        volume: 0.25
      },
      // Delta for very deep relaxation
      deepDelta: {
        baseFrequency: 150,
        beatFrequency: 3,
        volume: 0.4
      }
    }
  }
}

export default BinauralBeatsGenerator
