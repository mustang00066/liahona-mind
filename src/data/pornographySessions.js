// Pornography Addiction Recovery Sessions
// Faith-centered approach using LDS teachings and clinical hypnotherapy

const commonInduction = {
  opening: [
    { type: 'normal', text: 'Welcome to this sacred time of healing. Find a comfortable position where you can remain undisturbed, and allow your body to settle into stillness.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'Know that you are in a safe space. Whatever has happened in the past remains in the past. This moment is about moving forward in hope and healing.' },
    { type: 'pause', duration: 2000 },
    { type: 'breath', text: 'Take a deep breath in, filling your lungs with peace... and exhale slowly, releasing any shame or burden you carry.', pauseAfter: 5000 },
    { type: 'breath', text: 'Another breath in, breathing in the love of your Heavenly Father... and release, letting His grace wash over you.', pauseAfter: 5000 },
    { type: 'breath', text: 'One more deep breath, breathing in hope for the future... and exhale, knowing that change is possible and within your reach.', pauseAfter: 5000 },
  ],
  progressiveRelaxation: [
    { type: 'normal', text: 'Allow relaxation to begin at the top of your head, melting away any tension or worry.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'Feel this peace flowing down through your face, relaxing every muscle. Your forehead smooths. Your jaw softens.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'The relaxation spreads down through your neck and shoulders, releasing any burden you have been carrying.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'Down through your arms and hands. Down through your chest and stomach. Through your hips and legs, all the way to your toes.' },
    { type: 'pause', duration: 4000 },
    { type: 'normal', text: 'Your entire body is relaxed, calm, and at peace. You are safe here. You are loved here.' },
    { type: 'pause', duration: 3000 },
  ],
  spiritualGrounding: [
    { type: 'scripture', text: 'Remember the words of the Savior: Come unto me, all ye that labour and are heavy laden, and I will give you rest. He does not turn away those who are struggling. He welcomes them with open arms.', pauseAfter: 5000 },
    { type: 'normal', text: 'Your Heavenly Father loves you with a perfect, unchanging love. Nothing you have done can diminish that love. He sees your potential, your divine nature, your worth as His child.' },
    { type: 'pause', duration: 4000 },
  ]
}

const commonDeepening = {
  staircase: [
    { type: 'deepening', text: 'Imagine yourself standing at the top of a sacred staircase, made of white stone that glows with gentle light. This staircase leads to a place of deep healing and peace.' },
    { type: 'pause', duration: 3000 },
    { type: 'deepening', text: 'With each step down, you will go deeper into relaxation and closer to the healing power of the Savior. Let us begin.' },
    { type: 'pause', duration: 2000 },
    { type: 'deepening', text: 'Step ten... beginning the descent... feeling peaceful.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step nine... deeper relaxation... leaving worldly concerns behind.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step eight... going deeper... feeling the Spirit drawing near.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step seven... more peaceful still... your heart opening.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step six... halfway down... feeling profoundly calm.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step five... deeper and deeper... completely at peace.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step four... approaching the sacred space... feeling hope.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step three... almost there... healing awaits.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step two... one step remaining... complete surrender to peace.', pauseAfter: 4000 },
    { type: 'deepening', text: 'Step one... you have arrived in a place of profound healing and light. The Savior is here with you.', pauseAfter: 5000 },
  ],
  gardenVisualization: [
    { type: 'deepening', text: 'You find yourself in a beautiful garden, like the Garden of Gethsemane. Ancient olive trees surround you, their leaves rustling gently in a warm breeze.' },
    { type: 'pause', duration: 4000 },
    { type: 'deepening', text: 'This is a place of profound significance. Here, the Savior took upon Himself all pain, all sin, all addiction. He did this for you, personally, because He loves you.' },
    { type: 'pause', duration: 4000 },
    { type: 'deepening', text: 'You are not alone in this garden. The Savior Himself walks toward you. He knows everything about your struggle, and yet His eyes hold only love and compassion.' },
    { type: 'pause', duration: 5000 },
  ]
}

const commonEmergence = [
  { type: 'emergence', text: 'Now it is time to return to waking awareness, bringing with you all the healing and strength from this session.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'I will count from one to five. With each number, you become more alert, feeling renewed and empowered.' },
  { type: 'pause', duration: 2000 },
  { type: 'emergence', text: 'One... beginning to return... awareness gently increasing.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Two... feeling energy returning... taking a refreshing breath.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Three... more awake now... carrying new strength within you.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Four... almost fully alert... feeling hopeful and determined.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Five... eyes open, fully awake, feeling peaceful and strong. The Savior walks with you. You are never alone.' },
  { type: 'pause', duration: 3000 },
]

export const pornographySessions = [
  // Session 1: Hope and Foundation
  {
    sessionNumber: 1,
    title: 'A New Beginning',
    subtitle: 'Finding hope through the Atonement',
    duration: '35 minutes',
    description: 'Begin your journey to freedom by understanding your worth and the power of the Atonement to heal.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening.staircase,
      ...commonDeepening.gardenVisualization,

      // Therapeutic Work - Session 1
      { type: 'suggestion', text: 'As you stand here in this sacred garden with the Savior, you feel something you may not have felt in a long time: hope. Pure, unfiltered hope.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'The Savior speaks to you: I know your struggle. I felt it in Gethsemane. I carried the weight of this addiction so that you would not have to carry it alone.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: 'He continues with the words from Isaiah: Come now, and let us reason together, saith the Lord: though your sins be as scarlet, they shall be as white as snow; though they be red like crimson, they shall be as wool.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Let these words sink deep into your heart. No matter how many times you have fallen. No matter how dark the addiction has felt. The power to become clean is real and available to you.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Pornography addiction is not a reflection of your character or your worth. It is a struggle, like many struggles, that can be overcome. You are not defined by your weakest moments.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'You are a child of God with infinite worth and potential. This truth does not change based on your behavior. It is eternal and unchanging.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'From this moment forward, you will begin to see yourself as the Savior sees you. Not as an addict. Not as a failure. But as a beloved son or daughter of God who is learning and growing.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'The fact that you are here, listening to this session, is proof of your desire to change. That desire is a gift from God. It is the beginning of your transformation.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'In the coming days and sessions, you will build new patterns of thought and behavior. You will learn to recognize and overcome temptation. You will find freedom.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'Remember the promise from Mosiah: Yea, and as often as my people repent will I forgive them their trespasses against me. And ye shall also forgive one another your trespasses.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Forgive yourself for past mistakes. They are in the past. This moment, this breath, this choice to seek healing - this is what matters now.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Let these truths settle into your subconscious mind. You are loved. You are worthy of healing. Freedom is possible. The Savior walks beside you.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 2: Understanding the Cycle
  {
    sessionNumber: 2,
    title: 'Breaking the Chains',
    subtitle: 'Understanding and interrupting the addiction cycle',
    duration: '36 minutes',
    description: 'Learn to recognize the addiction cycle and develop powerful strategies to break free.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening.staircase,

      { type: 'deepening', text: 'You return to this place of peace more easily now. Your subconscious mind recognizes this healing space and welcomes the work we do here.' },
      { type: 'pause', duration: 4000 },

      // Therapeutic Work - Session 2
      { type: 'suggestion', text: 'Today we will understand the cycle of addiction so that you can recognize it and break free from its grip. Knowledge is power, and awareness is the first step to freedom.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'The addiction cycle often begins with a trigger. This might be stress, loneliness, boredom, anger, or fatigue. These emotions create discomfort that the mind wants to escape.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Let your subconscious mind now reveal your personal triggers. What emotions or situations tend to precede temptation for you? Simply notice what comes to mind.' },
      { type: 'pause', duration: 6000 },
      { type: 'suggestion', text: 'Whatever triggers appeared, observe them with curiosity, not judgment. They are simply patterns that can be changed, signals that can be redirected.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'After the trigger comes a thought, often accompanied by justification. The adversary whispers that you deserve relief, that no one will know, that it is not that serious.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'But remember the words of Moroni: And if men come unto me I will show unto them their weakness. I give unto men weakness that they may be humble. And my grace is sufficient for all men that humble themselves before me.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Your weakness is not a curse. It is an invitation to humble yourself and receive grace. In your moment of temptation, turn to the Savior rather than away from Him.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Now, let us create an interrupt pattern. When a trigger occurs, you will recognize it immediately. A mental alarm will sound, alerting you that you are entering dangerous territory.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'When this alarm sounds, you will take three deep breaths. With each breath, you will say silently: I am a child of God. I choose freedom. The Savior is with me.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Let us practice this now. Imagine a trigger occurring. Stress builds. The old pattern begins to activate. But immediately, your alarm sounds.' },
      { type: 'pause', duration: 3000 },
      { type: 'suggestion', text: 'You take a breath: I am a child of God. Another breath: I choose freedom. A third breath: The Savior is with me. The temptation fades. You have interrupted the cycle.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Each time you practice this, the interrupt becomes stronger. The old pathway weakens. A new pathway of freedom grows stronger.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'You are rewiring your brain with each healthy choice. The chains of addiction are loosening, link by link, choice by choice.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 3: Healing Emotional Wounds
  {
    sessionNumber: 3,
    title: 'Healing Within',
    subtitle: 'Addressing the emotional roots of addiction',
    duration: '38 minutes',
    description: 'Explore and heal the deeper emotional needs that addiction has tried to fill.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening.staircase,
      ...commonDeepening.gardenVisualization,

      // Therapeutic Work - Session 3
      { type: 'suggestion', text: 'In this sacred garden, with the Savior beside you, you are safe to explore deeper truths. Addiction often develops as a way to cope with unmet emotional needs.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Perhaps there was loneliness that craved connection. Perhaps stress that sought relief. Perhaps pain that needed numbing. These are not weaknesses - they are human needs.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'The Savior asks you gently: What pain have you been trying to escape? What need have you been trying to fill? Let your subconscious mind reveal what it knows.' },
      { type: 'pause', duration: 8000 },
      { type: 'suggestion', text: 'Whatever came to mind, know that the Savior understands completely. He felt that same pain, that same loneliness, that same need in Gethsemane. He carried it so He could help you through it.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: 'In Alma we read: And he shall go forth, suffering pains and afflictions and temptations of every kind, that the word might be fulfilled which saith he will take upon him the pains and sicknesses of his people.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'He took your pain upon Himself. Not so you would never feel it, but so He could help you through it. He knows exactly what you need because He has already felt what you feel.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Now, the Savior reaches out and places His hands upon your heart. Feel His love, His healing power, flowing into the places that have been wounded.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Loneliness is being filled with divine connection. Stress is being replaced with peace. Pain is being transformed into strength. You are being healed from the inside out.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'As these wounds heal, the need for harmful coping disappears. You no longer need pornography to feel better because you have access to something infinitely more powerful: the love of God.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'When loneliness arises in the future, you will reach out to God in prayer, to family, to healthy friendships. When stress builds, you will exercise, meditate, or serve others.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'You are developing healthy ways to meet your emotional needs. Ways that build you up rather than tear you down. Ways that draw you closer to God rather than away from Him.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: 'The Savior promises: Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'This peace, His peace, is now taking root in your heart. It will grow stronger with each day, providing what you truly need.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 4: Building Spiritual Armor
  {
    sessionNumber: 4,
    title: 'Putting on the Armor',
    subtitle: 'Strengthening your spiritual defenses',
    duration: '36 minutes',
    description: 'Build powerful spiritual protections against temptation through faith and daily practices.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening.staircase,

      { type: 'deepening', text: 'You enter this peaceful state more easily with each session. Your mind is learning, growing, healing. You are becoming stronger.' },
      { type: 'pause', duration: 4000 },

      // Therapeutic Work - Session 4
      { type: 'suggestion', text: 'Today we build your spiritual armor, the protection that will shield you from temptation and keep you safe on your journey to freedom.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'Paul wrote to the Ephesians: Put on the whole armour of God, that ye may be able to stand against the wiles of the devil. Stand therefore, having your loins girt about with truth.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Imagine now that you are being clothed in divine armor. First, around your waist, a belt of truth. This truth is the knowledge that you are a child of God, that addiction is not your identity, that freedom is real.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: 'And having on the breastplate of righteousness. Over your chest, protecting your heart, comes the breastplate of righteousness. Not perfect behavior, but a sincere desire to do what is right.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: 'And your feet shod with the preparation of the gospel of peace. Your feet are fitted with readiness. You are prepared to walk away from temptation, to move toward light.', pauseAfter: 5000 },
      { type: 'scripture', text: 'Above all, taking the shield of faith, wherewith ye shall be able to quench all the fiery darts of the wicked. In your hand, a shield of faith. When temptation strikes like a fiery arrow, your faith deflects it. It cannot penetrate.', pauseAfter: 5000 },
      { type: 'scripture', text: 'And take the helmet of salvation. Upon your head, the helmet of salvation. Your mind is protected. Impure thoughts cannot take root because your mind is guarded by God.', pauseAfter: 5000 },
      { type: 'scripture', text: 'And the sword of the Spirit, which is the word of God. In your hand, the sword of the Spirit, the word of God. When temptation whispers, you speak scripture, and the enemy flees.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Feel yourself now, fully armored, standing tall and strong. You are not defenseless. You are not weak. You are a warrior in the army of God, equipped for battle and destined for victory.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Each morning, as you pray and study the scriptures, you put on this armor. Each time you attend church and partake of the sacrament, your armor is strengthened.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Your daily habits are not just routines - they are your protection. Scripture study. Prayer. Service. Keeping the commandments. These are the practices that keep your armor strong.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'You commit now to these daily practices. Not out of obligation, but out of love for yourself and your Heavenly Father. They are your lifeline to freedom.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 5: Reprogramming the Mind
  {
    sessionNumber: 5,
    title: 'Renewing Your Mind',
    subtitle: 'Creating new thought patterns and neural pathways',
    duration: '37 minutes',
    description: 'Transform your thought patterns and build strong neural pathways toward purity.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening.staircase,
      ...commonDeepening.gardenVisualization,

      // Therapeutic Work - Session 5
      { type: 'scripture', text: 'Paul counseled: Be not conformed to this world: but be ye transformed by the renewing of your mind. Today, your mind is being renewed, transformed, made new.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Your brain has developed pathways that lead to addiction. These pathways were created over time, through repetition. But they can also be changed through repetition of new, healthy patterns.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Imagine these old pathways in your mind. See them as dark, overgrown paths through a forest. They are no longer being used. Weeds and flowers are growing over them.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Now see new pathways forming, bright and clear, paved with golden light. These are the pathways of purity, of peace, of connection with God. They grow stronger every day.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'When an inappropriate image tries to enter your mind, you now have an automatic response. Your mental shield activates, and you immediately replace it with something pure.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Let us practice this now. An unwanted thought begins to form. Immediately, you recognize it. Your shield rises. And you replace it with an image of the Savior, smiling at you with love.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'The unwanted thought dissolves. It cannot compete with the power of this holy image. You feel clean, protected, victorious.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'This replacement technique becomes automatic. Impure thought - shield - holy image. It happens instantly, without effort, because you are training your subconscious mind right now.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'As it says in Philippians: Whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report, think on these things.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Your mind is being filled with things that are pure, lovely, and of good report. There is no room for darkness when your mind is filled with light.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'From this moment forward, you actively choose what enters your mind. You guard your eyes, your ears, your thoughts. You are the gatekeeper, and only light is allowed in.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Your mind is being renewed. Your thoughts are becoming pure. You are becoming the clean, whole person you were always meant to be.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 6: Living Free Forever
  {
    sessionNumber: 6,
    title: 'Forever Free',
    subtitle: 'Cementing lasting freedom and celebrating your victory',
    duration: '38 minutes',
    description: 'Celebrate your transformation and cement these changes as a permanent part of your identity.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening.staircase,
      ...commonDeepening.gardenVisualization,

      // Therapeutic Work - Session 6
      { type: 'suggestion', text: 'This is a moment of sacred celebration. You have journeyed far. You have faced your demons with courage. You have let the Savior into the darkest parts of your heart. And you have been healed.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'In this garden, the Savior stands before you. His face beams with joy. He has watched you fight. He has felt every struggle. And He is proud beyond measure.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'He speaks to you the words from the parable: Well done, good and faithful servant. Thou hast been faithful over a few things. I will make thee ruler over many things. Enter into the joy of thy Lord.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'You have been faithful. In the midst of trial, you turned to Him. In moments of temptation, you chose Him. And now, you enter into His joy - the joy of freedom, of purity, of peace.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'The Savior takes your hands. He looks into your eyes with perfect love. And He says: You are clean. You are forgiven. You are free. Go forth and live in light.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Feel these words penetrating every cell of your being. You are clean. The stains of the past are washed away in the blood of the Lamb. You are a new creation.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: 'As Isaiah prophesied: Though your sins be as scarlet, they shall be as white as snow. This promise is fulfilled in you today, right now, in this sacred moment.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Your identity has shifted permanently. You are not an addict in recovery. You are a child of God who has overcome. The old identity is gone. The new has come.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Imagine now a golden seal being placed upon your heart by the Savior Himself. This seal represents the permanent nature of your transformation. It is unbreakable. It is eternal.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'The tools you have gained - awareness, interruption, replacement, armor, daily practices - these are yours forever. They will serve you for the rest of your life.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'If moments of weakness come, and they may, you know exactly what to do. Turn to the Savior. Use your tools. Reach out for help. You are never alone, and you will never fall beyond His reach.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: 'Remember the promise from Ether: And if men come unto me I will show unto them their weakness, that they may be humble. And my grace is sufficient for all men that humble themselves before me. For if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them.', pauseAfter: 6000 },
      { type: 'suggestion', text: 'Your weakness has become your strength. Your struggle has become your testimony. Your victory will be a light to others who walk in darkness.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Go forth now as a warrior of light. Live in purity. Serve with love. And know that your Heavenly Father is infinitely proud of the person you have become.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  }
]

export default pornographySessions
