// Session data for all categories - references pre-recorded audio files

export const categories = {
  nailBiting: {
    id: 'nailBiting',
    folder: 'nail-biting',
    name: 'Nail Biting Freedom',
    description: 'Release the habit of nail biting through gentle, powerful hypnotherapy',
    icon: '✋',
    color: '#48bb78',
    totalSessions: 6,
    trackable: true
  },
  pornography: {
    id: 'pornography',
    folder: 'pornography-addiction',
    name: 'Sexual Purity',
    description: 'Find freedom from pornography and masturbation through faith-centered healing',
    icon: '🕊️',
    color: '#805ad5',
    totalSessions: 10,
    trackable: true
  },
  anxiety: {
    id: 'anxiety',
    folder: 'anxiety',
    name: 'Peace & Calm',
    description: 'Overcome anxiety and find lasting peace through Christ',
    icon: '☮️',
    color: '#4299e1',
    totalSessions: 8,
    trackable: false
  },
  overthinking: {
    id: 'overthinking',
    folder: 'overthinking',
    name: 'Mental Clarity',
    description: 'Quiet the racing mind and find stillness within',
    icon: '🧠',
    color: '#d69e2e',
    totalSessions: 8,
    trackable: false
  },
  selfConfidence: {
    id: 'selfConfidence',
    folder: 'self-confidence',
    name: 'Self Confidence',
    description: 'Discover your divine worth and build unshakeable confidence',
    icon: '💪',
    color: '#ed8936',
    totalSessions: 8,
    trackable: false
  },
  phoneAddiction: {
    id: 'phoneAddiction',
    folder: 'phone-addiction',
    name: 'Digital Freedom',
    description: 'Break free from phone addiction and reclaim your time',
    icon: '📱',
    color: '#38b2ac',
    totalSessions: 8,
    trackable: true
  },
  presentWithFamily: {
    id: 'presentWithFamily',
    folder: 'present-with-family',
    name: 'Present with Family',
    description: 'Be truly present with your loved ones and strengthen eternal bonds',
    icon: '👨‍👩‍👧‍👦',
    color: '#e53e3e',
    totalSessions: 6,
    trackable: false
  }
}

