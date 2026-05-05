export const genericQuizzes = {

attachment: {
  id: 'attachment', color: '#5a9ef5',
  icon: '🔗', title: 'What Is My Attachment Style?',
  descHtml: `Developed from Ainsworth's Strange Situation studies and Bartholomew & Horowitz's four-category model, this quiz identifies your dominant attachment pattern in close relationships.<br><br><strong>16 questions · ~3 minutes</strong>`,
  type: 'multiaxis',
  categories: { S: 'Secure', AX: 'Anxious', AV: 'Avoidant', DA: 'Disorganized' },
  questions: [
    { text: "When someone you care about becomes distant or cold, your first reaction is:",
      sub: "Notice the gut response before rational thought.",
      answers: [
        { text: "Give them space — they're probably dealing with something", cat: 'S' },
        { text: "Immediately worry I did something wrong and reach out", cat: 'AX' },
        { text: "Match their energy and pull back — distance is comfortable", cat: 'AV' },
        { text: "Want to reach out, but something freezes me at the same time", cat: 'DA' }
      ]
    },
    { text: "How comfortable are you letting someone truly know who you are?",
      sub: "",
      answers: [
        { text: "I open up gradually once I feel basic trust", cat: 'S' },
        { text: "I tend to share a lot — sometimes too much, too fast", cat: 'AX' },
        { text: "I keep most of myself private, even with close people", cat: 'AV' },
        { text: "I want to be known, but something stops me just before I get there", cat: 'DA' }
      ]
    },
    { text: "When someone expresses deep love or affection for you, you feel:",
      sub: "",
      answers: [
        { text: "Warmth and closeness — I let it in", cat: 'S' },
        { text: "Relief, but I wonder how long it will last", cat: 'AX' },
        { text: "A subtle urge to pull back — too much closeness is overwhelming", cat: 'AV' },
        { text: "Simultaneously drawn in and scared — I don't know which way to turn", cat: 'DA' }
      ]
    },
    { text: "After a conflict with someone close, your first instinct is:",
      sub: "",
      answers: [
        { text: "Resolve it calmly once emotions settle", cat: 'S' },
        { text: "Make up immediately — the disconnection is unbearable", cat: 'AX' },
        { text: "Withdraw and process alone, sometimes for a long time", cat: 'AV' },
        { text: "Both want repair and push the person away simultaneously", cat: 'DA' }
      ]
    },
    { text: "How do you feel about needing other people?",
      sub: "",
      answers: [
        { text: "Natural — asking for support is human, not weakness", cat: 'S' },
        { text: "I need a lot of reassurance and worry I'm too much for people", cat: 'AX' },
        { text: "I prefer to handle things myself — I dislike being dependent", cat: 'AV' },
        { text: "I want support but don't trust it will actually be there", cat: 'DA' }
      ]
    },
    { text: "When a close relationship ends, how do you cope?",
      sub: "",
      answers: [
        { text: "I grieve genuinely, then slowly move forward", cat: 'S' },
        { text: "I struggle significantly — letting go feels almost impossible", cat: 'AX' },
        { text: "I detach and move on faster than people seem to expect", cat: 'AV' },
        { text: "I swing between intense grief and hollow numbness", cat: 'DA' }
      ]
    },
    { text: "How much independence do you need in an intimate relationship?",
      sub: "",
      answers: [
        { text: "A balance — closeness matters and so does my own life", cat: 'S' },
        { text: "I tend to merge — the relationship becomes my world", cat: 'AX' },
        { text: "A lot — feeling too close makes me feel trapped", cat: 'AV' },
        { text: "I honestly don't know — my needs seem to contradict each other", cat: 'DA' }
      ]
    },
    { text: "Do you believe the people you love will stick around?",
      sub: "",
      answers: [
        { text: "Generally yes, unless something significant changes", cat: 'S' },
        { text: "I fear they'll leave even when nothing is wrong", cat: 'AX' },
        { text: "People tend to leave, so I try not to get too attached", cat: 'AV' },
        { text: "I genuinely don't know — security never quite feels real", cat: 'DA' }
      ]
    },
    { text: "When you're in emotional pain, what do you do?",
      sub: "",
      answers: [
        { text: "Feel it, process it, and usually come through the other side", cat: 'S' },
        { text: "Need to talk it through with someone — I can't sit with it alone", cat: 'AX' },
        { text: "Shut it down and push through — I don't indulge emotions", cat: 'AV' },
        { text: "Don't know how to handle it — I either explode or disappear", cat: 'DA' }
      ]
    },
    { text: "What do you fear most in a relationship?",
      sub: "The quiet fear that lives in the background.",
      answers: [
        { text: "That we'll naturally grow apart over time", cat: 'S' },
        { text: "That they'll stop loving me or leave", cat: 'AX' },
        { text: "That I'll lose my freedom or feel emotionally smothered", cat: 'AV' },
        { text: "Both — abandonment and engulfment feel equally terrifying", cat: 'DA' }
      ]
    },
    { text: "At the start of a new relationship, you typically:",
      sub: "",
      answers: [
        { text: "Enjoy the discovery and let things unfold naturally", cat: 'S' },
        { text: "Get very attached very fast", cat: 'AX' },
        { text: "Keep emotional distance until I'm sure it's safe", cat: 'AV' },
        { text: "Go in intensely, then suddenly need to pull back for no clear reason", cat: 'DA' }
      ]
    },
    { text: "When someone close hurts you, you usually:",
      sub: "",
      answers: [
        { text: "Tell them calmly how you feel and work toward repair", cat: 'S' },
        { text: "Express it immediately and need quick reassurance", cat: 'AX' },
        { text: "Go quiet and handle it internally — you rarely bring it up", cat: 'AV' },
        { text: "Feel confused about what you need and often make things worse", cat: 'DA' }
      ]
    },
    { text: "Being alone feels:",
      sub: "",
      answers: [
        { text: "Healthy and restorative — a natural part of life", cat: 'S' },
        { text: "Tolerable, but I actively prefer being around people", cat: 'AX' },
        { text: "Preferable — alone is peaceful and predictable", cat: 'AV' },
        { text: "Both relief and haunting loneliness at the same time", cat: 'DA' }
      ]
    },
    { text: "Your sense of self-worth:",
      sub: "",
      answers: [
        { text: "Is generally stable regardless of what others think", cat: 'S' },
        { text: "Fluctuates based on how people treat or respond to me", cat: 'AX' },
        { text: "Appears confident, but there's a private emptiness underneath", cat: 'AV' },
        { text: "Shifts dramatically and unpredictably — I never quite know where I stand", cat: 'DA' }
      ]
    },
    { text: "When someone tells you they need more from you emotionally:",
      sub: "",
      answers: [
        { text: "I try to understand what they need and honestly assess if I can give it", cat: 'S' },
        { text: "I feel immediately guilty and try to give more, even too much", cat: 'AX' },
        { text: "I feel criticized and tend to pull away", cat: 'AV' },
        { text: "I panic — I want to give more but feel paralyzed and don't know how", cat: 'DA' }
      ]
    },
    { text: "Safety in a relationship feels like:",
      sub: "Your truest, most honest answer.",
      answers: [
        { text: "Warmth and stability — I can be myself without fear", cat: 'S' },
        { text: "Fragile — something that could disappear at any moment", cat: 'AX' },
        { text: "Predictable distance — I feel safest when no one is too close", cat: 'AV' },
        { text: "Something I'm not sure I've truly felt in a relationship", cat: 'DA' }
      ]
    }
  ],
  getResult(scores) {
    const cats = ['S','AX','AV','DA'];
    const sorted = [...cats].sort((a,b) => scores[b] - scores[a]);
    const primary = sorted[0], secondary = sorted[1];
    const profiles = {
      S: {
        icon: '🌳', title: 'Secure Attachment',
        subtitle: 'You have a stable, trusting base from which you relate to others.',
        traits: [
          { icon: '🤝', text: '<strong>Comfortable with intimacy and independence</strong> — you can be close without losing yourself, and apart without panic.' },
          { icon: '🛡️', text: '<strong>Internally anchored</strong> — your self-worth doesn\'t depend on others\' moods, distance, or approval.' },
          { icon: '🗣️', text: '<strong>Communicative under stress</strong> — you express needs directly rather than shutting down or clinging.' },
          { icon: '💡', text: '<strong>Secure attachment can be earned</strong> — it comes from a safe childhood or from deliberate healing work. Either counts.' }
        ],
        extra: 'Secure attachment is the goal, not the starting point for everyone. If you\'re here, you\'ve likely done real work.'
      },
      AX: {
        icon: '🌀', title: 'Anxious Attachment',
        subtitle: 'You crave deep closeness but fear it will be taken away.',
        traits: [
          { icon: '📡', text: '<strong>Hypervigilant for signs of withdrawal</strong> — you read emotional temperatures constantly and react strongly to perceived distance.' },
          { icon: '💔', text: '<strong>Self-worth tied to others\' responses</strong> — how someone treats you shifts how you feel about yourself, sometimes within minutes.' },
          { icon: '🔁', text: '<strong>Protest behaviors under threat</strong> — you may escalate, cling, or test the relationship to get reassurance that it\'s still safe.' },
          { icon: '💡', text: '<strong>Root: inconsistent early caregiving</strong> — your nervous system learned love is unpredictable, so it stays on alert. This pattern can be rewired.' }
        ],
        extra: 'Based on Bowlby & Ainsworth. Anxious attachment is the most common pattern — you\'re not alone in this.'
      },
      AV: {
        icon: '🧊', title: 'Dismissive-Avoidant Attachment',
        subtitle: 'You value self-sufficiency and have learned to need very little from others.',
        traits: [
          { icon: '🧱', text: '<strong>Self-reliance as armor</strong> — you\'ve built a functional life that doesn\'t require much from others. It protects you, but also isolates.' },
          { icon: '🔕', text: '<strong>Emotional shutdown under pressure</strong> — you go cold or quiet. It\'s not indifference — it\'s an old defense mechanism.' },
          { icon: '🚪', text: '<strong>Closeness triggers discomfort</strong> — intimacy can feel like a threat to your autonomy or a loss of control.' },
          { icon: '💡', text: '<strong>Root: emotional unavailability</strong> — you learned that needs went unmet, so stopping needing became the only rational response. The need is still there.' }
        ],
        extra: 'Avoidant attachment often looks like strength from the outside. Internally it\'s a very old loneliness.'
      },
      DA: {
        icon: '⚡', title: 'Disorganized (Fearful-Avoidant) Attachment',
        subtitle: 'You want closeness and are afraid of it at the same time.',
        traits: [
          { icon: '⚡', text: '<strong>Approach-avoidance conflict</strong> — the person who could comfort you also feels threatening, so you get stuck between reaching and withdrawing.' },
          { icon: '🌊', text: '<strong>Emotional flooding</strong> — when triggered, your nervous system struggles to regulate. Reactions can feel disproportionate even to you.' },
          { icon: '🔀', text: '<strong>Confusing to others</strong> — your behavior may seem contradictory because the internal conflict is real and constant.' },
          { icon: '💡', text: '<strong>Root: frightening or chaotic caregiving</strong> — often linked to early trauma or abuse. This is the hardest pattern, and the most responsive to trauma-informed therapy.' }
        ],
        extra: 'Disorganized attachment is less talked about but very real. Healing is possible — EMDR and somatic therapy show strong results.'
      }
    };
    const p = profiles[primary];
    const sLabel = {S:'Secure',AX:'Anxious',AV:'Avoidant',DA:'Disorganized'}[secondary];
    return {
      icon: p.icon, title: p.title, subtitle: p.subtitle, traits: p.traits,
      meterPct: undefined,
      extra: `<strong>Primary style:</strong> ${p.title.split(' ')[0]} · <strong>Secondary tendency:</strong> ${sLabel}<br><br>${p.extra}<br><br>Based on: Ainsworth (1978), Hazan & Shaver (1987), Bartholomew & Horowitz (1991).`
    };
  }
},

wound: {
  id: 'wound', color: '#f07e5a',
  icon: '🕳️', title: 'What Is My Core Wound?',
  descHtml: `Based on Lise Bourbeau's five wounds theory, this quiz identifies the earliest emotional wound shaping how you relate to yourself and others. There are five: rejection, abandonment, humiliation, betrayal, and injustice.<br><br><strong>15 questions · ~2 minutes</strong>`,
  type: 'multiaxis',
  categories: { RE: 'Rejection', AB: 'Abandonment', HU: 'Humiliation', BE: 'Betrayal', IN: 'Injustice' },
  questions: [
    { text: "Which fear feels most like a quiet hum underneath your life?",
      sub: "",
      answers: [
        { text: "That I am fundamentally unlovable or don't truly belong", cat: 'RE' },
        { text: "That I will end up completely and permanently alone", cat: 'AB' },
        { text: "That I am a burden, an embarrassment, or less than others", cat: 'HU' },
        { text: "That people will use, deceive, or eventually betray me", cat: 'BE' },
        { text: "That no matter how hard I try, I'll never be good enough", cat: 'IN' }
      ]
    },
    { text: "What do you find yourself doing to avoid deep emotional pain?",
      sub: "",
      answers: [
        { text: "Withdrawing or disappearing before others can reject me first", cat: 'RE' },
        { text: "Attaching quickly and doing anything to keep people close", cat: 'AB' },
        { text: "Making myself small, agreeable, invisible", cat: 'HU' },
        { text: "Taking control so no one can hold power over me", cat: 'BE' },
        { text: "Working to be perfect so no one can find fault with me", cat: 'IN' }
      ]
    },
    { text: "Which childhood feeling resonates most deeply?",
      sub: "",
      answers: [
        { text: "Feeling invisible, unwanted, or like I didn't matter", cat: 'RE' },
        { text: "Feeling alone, unsupported, like I had to manage everything myself", cat: 'AB' },
        { text: "Feeling ashamed, looked down on, or mocked by others", cat: 'HU' },
        { text: "Feeling lied to, manipulated, or that I couldn't rely on anyone", cat: 'BE' },
        { text: "Feeling I was never good enough, no matter what I did", cat: 'IN' }
      ]
    },
    { text: "When you make a mistake in front of others, your first feeling is:",
      sub: "",
      answers: [
        { text: "That they now see I'm not really worth keeping around", cat: 'RE' },
        { text: "That they might pull away or distance themselves from me", cat: 'AB' },
        { text: "Deep shame — I want to disappear", cat: 'HU' },
        { text: "Anger at myself for giving them something to use against me", cat: 'BE' },
        { text: "Intense self-criticism — I should have done better", cat: 'IN' }
      ]
    },
    { text: "Which inner voice is most familiar to you?",
      sub: "",
      answers: [
        { text: "\"Nobody truly wants me here\"", cat: 'RE' },
        { text: "\"I'll always be alone in the end\"", cat: 'AB' },
        { text: "\"I'm a burden or an embarrassment\"", cat: 'HU' },
        { text: "\"I can't trust anyone — including myself\"", cat: 'BE' },
        { text: "\"I'll never be enough no matter what I do\"", cat: 'IN' }
      ]
    },
    { text: "When someone compliments you publicly, you feel:",
      sub: "",
      answers: [
        { text: "Surprised — I didn't expect to be noticed in a good way", cat: 'RE' },
        { text: "Touched, but worried they'll stop feeling that way", cat: 'AB' },
        { text: "Deeply uncomfortable — positive attention feels dangerous", cat: 'HU' },
        { text: "Suspicious — wondering what they really want", cat: 'BE' },
        { text: "Like it doesn't count — you know all the ways you fell short", cat: 'IN' }
      ]
    },
    { text: "What does love have to feel like before you believe it's real?",
      sub: "",
      answers: [
        { text: "Consistent — I need to feel truly wanted, not just tolerated", cat: 'RE' },
        { text: "Present — I need physical and emotional closeness, often", cat: 'AB' },
        { text: "Respectful — I need to be treated with dignity, not looked down on", cat: 'HU' },
        { text: "Honest — I need full transparency and no hidden agendas", cat: 'BE' },
        { text: "Earned — love feels real when I've done enough to deserve it", cat: 'IN' }
      ]
    },
    { text: "When someone leaves your life, what do you mostly feel?",
      sub: "",
      answers: [
        { text: "Confirmed — part of you always knew you weren't worth staying for", cat: 'RE' },
        { text: "Devastated — loss activates a very deep, disproportionate pain", cat: 'AB' },
        { text: "Shame — like their leaving reflects something wrong with you", cat: 'HU' },
        { text: "Betrayed — even if the leaving was mutual or reasonable", cat: 'BE' },
        { text: "Resentful — like you gave more than you got", cat: 'IN' }
      ]
    },
    { text: "In relationships, what role do you tend to fall into?",
      sub: "",
      answers: [
        { text: "The one who pulls away first, before they can", cat: 'RE' },
        { text: "The one who holds on too tight or can't let go", cat: 'AB' },
        { text: "The helper — making yourself useful to earn your place", cat: 'HU' },
        { text: "The one in charge — needing control to feel safe", cat: 'BE' },
        { text: "The over-achiever — earning love through performance", cat: 'IN' }
      ]
    },
    { text: "What does your inner critic say most often?",
      sub: "",
      answers: [
        { text: "\"You don't belong here / you're not wanted\"", cat: 'RE' },
        { text: "\"You'll always end up alone — no one really stays\"", cat: 'AB' },
        { text: "\"You're too much / you're an embarrassment\"", cat: 'HU' },
        { text: "\"You're naive / you can't trust your own judgment\"", cat: 'BE' },
        { text: "\"You're not good enough / you should have done better\"", cat: 'IN' }
      ]
    },
    { text: "When someone sets a limit with you (says no, pulls back), you feel:",
      sub: "",
      answers: [
        { text: "Like confirmation that you're too much or not worth the effort", cat: 'RE' },
        { text: "Panic — even a small withdrawal feels like full abandonment", cat: 'AB' },
        { text: "Embarrassed — like you asked for too much", cat: 'HU' },
        { text: "Suspicious — wondering what their real motive is", cat: 'BE' },
        { text: "Frustrated — like it's unfair given everything you've put in", cat: 'IN' }
      ]
    },
    { text: "What do you most crave in a close relationship?",
      sub: "",
      answers: [
        { text: "To feel truly wanted and chosen — not just tolerated", cat: 'RE' },
        { text: "Constant closeness and reassurance that you won't be left", cat: 'AB' },
        { text: "To be treated with dignity and never looked down on", cat: 'HU' },
        { text: "Complete honesty and reliability — no surprises", cat: 'BE' },
        { text: "Recognition for your effort and fairness in return", cat: 'IN' }
      ]
    },
    { text: "What tends to trigger your strongest emotional reactions?",
      sub: "",
      answers: [
        { text: "Being ignored, dismissed, or made to feel invisible", cat: 'RE' },
        { text: "People being unavailable, canceling, or pulling away", cat: 'AB' },
        { text: "Being judged, mocked, or criticized in any form", cat: 'HU' },
        { text: "Being lied to, deceived, or having trust broken", cat: 'BE' },
        { text: "Being treated unfairly or having effort go unacknowledged", cat: 'IN' }
      ]
    },
    { text: "Your relationship to your own body tends to feel:",
      sub: "",
      answers: [
        { text: "Like something that sets me apart or makes me less desirable", cat: 'RE' },
        { text: "Like something I need to maintain so people won't leave", cat: 'AB' },
        { text: "Like a source of shame I try to hide", cat: 'HU' },
        { text: "Like something I don't fully trust or feel safe in", cat: 'BE' },
        { text: "Like something I'm never quite satisfied with", cat: 'IN' }
      ]
    },
    { text: "If you could give your inner child one message, it would be:",
      sub: "Let instinct answer, not logic.",
      answers: [
        { text: "\"You are wanted. You belong here. You are enough.\"", cat: 'RE' },
        { text: "\"You are not alone. Someone will stay. You don't have to manage everything yourself.\"", cat: 'AB' },
        { text: "\"You are not a burden. Your worth has nothing to do with what you do.\"", cat: 'HU' },
        { text: "\"You can trust yourself. Not everyone will hurt you. Safety is real.\"", cat: 'BE' },
        { text: "\"You don't have to earn your place. You are enough exactly as you are.\"", cat: 'IN' }
      ]
    }
  ],
  getResult(scores) {
    const cats = ['RE','AB','HU','BE','IN'];
    const sorted = [...cats].sort((a,b) => scores[b] - scores[a]);
    const primary = sorted[0];
    const profiles = {
      RE: {
        icon: '🌫️', title: 'The Wound of Rejection',
        subtitle: 'Your deepest fear is that you are fundamentally unworthy of love or don\'t belong.',
        traits: [
          { icon: '👻', text: '<strong>You disappear before they can reject you</strong> — withdrawing first is an unconscious self-protection strategy.' },
          { icon: '🪞', text: '<strong>Invisibility as a mask</strong> — staying small, unseen, or independent protects you from the pain of being turned away.' },
          { icon: '💎', text: '<strong>What you need to hear and believe</strong>: you don\'t have to earn your place. You existed before anyone approved of you.' },
          { icon: '🌱', text: '<strong>The path forward</strong> — learning to tolerate being seen. Choosing presence over disappearance, even when it\'s scary.' }
        ],
        extra: 'Rejection wound often produces extreme self-sufficiency, isolation, and a fear of taking up space. The antidote is belonging — real, chosen, repeated belonging.'
      },
      AB: {
        icon: '🕊️', title: 'The Wound of Abandonment',
        subtitle: 'Your deepest fear is ending up completely and permanently alone.',
        traits: [
          { icon: '🧲', text: '<strong>You cling to connection</strong> — the fear of being left drives you to over-attach, over-give, and tolerate situations that don\'t serve you.' },
          { icon: '😰', text: '<strong>Any withdrawal feels catastrophic</strong> — a late reply or canceled plan can activate a deep, disproportionate sense of being left.' },
          { icon: '💎', text: '<strong>What you need to hear and believe</strong>: you are not a burden. People who stay, stay because they want to — not because you performed enough.' },
          { icon: '🌱', text: '<strong>The path forward</strong> — building a relationship with solitude. Learning that aloneness is not the same as abandonment.' }
        ],
        extra: 'Abandonment wound is often confused with anxious attachment — they overlap significantly. The root is usually an emotionally or physically absent caregiver.'
      },
      HU: {
        icon: '🎭', title: 'The Wound of Humiliation',
        subtitle: 'Your deepest fear is being seen as a burden, an embarrassment, or less than others.',
        traits: [
          { icon: '🤲', text: '<strong>You make yourself useful to earn your place</strong> — becoming indispensable protects you from being rejected for who you simply are.' },
          { icon: '🔇', text: '<strong>You silence and shrink yourself</strong> — opinions, needs, and true feelings get suppressed to avoid becoming a target.' },
          { icon: '💎', text: '<strong>What you need to hear and believe</strong>: you are not a burden. Your existence doesn\'t require justification.' },
          { icon: '🌱', text: '<strong>The path forward</strong> — reclaiming the right to be visible. Speaking when you\'d normally go quiet. Taking up space on purpose.' }
        ],
        extra: 'Humiliation wound is often rooted in shame-based parenting, public embarrassment, or being mocked for emotional expression in childhood.'
      },
      BE: {
        icon: '🗡️', title: 'The Wound of Betrayal',
        subtitle: 'Your deepest fear is being deceived, used, or unable to trust anyone — including yourself.',
        traits: [
          { icon: '🏰', text: '<strong>Control as protection</strong> — needing to be in charge, to predict, to know what\'s happening before it happens.' },
          { icon: '👁️', text: '<strong>Hypervigilance for dishonesty</strong> — you read subtext, watch for inconsistency, and find it hard to take people at face value.' },
          { icon: '💎', text: '<strong>What you need to hear and believe</strong>: not everyone will betray you. Your trust was broken by specific people, not by all people.' },
          { icon: '🌱', text: '<strong>The path forward</strong> — choosing vulnerability in small, evidence-based steps. Letting trustworthy people be trustworthy.' }
        ],
        extra: 'Betrayal wound often produces strength and competence on the outside. Internally, it\'s an exhausting vigilance that makes rest feel unsafe.'
      },
      IN: {
        icon: '⚖️', title: 'The Wound of Injustice',
        subtitle: 'Your deepest fear is that you\'ll never be good enough, no matter how hard you try.',
        traits: [
          { icon: '🏆', text: '<strong>Perfectionism as self-defense</strong> — if you\'re flawless, no one can criticize you. The bar keeps moving because the wound is never satisfied.' },
          { icon: '🔥', text: '<strong>Chronic self-criticism</strong> — you hold yourself to standards no one could meet and feel genuine shame when you fall short.' },
          { icon: '💎', text: '<strong>What you need to hear and believe</strong>: you don\'t have to earn love through performance. You are allowed to be average and still be worthy.' },
          { icon: '🌱', text: '<strong>The path forward</strong> — practicing deliberate imperfection. Letting things be good enough. Separating achievement from self-worth.' }
        ],
        extra: 'Injustice wound often comes from cold, demanding, or emotionally rigid caregiving — where love was conditional on performance or behavior.'
      }
    };
    const p = profiles[primary];
    return {
      icon: p.icon, title: p.title, subtitle: p.subtitle, traits: p.traits,
      meterPct: undefined,
      extra: `<strong>Primary wound:</strong> ${p.title} · <strong>Secondary pattern:</strong> ${profiles[sorted[1]].title}<br><br>${p.extra}<br><br>Based on: Lise Bourbeau, <em>The 5 Wounds That Prevent You From Being Yourself</em> (2000).`
    };
  }
},

healing: {
  id: 'healing', color: '#56cfb2',
  icon: '🌱', title: 'Am I Healing or Surviving?',
  descHtml: `There's a difference between managing pain and actually processing it. Based on trauma processing research (van der Kolk, Peter Levine) and post-traumatic growth theory, this quiz reveals whether you're genuinely healing or still running on survival mode.<br><br><strong>12 questions · ~2 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "When a difficult memory surfaces unexpectedly, what do you do?",
      sub: "",
      answers: [
        { text: "Let it come, feel it briefly, and it passes without consuming me", score: 3 },
        { text: "Acknowledge it and gently redirect my attention", score: 2 },
        { text: "Feel flooded, but it eventually fades on its own", score: 1 },
        { text: "Immediately suppress it or distract myself from it", score: 0 }
      ]
    },
    { text: "How do you explain your past pain to yourself?",
      sub: "",
      answers: [
        { text: "It happened, it shaped me, and I've integrated it into my story", score: 3 },
        { text: "I understand most of it and I'm still making sense of parts", score: 2 },
        { text: "I can explain it logically but it still feels unresolved emotionally", score: 1 },
        { text: "I avoid thinking about it, or I'm completely consumed by it", score: 0 }
      ]
    },
    { text: "Do you numb with food, screens, substances, busyness, or fantasy?",
      sub: "Be honest — this is one of the clearest indicators.",
      answers: [
        { text: "Rarely — I can sit with discomfort without needing to escape it", score: 3 },
        { text: "Sometimes, but I notice when I'm doing it", score: 2 },
        { text: "Often — I use it to manage feelings I don't know how to process", score: 1 },
        { text: "Constantly — I don't know how to be with myself without distraction", score: 0 }
      ]
    },
    { text: "Can you identify what you're feeling emotionally, in real time?",
      sub: "",
      answers: [
        { text: "Usually yes — I have access to my emotional state", score: 3 },
        { text: "Sometimes — I can often name it, though there's a lag", score: 2 },
        { text: "Rarely — I feel 'bad' or 'fine' but can't get more specific", score: 1 },
        { text: "No — I'm often numb or flooded without knowing why", score: 0 }
      ]
    },
    { text: "Have you worked on the root of your pain, or are you managing its symptoms?",
      sub: "",
      answers: [
        { text: "I've done real root-level work — the source, not just its effects", score: 3 },
        { text: "Some root work, some symptom management — both happening", score: 2 },
        { text: "Mostly symptoms — I manage the day-to-day but haven't gone deeper", score: 1 },
        { text: "All symptoms — I don't even know what the root is", score: 0 }
      ]
    },
    { text: "Can you be triggered without being completely derailed?",
      sub: "",
      answers: [
        { text: "Yes — triggers happen but they don't take over my life for long", score: 3 },
        { text: "Usually — though big triggers can still knock me sideways for a while", score: 2 },
        { text: "Unpredictable — some days I handle it, some I completely don't", score: 1 },
        { text: "No — when triggered I lose hours, days, or my entire emotional state", score: 0 }
      ]
    },
    { text: "Do the coping strategies you use today serve your growth?",
      sub: "",
      answers: [
        { text: "Yes — I've replaced most escapes with tools that actually build something", score: 3 },
        { text: "Some yes, some still don't — I'm in transition", score: 2 },
        { text: "Mostly no — I cope to survive, not to grow", score: 1 },
        { text: "I don't have real coping tools — I just wait for the feeling to pass", score: 0 }
      ]
    },
    { text: "How do you relate to the person you were before the pain?",
      sub: "",
      answers: [
        { text: "With compassion — I understand them and I'm not ashamed of them", score: 3 },
        { text: "Mostly with care, though some versions of my past self are still hard to face", score: 2 },
        { text: "With discomfort — I don't like thinking about who I was", score: 1 },
        { text: "With shame or dissociation — that person feels foreign or embarrassing", score: 0 }
      ]
    },
    { text: "Are you able to have good days without feeling guilty or waiting for them to end?",
      sub: "",
      answers: [
        { text: "Yes — I've given myself permission to feel okay", score: 3 },
        { text: "Mostly, though sometimes joy brings a wave of anxiety", score: 2 },
        { text: "Good days feel fragile — I'm always waiting for the other shoe to drop", score: 1 },
        { text: "No — feeling okay feels dangerous, fake, or like a setup", score: 0 }
      ]
    },
    { text: "Can you share your pain with someone without needing them to fix it?",
      sub: "",
      answers: [
        { text: "Yes — I can share and just feel witnessed", score: 3 },
        { text: "Getting there — I'm less desperate for solutions than I used to be", score: 2 },
        { text: "Mostly I still want someone to make it stop", score: 1 },
        { text: "No — I either don't share it at all, or I expect people to fix what I feel", score: 0 }
      ]
    },
    { text: "When you grow or accomplish something meaningful, how do you relate to it?",
      sub: "",
      answers: [
        { text: "I allow myself to feel good about it — progress feels real", score: 3 },
        { text: "I appreciate it, though I minimize it sometimes", score: 2 },
        { text: "I feel it briefly, then the inner critic takes over", score: 1 },
        { text: "Achievements don't feel real or safe — I wait for them to be taken away", score: 0 }
      ]
    },
    { text: "When you imagine your future, does it feel possible and real?",
      sub: "This is often one of the last things healing restores.",
      answers: [
        { text: "Yes — I have a sense of a real future I'm actively building", score: 3 },
        { text: "Mostly — I'm cautiously, genuinely hopeful", score: 2 },
        { text: "Foggy — I can imagine a future but it doesn't quite feel real or mine", score: 1 },
        { text: "No — the past feels more real than any future ever could", score: 0 }
      ]
    }
  ],
  getResult(pct) {
    let icon, title, subtitle, traits;
    if (pct >= 80) {
      icon = '🌸'; title = 'You Are Genuinely Healing';
      subtitle = 'Your responses show real, root-level processing — not just coping.';
      traits = [
        { icon: '🧭', text: '<strong>You have perspective on your pain</strong> — it\'s part of your story, not the whole story.' },
        { icon: '🛡️', text: '<strong>Your nervous system has found ground</strong> — you can be triggered without being destabilized for days.' },
        { icon: '🌱', text: '<strong>You\'ve replaced escape with tools</strong> — your coping strategies are building something, not just maintaining.' },
        { icon: '🔭', text: '<strong>Your future feels real</strong> — one of the last things to come back in healing, and it\'s here.' }
      ];
    } else if (pct >= 60) {
      icon = '🌿'; title = 'Healing in Progress';
      subtitle = 'Real work has happened. You\'re not where you started.';
      traits = [
        { icon: '✅', text: '<strong>The healing is real</strong> — even when it doesn\'t feel that way. Progress isn\'t always visible from inside.' },
        { icon: '⚡', text: '<strong>Some triggers still land hard</strong> — that\'s normal and doesn\'t erase what you\'ve built.' },
        { icon: '🔍', text: '<strong>You have awareness</strong> — you can see patterns even when you can\'t fully stop them yet. That gap closes.' },
        { icon: '🧭', text: '<strong>Keep going</strong> — you\'re past the hardest part. What\'s left is refinement, not starting over.' }
      ];
    } else if (pct >= 40) {
      icon = '🌑'; title = 'Mostly Surviving';
      subtitle = 'You\'re managing, but not yet processing. There\'s a difference.';
      traits = [
        { icon: '🌊', text: '<strong>The pain is still active</strong> — it\'s influencing responses, relationships, and self-image in real ways.' },
        { icon: '🪞', text: '<strong>Some insight is present</strong> — you can see parts of the pattern, which is where change begins.' },
        { icon: '🤝', text: '<strong>Support would shift things here</strong> — this stage often needs more than self-reflection alone can offer.' },
        { icon: '💡', text: '<strong>Being in the middle is not failure</strong> — it\'s the honest truth of where most people are, most of the time.' }
      ];
    } else if (pct >= 20) {
      icon = '🔒'; title = 'Survival Mode';
      subtitle = 'Most energy is going toward getting through the day, not toward healing.';
      traits = [
        { icon: '😔', text: '<strong>The wound is still close to the surface</strong> — it shapes how you see yourself, others, and what\'s possible.' },
        { icon: '🧠', text: '<strong>Your nervous system hasn\'t felt safe enough yet</strong> — healing begins when safety is possible, even briefly.' },
        { icon: '🕯️', text: '<strong>You don\'t have to do this alone</strong> — trauma-informed therapy (EMDR, somatic therapy) is built exactly for this level.' },
        { icon: '❤️', text: '<strong>You came here for a reason</strong> — the impulse to understand yourself is the beginning of everything.' }
      ];
    } else {
      icon = '⛓️'; title = 'Deep Survival Mode';
      subtitle = 'The pain is running the show. That\'s not a character flaw — it\'s what unprocessed pain does.';
      traits = [
        { icon: '🚨', text: '<strong>At this level, the wound shapes nearly everything</strong> — perception, reaction, relationship, possibility.' },
        { icon: '🫂', text: '<strong>This is not weakness</strong> — unprocessed trauma is what happens when pain is too large to process alone or without safety.' },
        { icon: '🌅', text: '<strong>Healing is possible regardless of how long it\'s been</strong> — trauma is not a life sentence. Biology changes.' },
        { icon: '🛟', text: '<strong>Please reach out to someone</strong> — a trauma-informed therapist can offer what self-reflection cannot.' }
      ];
    }
    return {
      icon, title, subtitle, traits,
      meterPct: pct,
      meterLeft: '🌱 Healing',
      meterRight: '🔒 Surviving',
      extra: `<strong>Score:</strong> ${pct}% healing · ${100-pct}% still in survival mode<br><br>Based on: van der Kolk (2014) <em>The Body Keeps the Score</em>, Peter Levine's somatic experiencing framework, and Tedeschi & Calhoun's post-traumatic growth research.`
    };
  }
},

compassion: {
  id: 'compassion', color: '#ecc94b',
  icon: '🫶', title: 'How Self-Compassionate Am I?',
  descHtml: `Based on Dr. Kristin Neff's Self-Compassion Scale, this quiz measures how you treat yourself when you're struggling — across three dimensions: self-kindness, common humanity, and mindful awareness.<br><br><strong>12 questions · ~2 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "When you fail at something that matters to you, your first move is:",
      sub: "",
      answers: [
        { text: "Acknowledge it, be kind to myself, and figure out what comes next", score: 3 },
        { text: "Process what happened, though some self-blame creeps in", score: 2 },
        { text: "Criticize myself — I should have done better", score: 1 },
        { text: "Spiral — one failure confirms deep things I believe about myself", score: 0 }
      ]
    },
    { text: "Do you treat yourself with the same kindness you'd offer a good friend in pain?",
      sub: "",
      answers: [
        { text: "Yes — I've learned to be my own friend", score: 3 },
        { text: "I try, though the critical voice is louder sometimes", score: 2 },
        { text: "Rarely — I'm far harder on myself than I'd be on anyone else", score: 1 },
        { text: "Never — I feel I deserve the harshness more than they do", score: 0 }
      ]
    },
    { text: "When you're struggling, do you remember that others struggle too?",
      sub: "This is the 'common humanity' component — the opposite of isolation.",
      answers: [
        { text: "Yes — suffering is part of being human, not evidence of my failure", score: 3 },
        { text: "Usually, though pain can make me feel alone in it", score: 2 },
        { text: "Rarely — I often feel like I'm the only one who can't get it together", score: 1 },
        { text: "Never — I feel completely isolated in what I'm going through", score: 0 }
      ]
    },
    { text: "When you notice a painful emotion, what do you do?",
      sub: "",
      answers: [
        { text: "Observe it with some distance — 'I notice I'm feeling this'", score: 3 },
        { text: "Feel it and try not to drown in it", score: 2 },
        { text: "Either suppress it or get completely swept away", score: 1 },
        { text: "I'm ruled by it — the emotion and my identity feel like the same thing", score: 0 }
      ]
    },
    { text: "How often do you apologize for simply existing, taking up space, or having needs?",
      sub: "",
      answers: [
        { text: "Rarely — I have a right to my space and my needs", score: 3 },
        { text: "Sometimes, but I'm catching it more", score: 2 },
        { text: "Often — having needs feels like being a burden", score: 1 },
        { text: "Constantly — my existence feels like an inconvenience to others", score: 0 }
      ]
    },
    { text: "When life is genuinely hard, you tell yourself:",
      sub: "",
      answers: [
        { text: "\"This is difficult. It makes sense that I'm struggling. I'll get through it.\"", score: 3 },
        { text: "\"This is hard. I'm doing what I can.\"", score: 2 },
        { text: "\"Why can't I handle this better? What's wrong with me?\"", score: 1 },
        { text: "\"I deserve this. Other people wouldn't fall apart like this.\"", score: 0 }
      ]
    },
    { text: "Do you hold your imperfections against yourself?",
      sub: "",
      answers: [
        { text: "No — imperfection is part of being human, not a personal failing", score: 3 },
        { text: "Sometimes, but I'm gentler than I used to be", score: 2 },
        { text: "Yes — my flaws feel like evidence of something fundamentally wrong with me", score: 1 },
        { text: "They define me — I am my worst qualities", score: 0 }
      ]
    },
    { text: "When something goes wrong in your life, how much do you blame yourself?",
      sub: "",
      answers: [
        { text: "I take responsibility where I genuinely should, but no more", score: 3 },
        { text: "Sometimes I over-blame, but I can usually course-correct", score: 2 },
        { text: "Most bad outcomes feel like my fault", score: 1 },
        { text: "Everything bad traces back to my inadequacy", score: 0 }
      ]
    },
    { text: "Can you acknowledge your own suffering without dramatizing or minimizing it?",
      sub: "",
      answers: [
        { text: "Yes — I can say 'this hurts' without spiraling or shutting down", score: 3 },
        { text: "Getting better — I'm finding the middle ground", score: 2 },
        { text: "I swing between catastrophizing and 'just get over it'", score: 1 },
        { text: "I'm stuck in one extreme — always spiraling or always suppressing", score: 0 }
      ]
    },
    { text: "When you imagine how a loving person would speak to you in a hard moment, that voice feels:",
      sub: "",
      answers: [
        { text: "Real — I've internalized that kind of voice over time", score: 3 },
        { text: "Familiar but still partly external — I know it but don't always feel it", score: 2 },
        { text: "Foreign — I understand kindness but can't access it for myself", score: 1 },
        { text: "Completely foreign — that voice has never been directed at me", score: 0 }
      ]
    },
    { text: "After making a choice you later regret, you:",
      sub: "",
      answers: [
        { text: "Process it, extract the lesson, and forgive yourself", score: 3 },
        { text: "Replay it but eventually let it go", score: 2 },
        { text: "Replay it for a long time and use it as evidence against yourself", score: 1 },
        { text: "Carry every regret indefinitely — past mistakes define you", score: 0 }
      ]
    },
    { text: "When you sit quietly alone, your inner voice treats you:",
      sub: "Silence reveals what we actually believe about ourselves.",
      answers: [
        { text: "With warmth or neutrality — it's safe to be with myself", score: 3 },
        { text: "Mostly okay, with occasional criticism", score: 2 },
        { text: "Harshly — silence amplifies the self-critical voice", score: 1 },
        { text: "I avoid being alone and quiet for exactly this reason", score: 0 }
      ]
    }
  ],
  getResult(pct) {
    let icon, title, subtitle, traits;
    if (pct >= 80) {
      icon = '🌻'; title = 'High Self-Compassion';
      subtitle = 'You treat yourself with genuine kindness when you\'re struggling.';
      traits = [
        { icon: '🤗', text: '<strong>You\'ve internalized a kind inner voice</strong> — failure doesn\'t trigger collapse; it triggers care followed by course-correction.' },
        { icon: '🌍', text: '<strong>You feel your humanity</strong> — you know that struggling is universal, not a personal defect.' },
        { icon: '🧘', text: '<strong>Mindful awareness</strong> — you can observe emotions without being hijacked by them.' },
        { icon: '💡', text: '<strong>Self-compassion correlates with higher resilience</strong>, less anxiety, and greater emotional stability. You\'ve built something real.' }
      ];
    } else if (pct >= 60) {
      icon = '🌼'; title = 'Growing Self-Compassion';
      subtitle = 'You\'re kinder to yourself than you used to be, and it shows.';
      traits = [
        { icon: '✅', text: '<strong>Real progress here</strong> — the shift toward self-compassion is one of the hardest inner moves a person can make.' },
        { icon: '⚡', text: '<strong>The critical voice still has volume</strong> — especially under stress, failure, or comparison.' },
        { icon: '🔍', text: '<strong>You can catch yourself</strong> — noticing the inner critic is the first step to not obeying it.' },
        { icon: '🧭', text: '<strong>Keep practicing</strong> — self-compassion is literally a skill, strengthened by repetition.' }
      ];
    } else if (pct >= 40) {
      icon = '⚖️'; title = 'Self-Criticism Is Louder Than Self-Compassion';
      subtitle = 'Your inner voice is harder on you than you deserve.';
      traits = [
        { icon: '🔊', text: '<strong>The inner critic dominates</strong> — mistakes feel like verdicts, not events.' },
        { icon: '🏝️', text: '<strong>You feel alone in your struggles</strong> — like everyone else has it figured out except you.' },
        { icon: '🪜', text: '<strong>Small practices help</strong> — even 60 seconds of self-compassionate self-talk during pain can shift the nervous system over time.' },
        { icon: '📖', text: '<strong>Recommended</strong>: Kristin Neff\'s <em>Self-Compassion</em> or her free exercises at self-compassion.org.' }
      ];
    } else if (pct >= 20) {
      icon = '🌧️'; title = 'Very Low Self-Compassion';
      subtitle = 'You\'re likely carrying a heavy internal critic that feels permanent — it isn\'t.';
      traits = [
        { icon: '🪨', text: '<strong>Shame feels like identity</strong> — not just "I made a mistake" but "I am a mistake."' },
        { icon: '🚫', text: '<strong>Kindness toward yourself may feel undeserved or dangerous</strong> — this is a learned response, not the truth.' },
        { icon: '🧠', text: '<strong>This level of self-criticism has neurological roots</strong> — it was built through experience and can be rebuilt.' },
        { icon: '🛟', text: '<strong>Self-compassion-based therapy (CFT) is specifically designed for this</strong> — it\'s worth seeking out.' }
      ];
    } else {
      icon = '🌑'; title = 'Self-Criticism at Its Harshest';
      subtitle = 'The inner critic has been so loud for so long it feels like the truth. It isn\'t.';
      traits = [
        { icon: '⚠️', text: '<strong>At this level, the inner critic acts like an abuser</strong> — constant, disproportionate, merciless.' },
        { icon: '💔', text: '<strong>You believe you don\'t deserve kindness</strong> — this belief was installed by others before you had the ability to question it.' },
        { icon: '🌅', text: '<strong>This can change</strong> — Compassion-Focused Therapy (CFT) and certain trauma therapies work directly on the self-critical voice.' },
        { icon: '🤝', text: '<strong>Start with one moment</strong>: the next time you suffer, say to yourself exactly what you\'d say to someone you love in the same pain.' }
      ];
    }
    return {
      icon, title, subtitle, traits,
      meterPct: pct,
      meterLeft: '🫶 Compassion',
      meterRight: '⚔️ Criticism',
      extra: `<strong>Score:</strong> ${pct}% self-compassionate · ${100-pct}% self-critical<br><br>Based on: Dr. Kristin Neff's Self-Compassion Scale (SCS, 2003), and Compassion-Focused Therapy (Gilbert, 2009).`
    };
  }
},

