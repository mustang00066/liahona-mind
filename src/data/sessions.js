// Comprehensive Hypnotherapy Session Data
// Each session follows clinical hypnotherapy best practices:
// 1. Induction (5-10 min) - relaxation and focus
// 2. Deepening (5-10 min) - achieving theta state
// 3. Therapeutic Work (15-25 min) - suggestions and visualization
// 4. Emergence (2-5 min) - gradual awakening

export const categories = {
  nailBiting: {
    id: 'nailBiting',
    name: 'Nail Biting Freedom',
    description: 'Release the habit of nail biting through gentle, powerful hypnotherapy',
    icon: '✋',
    color: '#48bb78',
    totalSessions: 6,
    trackable: true
  },
  pornography: {
    id: 'pornography',
    name: 'Sexual Purity',
    description: 'Find freedom from pornography and masturbation through faith-centered healing',
    icon: '🕊️',
    color: '#805ad5',
    totalSessions: 10,
    trackable: true
  },
  anxiety: {
    id: 'anxiety',
    name: 'Peace & Calm',
    description: 'Overcome anxiety and find lasting peace through Christ',
    icon: '☮️',
    color: '#4299e1',
    totalSessions: 8,
    trackable: false
  },
  overthinking: {
    id: 'overthinking',
    name: 'Mental Clarity',
    description: 'Quiet the racing mind and find stillness within',
    icon: '🧠',
    color: '#d69e2e',
    totalSessions: 8,
    trackable: false
  },
  selfConfidence: {
    id: 'selfConfidence',
    name: 'Self Confidence',
    description: 'Discover your divine worth and build unshakeable confidence',
    icon: '💪',
    color: '#ed8936',
    totalSessions: 8,
    trackable: false
  },
  phoneAddiction: {
    id: 'phoneAddiction',
    name: 'Digital Freedom',
    description: 'Break free from phone addiction and reclaim your time',
    icon: '📱',
    color: '#38b2ac',
    totalSessions: 8,
    trackable: true
  },
  presentWithFamily: {
    id: 'presentWithFamily',
    name: 'Present with Family',
    description: 'Be truly present with your loved ones and strengthen eternal bonds',
    icon: '👨‍👩‍👧‍👦',
    color: '#e53e3e',
    totalSessions: 6,
    trackable: false
  }
}