// Session titles and descriptions for each category
export const sessions = {
  nailBiting: [
    {
      number: 1,
      id: 'session-01-understanding-the-habit',
      title: 'Understanding the Habit',
      subtitle: 'Building awareness and foundation',
      description: 'Begin your journey to freedom by understanding the nature of habits and building awareness.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 2,
      id: 'session-02-awareness-and-triggers',
      title: 'Awareness and Triggers',
      subtitle: 'Discovering your patterns',
      description: 'Explore the situations and emotions that trigger nail biting behavior.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 3,
      id: 'session-03-competing-response',
      title: 'Competing Response',
      subtitle: 'Building new habits',
      description: 'Learn and practice healthy alternatives to replace the nail biting habit.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 4,
      id: 'session-04-emotional-roots',
      title: 'Emotional Roots',
      subtitle: 'Healing the source',
      description: 'Address the emotional needs that nail biting has been serving.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 5,
      id: 'session-05-building-new-identity',
      title: 'Building New Identity',
      subtitle: 'Becoming who you truly are',
      description: 'Transform your self-image to match your new healthy habits.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 6,
      id: 'session-06-freedom-and-maintenance',
      title: 'Freedom and Maintenance',
      subtitle: 'Celebrating and sustaining',
      description: 'Celebrate your freedom and learn to maintain your success long-term.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    }
  ],

  pornography: [
    {
      number: 1,
      id: 'session-01-understanding-addiction',
      title: 'Understanding Addiction',
      subtitle: 'Foundation for healing',
      description: 'Understand the nature of addiction and begin your path to freedom.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 2,
      id: 'session-02-building-boundaries',
      title: 'Building Boundaries',
      subtitle: 'Creating safety',
      description: 'Establish healthy boundaries to protect your recovery.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 3,
      id: 'session-03-rewiring-the-brain',
      title: 'Rewiring the Brain',
      subtitle: 'Creating new pathways',
      description: 'Build new neural pathways that support healthy thoughts and behaviors.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 4,
      id: 'session-04-mastering-urges',
      title: 'Mastering Urges',
      subtitle: 'Responding with strength',
      description: 'Learn powerful techniques to manage and overcome urges.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 5,
      id: 'session-05-healing-shame',
      title: 'Healing Shame',
      subtitle: 'Embracing grace',
      description: 'Release shame and embrace the healing power of the Atonement.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 6,
      id: 'session-06-healthy-coping',
      title: 'Healthy Coping',
      subtitle: 'Better ways forward',
      description: 'Develop healthy coping mechanisms to replace addictive behaviors.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 7,
      id: 'session-07-connection-accountability',
      title: 'Connection & Accountability',
      subtitle: 'Building support',
      description: 'Strengthen connections and accountability for lasting recovery.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 8,
      id: 'session-08-new-identity',
      title: 'New Identity',
      subtitle: 'Becoming whole',
      description: 'Embrace your new identity as someone who is clean and free.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 9,
      id: 'session-09-relapse-prevention',
      title: 'Relapse Prevention',
      subtitle: 'Staying strong',
      description: 'Build skills and awareness to prevent relapse.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 10,
      id: 'session-10-freedom-forever',
      title: 'Freedom Forever',
      subtitle: 'Living in light',
      description: 'Celebrate your freedom and commit to a life of purity.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    }
  ],

  anxiety: [
    {
      number: 1,
      id: 'session-01-foundation-of-peace',
      title: 'Foundation of Peace',
      subtitle: 'Discovering inner calm',
      description: 'Build a foundation of peace and learn to access calm at any moment.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 2,
      id: 'session-02-releasing-physical-tension',
      title: 'Releasing Physical Tension',
      subtitle: 'Letting go in the body',
      description: 'Release the physical manifestations of anxiety from your body.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 3,
      id: 'session-03-transforming-anxious-thoughts',
      title: 'Transforming Anxious Thoughts',
      subtitle: 'Changing your mind',
      description: 'Learn to identify and transform anxious thought patterns.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 4,
      id: 'session-04-trust-in-divine-timing',
      title: 'Trust in Divine Timing',
      subtitle: 'Faith over fear',
      description: 'Develop trust in God\'s plan and release worry about the future.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 5,
      id: 'session-05-calm-in-social-situations',
      title: 'Calm in Social Situations',
      subtitle: 'Confidence with others',
      description: 'Feel calm and confident in social situations.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 6,
      id: 'session-06-embracing-uncertainty',
      title: 'Embracing Uncertainty',
      subtitle: 'Peace in the unknown',
      description: 'Find peace even when facing uncertainty and the unknown.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 7,
      id: 'session-07-peaceful-sleep',
      title: 'Peaceful Sleep',
      subtitle: 'Rest and restoration',
      description: 'Release anxiety at bedtime and enjoy restful, peaceful sleep.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 8,
      id: 'session-08-living-in-freedom',
      title: 'Living in Freedom',
      subtitle: 'An anxiety-free life',
      description: 'Embrace your new identity as someone who lives in peace.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    }
  ],

  overthinking: [
    {
      number: 1,
      id: 'session-01-quieting-the-busy-mind',
      title: 'Quieting the Busy Mind',
      subtitle: 'Finding stillness',
      description: 'Learn to quiet the constant chatter and find mental stillness.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 2,
      id: 'session-02-present-moment-awareness',
      title: 'Present Moment Awareness',
      subtitle: 'Being here now',
      description: 'Develop the skill of staying present instead of lost in thought.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 3,
      id: 'session-03-breaking-rumination',
      title: 'Breaking Rumination',
      subtitle: 'Stopping the loop',
      description: 'Break free from repetitive, unhelpful thought patterns.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 4,
      id: 'session-04-decision-making',
      title: 'Decision Making',
      subtitle: 'Clarity and confidence',
      description: 'Make decisions with clarity and confidence instead of endless analysis.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 5,
      id: 'session-05-releasing-perfectionism',
      title: 'Releasing Perfectionism',
      subtitle: 'Embracing good enough',
      description: 'Let go of perfectionism and embrace progress over perfection.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 6,
      id: 'session-06-silencing-the-inner-critic',
      title: 'Silencing the Inner Critic',
      subtitle: 'Kindness to self',
      description: 'Transform your inner critic into a supportive inner voice.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 7,
      id: 'session-07-action-over-analysis',
      title: 'Action Over Analysis',
      subtitle: 'Moving forward',
      description: 'Learn to take action without needing to think everything through first.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 8,
      id: 'session-08-living-with-a-calm-mind',
      title: 'Living with a Calm Mind',
      subtitle: 'Mental peace',
      description: 'Embrace your new identity as someone with a peaceful, clear mind.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    }
  ],

  selfConfidence: [
    {
      number: 1,
      id: 'session-01-discovering-your-true-worth',
      title: 'Discovering Your True Worth',
      subtitle: 'Divine identity',
      description: 'Discover your infinite worth as a child of God.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 2,
      id: 'session-02-releasing-self-doubt',
      title: 'Releasing Self-Doubt',
      subtitle: 'Letting go of limiting beliefs',
      description: 'Release the self-doubt that has held you back.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 3,
      id: 'session-03-confident-body-language',
      title: 'Confident Body Language',
      subtitle: 'Standing tall',
      description: 'Develop confident body language that reflects your inner worth.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 4,
      id: 'session-04-speaking-with-confidence',
      title: 'Speaking with Confidence',
      subtitle: 'Your voice matters',
      description: 'Speak with confidence and express yourself clearly.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 5,
      id: 'session-05-embracing-your-strengths',
      title: 'Embracing Your Strengths',
      subtitle: 'Recognizing your gifts',
      description: 'Recognize and embrace the unique strengths God has given you.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 6,
      id: 'session-06-handling-criticism',
      title: 'Handling Criticism',
      subtitle: 'Staying grounded',
      description: 'Handle criticism with grace while maintaining your self-worth.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 7,
      id: 'session-07-setting-boundaries',
      title: 'Setting Boundaries',
      subtitle: 'Healthy limits',
      description: 'Set healthy boundaries that honor your worth and needs.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 8,
      id: 'session-08-living-confidently',
      title: 'Living Confidently',
      subtitle: 'Walking in light',
      description: 'Embrace your new identity as a confident child of God.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    }
  ],

  phoneAddiction: [
    {
      number: 1,
      id: 'session-01-understanding-phone-addiction',
      title: 'Understanding Phone Addiction',
      subtitle: 'Awareness and insight',
      description: 'Understand the nature of phone addiction and its impact on your life.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 2,
      id: 'session-02-awareness-and-triggers',
      title: 'Awareness and Triggers',
      subtitle: 'Recognizing patterns',
      description: 'Identify the triggers that lead to excessive phone use.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 3,
      id: 'session-03-digital-boundaries',
      title: 'Digital Boundaries',
      subtitle: 'Creating healthy limits',
      description: 'Establish boundaries that support a healthy relationship with technology.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 4,
      id: 'session-04-rewiring-dopamine',
      title: 'Rewiring Dopamine',
      subtitle: 'Healthy rewards',
      description: 'Retrain your brain to find satisfaction in healthier activities.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 5,
      id: 'session-05-filling-the-void',
      title: 'Filling the Void',
      subtitle: 'Meaningful activities',
      description: 'Find meaningful activities that fulfill the needs your phone was meeting.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 6,
      id: 'session-06-mindful-technology-use',
      title: 'Mindful Technology Use',
      subtitle: 'Intentional engagement',
      description: 'Learn to use technology mindfully and intentionally.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 7,
      id: 'session-07-connection-vs-distraction',
      title: 'Connection vs Distraction',
      subtitle: 'Real relationships',
      description: 'Prioritize real connection over digital distraction.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 8,
      id: 'session-08-freedom-from-phone-dependency',
      title: 'Freedom from Phone Dependency',
      subtitle: 'Digital freedom',
      description: 'Celebrate your freedom and maintain healthy technology habits.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    }
  ],

  presentWithFamily: [
    {
      number: 1,
      id: 'session-01-the-gift-of-presence',
      title: 'The Gift of Presence',
      subtitle: 'Being truly there',
      description: 'Understand the sacred gift of being truly present with loved ones.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 2,
      id: 'session-02-putting-away-distractions',
      title: 'Putting Away Distractions',
      subtitle: 'Clearing the noise',
      description: 'Learn to set aside distractions and be fully present.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 3,
      id: 'session-03-quality-time-and-connection',
      title: 'Quality Time and Connection',
      subtitle: 'Meaningful moments',
      description: 'Create meaningful moments of connection with your family.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 4,
      id: 'session-04-emotional-availability',
      title: 'Emotional Availability',
      subtitle: 'Heart connection',
      description: 'Be emotionally available and connected to your loved ones.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 5,
      id: 'session-05-creating-family-memories',
      title: 'Creating Family Memories',
      subtitle: 'Building eternal bonds',
      description: 'Intentionally create lasting memories with your family.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    },
    {
      number: 6,
      id: 'session-06-living-present',
      title: 'Living Present',
      subtitle: 'A present life',
      description: 'Embrace a lifestyle of presence with those you love most.',
      deepDuration: '~10 min',
      quickDuration: '~5 min'
    }
  ]
}

// Helper to get audio path
export function getAudioPath(categoryId, sessionId, voice = 'male', type = 'deep') {
  const category = categories[categoryId]
  if (!category) return null

  return `/audio/${category.folder}/${voice}/${sessionId}-${type}.mp3`
}

// Helper to get session by number
export function getSession(categoryId, sessionNumber) {
  const categorySessions = sessions[categoryId]
  if (!categorySessions) return null

  return categorySessions.find(s => s.number === sessionNumber)
}

export default {
  categories,
  sessions,
  getAudioPath,
  getSession
}