phq9: {
  id: 'phq9', color: '#9b8ff5',
  icon: '🌧️', title: 'Am I Experiencing Depression?',
  descHtml: `The PHQ-9 (Patient Health Questionnaire-9) is one of the most validated depression screening tools in clinical use, developed by Kroenke & Spitzer (2001). This is not a diagnosis — it's a structured self-assessment used to understand symptom severity.<br><br><strong>9 questions · ~1 minute · Rate each for the past 2 weeks</strong>`,
  type: 'spectrum',
  questions: [
    { text: "Little interest or pleasure in doing things you normally enjoy",
      sub: "Over the past 2 weeks.",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    { text: "Feeling down, depressed, or hopeless",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    { text: "Trouble falling or staying asleep, or sleeping too much",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    { text: "Feeling tired or having little energy",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    { text: "Poor appetite or overeating",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    { text: "Feeling bad about yourself — or that you're a failure, or have let yourself or others down",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    { text: "Trouble concentrating on things, like reading, watching something, or following a conversation",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    { text: "Moving or speaking so slowly others could have noticed — or the opposite: being unusually fidgety or restless",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    { text: "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way",
      sub: "Please answer honestly. If this applies to you, reaching out to a professional is important.",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    }
  ],
  getResult(pct) {
    let icon, title, subtitle, traits;
    if (pct >= 74) {
      icon = '⛈️'; title = 'Severe Depression Symptoms';
      subtitle = 'Your responses suggest you may be experiencing significant depression.';
      traits = [
        { icon: '🚨', text: '<strong>At this level, daily functioning is likely significantly affected</strong> — this goes beyond sadness or a difficult period.' },
        { icon: '🤝', text: '<strong>Please reach out for professional support</strong> — a doctor, therapist, or crisis line. You don\'t have to navigate this alone.' },
        { icon: '📞', text: '<strong>If you\'re having thoughts of self-harm</strong>: call or text 988 (Suicide & Crisis Lifeline, US) or your local equivalent immediately.' },
        { icon: '💡', text: '<strong>This is treatable</strong> — severe depression responds strongly to therapy, medication, or both. The right support can change everything.' }
      ];
    } else if (pct >= 56) {
      icon = '🌩️'; title = 'Moderately Severe Depression Symptoms';
      subtitle = 'You\'re experiencing symptoms that significantly impact your wellbeing.';
      traits = [
        { icon: '📋', text: '<strong>This level warrants a conversation with a mental health professional</strong> — not because something is wrong with you, but because you deserve support.' },
        { icon: '🔗', text: '<strong>Depression at this level often has biological components</strong> — this isn\'t just "feeling sad." It\'s a medical condition.' },
        { icon: '🌅', text: '<strong>Treatment works</strong> — CBT, antidepressants, and combined approaches have strong evidence at this severity level.' },
        { icon: '❤️', text: '<strong>You showed up here</strong> — that impulse to understand yourself is worth honoring.' }
      ];
    } else if (pct >= 37) {
      icon = '🌧️'; title = 'Moderate Depression Symptoms';
      subtitle = 'Real symptoms are present and affecting your quality of life.';
      traits = [
        { icon: '👁️', text: '<strong>You\'re not imagining this</strong> — moderate depression is real, valid, and treatable.' },
        { icon: '🗣️', text: '<strong>Talking to someone would help</strong> — therapy (especially CBT or behavioral activation) has strong evidence at this level.' },
        { icon: '🏃', text: '<strong>Small actions matter</strong> — movement, sleep structure, and social connection have measurable impact at moderate severity.' },
        { icon: '📅', text: '<strong>Without intervention it can deepen</strong> — getting support now is much easier than waiting.' }
      ];
    } else if (pct >= 19) {
      icon = '🌦️'; title = 'Mild Depression Symptoms';
      subtitle = 'Some symptoms are present. This is worth paying attention to.';
      traits = [
        { icon: '⚠️', text: '<strong>Mild doesn\'t mean insignificant</strong> — these symptoms affect your energy, mood, and engagement with life.' },
        { icon: '🛠️', text: '<strong>This level often responds well to lifestyle adjustments</strong> — sleep, exercise, connection, and structure.' },
        { icon: '🗺️', text: '<strong>Watchful awareness is appropriate</strong> — track how you\'re feeling over the next few weeks.' },
        { icon: '🧭', text: '<strong>If symptoms persist beyond 2 weeks</strong>, that\'s the clinical threshold — consider reaching out.' }
      ];
    } else {
      icon = '☀️'; title = 'Minimal or No Depression Symptoms';
      subtitle = 'Your responses suggest low symptom burden right now.';
      traits = [
        { icon: '✅', text: '<strong>This is a good baseline</strong> — low current symptoms, though depression can be episodic.' },
        { icon: '🌱', text: '<strong>Preventive care matters</strong> — sleep, movement, connection, and stress management protect mental health over time.' },
        { icon: '👀', text: '<strong>Check in regularly</strong> — symptom levels shift with life circumstances. This quiz is most useful taken honestly over time.' },
        { icon: '💡', text: '<strong>If someone you know is struggling</strong> — share this resource. Reaching out early makes a difference.' }
      ];
    }
    const rawScore = Math.round(pct * 27 / 100);
    return {
      icon, title, subtitle, traits,
      meterPct: pct,
      meterLeft: '😊 Minimal',
      meterRight: '😔 Severe',
      extra: `<strong>PHQ-9 estimated score:</strong> ~${rawScore}/27<br><br>⚠️ <em>This is a validated screening tool, not a clinical diagnosis. Scores of 10+ indicate moderate-to-severe symptoms — please speak with a mental health professional.</em><br><br>Based on: Kroenke, K., Spitzer, R.L., & Williams, J.B.W. (2001). The PHQ-9: Validity of a brief depression severity measure. <em>Journal of General Internal Medicine, 16</em>(9), 606–613.`
    };
  }
},

gad7: {
  id: 'gad7', color: '#f472b6',
  icon: '⚡', title: 'How Much Anxiety Am I Carrying?',
  descHtml: `The GAD-7 (Generalized Anxiety Disorder-7) is the most widely used clinical tool for measuring anxiety symptoms, developed by Spitzer et al. (2006). Used by doctors and therapists worldwide as a standard baseline measure.<br><br><strong>7 questions · ~1 minute · Rate each for the past 2 weeks</strong>`,
  type: 'spectrum',
  questions: [
    { text: "Feeling nervous, anxious, or on edge",
      sub: "Over the past 2 weeks.",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    { text: "Not being able to stop or control worrying",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    { text: "Worrying too much about different things",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    { text: "Trouble relaxing",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    { text: "Being so restless that it's hard to sit still",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    { text: "Becoming easily annoyed or irritable",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    { text: "Feeling afraid, as if something awful might happen",
      sub: "The quiet dread — even without a specific reason.",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    }
  ],
  getResult(pct) {
    let icon, title, subtitle, traits;
    if (pct >= 71) {
      icon = '🌪️'; title = 'Severe Anxiety Symptoms';
      subtitle = 'Your responses reflect a high anxiety burden affecting many areas of your life.';
      traits = [
        { icon: '🚨', text: '<strong>At this level, anxiety is likely interfering significantly with work, relationships, and daily functioning.</strong>' },
        { icon: '🧠', text: '<strong>This reflects a nervous system in chronic threat-mode</strong> — not a personal weakness, but a pattern that needs targeted support.' },
        { icon: '🤝', text: '<strong>Please reach out to a mental health professional</strong> — CBT, ACT, and medication all have strong evidence for severe anxiety.' },
        { icon: '🌱', text: '<strong>Anxiety is one of the most treatable conditions</strong> when approached with the right tools.' }
      ];
    } else if (pct >= 48) {
      icon = '⚡'; title = 'Moderate Anxiety Symptoms';
      subtitle = 'Anxiety is a consistent presence affecting your wellbeing.';
      traits = [
        { icon: '📡', text: '<strong>Your nervous system is spending a lot of energy on threat detection</strong> — creating real fatigue, irritability, and difficulty being present.' },
        { icon: '🛠️', text: '<strong>Structured tools work here</strong> — CBT for anxiety, acceptance-based approaches (ACT), and somatic regulation techniques have solid evidence.' },
        { icon: '⏱️', text: '<strong>If you\'ve felt this way for 6+ months</strong> — that\'s the clinical threshold for GAD. A therapist can assess and support.' },
        { icon: '🌿', text: '<strong>Daily regulation practices help</strong> — breathwork, exercise, and sleep hygiene reduce the nervous system\'s baseline reactivity.' }
      ];
    } else if (pct >= 24) {
      icon = '🌦️'; title = 'Mild Anxiety Symptoms';
      subtitle = 'Some anxiety is present. Worth understanding what\'s driving it.';
      traits = [
        { icon: '👁️', text: '<strong>Mild anxiety often flies under the radar</strong> — but still drains energy, affects decisions, and disrupts sleep.' },
        { icon: '🔍', text: '<strong>Explore what\'s feeding it</strong> — anxiety rarely exists in isolation. It connects to deeper patterns, beliefs, or unprocessed stress.' },
        { icon: '🌿', text: '<strong>Regulation practices are most effective at this stage</strong> — before anxiety becomes entrenched or avoidance begins.' },
        { icon: '📘', text: '<strong>Recommended</strong>: Russ Harris\'s <em>The Happiness Trap</em> for an ACT-based approach to anxiety.' }
      ];
    } else {
      icon = '😌'; title = 'Minimal Anxiety Symptoms';
      subtitle = 'Your responses suggest anxiety is not significantly impacting you right now.';
      traits = [
        { icon: '✅', text: '<strong>Low current anxiety burden</strong> — this is a healthy baseline worth protecting.' },
        { icon: '🌱', text: '<strong>Stay grounded proactively</strong> — stress, sleep deprivation, and major life events can shift this quickly.' },
        { icon: '👀', text: '<strong>Anxiety can be situational</strong> — re-take during high-stress periods for a more accurate read.' },
        { icon: '💡', text: '<strong>Normal anxiety vs. disorder</strong> — some anxiety is adaptive. The line is crossed when it starts limiting your life.' }
      ];
    }
    const rawScore = Math.round(pct * 21 / 100);
    return {
      icon, title, subtitle, traits,
      meterPct: pct,
      meterLeft: '😌 Minimal',
      meterRight: '🌪️ Severe',
      extra: `<strong>GAD-7 estimated score:</strong> ~${rawScore}/21<br><br>⚠️ <em>This is a validated screening tool, not a clinical diagnosis. Scores of 10+ indicate moderate-to-severe anxiety — consider speaking with a professional.</em><br><br>Based on: Spitzer, R.L., Kroenke, K., Williams, J.B.W., & Löwe, B. (2006). A brief measure for assessing generalized anxiety disorder. <em>Archives of Internal Medicine, 166</em>(10), 1092–1097.`
    };
  }
},

emreg: {
  id: 'emreg', color: '#a8a1f8',
  icon: '🌊', title: 'How Well Do I Regulate My Emotions?',
  descHtml: `Based on the Difficulties in Emotion Regulation Scale (DERS; Gratz & Roemer, 2004), this quiz measures six dimensions: emotional awareness, acceptance, clarity, impulse control, access to coping strategies, and goal-directed behavior under stress.<br><br><strong>12 questions · ~2 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "When you're upset, how aware are you of what you're actually feeling?",
      sub: "",
      answers: [
        { text: "Very aware — I can usually identify exactly what I'm experiencing", score: 0 },
        { text: "Somewhat aware — I know something's wrong but can't always name it", score: 1 },
        { text: "Often confused — emotions feel like a blurry, unidentifiable mass", score: 2 },
        { text: "Largely unaware — I notice the aftermath but miss the emotion as it happens", score: 3 }
      ]
    },
    { text: "When you're in emotional pain, can you accept that you're feeling it — without judging yourself for it?",
      sub: "",
      answers: [
        { text: "Yes — I can feel without feeling bad about feeling", score: 0 },
        { text: "Mostly, though I sometimes add shame on top of the original emotion", score: 1 },
        { text: "Rarely — feeling upset often triggers 'what's wrong with me for feeling this?'", score: 2 },
        { text: "Never — my emotional reactions feel weak, wrong, or unacceptable to me", score: 3 }
      ]
    },
    { text: "When upset, can you still work toward important goals — tasks, responsibilities, showing up?",
      sub: "",
      answers: [
        { text: "Yes — I can function even when I'm not okay emotionally", score: 0 },
        { text: "Usually, though strong emotions reduce my effectiveness", score: 1 },
        { text: "Rarely — when I'm upset, I lose the ability to focus on much else", score: 2 },
        { text: "No — when emotionally activated, I shut down or can't function at all", score: 3 }
      ]
    },
    { text: "When distressed, how hard is it to control your behavior — what you say or do?",
      sub: "",
      answers: [
        { text: "Not hard — I can pause before acting even when activated", score: 0 },
        { text: "Somewhat hard — I sometimes act before I think when upset", score: 1 },
        { text: "Very hard — I often do or say things I later regret when emotional", score: 2 },
        { text: "Extreme — when distressed, I lose control of what I do or say", score: 3 }
      ]
    },
    { text: "Do you have strategies that actually help when you're overwhelmed?",
      sub: "",
      answers: [
        { text: "Yes — I have a few things that reliably work", score: 0 },
        { text: "Some — I have partial tools that work inconsistently", score: 1 },
        { text: "Barely — I mostly try to wait it out", score: 2 },
        { text: "No — I feel helpless when overwhelmed, with nothing that reliably helps", score: 3 }
      ]
    },
    { text: "When something upsets you, how quickly do emotions take over your thinking?",
      sub: "",
      answers: [
        { text: "Gradually — I feel the emotion but can observe it too", score: 0 },
        { text: "Quickly, though I usually come back to myself", score: 1 },
        { text: "Very quickly — emotion hijacks thought before I can catch it", score: 2 },
        { text: "Instantly — once triggered, rational thinking disappears", score: 3 }
      ]
    },
    { text: "How often do negative emotions feel endless — like they'll never pass?",
      sub: "",
      answers: [
        { text: "Rarely — I can usually sense they'll shift, even in the moment", score: 0 },
        { text: "Sometimes — in deep pain, permanence is hard to see", score: 1 },
        { text: "Often — when I'm in it, it feels like I'll always feel this way", score: 2 },
        { text: "Almost always — the present emotional state feels like my permanent state", score: 3 }
      ]
    },
    { text: "Do you pay attention to how you're feeling emotionally, day to day?",
      sub: "",
      answers: [
        { text: "Yes — I check in with myself regularly", score: 0 },
        { text: "Sometimes — when things get loud enough to notice", score: 1 },
        { text: "Rarely — I'm often disconnected from how I'm doing emotionally", score: 2 },
        { text: "No — I only notice emotions when they're overwhelming", score: 3 }
      ]
    },
    { text: "After a strong emotional reaction, how long does it take to return to baseline?",
      sub: "",
      answers: [
        { text: "Minutes to an hour — I process and return relatively quickly", score: 0 },
        { text: "Several hours — takes a while but I get there", score: 1 },
        { text: "A full day or more — strong emotions disrupt my whole day", score: 2 },
        { text: "Days — intense emotions leave me off-balance for a long time", score: 3 }
      ]
    },
    { text: "When in emotional pain, do you turn to things that make it worse long-term?",
      sub: "Substances, withdrawing completely, rage, or behaviors you later regret.",
      answers: [
        { text: "Rarely — my coping doesn't tend to create secondary problems", score: 0 },
        { text: "Sometimes — I have some habits that aren't helpful", score: 1 },
        { text: "Often — my go-to ways of coping frequently make things worse", score: 2 },
        { text: "Frequently — my coping tends to cause significant secondary harm", score: 3 }
      ]
    },
    { text: "Can you clearly identify what you feel — not just that you feel 'bad'?",
      sub: "Sad vs. angry vs. ashamed vs. scared vs. hurt — the specific emotion.",
      answers: [
        { text: "Usually — I have a reasonably clear emotional vocabulary", score: 0 },
        { text: "Sometimes — I can distinguish some emotions, not all", score: 1 },
        { text: "Rarely — most things blur into 'upset' or 'numb'", score: 2 },
        { text: "Almost never — emotions feel undifferentiated and confusing", score: 3 }
      ]
    },
    { text: "When a strong emotion hits, can you observe it without immediately acting on it?",
      sub: "The space between feeling and doing.",
      answers: [
        { text: "Yes — I have some gap between emotion and action most of the time", score: 0 },
        { text: "Sometimes — I'm getting better at the pause", score: 1 },
        { text: "Rarely — feeling and acting tend to happen at the same time", score: 2 },
        { text: "No — there is essentially no space between feeling and reacting", score: 3 }
      ]
    }
  ],
  getResult(pct) {
    let icon, title, subtitle, traits;
    if (pct >= 67) {
      icon = '🌊'; title = 'Significant Emotion Regulation Difficulties';
      subtitle = 'Emotions are frequently overwhelming and difficult to manage effectively.';
      traits = [
        { icon: '🌪️', text: '<strong>Emotions arrive fast and stay long</strong> — the window between feeling and reacting is narrow, and recovery takes time.' },
        { icon: '🧠', text: '<strong>This is often rooted in nervous system patterns</strong> — not a character flaw, but a learned or trauma-shaped way of processing emotion.' },
        { icon: '🤝', text: '<strong>DBT (Dialectical Behavior Therapy) was built specifically for this</strong> — it\'s the most evidence-based treatment for emotion dysregulation.' },
        { icon: '🌱', text: '<strong>Change is genuinely possible</strong> — emotion regulation is a skill set, not a fixed trait. It can be learned at any age.' }
      ];
    } else if (pct >= 42) {
      icon = '⚖️'; title = 'Moderate Emotion Regulation Challenges';
      subtitle = 'Emotions are manageable in many situations, but some consistently overwhelm.';
      traits = [
        { icon: '🔍', text: '<strong>Certain triggers still derail you</strong> — while you handle most situations, specific types of pain or stress break through your capacity.' },
        { icon: '🛠️', text: '<strong>Skills-building would help</strong> — mindfulness, distress tolerance, and affect labeling all have strong research support.' },
        { icon: '📊', text: '<strong>Secondary reactions are a key pattern</strong> — feeling ashamed of feeling, or anxious about anxiety. Reducing these frees up regulation capacity.' },
        { icon: '💡', text: '<strong>You have more foundation than you think</strong> — building from moderate capacity is significantly faster than starting from dysregulation.' }
      ];
    } else if (pct >= 20) {
      icon = '🌿'; title = 'Mild Emotion Regulation Difficulties';
      subtitle = 'You regulate reasonably well, with room to grow in specific areas.';
      traits = [
        { icon: '✅', text: '<strong>You have a functional foundation</strong> — emotions are identifiable, manageable, and usually temporary for you.' },
        { icon: '🔬', text: '<strong>There are still gaps</strong> — particular emotions (anger, grief, shame) or situations may stretch your capacity.' },
        { icon: '🎯', text: '<strong>Targeted work is most efficient here</strong> — identify your specific weak spots rather than working on regulation broadly.' },
        { icon: '📚', text: '<strong>Recommended</strong>: Tara Brach\'s RAIN technique and Matthew Lieberman\'s affect labeling research for accessible starting points.' }
      ];
    } else {
      icon = '🌱'; title = 'Good Emotion Regulation';
      subtitle = 'You have real capacity to identify, tolerate, and process your emotions.';
      traits = [
        { icon: '🧭', text: '<strong>Emotional awareness is solid</strong> — you can name what you feel and work with it rather than being ruled by it.' },
        { icon: '⏱️', text: '<strong>Recovery is relatively efficient</strong> — you return to baseline without extended dysregulation.' },
        { icon: '🌍', text: '<strong>Regulation supports everything else</strong> — relationships, work, and wellbeing all benefit from this capacity.' },
        { icon: '💡', text: '<strong>The frontier at this level</strong> — subtle secondary emotions, emotional granularity, and sitting with very intense states without avoidance.' }
      ];
    }
    return {
      icon, title, subtitle, traits,
      meterPct: pct,
      meterLeft: '🌱 Regulated',
      meterRight: '🌊 Dysregulated',
      extra: `<strong>Score:</strong> ${pct}% difficulty · ${100-pct}% capacity<br><br>Based on: Gratz, K.L., & Roemer, L. (2004). Multidimensional assessment of emotion regulation and dysregulation. <em>Journal of Psychopathology and Behavioral Assessment, 26</em>(1), 41–54.`
    };
  }
}

}; // end genericQuizzes