// Common session components - Uses {name} placeholder for personalization
const commonInduction = {
  opening: [
    { type: 'normal', text: 'Welcome, {name}. Find a comfortable position, either sitting or lying down, where you can remain undisturbed for this session.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'Allow your eyes to gently close, or if you prefer, let them rest on a single point in front of you.' },
    { type: 'pause', duration: 2000 },
    { type: 'breath', text: 'Take a deep breath in through your nose, {name}... and slowly exhale through your mouth.', pauseAfter: 5000 },
    { type: 'breath', text: 'Another deep breath in, filling your lungs completely... and release, letting go of any tension.', pauseAfter: 5000 },
    { type: 'breath', text: 'One more deep breath, {name}, breathing in peace and calm... and as you exhale, feel your body begin to relax.', pauseAfter: 5000 },
  ],
  progressiveRelaxation: [
    { type: 'normal', text: 'Now, bring your attention to the top of your head. Notice any tension there, and simply allow it to melt away.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'Feel that relaxation flowing down to your forehead... smoothing away any lines of worry or concern.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'Let the muscles around your eyes relax completely... your eyelids feeling pleasantly heavy.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'The relaxation spreads to your cheeks, your jaw... allowing your jaw to soften and your teeth to part slightly.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'Feel this wave of calm flowing down through your neck and shoulders... areas where so many of us hold tension.' },
    { type: 'pause', duration: 4000 },
    { type: 'normal', text: 'Allow your shoulders to drop... feel them releasing, becoming loose and comfortable.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'This peaceful feeling flows down through your arms... your upper arms... your elbows... your forearms.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'All the way down to your wrists... your hands... and your fingers. Feel your hands becoming warm and relaxed.' },
    { type: 'pause', duration: 4000 },
    { type: 'normal', text: 'Now this relaxation spreads through your chest... with each breath, your chest expands and contracts easily, naturally.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'Feel the relaxation moving down through your stomach... your lower back... your hips.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'Down through your thighs... your knees... your calves... your ankles... your feet... all the way to your toes.' },
    { type: 'pause', duration: 4000 },
    { type: 'normal', text: 'Your entire body is now completely relaxed, {name}. You feel safe, comfortable, and at peace.' },
    { type: 'pause', duration: 3000 },
  ],
  spiritualGrounding: [
    { type: 'scripture', text: 'As you rest in this peaceful state, remember the words of the Savior: Peace I leave with you, my peace I give unto you. Not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.', pauseAfter: 5000 },
    { type: 'normal', text: 'Feel the presence of your Heavenly Father surrounding you with love, {name}. You are His beloved child, and He desires your happiness and peace.' },
    { type: 'pause', duration: 4000 },
  ]
}

const commonDeepening = {
  staircase: [
    { type: 'deepening', text: 'Now, imagine yourself standing at the top of a beautiful, golden staircase. This staircase has ten steps, leading down to a place of even deeper peace and relaxation.' },
    { type: 'pause', duration: 3000 },
    { type: 'deepening', text: 'With each step you take, you will go deeper and deeper into this wonderful state of calm. Let us begin.' },
    { type: 'pause', duration: 2000 },
    { type: 'deepening', text: 'Step ten... taking the first step down... feeling more relaxed.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step nine... going deeper... letting go of the outside world.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step eight... deeper and deeper... so peaceful, so calm.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step seven... relaxation spreading through every cell of your body.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step six... halfway down now... feeling wonderfully at ease.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step five... going even deeper... your mind quiet and receptive.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step four... deeper still... peaceful and serene.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step three... almost there... profoundly relaxed.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step two... one more step to go... feeling complete peace.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step one... you have arrived at the bottom of the staircase, in a place of deep, profound peace and relaxation.', pauseAfter: 5000 },
  ],
  templeVisualization: [
    { type: 'deepening', text: 'Before you now appears a beautiful temple, gleaming white against a brilliant blue sky. This is your sacred space, a place of healing and peace.' },
    { type: 'pause', duration: 4000 },
    { type: 'deepening', text: 'You feel drawn to this holy place. As you approach, you notice the beauty of the grounds, the flowers, the fountains. Everything here speaks of the love of God.' },
    { type: 'pause', duration: 4000 },
    { type: 'deepening', text: 'You enter through the doors, and immediately you feel enveloped in warmth and light. The Spirit is strong here. You feel the presence of angels, of loved ones, of the Savior Himself.' },
    { type: 'pause', duration: 5000 },
  ]
}

const commonEmergence = [
  { type: 'emergence', text: '{name}, it is time to begin your return to full waking awareness, bringing with you all the positive changes and insights from this session.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'In a moment, I will count from one to five. With each number, you will become more alert, more awake, feeling refreshed and renewed.' },
  { type: 'pause', duration: 2000 },
  { type: 'emergence', text: 'One... beginning to return now... awareness gently returning to your body.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Two... feeling energy returning to your arms and legs... taking a deeper breath.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Three... more and more alert... remembering all the positive suggestions you have received.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Four... almost fully awake now... feeling wonderful, refreshed, and at peace.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Five... eyes open, fully awake, {name}, feeling better than before. Take a moment to stretch gently and return to your day with renewed strength and purpose.' },
  { type: 'pause', duration: 3000 },
  { type: 'normal', text: 'Remember, {name}, the changes you have made today will continue to strengthen. The Savior walks beside you on this journey. You are never alone. Go forth in peace.' },
]

// ==========================================
// NAIL BITING SESSIONS (6 sessions)
// ==========================================
export const nailBitingSessions = [
  // Session 1: Foundation - Awareness & Relaxation
  {
    sessionNumber: 1,
    title: 'Awakening to Freedom',
    subtitle: 'Building awareness and creating your foundation',
    duration: '32 minutes',
    description: 'Begin your journey to freedom by building awareness of your habit and establishing deep relaxation.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening.staircase,

      // Therapeutic Work - Session 1 Focus: Awareness
      { type: 'suggestion', text: 'In this deep state of relaxation, your subconscious mind is open and receptive to positive change. You are here because you desire freedom. Freedom from a habit that no longer serves you.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Nail biting is simply a learned behavior. And what has been learned can be unlearned. Your mind is remarkably powerful, capable of releasing old patterns and embracing new, healthy ones.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'Remember the scripture from Ether: And if men come unto me I will show unto them their weakness. I give unto men weakness that they may be humble. And my grace is sufficient for all men that humble themselves before me.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Your Heavenly Father sees this challenge not as a flaw, but as an opportunity for growth. He is with you, supporting you, loving you through every step of this journey.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Now, let us bring gentle awareness to your hands. Notice where they are right now. Feel them resting comfortably. Your hands are instruments of good. They serve you in so many positive ways.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'From this moment forward, you will begin to notice when your hands move toward your mouth. This awareness comes easily and naturally. There is no judgment, only gentle noticing.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'When you notice this movement, you will simply pause. Take a breath. And in that breath, you have a choice. A choice that grows stronger each time you make it.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Imagine now that you are going through your day. You feel calm, peaceful. You notice your hand beginning to rise toward your face.' },
      { type: 'pause', duration: 3000 },
      { type: 'suggestion', text: 'Immediately, you become aware. You pause. You take a slow, calming breath. And you gently place your hand back down, feeling a sense of accomplishment, of control, of peace.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'This awareness is your first gift to yourself. With awareness comes choice. With choice comes freedom. You are already on the path to lasting change.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'As it says in Second Nephi: For the Spirit is the same, yesterday, today, and forever. And the way is prepared from the fall of man, and salvation is free. And men are free to choose liberty and eternal life through the great Mediator of all men.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'You are free to choose. And today, you are choosing freedom. Freedom from this habit. Freedom to have healthy, beautiful nails. Freedom to feel proud of your hands.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Let these truths settle deep into your subconscious mind. They will remain with you, growing stronger each day, each hour, each moment.' },
      { type: 'pause', duration: 4000 },

      ...commonEmergence
    ]
  },

  // Session 2: Identifying Triggers
  {
    sessionNumber: 2,
    title: 'Understanding Your Triggers',
    subtitle: 'Discovering and transforming the root causes',
    duration: '34 minutes',
    description: 'Explore the underlying triggers of your habit and begin to transform them at the source.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening.staircase,
      ...commonDeepening.templeVisualization,

      // Therapeutic Work - Session 2 Focus: Trigger Identification
      { type: 'suggestion', text: 'Inside this sacred temple space, you feel completely safe and at peace. Here, you can explore the deeper aspects of your habit without fear or judgment.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Every habit has a trigger. Something that sets it in motion. For many, nail biting begins as a response to stress, boredom, or anxiety. It becomes an unconscious way to self-soothe.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Let your subconscious mind now reveal to you the situations where you most often bite your nails. Perhaps it is when you are watching television. Perhaps when you are working at your computer. Perhaps when you are feeling stressed or worried.' },
      { type: 'pause', duration: 6000 },
      { type: 'suggestion', text: 'Whatever comes to mind, observe it with curiosity and compassion. There is no wrong answer. Your subconscious knows the truth.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: 'The Savior taught: Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'You do not need to carry stress alone. You do not need to cope through habits that harm you. The Savior offers you rest, peace, and better ways to manage the challenges of life.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Now, imagine a new response to your triggers. When stress arises, instead of bringing your hands to your mouth, you take a deep breath. You feel the Spirit calming your heart.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'When boredom strikes, instead of biting, you find something constructive to do with your hands. You might squeeze a soft ball, drum your fingers gently on a surface, or simply clasp your hands together.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'These new responses are being programmed into your subconscious mind right now. They will become automatic, natural, and easy.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Each trigger is now linked to a healthy response. Stress triggers deep breathing. Boredom triggers constructive hand movements. Anxiety triggers a prayer in your heart.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'You are rewiring your brain, creating new neural pathways of health and peace. This is the power of the mind that Heavenly Father has given you.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'As Paul wrote to the Romans: Be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Your mind is being renewed. Your habits are being transformed. You are becoming the person you are meant to be, one session at a time.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 3: Building New Neural Pathways
  {
    sessionNumber: 3,
    title: 'Creating New Pathways',
    subtitle: 'Building automatic healthy responses',
    duration: '35 minutes',
    description: 'Strengthen the new neural pathways that lead to healthy, automatic behaviors.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening.staircase,

      { type: 'deepening', text: 'With each session, you go deeper more quickly. Your subconscious mind recognizes this peaceful state and welcomes you back like an old friend.' },
      { type: 'pause', duration: 4000 },

      // Therapeutic Work - Session 3 Focus: Neural Rewiring
      { type: 'suggestion', text: 'Your brain is an incredible creation of your Heavenly Father. It has the ability to change, to grow, to form new connections throughout your entire life. This is called neuroplasticity.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Every time you choose not to bite your nails, you strengthen a new pathway in your brain. Every time you respond to stress with deep breathing, that pathway becomes stronger.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Imagine your brain now. See the old pathway that led to nail biting. It is a well-worn path, but now it is beginning to grow over. Grass and flowers are covering it. It is becoming harder to travel.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Now see the new pathway. It is bright and clear, becoming wider and smoother with each healthy choice you make. This is the path of freedom, of health, of beautiful hands.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: 'The prophet Nephi wrote: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'The Lord has prepared a way for you to overcome this habit. He has given you this very session, this very moment, as a tool for your transformation.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Now let us practice. Imagine yourself in a moment of stress. You feel the urge to bite your nails. But immediately, your new pathway activates.' },
      { type: 'pause', duration: 3000 },
      { type: 'suggestion', text: 'Your hands remain at your sides. You take a deep breath. You feel the Spirit calming your heart. The urge passes like a cloud moving across the sky. You are in control.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Let us practice again. You are bored, waiting in line or watching something on a screen. Your hands want to move to your mouth. But the new pathway is strong.' },
      { type: 'pause', duration: 3000 },
      { type: 'suggestion', text: 'Instead, you gently tap your fingers together, or clasp your hands, or hold an object. The urge fades. You smile, knowing you have chosen freedom once again.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Each time you practice this in your mind, your brain treats it as real experience. Your new pathways grow stronger, even now, in this peaceful state.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'You are becoming someone who naturally takes care of their hands. Someone whose automatic response to stress is calm breathing. Someone who is free.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 4: Self-Image Transformation
  {
    sessionNumber: 4,
    title: 'Seeing Your True Self',
    subtitle: 'Embracing your identity as one who is free',
    duration: '36 minutes',
    description: 'Transform your self-image to match your new identity as someone with healthy, beautiful hands.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening.staircase,
      ...commonDeepening.templeVisualization,

      // Therapeutic Work - Session 4 Focus: Identity Shift
      { type: 'suggestion', text: 'In this sacred space, you stand before a beautiful mirror. This is a mirror that shows not your current self, but your true self - the person you are becoming.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Look at your reflection. See yourself as someone who has completely overcome nail biting. Your hands are beautiful. Your nails are healthy, strong, and well-groomed.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Notice how this version of you carries themselves. There is confidence in your posture. Peace in your eyes. You are someone who has conquered a challenge and grown stronger because of it.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: 'In the Doctrine and Covenants, the Lord says: Remember the worth of souls is great in the sight of God. You are of infinite worth, beloved of your Father in Heaven.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'This person in the mirror - this is who you truly are. Not a nail biter. Not someone struggling with a habit. But a child of God, whole, capable, and free.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Step forward now and merge with your reflection. Feel yourself becoming one with this healed, whole version of yourself. You are no longer becoming - you are.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'From this moment forward, when you think of yourself, you think of someone with healthy hands. When you look at your nails, you feel pride and satisfaction.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'The old identity of a nail biter is fading away. It is no longer who you are. It is simply a chapter in your past, a stepping stone to who you have become.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Imagine yourself at a future gathering. Someone compliments your hands. You smile and thank them, feeling no shame, only gratitude for how far you have come.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'This is not a fantasy. This is your future. This is who you are becoming with each passing day, each healthy choice, each moment of awareness.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'As the Apostle Paul wrote: Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'You are a new creature. Through the power of Christ and your own determined effort, you are being made new. The old habit has no power over the new you.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 5: Strengthening & Reinforcement
  {
    sessionNumber: 5,
    title: 'Deepening Your Freedom',
    subtitle: 'Strengthening your resolve and reinforcing success',
    duration: '34 minutes',
    description: 'Reinforce all the positive changes and deepen your commitment to lasting freedom.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening.staircase,

      { type: 'deepening', text: 'You have come so far on this journey. Each session has built upon the last, creating a foundation of freedom that grows stronger every day.' },
      { type: 'pause', duration: 4000 },

      // Therapeutic Work - Session 5 Focus: Reinforcement
      { type: 'suggestion', text: 'Today we strengthen everything you have learned. We lock these positive changes deep into your subconscious, where they will remain for the rest of your life.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Your awareness of your hands has grown tremendously. You notice automatically when they move toward your face. This awareness is now a permanent part of you.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Your triggers have been transformed. Stress no longer leads to biting. Boredom no longer leads to biting. Anxiety no longer leads to biting. You have new, healthy responses.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Your brain has formed new neural pathways. The pathway to nail biting is overgrown and difficult to access. The pathway to healthy hands is wide, clear, and easy.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Your identity has shifted. You no longer see yourself as a nail biter. You see yourself as someone with beautiful, healthy hands. Someone who is in control.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'In Alma we read: But behold, if ye will awake and arouse your faculties, even to an experiment upon my words, and exercise a particle of faith, the seed will begin to grow.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'The seed of freedom has been planted in your heart. It is growing, taking root, becoming strong. With continued faith and effort, it will bear beautiful fruit.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Let us now visualize your continued success. See yourself one week from now. Your nails are longer, healthier than they have been in a long time. You feel proud.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'See yourself one month from now. Your hands look beautiful. The habit feels like a distant memory. Others have noticed the change and commented positively.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'See yourself one year from now. You cannot remember the last time you bit your nails. The very idea seems strange to you now. You are completely free.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'This future is not just possible - it is inevitable. With each day of continued commitment, you draw closer to permanent freedom.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'If you ever face a moment of temptation, remember this: you have the power to choose. One deep breath. One moment of awareness. And the urge will pass.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 6: Permanent Freedom & Celebration
  {
    sessionNumber: 6,
    title: 'Celebrating Your Freedom',
    subtitle: 'Cementing permanent change and celebrating your success',
    duration: '33 minutes',
    description: 'Celebrate your journey and cement these changes as a permanent part of who you are.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening.staircase,
      ...commonDeepening.templeVisualization,

      // Therapeutic Work - Session 6 Focus: Celebration and Permanence
      { type: 'suggestion', text: 'This is a moment of celebration. You have completed this journey of healing. You have done the work. You have earned your freedom.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'In this sacred temple space, you see angels and loved ones gathered to celebrate with you. They smile with joy at your accomplishment.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'The Savior Himself is here. He looks upon you with perfect love. He is proud of your determination, your faith, your willingness to change.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: 'He speaks to you the words from Matthew: Well done, thou good and faithful servant. Thou hast been faithful over a few things, I will make thee ruler over many things. Enter thou into the joy of thy Lord.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'You have been faithful in overcoming this challenge. This same strength, this same determination, will serve you throughout your life in facing other challenges.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Now, imagine a golden seal being placed upon your heart. This seal represents the permanent nature of your change. It cannot be broken. It cannot be undone.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'The changes you have made are now a permanent part of who you are. Healthy hands. Automatic awareness. Calm responses to stress. This is you, now and forever.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'As you return to daily life, carry this celebration with you. Be proud of what you have accomplished. Share your success with others who may need hope.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'If challenges arise in the future, you now have all the tools you need. Awareness. New responses. A transformed identity. And the constant support of your Heavenly Father.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'Remember the promise from Isaiah: Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'You are upheld by divine power. You are supported by perfect love. You are free.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'As we prepare to end this final session, know that the door to this peaceful place always remains open. You can return to this state of calm whenever you need to reinforce your freedom.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Go forth now, a changed person. A free person. A beloved child of God with beautiful, healthy hands. Your journey is complete, and your new life has begun.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  }
]

export default {
  categories,
  nailBitingSessions
}
