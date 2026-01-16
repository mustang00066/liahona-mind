// Overthinking / Mental Clarity Sessions
// Faith-centered approach using LDS teachings and clinical hypnotherapy
// Uses {name} placeholder for personalized experience

const commonInduction = {
  opening: [
    { type: 'normal', text: 'Welcome, {name}. Find a comfortable position and allow your body to settle. This is a time for your busy mind to find rest.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'The thoughts that race through your mind can pause now. They will wait for you. This moment is about finding stillness.' },
    { type: 'pause', duration: 2000 },
    { type: 'breath', text: 'Take a deep breath in, {name}... and as you exhale, imagine your thoughts slowing down.', pauseAfter: 5000 },
    { type: 'breath', text: 'Another breath in, breathing in calm... and release, feeling your mind begin to quiet.', pauseAfter: 5000 },
    { type: 'breath', text: 'One more deep breath, {name}... and exhale, letting go of the need to think about everything.', pauseAfter: 5000 },
  ],
  progressiveRelaxation: [
    { type: 'normal', text: 'Let relaxation begin at your head, {name}. Feel the thinking centers of your brain softening, resting.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'This peace flows down through your face, your neck, your shoulders. Each area releasing as the calm touches it.' },
    { type: 'pause', duration: 3000 },
    { type: 'normal', text: 'Down through your arms, your torso, your legs. Your entire body becoming still, {name}.' },
    { type: 'pause', duration: 4000 },
    { type: 'normal', text: 'In this stillness, your mind can rest. You are safe here. There is nothing you need to figure out right now.' },
    { type: 'pause', duration: 3000 },
  ],
  spiritualGrounding: [
    { type: 'scripture', text: '{name}, the scripture counsels: Be still, and know that I am God. In stillness, you find divine presence. In quiet, you hear His voice.', pauseAfter: 5000 },
    { type: 'normal', text: 'Your Heavenly Father does not require constant mental activity from you. He invites you to rest in Him, to trust, to simply be.' },
    { type: 'pause', duration: 4000 },
  ]
}

const commonDeepening = [
  { type: 'deepening', text: '{name}, imagine yourself floating gently downward, like a feather drifting on a peaceful breeze.' },
  { type: 'pause', duration: 3000 },
  { type: 'deepening', text: 'With each gentle descent, your thoughts become quieter, more distant, less demanding of your attention.' },
  { type: 'pause', duration: 4000 },
  { type: 'deepening', text: 'Floating down... down... down... into a place of mental stillness that feels like coming home.' },
  { type: 'pause', duration: 4000 },
  { type: 'deepening', text: 'Ten... floating gently. Nine... mind quieting. Eight... thoughts fading. Seven... peaceful descent, {name}.', pauseAfter: 6000 },
  { type: 'deepening', text: 'Six... deeper stillness. Five... profound quiet. Four... letting go. Three... almost there.', pauseAfter: 6000 },
  { type: 'deepening', text: 'Two... one more breath. One... you arrive in a place of perfect mental clarity and peace.', pauseAfter: 5000 },
]

const commonEmergence = [
  { type: 'emergence', text: '{name}, it is time to return to waking awareness, bringing mental clarity with you.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'As I count from one to five, you become more alert, with a peaceful, clear mind.' },
  { type: 'pause', duration: 2000 },
  { type: 'emergence', text: 'One... beginning to return.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Two... awareness increasing, {name}.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Three... more awake, mind clear and calm.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Four... almost fully alert.' },
  { type: 'pause', duration: 3000 },
  { type: 'emergence', text: 'Five... eyes open, fully awake. Your mind is clear, {name}. You think with purpose and peace.' },
  { type: 'pause', duration: 3000 },
]

export const overthinkingSessions = [
  // Session 1: Understanding the Busy Mind
  {
    sessionNumber: 1,
    title: 'Finding Mental Rest',
    subtitle: 'Understanding and calming the overactive mind',
    duration: '34 minutes',
    description: 'Begin your journey to mental clarity by understanding why your mind overthinks and how to find rest.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening,

      // Therapeutic Work - Session 1
      { type: 'suggestion', text: '{name}, you have been blessed with a powerful, active mind. This is a gift from your Heavenly Father. But like any gift, it must be used wisely.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'An overactive mind often comes from a desire to be prepared for everything, to solve every problem, to control every outcome. These are not bad intentions, but they can lead to exhaustion.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'The truth is, {name}, that not every thought needs to be thought. Not every problem needs to be solved right now. Not every outcome is within your control.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'Consider the words of the Savior: Which of you by taking thought can add one cubit unto his stature? Overthinking does not add to your life, {name}. It subtracts from your peace.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Your mind is like a powerful computer. But even computers need to shut down sometimes. They need rest to function optimally. Your mind is the same.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'In this session, you are giving your mind permission to rest. Not forever, but for now. The thinking can wait. The analyzing can pause. Simply be.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Notice how peaceful this feels, {name}. Your mind is not racing. It is resting. This state is available to you anytime you choose to access it.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'From now on, you will recognize when overthinking begins. It will feel like mental spinning, like a hamster wheel going nowhere. And when you notice it, you will have tools to stop it.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'The first tool is simple awareness. Just noticing that you are overthinking often breaks the cycle. I am overthinking right now. That recognition creates space for choice.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'In the coming sessions, {name}, you will learn more tools. But for now, simply rest in this peace. Let your mind absorb the truth that it is allowed to be still.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 2: The Power of Now
  {
    sessionNumber: 2,
    title: 'Present Moment Awareness',
    subtitle: 'Anchoring in the now to stop mental spirals',
    duration: '35 minutes',
    description: 'Learn to anchor yourself in the present moment, where overthinking cannot survive.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening,

      // Therapeutic Work - Session 2
      { type: 'suggestion', text: '{name}, overthinking almost always involves the past or the future. Replaying what happened. Worrying about what might happen. But rarely about what is happening right now.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'The present moment is your sanctuary. In this moment, right now, you are safe. You are breathing. You are at peace. There is nothing to figure out.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Overthinking cannot survive in the present moment. It needs the fuel of past or future to keep spinning. Bring your attention to now, and the spinning stops.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Let us practice, {name}. Focus on your body right now. Feel the surface beneath you. Feel the air on your skin. Feel your breath moving in and out.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'This is the present moment. Nothing else exists. The past is memory. The future is imagination. Only now is real. And now is peaceful.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: '{name}, the Lord counseled: Sufficient unto the day is the evil thereof. You need only deal with today. Right now, this moment. That is all.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Whenever you notice your mind racing ahead or spiraling back, you will use this grounding technique. Feel your body. Notice your breath. Come back to now.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Another powerful technique is naming five things you can see. Four things you can hear. Three things you can feel. This instantly brings you into the present.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Let us practice. Imagine you are caught in overthinking. Your mind is spinning about tomorrow\'s challenges. You notice and say: Come back to now.' },
      { type: 'pause', duration: 3000 },
      { type: 'suggestion', text: 'You feel your feet on the ground. You notice the sounds around you. You take a breath. The spinning stops, {name}. You are back in the present, where peace lives.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'This skill becomes stronger with practice. Each time you use it, it becomes more automatic, more powerful. You are training your mind to stay present.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 3: Releasing the Need for Control
  {
    sessionNumber: 3,
    title: 'Letting Go of Control',
    subtitle: 'Finding peace by releasing what cannot be controlled',
    duration: '36 minutes',
    description: 'Learn to release the need to control everything through analysis and mental effort.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening,

      // Therapeutic Work - Session 3
      { type: 'suggestion', text: '{name}, much of overthinking comes from a desire to control outcomes through thought. If I just think about it enough, I can prevent problems. I can prepare for everything.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'But this is an illusion. Thinking about every possibility does not give you control. It only gives you exhaustion and anxiety.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'The scriptures teach: Trust in the Lord with all thine heart; and lean not unto thine own understanding. Your understanding, {name}, is limited. God\'s is infinite.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'What would it feel like to truly let go? To trust that God sees what you cannot see, knows what you cannot know, and is working all things for your good?' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Imagine now, {name}, that you are holding a heavy bag. This bag contains all the things you try to control through overthinking. All the possible outcomes. All the potential problems.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Now, visualize yourself setting this bag down. Not forever, but for now. Feel the relief as the weight leaves your shoulders.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'You do not need to carry this bag, {name}. God is willing to carry it for you. He asks only that you trust Him.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'Remember His invitation: Cast thy burden upon the Lord, and he shall sustain thee. He is strong enough to carry what you cannot.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'From now on, when you catch yourself overthinking in an attempt to control, you will pause and ask: Can I actually control this with my thoughts? If not, you will release it.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'You will do what you can do and leave the rest to God. This is not passive. This is wise. This is faith in action.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Your mind is learning that it does not need to solve everything, {name}. It can solve what is solvable, prepare for what can be prepared for, and trust God with the rest.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 4: Creating Mental Boundaries
  {
    sessionNumber: 4,
    title: 'Healthy Mental Boundaries',
    subtitle: 'Containing thoughts to their proper time and place',
    duration: '35 minutes',
    description: 'Learn to create healthy boundaries around your thinking, giving thoughts their proper time and place.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening,

      // Therapeutic Work - Session 4
      { type: 'suggestion', text: '{name}, a key to overcoming overthinking is creating boundaries. Not every thought deserves your attention at every moment. You get to decide when to think about what.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Imagine your mind has a reception room. Thoughts arrive at the door like visitors. Currently, you may be letting them all in at once, creating chaos. But you can change this.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'From now on, {name}, you will be the gatekeeper of your own mind. When a thought arrives, you will decide: Is this the right time for this thought? Does it belong now?' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'If the thought is helpful and timely, welcome it in. If it is intrusive or belongs to another time, you will say: Not now. I will think about this at an appropriate time.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'A powerful technique is worry time, {name}. You designate a specific time, perhaps fifteen minutes in the evening, when you will address your concerns. Outside that time, worries must wait.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'When a worry arises at 2 PM, you say: I will think about this during my worry time at 7 PM. Then you let it go. Often, by 7 PM, the worry has dissolved on its own.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'The scripture teaches: To every thing there is a season, and a time to every purpose under the heaven. There is a time to think, and a time to rest. Both have their place.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Let us practice, {name}. Imagine you are trying to fall asleep, but thoughts about tomorrow keep arriving. You say firmly but gently: Not now. Sleep time. Tomorrow\'s thoughts can wait.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'The thoughts quiet. They respect your boundary because you enforce it. You drift into peaceful sleep, knowing that tomorrow\'s concerns will be addressed tomorrow.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'These boundaries are being established in your subconscious now. You are taking back control of your mental space. Thoughts serve you, not the other way around.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 5: Cultivating Mental Stillness
  {
    sessionNumber: 5,
    title: 'The Gift of Stillness',
    subtitle: 'Learning to simply be without thinking',
    duration: '36 minutes',
    description: 'Develop the ability to experience mental stillness and the peace that comes with it.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening,

      // Therapeutic Work - Session 5
      { type: 'suggestion', text: '{name}, your mind has been taught that it must always be doing something. Analyzing, planning, remembering, predicting. But there is another way to be.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Simply being. Existing without agenda. Experiencing without commentary. This is mental stillness, and it is profoundly restful.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: 'The Lord invites: Be still, and know that I am God. In stillness, {name}, you come to know God in ways that thinking cannot achieve.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'Right now, in this peaceful state, you are experiencing stillness. Your mind is quiet. Thoughts may float by, but you are not chasing them. You are simply being.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Notice how peaceful this feels. There is nothing to figure out. Nothing to solve. Nothing to plan. Just this moment, this breath, this peace.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'This state is always available to you, {name}. It is not earned or achieved. It simply is. You access it by choosing to stop the mental doing and simply be.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Even a few minutes of mental stillness each day can transform your life. It is like rebooting a computer. Everything runs better afterward.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'You might find this stillness in prayer, {name}. Not the prayer of many words, but the prayer of quiet communion. Simply being with your Father in Heaven.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'You might find it in nature, in the temple, in a quiet moment before sleep. Wherever you find it, embrace it. Cultivate it. Let it heal your overworked mind.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'From now on, you will create space for stillness in your day. Even five minutes. You will sit, breathe, and simply be. Your mind will thank you with increased clarity and peace.' },
      { type: 'pause', duration: 5000 },
      { type: 'scripture', text: 'As the Savior said: Come unto me, all ye that labour and are heavy laden, and I will give you rest. Mental stillness, {name}, is part of that promised rest.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'You are learning the gift of stillness. It is becoming part of who you are.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  },

  // Session 6: Living with Mental Clarity
  {
    sessionNumber: 6,
    title: 'A Clear Mind',
    subtitle: 'Integrating clarity and peace into daily life',
    duration: '35 minutes',
    description: 'Celebrate your transformation and cement mental clarity as your new way of being.',
    segments: [
      ...commonInduction.opening,
      ...commonInduction.progressiveRelaxation,
      ...commonInduction.spiritualGrounding,
      ...commonDeepening,

      // Therapeutic Work - Session 6
      { type: 'suggestion', text: '{name}, you have journeyed through these sessions and transformed your relationship with your mind. You are no longer a victim of overthinking. You are its master.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'You now understand that your active mind is a gift to be directed wisely. You know how to rest it when needed.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'You have learned to anchor in the present moment, where overthinking cannot survive. You have released the illusion of control and found peace in trust.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'You have created healthy mental boundaries, giving thoughts their proper time and place. And you have cultivated the gift of stillness.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Let us now see your future, {name}. A future where you think with purpose and peace.' },
      { type: 'pause', duration: 3000 },
      { type: 'suggestion', text: 'See yourself waking in the morning with a clear mind. Instead of racing thoughts, there is calm. You set intentions for the day with focused thinking, then release.' },
      { type: 'pause', duration: 5000 },
      { type: 'suggestion', text: 'Throughout your day, when decisions need to be made, your mind is sharp and clear. You think when thinking serves you, then you stop when the thinking is done.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'When worries arise, {name}, you acknowledge them. Can I act on this now? If yes, you act. If no, you schedule it for later and return to the present moment.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'At the end of your day, you set down the thoughts of the day like setting down a bag. They will wait for tomorrow. Now is time for rest and renewal.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'You find moments of stillness throughout your day. A quiet prayer. A mindful breath. A moment of simply being. These moments restore your mental energy.' },
      { type: 'pause', duration: 4000 },
      { type: 'scripture', text: '{name}, the prophet Isaiah recorded: Thou wilt keep him in perfect peace, whose mind is stayed on thee. Your mind is now stayed on God, and perfect peace is your reward.', pauseAfter: 5000 },
      { type: 'suggestion', text: 'This is your new life, {name}. A life of mental clarity and peace. You think when you choose to think. You rest when you choose to rest. Your mind serves you, as it was meant to.' },
      { type: 'pause', duration: 4000 },
      { type: 'suggestion', text: 'Go forth with a clear mind and a peaceful heart. The tools you have learned are yours forever. You are free from the tyranny of overthinking.' },
      { type: 'pause', duration: 5000 },

      ...commonEmergence
    ]
  }
]

export default overthinkingSessions
