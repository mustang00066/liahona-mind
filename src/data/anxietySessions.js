// General Anxiety Relief Sessions
// Faith-centered approach using LDS teachings and clinical hypnotherapy
// Uses {name} placeholder for personalized experience

const commonInduction = {
  opening: [
    { type: 'normal', text: 'Welcome, {name}. Find a comfortable position and allow yourself to settle into stillness. This is your time for peace.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'Whatever worries or concerns you carry, know that for the next while, you can set them down. They will wait. But this moment is for healing.' },
    { type: 'pause', duration: 2000 },
    { type: 'breath', text: 'Take a deep breath in, {name}... filling your lungs with calm... and exhale slowly, releasing tension.', pauseAfter: 5000 },
    { type: 'breath', text: 'Another breath in, breathing in peace... and release, feeling your body relax.', pauseAfter: 5000 },
    { type: 'breath', text: 'One more deep breath, {name}... and as you exhale, feel anxiety beginning to melt away.', pauseAfter: 5000 },
  ],
  progressiveRelaxation: [
    { type: 'normal', text: 'Let relaxation begin at the top of your head, {name}. Feel any tightness dissolving.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'This peace flows down through your face, relaxing your forehead, your eyes, your jaw.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'Down through your neck and shoulders, {name}. Let your shoulders drop and release.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'The relaxation spreads through your arms, your chest, your stomach. Through your legs to your feet.' },
    { type: 'pause', duration: 4000 },
    { type: 'normal', text: 'Your entire body is now relaxed. You are safe, {name}. You are at peace.' },
    { type: 'pause', duration: 3000 },
  ],
  spiritualGrounding: [
    { type: 'scripture', text: '{name}, remember the words of the Savior: Peace I leave with you, my peace I give unto you. Not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.', pauseAfter: 5000 },
    { type: 'normal', text: 'This peace is available to you always, {name}. It is a gift from the Savior, waiting to be received.' },
    { type: 'pause', duration: 4000 },
  ]
}

const commonDeepening = [
  { type: 'deepening', text: '{name}, imagine yourself walking down a beautiful path through a peaceful forest. With each step, you go deeper into relaxation.' },
  { type: 'pause', duration: 3000 },
  { type: 'deepening', text: 'The air is fresh and clean. Sunlight filters through the leaves above. Birds sing softly in the distance.' },
  { type: 'pause', duration: 4000 },
  { type: 'deepening', text: 'With each step down this path, {name}, you feel more calm, more peaceful, more free from worry.' },
  { type: 'pause', duration: 4000 },
  { type: 'deepening', text: 'Ten steps... feeling calm. Nine... deeper relaxation. Eight... worry fading. Seven... profound peace.', pauseAfter: 6000 },
  { type: 'deepening', text: 'Six... halfway there, {name}. Five... so peaceful. Four... letting go. Three... almost there.', pauseAfter: 6000 },
  { type: 'deepening', text: 'Two... one more step. One... you arrive at a beautiful clearing, a place of perfect peace.', pauseAfter: 5000 },
]

const commonEmergence = [
  { type: 'emergence', text: '{name}, it is time to return to waking awareness, bringing this peace with you.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'As I count from one to five, you will become more alert, feeling refreshed and calm.' },
  { type: 'pause', duration: 2000 },
  { type: 'emergence', text: 'One... beginning to return, {name}.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Two... energy returning to your body.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Three... more awake now, carrying peace with you.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Four... almost fully awake, {name}.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Five... eyes open, fully awake, feeling peaceful and calm. The peace remains with you, {name}.' },
  { type: 'pause', duration: 3000 },
]

export const anxietySessions = [
  // Session 1: Foundation of Peace
  {
    sessionNumber: 1,
    title: 'Discovering Your Inner Peace',
    subtitle: 'Building a foundation of calm',
    duration: '34 minutes',
    description: 'Begin your journey to lasting peace by connecting with the calm that already exists within you.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening,

      // Therapeutic Work - Session 1
      { type: 'suggestion', text: 'In this peaceful clearing, {name}, you discover something wonderful. There is a well of peace deep within you that has always been there, waiting to be found.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Anxiety is like clouds that cover the sun. The sun is always there, always shining. The clouds come and go, but they cannot extinguish the light.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Your inner peace is like that sun, {name}. It has always been within you. Anxiety may cloud it temporarily, but it cannot take it away.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'The Savior taught: The kingdom of God is within you, {name}. His peace, His kingdom, His presence - all are already within your heart.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'From this moment forward, you will remember this truth. When anxiety arises, you will know that beneath it, peace remains. You will learn to access that peace at will.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Anxiety often comes from worry about the future or regret about the past. But right now, in this present moment, {name}, you are safe. You are at peace.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Let us practice returning to the present. Feel your body right now. Notice the surface beneath you. Notice the air around you. This is the present moment, and in it, all is well.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Whenever anxiety tries to pull you into worry about tomorrow or yesterday, you will gently return to now, {name}. You will feel your body, take a breath, and remember: in this moment, I am safe.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'As Jesus taught: Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'You do not need to carry tomorrow\'s burdens today, {name}. Each day has enough of its own. By living in the present, you free yourself from the weight of imagined troubles.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'This session has planted a seed of peace within you. With each coming session, that seed will grow, until peace becomes your natural state.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 2: Releasing Physical Tension
  {
    sessionNumber: 2,
    title: 'Releasing the Body',
    subtitle: 'Letting go of physical manifestations of anxiety',
    duration: '35 minutes',
    description: 'Learn to release the physical tension that anxiety creates in your body.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening,

      // Therapeutic Work - Session 2
      { type: 'suggestion', text: '{name}, anxiety often manifests in the body before we even recognize it mentally. Tight shoulders. Shallow breath. Clenched jaw. Racing heart.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Today you will learn to recognize these signals and release them before anxiety takes hold. Your body will become an ally in your quest for peace.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Bring your attention now to your shoulders, {name}. Notice if there is any remaining tension there. Now, consciously release it. Feel your shoulders drop and soften.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Move your attention to your jaw. Is it clenched? Let it soften. Let your teeth part slightly. Feel the relief as tension melts away.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Notice your breathing, {name}. When anxious, we tend to breathe shallowly, from the chest. Now, breathe deeply, from your belly. Feel your stomach expand as you inhale.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'This body scan can be done anytime, anywhere. In a meeting. In traffic. In bed at night. Shoulders, jaw, breath. Release, relax, breathe deeply.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'The scripture teaches, {name}: Be still, and know that I am God. Stillness in your body creates space for stillness in your mind.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'From now on, your body will alert you when anxiety begins. Tension will be a signal to pause, scan, and release. You will catch anxiety early and let it go.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Imagine yourself in a stressful situation, {name}. You notice your shoulders rising toward your ears. Immediately, you pause. You release. You breathe. The anxiety dissolves.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Your body is no longer a container for anxiety. It is a release valve. Tension comes, and you let it flow through and out. You are learning mastery over your physical state.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'These skills are being programmed into your subconscious mind, {name}. They will become automatic, natural, effortless.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 3: Transforming Anxious Thoughts
  {
    sessionNumber: 3,
    title: 'Quieting the Mind',
    subtitle: 'Transforming anxious thought patterns',
    duration: '36 minutes',
    description: 'Learn to recognize and transform the thought patterns that fuel anxiety.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening,

      // Therapeutic Work - Session 3
      { type: 'suggestion', text: '{name}, anxiety is often fueled by patterns of thought. What if something goes wrong? What if people judge me? What if I fail? These thoughts create a spiral of worry.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'But thoughts are not facts. They are simply patterns of electrical activity in your brain. And patterns can be changed.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'When an anxious thought arises, {name}, you will learn to observe it rather than believe it. You will say to yourself: That is an anxious thought. It is not necessarily true.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Imagine anxious thoughts as clouds passing through the sky of your mind. You do not have to grab onto them. You do not have to follow them. Simply watch them float by.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: '{name}, remember the counsel in Philippians: Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds.', pauseAfter: 6000 },
      { type: 'suggestion', text: 'When anxious thoughts arise, you can turn them into prayers. What if something goes wrong becomes Lord, please guide me. What if I fail becomes Help me do my best and trust the outcome to Thee.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Let us practice now, {name}. An anxious thought floats into your mind. You observe it without grabbing it. You transform it into a prayer. You release it to God.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Feel the relief as the thought dissolves. You did not fight it or resist it. You simply redirected it. This is the gentle art of managing your mind.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'From now on, anxious thoughts will be triggers for prayer rather than spirals of worry. Each worry becomes an opportunity to connect with your Heavenly Father.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'As the Savior promised, {name}: Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you. Your Heavenly Father hears every prayer and answers with peace.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Your mind is being transformed. Anxiety pathways are weakening. Peace pathways are strengthening. You are learning to think in new ways, {name}.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 4: Building Trust in God
  {
    sessionNumber: 4,
    title: 'Trusting in the Lord',
    subtitle: 'Finding peace through faith',
    duration: '35 minutes',
    description: 'Deepen your trust in Heavenly Father\'s plan and find peace in His care.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening,

      // Therapeutic Work - Session 4
      { type: 'suggestion', text: '{name}, much of anxiety comes from trying to control what cannot be controlled. We worry about outcomes that are not in our hands. We fear things we cannot prevent.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'The scriptures counsel: Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'What would it feel like, {name}, to truly trust? To know that your Heavenly Father sees the whole picture, even when you only see a small part?' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Imagine placing your worries, one by one, into the hands of God. Each concern, each fear, each what if - gently placed in His capable hands.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Feel the burden lifting from your shoulders, {name}. You were not designed to carry all of this alone. The Savior invites you to cast your burden upon Him.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: 'As He promised: Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, for my yoke is easy, and my burden is light.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'In His yoke, you walk together with Christ. You are not alone in your challenges. He shares the load, guides the path, and brings you safely home.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'From now on, {name}, when worry arises, you will ask yourself: Is this something I can control? If yes, take action. If no, release it to God.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'This simple practice will free you from endless worry about things beyond your control. You will focus your energy where it matters and trust God with the rest.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Visualize yourself walking through life with this new perspective, {name}. Challenges arise, but you do not panic. You do what you can and trust God with what you cannot.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'There is deep peace in this way of living. The anxiety of control is replaced by the peace of trust. You are learning to let go and let God.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 5: Creating Calm Anchors
  {
    sessionNumber: 5,
    title: 'Anchoring Peace',
    subtitle: 'Creating instant access to calm',
    duration: '34 minutes',
    description: 'Build powerful mental anchors that give you instant access to peace anytime.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening,

      // Therapeutic Work - Session 5
      { type: 'suggestion', text: '{name}, today you will create a powerful anchor to peace. An anchor is a trigger that instantly brings back a desired state. Whenever you use this anchor, you will feel calm wash over you.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'First, let us deepen your state of peace even further. Feel the calm that surrounds you now. Let it intensify. This is a profound state of tranquility.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Now, {name}, gently press your thumb and forefinger together on your right hand. As you do this, you are linking this gesture to this profound feeling of peace.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Feel the peace flowing through you as you hold this gentle pressure. Your subconscious mind is recording this connection. Thumb and finger together means peace.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Release your fingers now. Notice that even as you release, a residue of peace remains. Let us strengthen this anchor.' },
      { type: 'pause', duration: 3000 },
      { type: 'suggestion', text: 'Deepen your peace again, {name}. Remember a time when you felt completely safe, completely at ease. Perhaps in nature. Perhaps with loved ones. Perhaps in sacred spaces.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'As you feel this peace intensifying, press your thumb and forefinger together again. Hold it. Let the peace flood through you. The anchor grows stronger.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Release again. The connection is now firmly established. Whenever you make this gesture, peace will return to you instantly.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: '{name}, this anchor is like the scripture that says: Peace be unto thy soul. With this simple gesture, you are speaking peace to your own soul.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'In moments of anxiety, you will use this anchor. In a meeting that feels overwhelming. Before a difficult conversation. When worry begins to build. Simply press thumb to finger, and peace returns.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Let us test it now. Imagine a mildly stressful situation. Feel a small amount of tension arise. Now, press your anchor. Feel the peace flooding back, dissolving the tension.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'It works, {name}. Each time you use it, it grows stronger. This is a tool you will carry with you for the rest of your life.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 6: Living in Peace
  {
    sessionNumber: 6,
    title: 'A Life of Peace',
    subtitle: 'Integrating lasting calm into daily life',
    duration: '36 minutes',
    description: 'Celebrate your transformation and cement a peaceful way of living.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening,

      // Therapeutic Work - Session 6
      { type: 'suggestion', text: '{name}, you have journeyed far in these sessions. You have discovered the peace within you. You have learned to release physical tension and transform anxious thoughts.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'You have deepened your trust in God and created a powerful anchor to peace. All of these tools are now permanently part of who you are.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Today we integrate everything, {name}, and imagine your future as a person who lives in peace.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'See yourself waking in the morning. Before anxiety can arise, you take a breath and feel gratitude for a new day. You connect with your Heavenly Father in prayer.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'As you move through your day, {name}, challenges arise. But they do not shake you. You assess what you can control, take action, and release the rest to God.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'When tension begins in your body, you notice immediately. Shoulders, jaw, breath. You release and relax. Anxiety cannot take hold because you catch it early.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'When anxious thoughts arise, you observe them like passing clouds. You transform them into prayers. What if becomes help me trust. The spiral stops before it starts.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'In moments that feel overwhelming, you touch thumb to finger, and peace washes over you. You have a tool that works every time, {name}.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'The prophet Isaiah recorded the promise: Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee. This perfect peace is becoming your daily experience, {name}.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'As you go to bed each night, you reflect on the peace you maintained throughout the day. You thank Heavenly Father for His help. You sleep deeply and restfully.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'This is not a dream, {name}. This is your future. This is who you are becoming. With each day, peace becomes more natural, more automatic, more deeply rooted.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Anxiety may visit from time to time, but it will never control you again. You have the tools. You have the faith. You have the connection to your Heavenly Father who gives you peace.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: 'Remember always, {name}: Peace I leave with you, my peace I give unto you. Let not your heart be troubled, neither let it be afraid. This promise is yours forever.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Go forth in peace, {name}. You are healed. You are whole. You are at peace.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  }
]

export default anxietySessions
