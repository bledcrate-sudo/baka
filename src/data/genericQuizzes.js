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
},


burnout: {
  id: 'burnout', color: '#f97316',
  icon: '🔥', title: 'Am I Burning Out?',
  descHtml: `Based on Maslach Burnout Inventory (Maslach & Jackson, 1981) — the most validated burnout assessment in occupational psychology. Burnout has three dimensions: exhaustion, cynicism, and reduced personal accomplishment.<br><br><strong>12 questions · ~4 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "How often do you feel emotionally drained by your responsibilities?",
      sub: "Work, relationships, caregiving — any ongoing obligation.",
      answers: [
        { text: "Rarely or never", score: 0 },
        { text: "A few times a month", score: 1 },
        { text: "A few times a week", score: 2 },
        { text: "Every day, sometimes multiple times", score: 3 }
      ]
    },
    { text: "By the end of a typical day, how depleted do you feel?",
      sub: "",
      answers: [
        { text: "I still have energy left", score: 0 },
        { text: "Tired but okay", score: 1 },
        { text: "Consistently exhausted", score: 2 },
        { text: "Completely empty — I'm running on nothing", score: 3 }
      ]
    },
    { text: "How often do you wake up already dreading the day ahead?",
      sub: "",
      answers: [
        { text: "Almost never", score: 0 },
        { text: "Occasionally", score: 1 },
        { text: "Several times a week", score: 2 },
        { text: "Almost every morning", score: 3 }
      ]
    },
    { text: "When something goes wrong in your responsibilities, how do you respond emotionally?",
      sub: "",
      answers: [
        { text: "I take it in stride — setbacks happen", score: 0 },
        { text: "I feel frustrated but recover", score: 1 },
        { text: "It hits me harder than it should", score: 2 },
        { text: "I feel numb or don't care anymore", score: 3 }
      ]
    },
    { text: "How do you feel about the people you work with or care for?",
      sub: "",
      answers: [
        { text: "Genuinely connected to them", score: 0 },
        { text: "Mostly positive, some friction", score: 1 },
        { text: "Increasingly detached or indifferent", score: 2 },
        { text: "I've stopped seeing them as individuals — just demands", score: 3 }
      ]
    },
    { text: "How meaningful does your work or daily role feel right now?",
      sub: "",
      answers: [
        { text: "Deeply meaningful", score: 0 },
        { text: "Generally worthwhile", score: 1 },
        { text: "I've lost sight of why it matters", score: 2 },
        { text: "It feels pointless", score: 3 }
      ]
    },
    { text: "How often do you feel resentful toward your responsibilities?",
      sub: "",
      answers: [
        { text: "Rarely", score: 0 },
        { text: "Sometimes", score: 1 },
        { text: "Often", score: 2 },
        { text: "Almost constantly", score: 3 }
      ]
    },
    { text: "Do you feel like no matter how much you do, it's never enough?",
      sub: "",
      answers: [
        { text: "No — I feel effective", score: 0 },
        { text: "Occasionally", score: 1 },
        { text: "Often", score: 2 },
        { text: "Yes, that's my constant experience", score: 3 }
      ]
    },
    { text: "How is your ability to concentrate and make decisions lately?",
      sub: "",
      answers: [
        { text: "Sharp and clear", score: 0 },
        { text: "Slightly slower than usual", score: 1 },
        { text: "Noticeably impaired", score: 2 },
        { text: "Difficulty with even simple decisions", score: 3 }
      ]
    },
    { text: "How often do you feel physically ill or have unexplained physical symptoms (headaches, stomach issues, tension)?",
      sub: "",
      answers: [
        { text: "Rarely", score: 0 },
        { text: "Once in a while", score: 1 },
        { text: "Fairly regularly", score: 2 },
        { text: "Very frequently", score: 3 }
      ]
    },
    { text: "How often do you feel detached from your own life — like you're going through the motions?",
      sub: "",
      answers: [
        { text: "Rarely", score: 0 },
        { text: "Sometimes", score: 1 },
        { text: "Often", score: 2 },
        { text: "Most of the time", score: 3 }
      ]
    },
    { text: "When was the last time you felt genuinely energized by your work or daily life?",
      sub: "",
      answers: [
        { text: "Recently — within the past week", score: 0 },
        { text: "A few weeks ago", score: 1 },
        { text: "It's been months", score: 2 },
        { text: "I can't remember", score: 3 }
      ]
    }
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, meterLeft, meterRight;
    meterLeft = '🌿 Thriving';
    meterRight = '🔥 Burned Out';
    if (pct >= 75) {
      icon = '🔥'; title = 'Severe Burnout';
      subtitle = 'You are in a burnout crisis — your system is in survival mode, not functioning mode.';
      traits = [
        { icon: '🚨', text: '<strong>Immediate relief is the priority — not performance.</strong> Before anything else, reduce the load.' },
        { icon: '🧠', text: '<strong>Your nervous system has been in chronic stress</strong> for long enough that rest alone won\'t fix it — you need structural change.' },
        { icon: '💤', text: '<strong>Sleep, nutritional basics, and medical support are the foundation</strong> — emotional work comes after physiological stabilization.' },
        { icon: '📚', text: '<strong>Recommended</strong>: Christina Maslach\'s Burnout: The Cost of Caring and Emily Nagoski\'s Burnout for practical frameworks.' }
      ];
    } else if (pct >= 50) {
      icon = '⚠️'; title = 'Moderate to High Burnout';
      subtitle = 'Burnout is actively happening — you\'re still functioning, but you can feel the edges fraying.';
      traits = [
        { icon: '⚡', text: '<strong>You\'re still moving, but at a cost</strong> — this level of sustained output is not sustainable.' },
        { icon: '🔍', text: '<strong>Cynicism and detachment are early defenses</strong> — the mind protecting itself from a system that demands too much.' },
        { icon: '🔄', text: '<strong>Recovery at this stage requires both rest and genuine re-engagement with meaning</strong> — one without the other won\'t hold.' },
        { icon: '📖', text: '<strong>Maslach & Leiter\'s Areas of Worklife model</strong> identifies six root causes of burnout — identify which apply to you.' }
      ];
    } else if (pct >= 25) {
      icon = '🌤️'; title = 'Mild Burnout Signs';
      subtitle = 'You\'re showing early warning signals — pay attention before this deepens.';
      traits = [
        { icon: '🌡️', text: '<strong>Early burnout often looks like \'just being tired\'</strong> — it\'s easy to normalize until it becomes severe.' },
        { icon: '🧩', text: '<strong>The most protective factor against burnout is autonomy</strong> — having input into your own conditions matters enormously.' },
        { icon: '🌿', text: '<strong>Recovery now is far easier than recovery later</strong> — small, structural changes have high leverage at this stage.' },
        { icon: '📚', text: '<strong>Nagoski & Nagoski\'s concept of \'completing the stress cycle\'</strong> is useful here — discharge what you\'re carrying.' }
      ];
    } else {
      icon = '✅'; title = 'No Significant Burnout';
      subtitle = 'You appear to be in a healthy relationship with your responsibilities right now.';
      traits = [
        { icon: '🌱', text: '<strong>Your sense of meaning and energy appear intact</strong> — this is the foundation everything else rests on.' },
        { icon: '🔄', text: '<strong>Even at this level, prevention matters</strong> — burnout tends to develop gradually before it becomes visible.' },
        { icon: '🤝', text: '<strong>Connection and control are the two strongest buffers</strong> — keep investing in both.' },
        { icon: '💡', text: '<strong>Maslach\'s research shows burnout is a systemic problem, not a personal failure</strong> — knowing this is protective.' }
      ];
    }
    return {
      icon, title, subtitle, traits,
      meterPct: pct,
      meterLeft,
      meterRight,
      extra: `<strong>Score:</strong> ${pct}% burnout indicators<br><br>Based on: Maslach, C., &amp; Jackson, S.E. (1981). The measurement of experienced burnout. <em>Journal of Organizational Behavior, 2</em>(2), 99–113.`
    };
  }
},

loneliness: {
  id: 'loneliness', color: '#94a3b8',
  icon: '🌑', title: 'How Lonely Am I?',
  descHtml: `Based on the UCLA Loneliness Scale Version 3 (Russell, 1996) — the most widely used and validated loneliness measure in social psychology. Loneliness is a perceived social isolation, distinct from physical aloneness.<br><br><strong>10 questions · ~3 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "How often do you feel that you lack companionship?",
      sub: "",
      answers: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 }
      ]
    },
    { text: "How often do you feel left out?",
      sub: "",
      answers: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 }
      ]
    },
    { text: "How often do you feel isolated from others?",
      sub: "",
      answers: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 }
      ]
    },
    { text: "How often do you feel that you have people you can talk to?",
      sub: "Reverse item — not having people is the lonely answer.",
      answers: [
        { text: "Always", score: 0 },
        { text: "Usually", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Rarely or never", score: 3 }
      ]
    },
    { text: "How often do you feel that people around you share your interests and ideas?",
      sub: "",
      answers: [
        { text: "Always", score: 0 },
        { text: "Usually", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Rarely or never", score: 3 }
      ]
    },
    { text: "How often do you feel that there are people you can turn to?",
      sub: "",
      answers: [
        { text: "Always", score: 0 },
        { text: "Usually", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Rarely or never", score: 3 }
      ]
    },
    { text: "How often do you feel that your relationships are superficial?",
      sub: "",
      answers: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 }
      ]
    },
    { text: "How often do you feel that no one really knows you well?",
      sub: "",
      answers: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 }
      ]
    },
    { text: "How often do you feel that you are 'on the outside looking in'?",
      sub: "",
      answers: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 }
      ]
    },
    { text: "How often do you feel completely alone, even in the company of others?",
      sub: "",
      answers: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 }
      ]
    }
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, meterLeft, meterRight;
    meterLeft = '🤝 Connected';
    meterRight = '🌑 Isolated';
    if (pct >= 70) {
      icon = '🌑'; title = 'High Loneliness';
      subtitle = 'You are experiencing significant loneliness — a real and painful absence of felt connection.';
      traits = [
        { icon: '🧠', text: '<strong>Loneliness activates the same neural pathways as physical pain</strong> — this is not \'just a feeling\', it\'s a biological signal.' },
        { icon: '🔍', text: '<strong>At this level, the mind often begins anticipating rejection</strong> — which paradoxically makes connection harder to initiate.' },
        { icon: '🌱', text: '<strong>Quality over quantity</strong>: research by Cacioppo shows one genuine connection matters more than many superficial ones.' },
        { icon: '📚', text: '<strong>Recommended</strong>: John Cacioppo\'s Loneliness: Human Nature and the Need for Social Connection — the definitive scientific account.' }
      ];
    } else if (pct >= 40) {
      icon = '🌒'; title = 'Moderate Loneliness';
      subtitle = 'You feel disconnected in meaningful ways — the connections you have don\'t fully satisfy your need to be seen.';
      traits = [
        { icon: '👁️', text: '<strong>Moderate loneliness often isn\'t about the number of people around you</strong> — it\'s about depth of being truly known.' },
        { icon: '🔄', text: '<strong>Cacioppo\'s research shows loneliness is contagious within social networks</strong> — and so is connection. Invest in one relationship.' },
        { icon: '🗣️', text: '<strong>Self-disclosure research (Jourard, 1971) shows that being willing to be known</strong> is what creates intimacy — not shared activities alone.' },
        { icon: '💡', text: '<strong>Loneliness and solitude are different</strong>: solitude is chosen, restorative; loneliness is an involuntary pain. This matters for how you work with it.' }
      ];
    } else if (pct >= 15) {
      icon = '🌔'; title = 'Mild or Situational Loneliness';
      subtitle = 'Some disconnection is present, but your social foundation is relatively intact.';
      traits = [
        { icon: '🌤️', text: '<strong>Some loneliness is normal</strong> — particularly during transitions, losses, or periods of major change.' },
        { icon: '🤝', text: '<strong>The connections you have appear to be serving you reasonably well</strong> — even if not perfectly.' },
        { icon: '🌿', text: '<strong>Small investments in existing relationships tend to have high returns</strong> at this level.' },
        { icon: '📚', text: '<strong>Susan Pinker\'s The Village Effect</strong> highlights the power of face-to-face contact as the most effective antidote to loneliness.' }
      ];
    } else {
      icon = '🤝'; title = 'Low Loneliness';
      subtitle = 'You experience a meaningful sense of connection and belonging in your life.';
      traits = [
        { icon: '✅', text: '<strong>A sense of felt connection is one of the most powerful predictors</strong> of wellbeing and longevity.' },
        { icon: '🌍', text: '<strong>Cacioppo\'s longitudinal research shows social connection rivals smoking cessation</strong> in health impact.' },
        { icon: '💡', text: '<strong>Connection quality matters more than quantity</strong> — and it sounds like you have both.' },
        { icon: '🌱', text: '<strong>Being a source of connection for others</strong> is the other half of this equation — and it compounds.' }
      ];
    }
    return {
      icon, title, subtitle, traits,
      meterPct: pct,
      meterLeft,
      meterRight,
      extra: `<strong>Score:</strong> ${pct}% loneliness indicators<br><br>Based on: Russell, D.W. (1996). UCLA Loneliness Scale Version 3: reliability, validity, and factor structure. <em>Journal of Personality Assessment, 66</em>(1), 20–40.`
    };
  }
},

selfesteem: {
  id: 'selfesteem', color: '#10b981',
  icon: '🌟', title: 'How Is My Self-Esteem?',
  descHtml: `Based on the Rosenberg Self-Esteem Scale (Rosenberg, 1965) — the most widely used self-esteem measure in social science, validated in 53+ countries. Measures global self-worth and self-acceptance.<br><br><strong>10 questions · ~3 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "I feel that I am a person of worth, at least on an equal basis with others.",
      sub: "",
      answers: [
        { text: "Strongly Disagree", score: 0 },
        { text: "Disagree", score: 1 },
        { text: "Agree", score: 2 },
        { text: "Strongly Agree", score: 3 }
      ]
    },
    { text: "I feel that I have a number of good qualities.",
      sub: "",
      answers: [
        { text: "Strongly Disagree", score: 0 },
        { text: "Disagree", score: 1 },
        { text: "Agree", score: 2 },
        { text: "Strongly Agree", score: 3 }
      ]
    },
    { text: "All in all, I am inclined to feel that I am a failure.",
      sub: "Reflect honestly — this doesn't mean you've failed at everything.",
      answers: [
        { text: "Strongly Agree", score: 0 },
        { text: "Agree", score: 1 },
        { text: "Disagree", score: 2 },
        { text: "Strongly Disagree", score: 3 }
      ]
    },
    { text: "I am able to do things as well as most other people.",
      sub: "",
      answers: [
        { text: "Strongly Disagree", score: 0 },
        { text: "Disagree", score: 1 },
        { text: "Agree", score: 2 },
        { text: "Strongly Agree", score: 3 }
      ]
    },
    { text: "I feel I do not have much to be proud of.",
      sub: "",
      answers: [
        { text: "Strongly Agree", score: 0 },
        { text: "Agree", score: 1 },
        { text: "Disagree", score: 2 },
        { text: "Strongly Disagree", score: 3 }
      ]
    },
    { text: "I take a positive attitude toward myself.",
      sub: "",
      answers: [
        { text: "Strongly Disagree", score: 0 },
        { text: "Disagree", score: 1 },
        { text: "Agree", score: 2 },
        { text: "Strongly Agree", score: 3 }
      ]
    },
    { text: "On the whole, I am satisfied with myself.",
      sub: "",
      answers: [
        { text: "Strongly Disagree", score: 0 },
        { text: "Disagree", score: 1 },
        { text: "Agree", score: 2 },
        { text: "Strongly Agree", score: 3 }
      ]
    },
    { text: "I wish I could have more respect for myself.",
      sub: "",
      answers: [
        { text: "Strongly Agree", score: 0 },
        { text: "Agree", score: 1 },
        { text: "Disagree", score: 2 },
        { text: "Strongly Disagree", score: 3 }
      ]
    },
    { text: "I certainly feel useless at times.",
      sub: "",
      answers: [
        { text: "Strongly Agree", score: 0 },
        { text: "Agree", score: 1 },
        { text: "Disagree", score: 2 },
        { text: "Strongly Disagree", score: 3 }
      ]
    },
    { text: "At times I think I am no good at all.",
      sub: "",
      answers: [
        { text: "Strongly Agree", score: 0 },
        { text: "Agree", score: 1 },
        { text: "Disagree", score: 2 },
        { text: "Strongly Disagree", score: 3 }
      ]
    }
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, meterLeft, meterRight;
    meterLeft = '🌟 High Self-Worth';
    meterRight = '🪞 Low Self-Worth';
    if (pct < 35) {
      icon = '🪞'; title = 'Low Self-Esteem';
      subtitle = 'Your self-view is currently marked by persistent self-doubt and a lack of felt self-worth.';
      traits = [
        { icon: '🧠', text: '<strong>Low self-esteem often feels like objective fact</strong> — \'I am bad at things\' — but it\'s a cognitive distortion, not an accurate assessment.' },
        { icon: '🔍', text: '<strong>Rosenberg\'s research shows self-esteem is learned</strong> — which means it can change. It is not a fixed trait.' },
        { icon: '🌿', text: '<strong>The inner critic often sounds protective</strong> (preventing failure, rejection) but actually increases vulnerability to both.' },
        { icon: '📚', text: '<strong>Recommended</strong>: Kristin Neff\'s Self-Compassion (note: the compassion quiz is also available here) and David Burns\' Feeling Good for practical tools.' }
      ];
    } else if (pct < 60) {
      icon = '🌤️'; title = 'Moderate Self-Esteem';
      subtitle = 'Your self-worth is present but inconsistent — some areas feel solid, others are undermined by doubt.';
      traits = [
        { icon: '🎭', text: '<strong>Moderate self-esteem often comes with \'contingent self-esteem\'</strong> — worth that depends on performance, approval, or appearance.' },
        { icon: '🔄', text: '<strong>Deci & Ryan\'s self-determination research shows intrinsic (unconditional) self-esteem</strong> is more stable than performance-based worth.' },
        { icon: '🌱', text: '<strong>The goal isn\'t relentless positivity about yourself</strong> — it\'s an accurate, stable, compassionate appraisal.' },
        { icon: '💡', text: '<strong>Paying attention to your self-talk in moments of failure</strong> is the most revealing diagnostic — and the most leveraged intervention point.' }
      ];
    } else {
      icon = '🌟'; title = 'Healthy Self-Esteem';
      subtitle = 'You have a solid foundation of felt self-worth — not arrogance, but genuine self-acceptance.';
      traits = [
        { icon: '✅', text: '<strong>Rosenberg\'s research shows high self-esteem predicts resilience, better relationships, and effective coping</strong> — this matters.' },
        { icon: '🌍', text: '<strong>True self-esteem isn\'t about thinking you\'re better than others</strong> — it\'s about not being constantly at war with yourself.' },
        { icon: '🤝', text: '<strong>People with secure self-esteem take criticism better</strong>, because their worth doesn\'t depend on never being wrong.' },
        { icon: '💡', text: '<strong>The maintenance of self-esteem involves honest self-appraisal</strong> — neither grandiosity nor self-flagellation, but clear-eyed acceptance.' }
      ];
    }
    return {
      icon, title, subtitle, traits,
      meterPct: pct,
      meterLeft,
      meterRight,
      extra: `<strong>Score:</strong> ${pct}% self-esteem<br><br>Based on: Rosenberg, M. (1965). <em>Society and the Adolescent Self-Image.</em> Princeton University Press. Validated in Schmitt, D.P., &amp; Allik, J. (2005) across 53 nations.`
    };
  }
},

stress: {
  id: 'stress', color: '#f59e0b',
  icon: '🌀', title: 'How Stressed Am I?',
  descHtml: `Based on the Perceived Stress Scale-10 (Cohen, Kamarck &amp; Mermelstein, 1983) — the most widely used instrument to measure psychological stress perception. PSS-10 captures how unpredictable, uncontrollable, and overloaded life feels.<br><br><strong>10 questions · ~3 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "How often have you been upset because of something unexpected?",
      sub: "In the past month.",
      answers: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Very often", score: 3 }
      ]
    },
    { text: "How often have you felt unable to control important things in your life?",
      sub: "",
      answers: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Very often", score: 3 }
      ]
    },
    { text: "How often have you felt nervous or stressed?",
      sub: "",
      answers: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Very often", score: 3 }
      ]
    },
    { text: "How often have you felt confident about your ability to handle personal problems?",
      sub: "Reverse item — confidence is protective.",
      answers: [
        { text: "Very often", score: 0 },
        { text: "Sometimes", score: 1 },
        { text: "Rarely", score: 2 },
        { text: "Never", score: 3 }
      ]
    },
    { text: "How often have you felt that things were going your way?",
      sub: "",
      answers: [
        { text: "Very often", score: 0 },
        { text: "Sometimes", score: 1 },
        { text: "Rarely", score: 2 },
        { text: "Never", score: 3 }
      ]
    },
    { text: "How often have you found that you could not cope with all the things you had to do?",
      sub: "",
      answers: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Very often", score: 3 }
      ]
    },
    { text: "How often have you been able to control irritations in your life?",
      sub: "",
      answers: [
        { text: "Very often", score: 0 },
        { text: "Sometimes", score: 1 },
        { text: "Rarely", score: 2 },
        { text: "Never", score: 3 }
      ]
    },
    { text: "How often have you felt that you were on top of things?",
      sub: "",
      answers: [
        { text: "Very often", score: 0 },
        { text: "Sometimes", score: 1 },
        { text: "Rarely", score: 2 },
        { text: "Never", score: 3 }
      ]
    },
    { text: "How often have you been angered because of things outside your control?",
      sub: "",
      answers: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Very often", score: 3 }
      ]
    },
    { text: "How often have you felt difficulties were piling up so high you could not overcome them?",
      sub: "",
      answers: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Very often", score: 3 }
      ]
    }
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, meterLeft, meterRight;
    meterLeft = '🌿 Calm';
    meterRight = '🌪️ Overwhelmed';
    if (pct >= 70) {
      icon = '🌪️'; title = 'High Perceived Stress';
      subtitle = 'You are experiencing significant psychological stress — your system perceives life as substantially uncontrollable and overwhelming.';
      traits = [
        { icon: '🚨', text: '<strong>At this level, cognitive function, physical health, and emotional regulation are all impaired</strong> — stress is not \'just mental\'.' },
        { icon: '🧠', text: '<strong>Cohen\'s research shows high perceived stress is a stronger predictor of health outcomes than objective stressors</strong> — how you interpret pressure matters.' },
        { icon: '🌿', text: '<strong>The most evidence-based acute interventions</strong>: physiological sigh (double inhale, long exhale), cold exposure, and vigorous exercise to discharge cortisol.' },
        { icon: '📚', text: '<strong>Recommended</strong>: Robert Sapolsky\'s Why Zebras Don\'t Get Ulcers — the definitive account of chronic stress biology.' }
      ];
    } else if (pct >= 45) {
      icon = '⚡'; title = 'Moderate Stress';
      subtitle = 'Stress is meaningfully present — not at crisis level, but enough to affect your clarity and capacity.';
      traits = [
        { icon: '🔄', text: '<strong>Cohen\'s research shows moderate stress has a nonlinear relationship with performance</strong> — some is optimal, too much becomes impairing.' },
        { icon: '🎯', text: '<strong>Perceived control is the key variable</strong>: stress that feels uncontrollable is physiologically more damaging than equivalent stress with clear action available.' },
        { icon: '🌱', text: '<strong>Stress inoculation — controlled exposure to manageable stressors — actually builds resilience</strong> over time. The goal isn\'t zero stress.' },
        { icon: '💡', text: '<strong>Identify one domain where you can meaningfully increase your sense of control</strong> — this has outsized impact on overall stress perception.' }
      ];
    } else if (pct >= 20) {
      icon = '🌤️'; title = 'Mild Stress';
      subtitle = 'Some stress is present, but you appear to have reasonable capacity and control over your life conditions.';
      traits = [
        { icon: '✅', text: '<strong>Mild stress can sharpen focus and motivation</strong> — you\'re likely in the zone where it\'s working for you rather than against you.' },
        { icon: '🌱', text: '<strong>The buffers you\'ve built (routines, relationships, recovery) are doing their job</strong> — keep investing in them.' },
        { icon: '🔍', text: '<strong>Notice where the remaining stress lives</strong> — it\'s usually clustered in one or two specific domains rather than pervasive.' },
        { icon: '📚', text: '<strong>Kelly McGonigal\'s The Upside of Stress</strong> documents how stress mindset itself shapes whether stress is harmful or adaptive.' }
      ];
    } else {
      icon = '🌿'; title = 'Low Perceived Stress';
      subtitle = 'You feel largely in control of your life — calm, capable, and not overwhelmed.';
      traits = [
        { icon: '✅', text: '<strong>Low perceived stress is one of the most powerful predictors</strong> of immune function, cardiovascular health, and cognitive clarity.' },
        { icon: '🤝', text: '<strong>Social support is consistently the top predictor of stress resilience</strong> — it sounds like yours is strong.' },
        { icon: '💡', text: '<strong>Cohen\'s research shows this state is not static</strong> — it\'s worth understanding what\'s protecting you so you can sustain it deliberately.' },
        { icon: '🌍', text: '<strong>Sharing this capacity (through presence, listening, reduced reactivity) benefits the people around you</strong> — stress and calm are both contagious.' }
      ];
    }
    return {
      icon, title, subtitle, traits,
      meterPct: pct,
      meterLeft,
      meterRight,
      extra: `<strong>Score:</strong> ${pct}% perceived stress<br><br>Based on: Cohen, S., Kamarck, T., &amp; Mermelstein, R. (1983). A global measure of perceived stress. <em>Journal of Health and Social Behavior, 24</em>(4), 385–396.`
    };
  }
},

socialanxiety: {
  id: 'socialanxiety', color: '#c084fc',
  icon: '👁️', title: 'Do I Have Social Anxiety?',
  descHtml: `Based on the Social Phobia Inventory (SPIN; Connor et al., 2000) and Liebowitz Social Anxiety Scale — validated instruments used in clinical screening for social anxiety disorder. Social anxiety is the fear of negative evaluation in social situations.<br><br><strong>12 questions · ~4 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "I am afraid of people in authority.",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "A little", score: 1 },
        { text: "Quite a bit", score: 2 },
        { text: "Extremely", score: 3 }
      ]
    },
    { text: "I am bothered by blushing in front of people.",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "A little", score: 1 },
        { text: "Quite a bit", score: 2 },
        { text: "Extremely", score: 3 }
      ]
    },
    { text: "Parties and social events frighten me.",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "A little", score: 1 },
        { text: "Quite a bit", score: 2 },
        { text: "Extremely", score: 3 }
      ]
    },
    { text: "I avoid talking to people I don't know.",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "A little", score: 1 },
        { text: "Quite a bit", score: 2 },
        { text: "Extremely", score: 3 }
      ]
    },
    { text: "Being criticized scares me a lot.",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "A little", score: 1 },
        { text: "Quite a bit", score: 2 },
        { text: "Extremely", score: 3 }
      ]
    },
    { text: "I avoid doing things or speaking to people for fear of embarrassment.",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "A little", score: 1 },
        { text: "Quite a bit", score: 2 },
        { text: "Extremely", score: 3 }
      ]
    },
    { text: "Sweating in front of people causes me distress.",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "A little", score: 1 },
        { text: "Quite a bit", score: 2 },
        { text: "Extremely", score: 3 }
      ]
    },
    { text: "I avoid going to parties.",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "A little", score: 1 },
        { text: "Quite a bit", score: 2 },
        { text: "Extremely", score: 3 }
      ]
    },
    { text: "I avoid being the center of attention.",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "A little", score: 1 },
        { text: "Quite a bit", score: 2 },
        { text: "Extremely", score: 3 }
      ]
    },
    { text: "Talking to strangers scares me.",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "A little", score: 1 },
        { text: "Quite a bit", score: 2 },
        { text: "Extremely", score: 3 }
      ]
    },
    { text: "I would do anything to avoid being criticized.",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "A little", score: 1 },
        { text: "Quite a bit", score: 2 },
        { text: "Extremely", score: 3 }
      ]
    },
    { text: "I feel self-conscious in front of people, even those I know.",
      sub: "",
      answers: [
        { text: "Not at all", score: 0 },
        { text: "A little", score: 1 },
        { text: "Quite a bit", score: 2 },
        { text: "Extremely", score: 3 }
      ]
    }
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, meterLeft, meterRight;
    meterLeft = '😌 Comfortable';
    meterRight = '🫥 Anxious';
    if (pct >= 65) {
      icon = '🫥'; title = 'Significant Social Anxiety';
      subtitle = 'Social anxiety is substantially affecting your life — interactions carry a weight and dread that most people don\'t experience.';
      traits = [
        { icon: '🧠', text: '<strong>Social anxiety activates the same threat response as physical danger</strong> — your nervous system is not overreacting, it\'s misfiring threat detection.' },
        { icon: '🔍', text: '<strong>Clark & Wells\' cognitive model shows social anxiety is maintained by self-focused attention and safety behaviors</strong> — these temporarily reduce fear but reinforce it long-term.' },
        { icon: '🌱', text: '<strong>Exposure-based therapy (CBT) has the strongest evidence base for social anxiety</strong> — gradually facing feared situations with support is more effective than avoidance.' },
        { icon: '📚', text: '<strong>Recommended</strong>: Gillian Butler\'s Overcoming Social Anxiety and Shyness — a clinician-designed self-help workbook based on CBT.' }
      ];
    } else if (pct >= 35) {
      icon = '👁️'; title = 'Moderate Social Anxiety';
      subtitle = 'Social situations create meaningful discomfort — you can manage, but the internal experience carries significant weight.';
      traits = [
        { icon: '🎭', text: '<strong>Social anxiety at moderate levels often manifests as over-preparation, rehearsal, post-event rumination</strong> — the analysis before and after the conversation.' },
        { icon: '🔄', text: '<strong>The \'spotlight effect\' (Gilovich et al., 2000)</strong> — people notice us far less than we believe. Social anxiety over-estimates our visibility.' },
        { icon: '🧩', text: '<strong>Safety behaviors (avoiding eye contact, over-scripting, staying on the periphery) provide short-term comfort</strong> but confirm the belief that the situation is dangerous.' },
        { icon: '💡', text: '<strong>Gradual, voluntary exposure to social discomfort</strong> — with attention on the environment rather than self — is the most evidence-based path.' }
      ];
    } else if (pct >= 15) {
      icon = '🌤️'; title = 'Mild Social Discomfort';
      subtitle = 'Social situations create some tension, but it\'s within the normal human range and manageable.';
      traits = [
        { icon: '🌿', text: '<strong>Some social anxiety is adaptive</strong> — it motivates preparation and signals social belonging matters to you.' },
        { icon: '✅', text: '<strong>At this level, the anxiety is unlikely to be significantly impairing your life</strong>, though it may create unnecessary friction in specific situations.' },
        { icon: '🎯', text: '<strong>The highest-leverage intervention</strong>: practice tolerating mild discomfort rather than avoiding it — this is what builds genuine confidence.' },
        { icon: '📚', text: '<strong>Susan Cain\'s Quiet</strong> distinguishes introversion (temperament) from social anxiety (fearful avoidance) — useful if you\'re unsure which applies.' }
      ];
    } else {
      icon = '😌'; title = 'Low Social Anxiety';
      subtitle = 'Social interactions don\'t carry significant dread or avoidance for you.';
      traits = [
        { icon: '✅', text: '<strong>Comfort in social situations is a genuine asset</strong> — not just personally but in your ability to support others.' },
        { icon: '🌍', text: '<strong>Low social anxiety doesn\'t mean extraversion</strong> — you can be private, quiet, and reserved without the fear dimension.' },
        { icon: '💡', text: '<strong>If you\'re here because someone you know struggles socially</strong>, Connor et al.\'s research shows patient, low-pressure environments are the most supportive.' },
        { icon: '🤝', text: '<strong>Social comfort is partly temperament, partly learned</strong> — the research is clear that it can shift with practice and the right support.' }
      ];
    }
    return {
      icon, title, subtitle, traits,
      meterPct: pct,
      meterLeft,
      meterRight,
      extra: `<strong>Score:</strong> ${pct}% social anxiety indicators<br><br>Based on: Connor, K.M. et al. (2000). Psychometric properties of the Social Phobia Inventory. <em>British Journal of Psychiatry, 176</em>, 379–386.`
    };
  }
},


ptsd: {
  id: 'ptsd', color: '#8b5cf6',
  icon: '🌫️', title: 'Am I Carrying Trauma Symptoms?',
  descHtml: `Based on the <strong>PCL-5</strong> (PTSD Checklist for DSM-5), developed by Weathers et al. (2013) at the U.S. National Center for PTSD, this quiz screens for trauma-related symptoms across four clusters: re-experiencing, avoidance, negative mood, and hyperarousal.<br><br><strong>10 questions · ~3 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "Do memories, images, or feelings from a past distressing event come back to you without you choosing to think about it?",
      sub: "This includes intrusive thoughts, flashbacks, or dreams.",
      answers: [
        { text: "Rarely or never — I have control over what I recall", score: 0 },
        { text: "Occasionally, but it doesn't linger", score: 1 },
        { text: "Often enough that it catches me off-guard", score: 2 },
        { text: "Frequently — memories surface unbidden and feel vivid", score: 3 },
      ]
    },
    { text: "Do you avoid thoughts, feelings, or reminders connected to something painful that happened to you?",
      sub: "Avoidance can be internal (blocking thoughts) or external (avoiding places, people, topics).",
      answers: [
        { text: "Not particularly — I can engage with difficult memories", score: 0 },
        { text: "Mildly — I prefer not to think about certain things", score: 1 },
        { text: "Yes — I actively steer away from reminders", score: 2 },
        { text: "Strongly — I avoid entire areas of my life to stay clear of it", score: 3 },
      ]
    },
    { text: "Have you lost interest in activities or relationships that once mattered to you?",
      sub: "Consider whether this change followed something difficult.",
      answers: [
        { text: "No — I'm largely engaged with things I care about", score: 0 },
        { text: "Somewhat — my enthusiasm has dimmed in some areas", score: 1 },
        { text: "Yes — several things I used to value feel hollow now", score: 2 },
        { text: "Significantly — I feel cut off from things and people I once loved", score: 3 },
      ]
    },
    { text: "Do you feel emotionally numb, disconnected, or like you're watching your life from a distance?",
      sub: "Psychologists call this dissociation or emotional blunting.",
      answers: [
        { text: "Rarely — I generally feel present in my life", score: 0 },
        { text: "Sometimes I feel a step removed but it passes", score: 1 },
        { text: "Often — I feel like I'm watching life rather than living it", score: 2 },
        { text: "Most of the time — I feel emotionally flat or detached", score: 3 },
      ]
    },
    { text: "Do you feel that your future is somehow cut short, limited, or that you can't picture a normal life ahead?",
      answers: [
        { text: "No — I have a sense of future and possibility", score: 0 },
        { text: "Occasionally I wonder, but it doesn't dominate", score: 1 },
        { text: "I struggle to imagine long-term plans or milestones", score: 2 },
        { text: "I feel a deep sense that things will not get better or be 'normal'", score: 3 },
      ]
    },
    { text: "Do you feel persistently negative about yourself, others, or the world since something difficult happened?",
      sub: "'Nothing matters', 'people can't be trusted', 'I am broken' — these are examples.",
      answers: [
        { text: "No — I have a broadly balanced view of myself and others", score: 0 },
        { text: "There are darker thoughts, but I don't feel consumed by them", score: 1 },
        { text: "I carry a pervasive negativity that's hard to shake", score: 2 },
        { text: "I hold deeply negative beliefs about myself, others, or life", score: 3 },
      ]
    },
    { text: "Are you easily startled, or do you feel constantly on edge or alert for danger?",
      sub: "Hypervigilance is the nervous system staying in threat-detection mode.",
      answers: [
        { text: "Rarely — I don't feel like I'm bracing for threat", score: 0 },
        { text: "I startle easily, but it doesn't disrupt my life much", score: 1 },
        { text: "I'm often tense, scanning my environment, hard to fully relax", score: 2 },
        { text: "I feel in a near-constant state of alertness or dread", score: 3 },
      ]
    },
    { text: "Do you experience sudden intense irritability, anger, or emotional explosions that feel hard to control?",
      answers: [
        { text: "Not typically — my emotional reactions are manageable", score: 0 },
        { text: "I can be reactive at times, but it's not a pattern", score: 1 },
        { text: "Yes — I have surges of irritability that concern me or others", score: 2 },
        { text: "Frequently — anger or intense emotions feel like they take over", score: 3 },
      ]
    },
    { text: "Do you have trouble sleeping — difficulty falling asleep, staying asleep, or waking from nightmares?",
      answers: [
        { text: "Sleep is mostly fine — I wake rested", score: 0 },
        { text: "Some disruption, but manageable", score: 1 },
        { text: "Regular trouble with sleep quality or nightmares", score: 2 },
        { text: "Sleep is severely disturbed — nightmares or waking exhausted most nights", score: 3 },
      ]
    },
    { text: "Do you engage in risky, reckless, or self-destructive behaviour that you didn't before?",
      sub: "This can include substance use, unsafe situations, or impulsive decisions.",
      answers: [
        { text: "No — my risk behaviour hasn't noticeably changed", score: 0 },
        { text: "Slightly — I take more risks but nothing alarming", score: 1 },
        { text: "Yes — I notice self-destructive patterns I struggle to explain", score: 2 },
        { text: "Yes — recklessness or self-harm is a real issue in my life", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🟢 Minimal symptoms';
    const meterRight = 'Significant symptoms';
    if (pct < 25) {
      icon = '🌤️'; title = 'Minimal Trauma Symptoms';
      subtitle = 'Few indicators of active post-traumatic stress are present at this time.';
      traits = [
        { icon: '✅', text: '<strong>Low symptom burden</strong> — your nervous system doesn\'t appear to be carrying significant unresolved trauma responses right now.' },
        { icon: '🌱', text: '<strong>Resilience is real</strong> — Bonanno\'s research shows most people show natural recovery after adversity. Low scores reflect that.' },
        { icon: '🔍', text: '<strong>Absence of symptoms doesn\'t mean absence of difficulty</strong> — everyone has experiences that shaped them, even without meeting clinical thresholds.' },
        { icon: '💬', text: '<strong>If you took this because of a recent experience</strong>, know that symptoms can emerge weeks later. Check back in if things shift.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — below clinical threshold<br><br>Based on: Weathers, F.W. et al. (2013). <em>PTSD Checklist for DSM-5 (PCL-5)</em>. National Center for PTSD. A score in this range typically falls below the clinical cutoff of ~33% on the full PCL-5.`;
    } else if (pct < 50) {
      icon = '🌥️'; title = 'Subthreshold Trauma Responses';
      subtitle = 'Some trauma-related symptoms are present but below clinical threshold.';
      traits = [
        { icon: '⚠️', text: '<strong>Subthreshold doesn\'t mean insignificant</strong> — Stein et al. found subthreshold PTSD produces meaningful functional impairment and distress.' },
        { icon: '🔄', text: '<strong>Avoidance, intrusions, and hyperarousal can coexist at low levels</strong> and still affect sleep, relationships, and daily functioning.' },
        { icon: '🧠', text: '<strong>Nervous system dysregulation</strong> — what you\'re describing may reflect a trauma response still active in the body even without full PTSD criteria.' },
        { icon: '🌿', text: '<strong>Evidence-based support helps here too</strong> — trauma-informed therapy, somatic practices, and safe relationships all support recovery at any severity level.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — subthreshold range<br><br>Based on: Weathers, F.W. et al. (2013). <em>PCL-5</em>. Subthreshold PTSD is clinically recognised in research and produces real suffering even without meeting full DSM-5 criteria.`;
    } else if (pct < 73) {
      icon = '🌧️'; title = 'Significant Trauma Symptoms';
      subtitle = 'Your responses suggest a meaningful level of post-traumatic stress that warrants attention.';
      traits = [
        { icon: '🔴', text: '<strong>Scores in this range suggest probable PTSD</strong> — the PCL-5 research by Weathers et al. places the clinical threshold around 31–33/80. Your score pattern is notable.' },
        { icon: '🧩', text: '<strong>Trauma symptoms are not character flaws</strong> — they are the nervous system\'s survival adaptations. Van der Kolk\'s work confirms they are physiological, not personal weakness.' },
        { icon: '🛡️', text: '<strong>Hypervigilance and avoidance served a purpose</strong> — they were protective. The work now is teaching the nervous system it\'s safe to lower the guard.' },
        { icon: '🤝', text: '<strong>Effective treatments exist</strong> — EMDR, CPT (Cognitive Processing Therapy), and prolonged exposure are all evidence-based with strong outcomes for PTSD.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — probable clinical range<br><br>Based on: Weathers, F.W. et al. (2013). <em>PCL-5</em>. Blevins et al. (2015) confirmed a cutoff of 31–33 on the full scale as optimal for probable PTSD. <strong>Please consider speaking with a trauma-informed professional.</strong>`;
    } else {
      icon = '⛈️'; title = 'Severe Trauma Symptoms';
      subtitle = 'Your responses indicate a high symptom burden. You deserve real support.';
      traits = [
        { icon: '❗', text: '<strong>High scores reflect real suffering</strong> — what you are carrying is significant, and it is not a reflection of weakness or who you are as a person.' },
        { icon: '🧬', text: '<strong>Complex trauma changes the brain and body</strong> — research by van der Kolk, Bessel, and Perry shows trauma literally rewires the nervous system, explaining the intensity of your experience.' },
        { icon: '💊', text: '<strong>Multiple pathways to healing exist</strong> — EMDR, somatic therapy, CPT, IFS (Internal Family Systems), and MDMA-assisted therapy (emerging) have strong evidence for complex PTSD.' },
        { icon: '🙏', text: '<strong>You are not broken — you adapted to survive</strong>. Recovery at this level is possible, but it truly benefits from professional, trauma-specialised support. Please reach out.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — severe range<br><br>Based on: Weathers, F.W. et al. (2013). <em>PCL-5</em>. Scores in this range warrant assessment by a licensed mental health professional trained in trauma. If you are in crisis, please contact a crisis line or emergency services.`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

ocd: {
  id: 'ocd', color: '#06b6d4',
  icon: '🔁', title: 'Do I Have OCD Tendencies?',
  descHtml: `Based on the <strong>OCI-R</strong> (Obsessive-Compulsive Inventory–Revised) by Foa et al. (2002), one of the most widely used self-report tools for OCD. It screens across six dimensions: washing, obsessing, hoarding, ordering, checking, and neutralising.<br><br><strong>10 questions · ~3 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "Do you have unpleasant thoughts that enter your mind and won't leave, even though you try to push them away?",
      sub: "Intrusive thoughts are central to OCD — they are ego-dystonic, meaning they feel foreign and distressing.",
      answers: [
        { text: "Rarely — my mind doesn't tend to get stuck on unwanted thoughts", score: 0 },
        { text: "Occasionally — a thought loops but eventually lets go", score: 1 },
        { text: "Often — certain thoughts return and cause significant distress", score: 2 },
        { text: "Constantly — intrusive thoughts are a major part of my day", score: 3 },
      ]
    },
    { text: "Do you check things repeatedly — locks, appliances, switches — even when you know you already checked?",
      answers: [
        { text: "Rarely — once is enough for me", score: 0 },
        { text: "Sometimes I double-check but it's not disruptive", score: 1 },
        { text: "Yes — I check multiple times and still feel uncertain", score: 2 },
        { text: "I check so many times it significantly delays me", score: 3 },
      ]
    },
    { text: "Do you wash or clean more than most people, or feel deeply uncomfortable if you can't?",
      sub: "This includes hand-washing, surface cleaning, or rituals around contamination.",
      answers: [
        { text: "No — my cleaning habits are ordinary", score: 0 },
        { text: "I'm a bit meticulous, but it doesn't take over", score: 1 },
        { text: "Yes — I wash or clean more than I want to, driven by discomfort", score: 2 },
        { text: "Significantly — contamination fears drive repetitive washing that consumes real time", score: 3 },
      ]
    },
    { text: "Do you feel driven to arrange things in a particular order, symmetry, or pattern?",
      sub: "'Just right' OCD — the urge to make things feel 'correct' or balanced.",
      answers: [
        { text: "Not really — disorder doesn't bother me much", score: 0 },
        { text: "I have preferences, but I can let it go", score: 1 },
        { text: "Yes — asymmetry or disorder creates real discomfort until I fix it", score: 2 },
        { text: "Strongly — I spend significant time arranging things to feel right", score: 3 },
      ]
    },
    { text: "Do you mentally repeat phrases, count, or perform mental acts to neutralise a thought or feeling?",
      sub: "Mental compulsions are just as real as physical ones — praying, counting, reviewing.",
      answers: [
        { text: "No — I don't tend to use mental rituals", score: 0 },
        { text: "Occasionally — I might mentally review something to calm down", score: 1 },
        { text: "Yes — I use mental rituals to neutralise distress regularly", score: 2 },
        { text: "Extensively — mental compulsions are a significant part of my coping", score: 3 },
      ]
    },
    { text: "Do you have difficulty discarding things, even items that have no practical value?",
      sub: "Hoarding OCD is driven by fear of causing harm or losing something important, not sentiment.",
      answers: [
        { text: "No — I'm comfortable letting things go", score: 0 },
        { text: "I hold onto things longer than I should sometimes", score: 1 },
        { text: "Yes — discarding causes real distress; I keep things 'just in case'", score: 2 },
        { text: "Significantly — accumulation is a major issue driven by fear of discarding", score: 3 },
      ]
    },
    { text: "When you have a disturbing thought (e.g. harming someone, something immoral), do you feel you are a bad person for having it?",
      sub: "This is called 'thought-action fusion' — one of the most well-researched OCD mechanisms.",
      answers: [
        { text: "No — I know thoughts aren't the same as intentions", score: 0 },
        { text: "Sometimes they make me uneasy but I can dismiss them", score: 1 },
        { text: "Often — intrusive thoughts make me question my character", score: 2 },
        { text: "Yes — these thoughts cause significant shame and feel like proof of something terrible", score: 3 },
      ]
    },
    { text: "Do you feel compelled to perform rituals or mental acts to prevent something bad from happening, even without a logical connection?",
      answers: [
        { text: "No — I don't feel this kind of compulsive responsibility", score: 0 },
        { text: "Occasionally, but I can override it easily", score: 1 },
        { text: "Yes — there's a feeling that if I don't do X, something bad will happen", score: 2 },
        { text: "This drives significant behaviour — I feel magically responsible for preventing harm", score: 3 },
      ]
    },
    { text: "How much time per day do obsessive thoughts or compulsive behaviours take up?",
      answers: [
        { text: "Very little — under 30 minutes most days", score: 0 },
        { text: "Around 30–60 minutes — noticeable but manageable", score: 1 },
        { text: "1–3 hours — they interfere with work, relationships, or daily life", score: 2 },
        { text: "More than 3 hours — they dominate my day", score: 3 },
      ]
    },
    { text: "Do you try to resist the obsessions or compulsions? How much control do you feel over them?",
      answers: [
        { text: "I can easily dismiss intrusive thoughts and don't feel compelled to act", score: 0 },
        { text: "I can resist most of the time with some effort", score: 1 },
        { text: "I try to resist but usually give in — the urge is stronger than my will", score: 2 },
        { text: "I feel almost no control — resistance rarely works or makes it worse", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🟢 Minimal';
    const meterRight = 'Significant OCD';
    if (pct < 28) {
      icon = '✅'; title = 'Minimal OCD Indicators';
      subtitle = 'Intrusive thoughts and compulsive urges are not significantly impacting your life.';
      traits = [
        { icon: '🧠', text: '<strong>Everyone has intrusive thoughts</strong> — Rachman\'s research found 90% of people experience them. The difference is how much power those thoughts have.' },
        { icon: '🔍', text: '<strong>OCD is about distress and interference</strong>, not about being organised or liking things clean. Your relationship with your thoughts appears healthy.' },
        { icon: '💡', text: '<strong>Low OCI-R scores</strong> correlate with the ability to let intrusive thoughts pass without engaging or acting on them — a key factor in mental wellbeing.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — below clinical threshold<br><br>Based on: Foa, E.B. et al. (2002). The Obsessive-Compulsive Inventory: Development and validation. <em>Psychological Assessment, 14</em>(4), 485–496.`;
    } else if (pct < 52) {
      icon = '🔄'; title = 'Mild OCD Tendencies';
      subtitle = 'Some obsessive or compulsive patterns are present but likely below clinical threshold.';
      traits = [
        { icon: '⚠️', text: '<strong>Subclinical OCD symptoms are common</strong> — Fullana et al. found 2.5% of the population meet full OCD criteria, but far more show subthreshold patterns.' },
        { icon: '🔒', text: '<strong>Checking and ordering</strong> at mild levels can function as anxiety management tools — they temporarily reduce distress but may reinforce the underlying anxiety.' },
        { icon: '🌀', text: '<strong>The OCD loop:</strong> intrusive thought → anxiety → compulsion → temporary relief → thought returns, stronger. Breaking the loop is the core of ERP therapy.' },
        { icon: '🌱', text: '<strong>At this level, self-guided CBT approaches</strong> — especially learning to tolerate uncertainty — can prevent escalation and reduce distress.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — mild range<br><br>Based on: Foa et al. (2002). The OCI-R clinical cutoff is typically ~21/72. Your score suggests subclinical features worth monitoring.`;
    } else if (pct < 74) {
      icon = '🌀'; title = 'Moderate OCD Symptoms';
      subtitle = 'Obsessions and compulsions appear to be creating real interference in your daily life.';
      traits = [
        { icon: '🔴', text: '<strong>Scores in this range are consistent with probable OCD</strong> — the OCI-R\'s validated cutoff by Foa et al. places clinical OCD above ~21/72.' },
        { icon: '🧩', text: '<strong>OCD is not about logic</strong> — knowing a thought is irrational doesn\'t make it less distressing. That gap between knowing and feeling is the disorder.' },
        { icon: '🛑', text: '<strong>Compulsions provide short-term relief but maintain OCD long-term</strong> — every ritual tells your brain the threat was real, strengthening the cycle.' },
        { icon: '💊', text: '<strong>Evidence-based treatment is highly effective</strong> — ERP (Exposure and Response Prevention) is the gold standard, with ~65–80% response rates. SSRIs are also established.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — probable clinical range<br><br>Based on: Foa et al. (2002). Abramowitz & Deacon (2006) confirmed OCI-R sensitivity/specificity. <strong>Consider an assessment with a CBT-trained therapist familiar with OCD.</strong>`;
    } else {
      icon = '🌪️'; title = 'Severe OCD Indicators';
      subtitle = 'Your responses suggest OCD is significantly affecting your quality of life.';
      traits = [
        { icon: '❗', text: '<strong>Severe OCD is debilitating</strong> — the WHO lists it among the top ten most disabling conditions. What you\'re experiencing is a serious medical issue, not a character flaw.' },
        { icon: '🔬', text: '<strong>Neurobiological basis</strong> — OCD involves hyperactivity in the orbitofrontal-caudate circuit. It is a brain-based disorder with well-understood mechanisms.' },
        { icon: '🏥', text: '<strong>Intensive treatment options exist</strong> — residential ERP programmes, specialist OCD clinics, and combination therapy/medication have strong outcomes even for severe presentations.' },
        { icon: '🤝', text: '<strong>You are not your thoughts</strong> — OCD hijacks the mind with distressing content that does not reflect your values or desires. Please seek specialised support.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — severe range<br><br>Based on: Foa et al. (2002). <em>OCI-R</em>. At this level, professional assessment is strongly recommended. The IOCDF (International OCD Foundation) maintains a therapist directory at iocdf.org.`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

adhd: {
  id: 'adhd', color: '#f59e0b',
  icon: '⚡', title: 'Do I Have ADHD Patterns?',
  descHtml: `Based on the <strong>ASRS v1.1</strong> (Adult ADHD Self-Report Scale), developed by Kessler et al. and endorsed by the <strong>World Health Organisation</strong> (2003). This screener covers both inattention and hyperactivity-impulsivity dimensions of adult ADHD.<br><br><strong>11 questions · ~3 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
      sub: "This is one of the WHO ASRS Part A items — highly predictive of adult ADHD.",
      answers: [
        { text: "Rarely — I follow through to completion reliably", score: 0 },
        { text: "Sometimes — I lose steam near the end but finish eventually", score: 1 },
        { text: "Often — the last 10% of a task regularly goes unfinished", score: 2 },
        { text: "Very often — I leave things incomplete more often than not", score: 3 },
      ]
    },
    { text: "How often do you have difficulty getting things in order when you have to do a task that requires organisation?",
      answers: [
        { text: "Rarely — I can organise tasks without much trouble", score: 0 },
        { text: "Sometimes — organisation requires extra effort", score: 1 },
        { text: "Often — I struggle to structure tasks and it causes delays", score: 2 },
        { text: "Very often — disorganisation is a persistent, significant problem", score: 3 },
      ]
    },
    { text: "How often do you have problems remembering appointments or obligations?",
      answers: [
        { text: "Rarely — I'm generally reliable with commitments", score: 0 },
        { text: "Sometimes — I forget things but manage with reminders", score: 1 },
        { text: "Often — forgetting appointments or obligations causes real problems", score: 2 },
        { text: "Very often — memory for commitments is a consistent issue", score: 3 },
      ]
    },
    { text: "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
      answers: [
        { text: "Rarely — I can start difficult tasks without significant delay", score: 0 },
        { text: "Sometimes — tasks feel hard to start but I push through", score: 1 },
        { text: "Often — starting difficult tasks is genuinely hard for me", score: 2 },
        { text: "Very often — I procrastinate significantly on cognitively demanding tasks", score: 3 },
      ]
    },
    { text: "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
      sub: "In adults, hyperactivity often internalises — inner restlessness is as valid as physical movement.",
      answers: [
        { text: "Rarely — I can sit calmly for extended periods", score: 0 },
        { text: "Sometimes — I shift around but it's not disruptive", score: 1 },
        { text: "Often — physical restlessness is noticeable and hard to control", score: 2 },
        { text: "Very often — sitting still is genuinely uncomfortable or near-impossible", score: 3 },
      ]
    },
    { text: "How often do you feel overly active and compelled to do things, like you're driven by a motor?",
      answers: [
        { text: "Rarely — I can pace myself and feel mentally settled", score: 0 },
        { text: "Sometimes — I can feel revved up but it's manageable", score: 1 },
        { text: "Often — I feel an internal pressure to move or act that's hard to stop", score: 2 },
        { text: "Very often — internal restlessness is a near-constant presence", score: 3 },
      ]
    },
    { text: "How often do you make careless mistakes when you have to work on a boring or difficult project?",
      answers: [
        { text: "Rarely — I check my work and maintain attention to detail", score: 0 },
        { text: "Sometimes — errors slip through when I'm bored", score: 1 },
        { text: "Often — careless mistakes are a recognisable pattern for me", score: 2 },
        { text: "Very often — careless errors regularly affect my work or life", score: 3 },
      ]
    },
    { text: "How often do you have difficulty keeping your attention when doing boring or repetitive work?",
      answers: [
        { text: "Rarely — I can sustain attention through tedious tasks", score: 0 },
        { text: "Sometimes — my mind drifts but I redirect it", score: 1 },
        { text: "Often — sustained attention on repetitive tasks is genuinely difficult", score: 2 },
        { text: "Very often — I can barely engage with monotonous tasks at all", score: 3 },
      ]
    },
    { text: "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
      answers: [
        { text: "Rarely — I track conversations without significant effort", score: 0 },
        { text: "Sometimes — I drift but catch up", score: 1 },
        { text: "Often — I miss things in conversations and have to ask people to repeat", score: 2 },
        { text: "Very often — following conversations is a real, ongoing challenge", score: 3 },
      ]
    },
    { text: "How often do you misplace or have difficulty finding things at home or at work?",
      answers: [
        { text: "Rarely — I have reasonably reliable systems for my things", score: 0 },
        { text: "Sometimes — I misplace things but find them without too much trouble", score: 1 },
        { text: "Often — losing things causes regular frustration and lost time", score: 2 },
        { text: "Very often — misplacing items is a daily, disruptive pattern", score: 3 },
      ]
    },
    { text: "How often are you distracted by activity or noise around you?",
      answers: [
        { text: "Rarely — I can filter background stimulation effectively", score: 0 },
        { text: "Sometimes — noise disrupts me but I adapt", score: 1 },
        { text: "Often — environmental distractions pull me away from tasks persistently", score: 2 },
        { text: "Very often — almost any background noise or movement derails my focus", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🟢 Minimal patterns';
    const meterRight = 'Significant ADHD patterns';
    if (pct < 25) {
      icon = '✅'; title = 'Minimal ADHD Indicators';
      subtitle = 'Your responses don\'t suggest significant ADHD-related impairment.';
      traits = [
        { icon: '🧠', text: '<strong>ADHD exists on a spectrum</strong> — Barkley\'s research confirms it\'s dimensional, not categorical. Low scores suggest your executive functioning is largely intact.' },
        { icon: '🌱', text: '<strong>Low attentional difficulty is an asset</strong> — the ability to sustain focus and organise tasks underpins performance across nearly every domain of life.' },
        { icon: '💡', text: '<strong>Everyone loses focus sometimes</strong> — ADHD diagnosis requires impairment across multiple settings, since childhood. Occasional inattention is normal.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — below screening threshold<br><br>Based on: Kessler, R.C. et al. (2005). The World Health Organization Adult ADHD Self-Report Scale. <em>Psychological Medicine, 35</em>, 245–256.`;
    } else if (pct < 50) {
      icon = '🌀'; title = 'Mild to Moderate ADHD Patterns';
      subtitle = 'Some attentional and executive functioning challenges are present.';
      traits = [
        { icon: '⚠️', text: '<strong>ASRS patterns in this range</strong> suggest subclinical or possible ADHD. Kessler et al. found the Part A screener items are particularly predictive — if you scored high on Q1–6, that\'s notable.' },
        { icon: '🔄', text: '<strong>Executive function challenges</strong> (planning, starting tasks, sustaining attention) can occur in ADHD but also in anxiety, depression, sleep deprivation, and stress.' },
        { icon: '🧩', text: '<strong>Many adults with ADHD are undiagnosed</strong> — Faraone\'s research found global adult prevalence of ~2.5–3%, with large proportions never assessed.' },
        { icon: '🌿', text: '<strong>Compensation strategies</strong> — routines, external structure, body-doubling, and time-blocking — can substantially reduce functional impact whether or not ADHD is formally present.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — mild-to-moderate range<br><br>Based on: Kessler et al. (2005). ASRS v1.1. Consider a formal assessment if these patterns cause significant functional impairment across multiple life areas.`;
    } else if (pct < 73) {
      icon = '⚡'; title = 'Significant ADHD Patterns';
      subtitle = 'Your responses are consistent with patterns commonly seen in adult ADHD.';
      traits = [
        { icon: '🔴', text: '<strong>Scores in this range are clinically significant on the ASRS</strong> — Kessler\'s validation research found these patterns highly predictive of a formal ADHD diagnosis.' },
        { icon: '🧬', text: '<strong>ADHD is neurobiological</strong> — Cortese\'s neuroimaging research confirms differences in prefrontal cortex development and dopamine/norepinephrine systems. It is not laziness or poor character.' },
        { icon: '💡', text: '<strong>Many adults find diagnosis clarifying</strong> — understanding why sustained effort, organisation, and impulse control are harder for you can reframe years of self-blame.' },
        { icon: '🛠️', text: '<strong>Evidence-based interventions work</strong> — stimulant medication has the highest effect size of any psychiatric medication for its condition. CBT for ADHD and coaching also have strong evidence.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — probable ADHD range<br><br>Based on: Kessler et al. (2005). ASRS v1.1. A score in this range warrants a formal evaluation by a psychiatrist or psychologist familiar with adult ADHD.`;
    } else {
      icon = '🌪️'; title = 'High ADHD Symptom Load';
      subtitle = 'Your responses suggest significant ADHD-related impairment across multiple domains.';
      traits = [
        { icon: '❗', text: '<strong>ADHD at this severity significantly impacts</strong> work, relationships, finances, and self-esteem — Barkley\'s longitudinal research shows cumulative life impairment without treatment.' },
        { icon: '🧠', text: '<strong>The ADHD brain isn\'t broken — it\'s differently wired</strong> — with the right accommodations and support, the same features that cause problems can become genuine strengths in the right context.' },
        { icon: '🤝', text: '<strong>Diagnosis opens doors</strong> — workplace accommodations, medication, specialised coaching, and community reduce the friction of living with ADHD substantially.' },
        { icon: '💪', text: '<strong>Many high-achieving people have ADHD</strong> — not as inspiration porn, but to illustrate that treatment transforms outcomes. The suffering is optional with the right support.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — high severity range<br><br>Based on: Kessler et al. (2005). ASRS v1.1. Faraone et al. (2021) confirmed adult ADHD prevalence ~2.5% globally. Please seek formal assessment — untreated ADHD at this level carries significant long-term costs.`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

insomnia: {
  id: 'insomnia', color: '#6366f1',
  icon: '🌙', title: 'How Bad Is My Insomnia?',
  descHtml: `Based on the <strong>ISI</strong> (Insomnia Severity Index) developed by Charles Morin (1993), the most widely validated self-report measure of insomnia severity used in clinical trials worldwide. It covers sleep onset, maintenance, early waking, satisfaction, daytime impairment, and distress.<br><br><strong>9 questions · ~2 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "How severe is your difficulty falling asleep?",
      sub: "Consider the past two weeks.",
      answers: [
        { text: "None — I fall asleep within 20–30 minutes usually", score: 0 },
        { text: "Mild — I take a bit longer, but it's not distressing", score: 1 },
        { text: "Moderate — lying awake 30–60 minutes is common", score: 2 },
        { text: "Severe — I frequently lie awake for over an hour before sleeping", score: 3 },
      ]
    },
    { text: "How severe is your difficulty staying asleep during the night?",
      answers: [
        { text: "None — I sleep through with minimal waking", score: 0 },
        { text: "Mild — I wake occasionally but fall back to sleep easily", score: 1 },
        { text: "Moderate — I wake and take 20+ minutes to fall back asleep", score: 2 },
        { text: "Severe — I wake frequently and struggle significantly to return to sleep", score: 3 },
      ]
    },
    { text: "How severe is the problem of waking up too early?",
      answers: [
        { text: "None — I wake around the time I intend to", score: 0 },
        { text: "Mild — I wake slightly early but can rest", score: 1 },
        { text: "Moderate — I regularly wake 1–2 hours before I need to", score: 2 },
        { text: "Severe — early waking is persistent and I can't return to sleep", score: 3 },
      ]
    },
    { text: "How satisfied or dissatisfied are you with your current sleep pattern?",
      answers: [
        { text: "Satisfied — my sleep feels generally adequate", score: 0 },
        { text: "Mildly dissatisfied — it could be better", score: 1 },
        { text: "Dissatisfied — my sleep leaves me consistently underrested", score: 2 },
        { text: "Very dissatisfied — my sleep is a serious ongoing problem", score: 3 },
      ]
    },
    { text: "To what extent do you think your sleep problems interfere with daily functioning?",
      sub: "Include fatigue, mood, concentration, work performance, memory.",
      answers: [
        { text: "Not at all — my days aren't significantly affected", score: 0 },
        { text: "A little — some tired days but nothing severe", score: 1 },
        { text: "Somewhat — sleep problems regularly affect my mood or performance", score: 2 },
        { text: "Very much — daytime functioning is consistently impaired", score: 3 },
      ]
    },
    { text: "How noticeable to others do you think your sleep problem is in terms of impairing your quality of life?",
      answers: [
        { text: "Not at all noticeable", score: 0 },
        { text: "Slightly — close people may notice I seem tired sometimes", score: 1 },
        { text: "Somewhat — it visibly affects my mood and engagement", score: 2 },
        { text: "Very much — others regularly comment on or are affected by my sleep issues", score: 3 },
      ]
    },
    { text: "How worried or distressed are you about your sleep problem?",
      answers: [
        { text: "Not at all — sleep doesn't cause me significant anxiety", score: 0 },
        { text: "A little — I notice it but it doesn't dominate my thoughts", score: 1 },
        { text: "Moderately — sleep concerns take up mental energy", score: 2 },
        { text: "Very much — I feel significant dread or distress about sleep", score: 3 },
      ]
    },
    { text: "How often do you find yourself lying awake worrying about not sleeping or the consequences of poor sleep?",
      sub: "Sleep-related anxiety is one of the most powerful perpetuating factors of insomnia.",
      answers: [
        { text: "Rarely — I don't think much about sleep in bed", score: 0 },
        { text: "Sometimes — thoughts about sleep arise but I let them go", score: 1 },
        { text: "Often — worry about sleep keeps me awake or worsens it", score: 2 },
        { text: "Every night — sleep anxiety is a dominant and self-fulfilling feature", score: 3 },
      ]
    },
    { text: "How does your sleep on weekend nights or nights with no obligations compare to work nights?",
      sub: "Large differences can suggest behavioural/environmental components rather than pure insomnia.",
      answers: [
        { text: "Similar — my sleep doesn't vary much", score: 0 },
        { text: "Slightly better — I sleep a bit longer when I can", score: 1 },
        { text: "Much better — I clearly recover when pressure is off", score: 2 },
        { text: "Dramatically better — weekends show my insomnia is largely situation-driven", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🌙 Restful sleep';
    const meterRight = 'Severe insomnia';
    if (pct < 26) {
      icon = '😴'; title = 'No Significant Insomnia';
      subtitle = 'Your sleep patterns don\'t indicate clinically significant insomnia.';
      traits = [
        { icon: '✅', text: '<strong>Sleep quality in this range</strong> corresponds to the ISI\'s "no clinically significant insomnia" category (scores 0–7 on the full scale).' },
        { icon: '🌱', text: '<strong>Good sleep is foundational</strong> — Walker\'s research confirms sleep affects memory consolidation, emotional regulation, immune function, and cardiovascular health.' },
        { icon: '💡', text: '<strong>Sleep hygiene maintenance</strong> — consistent wake times, light exposure management, and temperature are the three highest-leverage variables in sleep science.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — no clinically significant insomnia<br><br>Based on: Morin, C.M. (1993). <em>Insomnia: Psychological Assessment and Management</em>. Bastien et al. (2001) validated the ISI with Cronbach\'s α = .74.`;
    } else if (pct < 52) {
      icon = '🌛'; title = 'Subthreshold Insomnia';
      subtitle = 'Mild sleep difficulties are present that may benefit from attention.';
      traits = [
        { icon: '⚠️', text: '<strong>Subthreshold insomnia is not minor</strong> — Ohayon\'s population research found it associated with elevated daytime impairment, emotional dysregulation, and risk of progression.' },
        { icon: '🔄', text: '<strong>Behavioural perpetuating factors</strong> — variable sleep schedules, time in bed awake, and pre-sleep anxiety are the main drivers of insomnia that CBT-I (Cognitive Behavioural Therapy for Insomnia) targets.' },
        { icon: '🌡️', text: '<strong>Sleep restriction therapy sounds counterintuitive</strong> but is the most effective CBT-I component — mildly restricting time in bed builds sleep pressure and rebuilds the association between bed and sleep.' },
        { icon: '📱', text: '<strong>Screen light before bed</strong> delays melatonin onset by ~90 minutes on average (Chang et al., 2015). This alone can explain subthreshold insomnia in many people.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — subthreshold insomnia (ISI 8–14 range)<br><br>Based on: Morin et al. (1993/2011). Bastien et al. (2001). Simple sleep hygiene changes and a sleep diary for 2 weeks often resolve subthreshold insomnia.`;
    } else if (pct < 76) {
      icon = '🌚'; title = 'Moderate Clinical Insomnia';
      subtitle = 'Your sleep difficulties are at a level that significantly affects daily functioning.';
      traits = [
        { icon: '🔴', text: '<strong>Scores in this range correspond to moderate clinical insomnia</strong> (ISI 15–21) — a level consistently linked to meaningful impairment in cognitive performance, mood, and physical health.' },
        { icon: '🧠', text: '<strong>CBT-I is the first-line treatment</strong> — the APA, AASM, and European Sleep Research Society all recommend it above medication. Meta-analyses show 70–80% improvement rates.' },
        { icon: '💊', text: '<strong>Sleep medication doesn\'t create normal sleep</strong> — Walker\'s research shows sedatives suppress REM and slow-wave sleep. CBT-I produces more durable improvement without dependency.' },
        { icon: '🌿', text: '<strong>Sleep anxiety is self-reinforcing</strong> — worry about not sleeping is one of the strongest predictors of ongoing insomnia. Breaking this cycle is the core therapeutic target.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — moderate clinical insomnia (ISI 15–21 range)<br><br>Based on: Morin et al. CBT-I delivered via apps (Sleepio, Somryst) or in person has strong evidence. <strong>Consider consulting a sleep medicine specialist or CBT-I practitioner.</strong>`;
    } else {
      icon = '🌑'; title = 'Severe Insomnia';
      subtitle = 'Your sleep is severely disrupted and the impact on your life is substantial.';
      traits = [
        { icon: '❗', text: '<strong>Severe insomnia (ISI 22–28) carries cumulative health costs</strong> — Cappuccio\'s meta-analysis linked chronic sleep deprivation to increased risk of cardiovascular disease, diabetes, and all-cause mortality.' },
        { icon: '🔬', text: '<strong>Insomnia at this level is rarely just about sleep</strong> — depression, anxiety, PTSD, chronic pain, and sleep apnoea are common comorbidities that each require separate assessment.' },
        { icon: '🏥', text: '<strong>A sleep study (polysomnography) or specialist assessment</strong> is warranted — sleep apnoea in particular is massively underdiagnosed and can entirely explain severe insomnia symptoms.' },
        { icon: '🤝', text: '<strong>You don\'t have to manage this alone</strong> — sleep medicine is an established specialty with powerful tools. Please seek professional support.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — severe clinical insomnia (ISI 22–28 range)<br><br>Based on: Morin et al. (1993–2011). At this severity, please seek assessment from a sleep medicine physician or psychiatrist. Rule out sleep apnoea if not already done.`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

perfectionism: {
  id: 'perfectionism', color: '#e879f9',
  icon: '🎯', title: 'Is My Perfectionism Helping or Hurting?',
  descHtml: `Based on the <strong>FMPS</strong> (Frost Multidimensional Perfectionism Scale, 1990) and Hewitt & Flett\'s work on adaptive vs. maladaptive perfectionism. Research distinguishes <em>healthy high standards</em> from <em>perfectionism driven by fear of failure</em> — this quiz helps locate where you fall.<br><br><strong>11 questions · ~3 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "When you make a mistake, how long does the feeling linger?",
      sub: "Concern over mistakes is the strongest predictor of maladaptive perfectionism in Frost's research.",
      answers: [
        { text: "Briefly — I note it, correct where possible, and move on", score: 0 },
        { text: "A while, but I can refocus", score: 1 },
        { text: "It replays persistently and is hard to dismiss", score: 2 },
        { text: "I ruminate on mistakes for days, sometimes weeks", score: 3 },
      ]
    },
    { text: "Do you believe that if you cannot do something perfectly, there's little point in doing it at all?",
      answers: [
        { text: "No — I believe good enough is often genuinely good enough", score: 0 },
        { text: "Sometimes I aim for perfection, but imperfect completion still feels worthwhile", score: 1 },
        { text: "Often — partial success feels unsatisfying in ways that hold me back", score: 2 },
        { text: "Yes — falling short of perfect feels like failure, making starting feel pointless", score: 3 },
      ]
    },
    { text: "How much does your sense of self-worth depend on your achievements and performance?",
      sub: "Hewitt & Flett found this self-worth contingency is the core driver of perfectionist distress.",
      answers: [
        { text: "Moderately — I take pride in my work but don't define myself by it", score: 0 },
        { text: "Quite a lot — I feel better about myself when I perform well", score: 1 },
        { text: "Significantly — poor performance genuinely shakes my sense of worth", score: 2 },
        { text: "Completely — I feel worthless when I fall short of my own standards", score: 3 },
      ]
    },
    { text: "Do you find yourself doubting whether you've done something properly, even after checking multiple times?",
      sub: "'Doubting actions' is a key FMPS subscale linked to anxiety and OCD overlap.",
      answers: [
        { text: "Rarely — I trust my own judgement once I've checked", score: 0 },
        { text: "Sometimes — I need reassurance but can usually settle", score: 1 },
        { text: "Often — I re-check and still feel uncertain", score: 2 },
        { text: "Very often — persistent doubt about completeness is a real problem", score: 3 },
      ]
    },
    { text: "Does the fear of doing something imperfectly stop you from starting it?",
      sub: "Perfectionism-driven procrastination is one of the most documented patterns in the literature.",
      answers: [
        { text: "Rarely — I can start even when the outcome is uncertain", score: 0 },
        { text: "Sometimes — high-stakes tasks are harder to begin", score: 1 },
        { text: "Often — fear of imperfection creates real delays in my work or creative life", score: 2 },
        { text: "Regularly — I avoid starting things where I can't guarantee a good result", score: 3 },
      ]
    },
    { text: "How do you compare your performance to others?",
      answers: [
        { text: "I focus on my own standards, not comparison", score: 0 },
        { text: "I compare sometimes, but it motivates rather than undermines me", score: 1 },
        { text: "I compare frequently and often come up feeling inadequate", score: 2 },
        { text: "Social comparison drives persistent feelings of falling short", score: 3 },
      ]
    },
    { text: "How important is neatness, organisation, and order to you?",
      sub: "In Frost's model, organisation is a distinct subscale — high organisation can be adaptive. This question probes distress when order is absent.",
      answers: [
        { text: "I have preferences but disorder doesn't bother me much", score: 0 },
        { text: "I value organisation and feel mildly uncomfortable with disorder", score: 1 },
        { text: "Disorder creates real discomfort and I invest significant time in maintaining order", score: 2 },
        { text: "Lack of order is highly distressing — I reorganise rather than proceed with tasks", score: 3 },
      ]
    },
    { text: "Do the expectations others hold of you feel like a heavy, difficult-to-escape pressure?",
      sub: "Frost's 'parental expectations' subscale (applied broadly to any significant figures).",
      answers: [
        { text: "No — I have healthy boundaries around others' expectations", score: 0 },
        { text: "Somewhat — I'm aware of pressure but manage to stay grounded", score: 1 },
        { text: "Often — the weight of others' expectations shapes my choices significantly", score: 2 },
        { text: "Constantly — I feel driven by external expectations more than my own desires", score: 3 },
      ]
    },
    { text: "When you're working on something, how difficult is it to know when to stop or call it 'done'?",
      answers: [
        { text: "Easy — I have a reasonable sense of when something is complete", score: 0 },
        { text: "Sometimes I over-polish but I can decide when to stop", score: 1 },
        { text: "Often hard — I keep revising past the point of diminishing returns", score: 2 },
        { text: "Very hard — 'done' never feels truly done; I revise compulsively", score: 3 },
      ]
    },
    { text: "How do you respond when your work or output is criticised?",
      answers: [
        { text: "I can take feedback constructively without it destabilising me", score: 0 },
        { text: "Criticism stings but I recover and integrate it", score: 1 },
        { text: "Criticism hits hard and I replay it extensively", score: 2 },
        { text: "Criticism is devastating — I take it as confirmation of worthlessness", score: 3 },
      ]
    },
    { text: "Do you feel more motivated by the genuine desire to do good work, or by the fear of what happens if you don't?",
      sub: "Slade & Owens (1998) called these 'positive striving' vs 'negative' perfectionism — the single most important distinction.",
      answers: [
        { text: "Mostly desire — I do things because I genuinely care about the work", score: 0 },
        { text: "Both — some fear mixes with genuine interest", score: 1 },
        { text: "Mostly fear — I perform to avoid shame, criticism, or failure", score: 2 },
        { text: "Entirely fear — dread of consequences drives almost everything I do", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🌟 Healthy striving';
    const meterRight = 'Maladaptive perfectionism';
    if (pct < 27) {
      icon = '🌟'; title = 'Healthy High Standards';
      subtitle = 'Your drive for quality appears to be adaptive rather than fear-driven.';
      traits = [
        { icon: '✅', text: '<strong>Slade & Owens\' research</strong> confirms "positive striving" — setting high standards without harsh self-criticism — predicts better performance and wellbeing outcomes.' },
        { icon: '🚀', text: '<strong>The distinction matters</strong>: intrinsic motivation for quality is associated with flow states and mastery. Fear-driven perfectionism produces anxiety and procrastination.' },
        { icon: '🌱', text: '<strong>Your ability to call things "good enough"</strong> when warranted is a genuine skill — Herbert Simon\'s concept of "satisficing" is more cognitively efficient than maximising.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — adaptive perfectionism range<br><br>Based on: Frost, R.O. et al. (1990). The dimensions of perfectionism. <em>Cognitive Therapy and Research, 14</em>(5), 449–468.`;
    } else if (pct < 52) {
      icon = '⚖️'; title = 'Moderate Perfectionist Tendencies';
      subtitle = 'High standards coexist with some fear-driven patterns worth examining.';
      traits = [
        { icon: '⚠️', text: '<strong>Mixed perfectionism profile</strong> — you likely combine genuine striving with some self-critical patterns. The key variable is whether your standards motivate or paralyse.' },
        { icon: '🔄', text: '<strong>Concern over mistakes</strong> is the most toxic FMPS subscale — when errors feel catastrophic, they trigger avoidance and rumination that undermine the very performance you\'re protecting.' },
        { icon: '🧩', text: '<strong>Self-compassion as performance tool</strong> — Neff\'s research shows self-compassionate people actually perform better after failure, because they can process mistakes without defensive shutdown.' },
        { icon: '💡', text: '<strong>CBT for perfectionism</strong> (Antony & Swinson\'s protocol) specifically targets unhelpful rules ("I must never make mistakes") and the avoidance they produce.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — moderate range<br><br>Based on: Frost et al. (1990). Hewitt, P.L. & Flett, G.L. (1991). The Multidimensional Perfectionism Scale. <em>Journal of Personality and Social Psychology, 60</em>(3).`;
    } else if (pct < 75) {
      icon = '🎯'; title = 'Maladaptive Perfectionism';
      subtitle = 'Perfectionism appears to be generating significant distress and interference.';
      traits = [
        { icon: '🔴', text: '<strong>Scores in this range</strong> correlate with the FMPS subscales most associated with clinical outcomes — especially concern over mistakes, doubting actions, and performance-contingent self-worth.' },
        { icon: '😰', text: '<strong>Perfectionism and anxiety are tightly coupled</strong> — Antony & Swinson\'s research found 80%+ of people with anxiety disorders scored highly on perfectionism measures.' },
        { icon: '🚫', text: '<strong>Perfectionism-driven procrastination is paradoxical</strong> — the very thing protecting you from failure is causing more of it, through delay and avoidance.' },
        { icon: '🌿', text: '<strong>Recovery isn\'t about lowering your standards</strong> — it\'s about changing your relationship with imperfection. The standards stay; the self-punishment goes.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — maladaptive range<br><br>Based on: Frost et al. (1990). Flett, G.L. & Hewitt, P.L. (2002). <em>Perfectionism: Theory, Research, and Treatment</em>. APA. Consider CBT focused on perfectionism or acceptance-based work (ACT).`;
    } else {
      icon = '🌪️'; title = 'Severe Perfectionism';
      subtitle = 'Perfectionism is likely causing significant suffering and limiting your life.';
      traits = [
        { icon: '❗', text: '<strong>High perfectionism at this level</strong> is associated with depression, eating disorders, OCD, chronic procrastination, and relationship difficulties across multiple meta-analyses.' },
        { icon: '🧠', text: '<strong>The shame-perfectionism loop</strong> — Brené Brown\'s research and Hewitt\'s clinical work both identify shame as the fuel. Perfectionism is often an unconscious attempt to avoid the unbearable feeling of being "not enough".' },
        { icon: '💔', text: '<strong>Perfectionism can masquerade as conscientiousness</strong> — often praised externally while causing enormous internal suffering. Your distress is real, even if others see only your high standards.' },
        { icon: '🤝', text: '<strong>Compassion-Focused Therapy (CFT)</strong> and schema therapy targeting the "unrelenting standards" schema have strong evidence for perfectionism at this severity. Please consider professional support.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — severe range<br><br>Based on: Frost et al. (1990). Hewitt & Flett (1991). Shafran, R. et al. (2002) developed CBT-P (CBT for Perfectionism) — a highly effective, structured protocol. This level of perfectionism warrants professional attention.`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

codependency: {
  id: 'codependency', color: '#fb923c',
  icon: '🪢', title: 'Am I Codependent?',
  descHtml: `Based on research by <strong>Melody Beattie</strong> (<em>Codependent No More</em>, 1986), <strong>Pia Mellody</strong>\'s codependency model, and the <strong>Friel Codependency Assessment Inventory</strong> (Friel & Friel, 1987). Codependency is characterised by excessive external focus, difficulty with self-identity, and relationships organised around managing or fixing others.<br><br><strong>11 questions · ~3 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "Do you find your mood and sense of wellbeing closely tied to how others around you are feeling?",
      sub: "Beattie describes this as 'emotional enmeshment' — your inner weather follows theirs.",
      answers: [
        { text: "Rarely — I'm empathetic but maintain my own emotional state", score: 0 },
        { text: "Sometimes — close people's moods affect me, but I can separate", score: 1 },
        { text: "Often — I find it very hard to feel OK when someone close is upset", score: 2 },
        { text: "Always — my internal state is almost entirely regulated by others", score: 3 },
      ]
    },
    { text: "Do you feel responsible for other people's feelings, problems, or wellbeing — to the point of putting their needs above your own?",
      answers: [
        { text: "No — I care about others without feeling responsible for their inner world", score: 0 },
        { text: "Sometimes — with certain people I take on more than I should", score: 1 },
        { text: "Often — I feel it's my job to manage or fix others' emotional states", score: 2 },
        { text: "I feel this with almost everyone I'm close to — their pain is my responsibility", score: 3 },
      ]
    },
    { text: "Do you say yes to requests or demands even when you want to say no, out of fear of conflict or abandonment?",
      sub: "Mellody identifies difficulty with boundaries and limits as a core codependency characteristic.",
      answers: [
        { text: "Rarely — I can say no when I need to", score: 0 },
        { text: "Sometimes — certain relationships make it harder", score: 1 },
        { text: "Often — I agree to things I don't want to do to avoid upsetting people", score: 2 },
        { text: "Almost always — saying no feels dangerous or unbearable", score: 3 },
      ]
    },
    { text: "Do you have difficulty identifying what you truly feel, want, or need — separate from what others feel or expect?",
      sub: "Mellody calls this 'difficulty owning one's own reality' — a fundamental codependency feature.",
      answers: [
        { text: "Rarely — I have a clear sense of my own wants and feelings", score: 0 },
        { text: "Sometimes — I need to pause to separate my feelings from theirs", score: 1 },
        { text: "Often — my own preferences and needs feel unclear to me", score: 2 },
        { text: "I rarely know what I truly want — it's usually shaped by what others want from me", score: 3 },
      ]
    },
    { text: "Do you feel a compulsive need to help, fix, or rescue people — even when they haven't asked for it?",
      sub: "Beattie distinguishes helping from caretaking: the latter is driven by anxiety, not genuine choice.",
      answers: [
        { text: "No — I can support people without needing to fix them", score: 0 },
        { text: "Sometimes — I have a strong urge to help but can hold back", score: 1 },
        { text: "Often — I feel anxious until I've done something about others' problems", score: 2 },
        { text: "Compulsively — not intervening feels intolerable; I can't let problems be", score: 3 },
      ]
    },
    { text: "Do you tolerate mistreatment, disrespect, or harmful behaviour in relationships rather than setting limits?",
      answers: [
        { text: "Rarely — I have and enforce clear standards in my relationships", score: 0 },
        { text: "Sometimes — I accept things I shouldn't with certain people", score: 1 },
        { text: "Often — I endure treatment that I know is wrong because I fear the alternative", score: 2 },
        { text: "Yes — I stay in harmful patterns because I don't feel I have the right to leave or object", score: 3 },
      ]
    },
    { text: "Do you seek approval, validation, or reassurance from others to feel OK about yourself?",
      sub: "Mellody's 'other-esteem' concept — self-worth dependent on external feedback.",
      answers: [
        { text: "Rarely — my self-worth is mostly self-generated", score: 0 },
        { text: "Sometimes — affirmation feels good but I don't depend on it", score: 1 },
        { text: "Often — I feel uncertain about my worth without external reassurance", score: 2 },
        { text: "Constantly — approval from others is the primary source of my self-esteem", score: 3 },
      ]
    },
    { text: "Do you find yourself adapting, minimising, or changing who you are depending on who you're with?",
      answers: [
        { text: "Rarely — I have a consistent sense of self across different people", score: 0 },
        { text: "Sometimes — I adjust tone and presentation but my core stays the same", score: 1 },
        { text: "Often — I mould myself significantly depending on what others seem to want", score: 2 },
        { text: "Substantially — I'm not sure who I am outside of the roles I play for others", score: 3 },
      ]
    },
    { text: "Do you feel that you love someone more deeply when they are in crisis, struggle, or need you?",
      sub: "Trauma bonding and crisis-based attachment are hallmarks of codependent relationship patterns.",
      answers: [
        { text: "No — my love doesn't increase with others' crises or dependency", score: 0 },
        { text: "Somewhat — I feel more connected when I'm supporting someone through difficulty", score: 1 },
        { text: "Yes — relationships feel more real or bonded when someone needs my help", score: 2 },
        { text: "Strongly — intimacy and being needed feel synonymous to me", score: 3 },
      ]
    },
    { text: "Do you struggle to end relationships that are harmful to you, even when you know they're not good for you?",
      answers: [
        { text: "Rarely — I can leave when I need to, even when it's painful", score: 0 },
        { text: "Sometimes — it's hard but I've been able to walk away when necessary", score: 1 },
        { text: "Often — I stay in harmful relationships far longer than is good for me", score: 2 },
        { text: "Yes — leaving feels impossible, even in deeply harmful situations", score: 3 },
      ]
    },
    { text: "Do you feel that your own needs are less important, or that taking care of your own needs is selfish?",
      sub: "Mellody's research found that 'difficulty with self-care' is universal in codependency.",
      answers: [
        { text: "No — I believe my needs are as valid as anyone else's", score: 0 },
        { text: "Sometimes — I deprioritise my needs but it doesn't feel shameful", score: 1 },
        { text: "Often — I feel guilty attending to my own needs while others have problems", score: 2 },
        { text: "Deeply — taking care of myself feels inherently selfish or wrong", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🌿 Healthy relating';
    const meterRight = 'High codependency';
    if (pct < 26) {
      icon = '🌿'; title = 'Healthy Interdependence';
      subtitle = 'Your relating patterns show healthy independence alongside genuine connection.';
      traits = [
        { icon: '✅', text: '<strong>Healthy interdependence</strong> — Bowen\'s family systems research distinguishes codependency from genuine intimacy: the ability to be close without losing self is the hallmark of relational health.' },
        { icon: '🌱', text: '<strong>Clear sense of self in relationships</strong> — you appear to maintain your identity, feelings, and needs across different relational contexts.' },
        { icon: '💡', text: '<strong>The capacity to say no</strong> while staying connected is one of the most sophisticated relational skills. It reflects security rather than selfishness.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — healthy range<br><br>Based on: Beattie, M. (1986). <em>Codependent No More</em>. Mellody, P. (1989). <em>Facing Codependence</em>. Friel, J. & Friel, L. (1988). <em>Adult Children: The Secrets of Dysfunctional Families</em>.`;
    } else if (pct < 50) {
      icon = '🪢'; title = 'Mild to Moderate Codependency';
      subtitle = 'Some codependent patterns are present that may affect your relationships.';
      traits = [
        { icon: '⚠️', text: '<strong>Codependency exists on a spectrum</strong> — Friel\'s research found it in most adults who grew up in families with addiction, mental illness, chronic conflict, or emotional unavailability.' },
        { icon: '🔄', text: '<strong>Caretaking vs. caring</strong> — the key distinction is whether helping is chosen freely or driven by anxiety and the inability to tolerate others\' discomfort.' },
        { icon: '🧩', text: '<strong>Enmeshment and boundaries</strong> — Bowen\'s differentiation scale maps exactly this territory. Moderate codependency often means lower differentiation — difficulty staying yourself when others are emotionally reactive.' },
        { icon: '🌱', text: '<strong>Recovery tools that work</strong>: Codependents Anonymous (CODA), IFS therapy, learning to identify and honour needs, and practising saying no in low-stakes situations first.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — mild-moderate codependency range<br><br>Based on: Beattie (1986). Mellody (1989). This pattern often traces to family-of-origin dynamics. Awareness at this level allows meaningful change with relatively modest intervention.`;
    } else if (pct < 73) {
      icon = '🌀'; title = 'Significant Codependency';
      subtitle = 'Codependent patterns appear to be meaningfully organising your relationships and sense of self.';
      traits = [
        { icon: '🔴', text: '<strong>At this level, codependency is not just a tendency but a relational blueprint</strong> — shaping who you\'re attracted to, how you communicate, and whether you can feel OK alone.' },
        { icon: '🧬', text: '<strong>Codependency often has roots in childhood</strong> — Mellody\'s clinical research found it almost universally linked to growing up in families where children had to manage parental emotions or were parentified.' },
        { icon: '💔', text: '<strong>The cost is real</strong>: chronic self-abandonment, exhaustion from caretaking, attraction to unavailable or wounded partners, and a persistent sense of emptiness when not needed.' },
        { icon: '🌿', text: '<strong>Recovery is possible and well-documented</strong> — CODA, IFS, and attachment-focused therapy all have strong evidence. The work is returning to yourself, not changing your capacity to love.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — significant codependency range<br><br>Based on: Beattie (1986). Mellody (1989). Friel (1988). A therapist who works with attachment, trauma, or family systems will be most useful here. CODA meetings are free and evidence-supported.`;
    } else {
      icon = '🔥'; title = 'High Codependency';
      subtitle = 'Codependent patterns are deeply embedded and likely causing significant suffering.';
      traits = [
        { icon: '❗', text: '<strong>High codependency is often a trauma response</strong> — Mellody\'s model frames it as arrested development in self-care, limits, reality, wants/needs, and moderation, caused by childhood wounding.' },
        { icon: '🏚️', text: '<strong>The self is organised around others</strong> at this level — what you feel, want, and value has become secondary to what others need from you. Recovery involves reclaiming these as valid and real.' },
        { icon: '🔗', text: '<strong>Attachment to harmful relationships</strong> is often driven by trauma bonding (Carnes, 1997) — the intermittent reinforcement of crisis + relief creates a biochemical addiction that mirrors substance dependency.' },
        { icon: '🤝', text: '<strong>Please seek support</strong> — this pattern is not who you are; it\'s a survival strategy that has outlived its context. IFS therapy, trauma-informed care, and CODA have helped many people with exactly this profile.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — high codependency range<br><br>Based on: Beattie (1986). Mellody, P. (1989). <em>Facing Codependence</em>. At this level, professional support is strongly recommended. The work of healing codependency is genuinely life-changing.`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},


resilience: {
  id: 'resilience', color: '#34d399',
  icon: '🪨', title: 'How Resilient Am I?',
  descHtml: `Based on the <strong>Brief Resilience Scale</strong> (BRS; Smith et al., 2008), this quiz measures your capacity to recover from stress, adversity, and difficult life events. Resilience isn't the absence of struggle — it's the ability to move through it.<br><br><strong>10 questions · ~2 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "After going through something hard, I tend to bounce back within a reasonable time.",
      answers: [
        { text: "Not like me — difficult events tend to linger and derail me for a long time", score: 0 },
        { text: "Somewhat — I eventually recover, but it takes longer than I'd like", score: 1 },
        { text: "Often — I usually find my footing again after a while", score: 2 },
        { text: "Very much like me — I recover relatively quickly, even from serious setbacks", score: 3 },
      ]
    },
    { text: "When something stressful happens, I struggle significantly to get through it.",
      sub: "Think about your actual pattern, not how you'd like to respond.",
      answers: [
        { text: "Rarely — I generally manage to get through without losing myself entirely", score: 3 },
        { text: "Sometimes — certain events genuinely knock me down for a while", score: 2 },
        { text: "Often — I find it genuinely hard to get through hard times", score: 1 },
        { text: "Almost always — stressful events feel overwhelming and hard to survive", score: 0 },
      ]
    },
    { text: "Even when things are difficult, I usually believe they will eventually get better.",
      answers: [
        { text: "Rarely — pessimism is more natural to me in hard times", score: 0 },
        { text: "Sometimes — I can hold hope, but it doesn't come easily", score: 1 },
        { text: "Often — I tend to expect things to improve, even if slowly", score: 2 },
        { text: "Almost always — I generally trust that things will turn around", score: 3 },
      ]
    },
    { text: "I take a long time to recover from setbacks in my life.",
      answers: [
        { text: "Rarely — I'm usually able to move forward without too much delay", score: 3 },
        { text: "Sometimes — it depends on the severity of the setback", score: 2 },
        { text: "Often — recovery tends to be a slow, difficult process for me", score: 1 },
        { text: "Almost always — I hold onto difficult experiences for a long time", score: 0 },
      ]
    },
    { text: "When life gets hard, I find inner resources I didn't know I had.",
      answers: [
        { text: "Rarely — hard times mostly reveal my limitations", score: 0 },
        { text: "Sometimes — occasionally I surprise myself with what I can handle", score: 1 },
        { text: "Often — difficulty tends to surface a strength in me I don't always feel", score: 2 },
        { text: "Consistently — adversity tends to bring out a resilient part of me", score: 3 },
      ]
    },
    { text: "I tend to come through difficult periods with little lasting damage.",
      answers: [
        { text: "Rarely — hard periods leave significant marks that persist", score: 0 },
        { text: "Sometimes — I get through, but difficulty does leave traces", score: 1 },
        { text: "Often — I tend to emerge from hard times relatively intact", score: 2 },
        { text: "Usually — I generally come through difficulty without lasting damage", score: 3 },
      ]
    },
    { text: "During challenges, I'm able to stay connected to the things that give my life meaning.",
      answers: [
        { text: "Rarely — difficulty tends to disconnect me from everything meaningful", score: 0 },
        { text: "Sometimes — it's a struggle but I find at least one anchor", score: 1 },
        { text: "Often — I manage to maintain some connection to what matters", score: 2 },
        { text: "Consistently — I can usually stay anchored even in hard times", score: 3 },
      ]
    },
    { text: "I find it hard to maintain my sense of self when things go wrong.",
      answers: [
        { text: "Rarely — I feel grounded in who I am even when circumstances are difficult", score: 3 },
        { text: "Sometimes — significant hardship can shake my sense of self", score: 2 },
        { text: "Often — difficulty tends to destabilise how I see myself", score: 1 },
        { text: "Strongly — when things go wrong, I lose my sense of who I am", score: 0 },
      ]
    },
    { text: "I'm able to keep going even when I don't know how things will turn out.",
      answers: [
        { text: "Rarely — uncertainty feels paralyzing", score: 0 },
        { text: "Sometimes — I can keep moving, but uncertainty really costs me", score: 1 },
        { text: "Often — I manage to act even without guarantees", score: 2 },
        { text: "Consistently — I can tolerate uncertainty and keep moving forward", score: 3 },
      ]
    },
    { text: "People who know me would describe me as someone who handles adversity well.",
      sub: "Your honest estimate of how others perceive your resilience.",
      answers: [
        { text: "Unlikely — they'd probably say adversity hits me hard", score: 0 },
        { text: "Some might — I have good days and hard days", score: 1 },
        { text: "Probably — they've seen me get through difficult things", score: 2 },
        { text: "Very likely — resilience is something people notice in me", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🌿 Low resilience';
    const meterRight = 'High resilience 🪨';
    if (pct < 26) {
      icon = '🌧️'; title = 'Low Resilience';
      subtitle = 'You\'re finding it hard to recover from adversity — setbacks tend to leave lasting marks.';
      traits = [
        { icon: '⚠️', text: '<strong>Resilience is a skill, not a trait you\'re born with</strong> — Smith et al.\'s BRS research consistently shows resilience can be built through deliberate practice and supportive relationships.' },
        { icon: '🔍', text: '<strong>Low resilience often reflects cumulative stress or unprocessed trauma</strong> — your nervous system may be operating in a depleted state, leaving fewer resources for recovery.' },
        { icon: '🤝', text: '<strong>Social connection is the single strongest predictor of resilience</strong> — Southwick & Charney (2012) found that supportive relationships outperform every individual-level coping skill.' },
        { icon: '🌱', text: '<strong>What actually builds resilience</strong>: therapy (especially ACT and somatic approaches), sleep restoration, regular movement, and gradually expanding your window of tolerance.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — low resilience range<br><br>Based on: Smith, B.W. et al. (2008). The brief resilience scale. <em>International Journal of Behavioral Medicine, 15</em>(3), 194–200. Southwick, S.M. & Charney, D.S. (2012). <em>Resilience: The Science of Mastering Life's Greatest Challenges.</em>`;
    } else if (pct < 50) {
      icon = '⛅'; title = 'Developing Resilience';
      subtitle = 'You have some capacity to recover from adversity, but setbacks can significantly derail you.';
      traits = [
        { icon: '🔄', text: '<strong>Resilience at this level is inconsistent</strong> — you have genuine coping resources, but they aren\'t yet reliable across different types of stressors.' },
        { icon: '💡', text: '<strong>The gap is often in self-compassion</strong> — Neff & Germer\'s research shows that people who struggle to recover often apply harsher standards to themselves during hardship than they would to others.' },
        { icon: '🧠', text: '<strong>Cognitive flexibility predicts resilience</strong> — Tugade & Fredrickson (2004) found that resilient people can hold multiple interpretations of a difficult event simultaneously, reducing the impact of any single narrative.' },
        { icon: '🌿', text: '<strong>Practical growth areas</strong>: identifying one reliable person to process difficulty with, developing a physical regulation practice, and working on meaning-making around past hardships.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — developing resilience range<br><br>Based on: Smith et al. (2008). Neff, K. & Germer, C. (2013). <em>Journal of Clinical Psychology, 69</em>(1). Tugade, M.M. & Fredrickson, B.L. (2004). <em>Journal of Personality and Social Psychology, 86</em>(2).`;
    } else if (pct < 75) {
      icon = '🌤️'; title = 'Solid Resilience';
      subtitle = 'You have a real capacity to recover from adversity — you get through hard times without losing yourself.';
      traits = [
        { icon: '✅', text: '<strong>Functional resilience</strong> — you have enough inner and social resources to move through difficulty without being permanently derailed. This is more than most.' },
        { icon: '🔬', text: '<strong>Resilience at this level correlates with several protective factors</strong>: meaning-making, self-efficacy, and what Bonanno (2004) calls the "flexibility sequence" — shifting coping strategies depending on what a situation demands.' },
        { icon: '🌱', text: '<strong>Resilient people aren\'t unaffected</strong> — they feel pain fully. The difference is they have ways to process it rather than getting stuck in it.' },
        { icon: '💡', text: '<strong>Deepening resilience from here</strong>: post-traumatic growth research (Tedeschi & Calhoun) suggests that directly engaging with, rather than managing, difficult experiences produces the deepest expansion of resilience.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — solid resilience range<br><br>Based on: Smith et al. (2008). Bonanno, G.A. (2004). Loss, trauma, and human resilience. <em>American Psychologist, 59</em>(1). Tedeschi, R.G. & Calhoun, L.G. (2004). <em>Psychological Inquiry, 15</em>(1).`;
    } else {
      icon = '🪨'; title = 'High Resilience';
      subtitle = 'You have a strong, reliable capacity to recover from adversity and bounce back from difficult events.';
      traits = [
        { icon: '💪', text: '<strong>High resilience is a genuine protective factor</strong> — Luthar et al.\'s research found it correlates with better health outcomes, stronger relationships, and longer life expectancy.' },
        { icon: '🌊', text: '<strong>Resilient people aren\'t unbothered — they\'re unbroken</strong> — they feel difficulty fully but have learned to move through it. The difference is processing, not suppression.' },
        { icon: '🔬', text: '<strong>High resilience correlates with</strong>: a coherent life narrative, the ability to make meaning from hardship, strong social ties, and flexible coping strategies.' },
        { icon: '🤝', text: '<strong>Resilience is contagious</strong> — research by Jeste et al. (2013) shows highly resilient people often anchor those around them through difficult periods simply through their presence.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — high resilience range<br><br>Based on: Smith et al. (2008). Luthar, S.S. (2006). Resilience in development. <em>Development and Psychopathology, 18.</em> Jeste, D.V. et al. (2013). <em>Psychiatric Annals, 43.</em>`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

grief: {
  id: 'grief', color: '#818cf8',
  icon: '🕊️', title: 'Am I in Complicated Grief?',
  descHtml: `Based on the <strong>Prolonged Grief Disorder scale</strong> (PG-13; Prigerson et al., 2009) and DSM-5-TR criteria. This quiz is for people who have experienced a significant loss — a death, the end of a relationship, or another major loss.<br><br>Answer based on how you've been feeling in the <strong>past month</strong>.<br><br><strong>10 questions · ~2 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "How often do you feel a yearning or longing for the person or thing you lost?",
      sub: "A persistent ache for their presence, their voice, or life as it was.",
      answers: [
        { text: "Rarely or never", score: 0 },
        { text: "Sometimes — it comes and goes", score: 1 },
        { text: "Often — it's a regular presence in my days", score: 2 },
        { text: "Almost constantly — I'm rarely without it", score: 3 },
      ]
    },
    { text: "How much difficulty do you have accepting the reality of the loss?",
      answers: [
        { text: "Little or none — I've largely accepted what happened", score: 0 },
        { text: "Some — acceptance is happening but isn't complete", score: 1 },
        { text: "Significant — some part of me still resists the reality", score: 2 },
        { text: "I can barely accept it — it still feels unreal or impossible", score: 3 },
      ]
    },
    { text: "How much emotional pain or anguish do you experience around this loss?",
      answers: [
        { text: "Little — I've grieved and the acute pain has largely passed", score: 0 },
        { text: "Some — there is still pain, but it's manageable", score: 1 },
        { text: "Considerable — the pain is still significant and regular", score: 2 },
        { text: "Overwhelming — the pain is intense and hard to live with", score: 3 },
      ]
    },
    { text: "Do you feel that life is meaningless or empty without this person or thing?",
      answers: [
        { text: "Not really — I've been able to find meaning despite the loss", score: 0 },
        { text: "Sometimes — meaning is harder to find than it used to be", score: 1 },
        { text: "Often — the loss has significantly drained my sense of purpose", score: 2 },
        { text: "Constantly — life feels hollow or pointless since the loss", score: 3 },
      ]
    },
    { text: "Do you feel a persistent sense of bitterness or anger about the loss?",
      answers: [
        { text: "Rarely — I've moved through most of the anger", score: 0 },
        { text: "Sometimes — anger still surfaces but doesn't dominate", score: 1 },
        { text: "Often — significant anger or bitterness remains", score: 2 },
        { text: "Strongly — anger or bitterness around the loss is very present", score: 3 },
      ]
    },
    { text: "How much trouble do you have engaging in activities that mattered to you before the loss?",
      answers: [
        { text: "Little or none — I've largely returned to my normal life", score: 0 },
        { text: "Some — it takes more effort but I can engage", score: 1 },
        { text: "Significant — many activities feel hollow or hard to access", score: 2 },
        { text: "Very much — I've largely stopped doing things I used to care about", score: 3 },
      ]
    },
    { text: "Do you feel that part of yourself died or was permanently altered by the loss?",
      sub: "A sense that you are not the same person you were before.",
      answers: [
        { text: "Not really — I still feel fundamentally like myself", score: 0 },
        { text: "Somewhat — I've changed, but I still feel like me", score: 1 },
        { text: "Often — something fundamental about me feels absent", score: 2 },
        { text: "Strongly — I barely recognise who I am now", score: 3 },
      ]
    },
    { text: "Do you avoid people, places, or things that remind you of the loss?",
      answers: [
        { text: "Rarely — I can engage with reminders without being destabilised", score: 0 },
        { text: "Sometimes — I avoid certain reminders but not comprehensively", score: 1 },
        { text: "Often — I avoid significant things tied to the loss", score: 2 },
        { text: "Extensively — my life is organised around avoiding reminders", score: 3 },
      ]
    },
    { text: "Since the loss, do you find it harder to trust that the people you love will stay?",
      answers: [
        { text: "Not noticeably — my capacity for trust hasn't significantly changed", score: 0 },
        { text: "Somewhat — loss has made trust harder, but I'm still able to connect", score: 1 },
        { text: "Yes — I find it harder to trust in permanence since the loss", score: 2 },
        { text: "Strongly — the loss has deeply shaken my ability to trust", score: 3 },
      ]
    },
    { text: "Is this loss still significantly interfering with your work, relationships, or daily functioning?",
      sub: "PGD is defined by symptoms that cause meaningful disruption to daily life.",
      answers: [
        { text: "No — I'm functioning reasonably well despite the loss", score: 0 },
        { text: "Somewhat — there's some impact, but I'm managing", score: 1 },
        { text: "Yes — the loss is meaningfully disrupting important areas of my life", score: 2 },
        { text: "Substantially — the loss has significantly impaired my ability to function", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🌱 Normal grief';
    const meterRight = 'Complicated grief 🕊️';
    if (pct < 25) {
      icon = '🌱'; title = 'Normal Grief Process';
      subtitle = 'Your grief, while real and painful, appears to be following a natural course.';
      traits = [
        { icon: '🌊', text: '<strong>Grief is not a disorder to be fixed</strong> — Bonanno (2009) found that most people pass through acute grief without lasting impairment, and that this natural resilience is more common than cultural narratives suggest.' },
        { icon: '💛', text: '<strong>Normal grief still hurts deeply</strong> — absence of complicated grief doesn\'t mean absence of pain. It means your grief is moving rather than frozen.' },
        { icon: '🕰️', text: '<strong>Grief has no single timeline</strong> — the old "five stages" model has been largely replaced by oscillation theory (Stroebe & Schut, 2010): healthy grief moves between loss-oriented and restoration-oriented focus.' },
        { icon: '💡', text: '<strong>What helps</strong>: allowing the grief to move through you, maintaining social connection, and permitting yourself both to feel the loss and to engage with life.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — normal grief range<br><br>Based on: Prigerson, H.G. et al. (2009). Prolonged grief disorder. <em>PLOS Medicine, 6</em>(8). Bonanno, G.A. (2009). <em>The Other Side of Sadness.</em>`;
    } else if (pct < 50) {
      icon = '🌫️'; title = 'Moderate Grief Symptoms';
      subtitle = 'Your grief is significant and may be moving slowly — some features of complicated grief are present.';
      traits = [
        { icon: '⚠️', text: '<strong>Grief becomes complicated when it freezes rather than flows</strong> — at this level, your loss is still significantly organising your emotional life in ways that go beyond normal mourning.' },
        { icon: '🔬', text: '<strong>Prolonged Grief Disorder (PGD) was added to DSM-5-TR in 2022</strong> — it\'s defined by intense grief symptoms lasting more than 12 months that cause significant impairment. Not all grief that hurts is disordered.' },
        { icon: '🤝', text: '<strong>Complicated grief often benefits from specific therapy</strong> — Shear et al.\'s randomised trials found Complicated Grief Treatment (CGT) significantly outperforms standard depression treatment for grief symptoms.' },
        { icon: '🌱', text: '<strong>Grief at this level doesn\'t mean something is wrong with you</strong> — it often reflects the depth of what you\'ve lost, and sometimes unprocessed earlier losses that this loss has awakened.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — moderate grief range<br><br>Based on: Prigerson et al. (2009). Shear, M.K. et al. (2005). Treatment of complicated grief. <em>JAMA, 293</em>(21). If symptoms have lasted 12+ months and are disrupting your daily life, a grief-specialised therapist is recommended.`;
    } else if (pct < 75) {
      icon = '🕊️'; title = 'Significant Complicated Grief';
      subtitle = 'Your grief symptoms are significant and appear to be meaningfully disrupting your daily life.';
      traits = [
        { icon: '🔴', text: '<strong>At this level, grief is no longer moving naturally</strong> — it has become more like a chronic state than an acute process. This is more common than most people realise, especially after traumatic or sudden losses.' },
        { icon: '🧬', text: '<strong>Complicated grief has distinct neurobiology</strong> — O\'Connor et al. (2008) found that in prolonged grief, the brain\'s reward centre activates in response to reminders of the deceased, creating a yearning loop distinct from standard sadness.' },
        { icon: '💊', text: '<strong>Evidence-based treatments exist and work</strong>: Complicated Grief Treatment (CGT) by Katherine Shear has the strongest evidence base. It combines imaginal revisiting, situational revisiting, and connection work.' },
        { icon: '🤝', text: '<strong>Please reach out for support</strong> — prolonged grief at this level is treatable and you don\'t need to carry it alone. A grief-specialised therapist can make a meaningful difference.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — significant complicated grief range<br><br>Based on: Prigerson et al. (2009). Shear, M.K. (2015). Complicated grief. <em>NEJM, 372</em>(2). Professional support is strongly recommended.`;
    } else {
      icon = '❄️'; title = 'Severe Prolonged Grief';
      subtitle = 'Your grief symptoms are severe and appear to be significantly impairing your daily functioning.';
      traits = [
        { icon: '❗', text: '<strong>Prolonged grief at this severity is a recognised clinical condition</strong> — DSM-5-TR Prolonged Grief Disorder. It\'s not a sign of weakness or inability to cope — it\'s a treatable disorder.' },
        { icon: '🧠', text: '<strong>Grief of this intensity often has two layers</strong>: the current loss, and earlier losses or attachment wounds that this loss has reopened. Effective treatment addresses both.' },
        { icon: '🌊', text: '<strong>The frozen quality of complicated grief</strong> often comes from avoided confrontation with the reality of the loss. CGT\'s "revisiting" approach gently breaks this avoidance and produces significant symptom relief.' },
        { icon: '🤝', text: '<strong>Please seek support now</strong> — grief at this level causes genuine suffering that you don\'t need to endure alone. Your GP, a grief therapist, or a bereavement helpline are good first steps.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — severe prolonged grief range<br><br>Based on: Prigerson et al. (2009). APA (2022). DSM-5-TR. Shear, M.K. (2015). <em>NEJM, 372</em>(2). At this level, professional support is strongly recommended.`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

anger: {
  id: 'anger', color: '#ef4444',
  icon: '🌋', title: 'How Do I Relate to Anger?',
  descHtml: `Based on Spielberger's <strong>State-Trait Anger Expression Inventory (STAXI-2)</strong> (1999) and Novaco's anger framework. This quiz explores your trait anger — how often and intensely you experience anger, and how you express or suppress it.<br><br><strong>10 questions · ~2 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "I am quick-tempered — things that wouldn't bother others can make me quite angry.",
      answers: [
        { text: "Rarely — my anger threshold is fairly high", score: 0 },
        { text: "Sometimes — certain things trigger me faster than others", score: 1 },
        { text: "Often — I tend to get angry faster than most people", score: 2 },
        { text: "Very much — I am noticeably quick to anger", score: 3 },
      ]
    },
    { text: "When I get angry, I tend to express it outwardly — raising my voice, snapping, or showing it clearly.",
      sub: "STAXI-2 calls this 'Anger-Out'. Neither expression nor suppression is inherently better.",
      answers: [
        { text: "Rarely — my anger tends to stay contained", score: 0 },
        { text: "Sometimes — I express it in some situations but not others", score: 1 },
        { text: "Often — I find it hard to hide anger when I feel it", score: 2 },
        { text: "Very much — people around me usually know when I'm angry", score: 3 },
      ]
    },
    { text: "When I get angry, I tend to suppress it — keeping it in while it simmers.",
      sub: "STAXI-2 calls this 'Anger-In'. Suppressed anger is associated with cardiovascular health risks.",
      answers: [
        { text: "Rarely — I process anger fairly openly", score: 0 },
        { text: "Sometimes — I suppress it in certain contexts (work, some relationships)", score: 1 },
        { text: "Often — I swallow anger rather than express it", score: 2 },
        { text: "Almost always — I rarely let anyone see my anger, even when it's intense", score: 3 },
      ]
    },
    { text: "After I get angry, I remain upset for a while — anger lingers even after the situation resolves.",
      sub: "Research on 'anger rumination' (Sukhodolsky et al., 2001) found it is more predictive of anger problems than anger intensity.",
      answers: [
        { text: "Rarely — I tend to let go of anger fairly quickly", score: 0 },
        { text: "Sometimes — certain incidents stay with me longer", score: 1 },
        { text: "Often — I replay angry situations and stay agitated", score: 2 },
        { text: "Significantly — anger tends to linger and I revisit it repeatedly", score: 3 },
      ]
    },
    { text: "I feel angry when I'm treated unfairly — even in minor situations.",
      answers: [
        { text: "Rarely — unfairness bothers me but doesn't typically produce anger", score: 0 },
        { text: "Sometimes — significant unfairness triggers anger", score: 1 },
        { text: "Often — I react with anger to unfairness, including minor incidents", score: 2 },
        { text: "Strongly — perceived injustice is one of my most reliable anger triggers", score: 3 },
      ]
    },
    { text: "My anger has caused problems in my relationships, work, or daily life.",
      answers: [
        { text: "Rarely or never", score: 0 },
        { text: "Occasionally — there have been some incidents I regret", score: 1 },
        { text: "Yes — anger has created meaningful friction in my relationships or work", score: 2 },
        { text: "Significantly — anger has caused serious or recurring problems", score: 3 },
      ]
    },
    { text: "I can control my anger — even when I feel it, I can choose how or whether to express it.",
      sub: "Anger control is STAXI-2's positive dimension — the ability to regulate expression.",
      answers: [
        { text: "Consistently — I feel anger but manage how I respond to it", score: 3 },
        { text: "Usually — I can control it, but lose it under specific conditions", score: 2 },
        { text: "Sometimes — control is inconsistent", score: 1 },
        { text: "Rarely — when I'm angry, it tends to come out regardless of my intentions", score: 0 },
      ]
    },
    { text: "I feel anger about things that happened in the past — incidents or people I haven't fully let go of.",
      answers: [
        { text: "Rarely — I've processed most past grievances", score: 0 },
        { text: "Sometimes — certain past experiences still produce anger", score: 1 },
        { text: "Often — past events still provoke significant anger", score: 2 },
        { text: "Substantially — unresolved past anger is a significant part of my inner life", score: 3 },
      ]
    },
    { text: "I find myself experiencing anger that seems disproportionate to what actually happened.",
      sub: "Disproportionate anger often signals that current events are activating older, unprocessed experiences.",
      answers: [
        { text: "Rarely — my anger is usually proportionate to the situation", score: 0 },
        { text: "Sometimes — occasionally my reaction exceeded what the moment warranted", score: 1 },
        { text: "Often — I frequently notice my anger is bigger than the trigger", score: 2 },
        { text: "Yes — disproportionate anger is a recognisable pattern in my life", score: 3 },
      ]
    },
    { text: "I feel angry at myself — self-directed anger, frustration, or self-blame is a regular presence.",
      answers: [
        { text: "Rarely — I'm reasonably self-compassionate", score: 0 },
        { text: "Sometimes — I turn anger inward in certain situations", score: 1 },
        { text: "Often — self-directed anger is a meaningful feature of my inner life", score: 2 },
        { text: "Strongly — I'm much harder on myself than I am on anyone else", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '😌 Healthy anger';
    const meterRight = 'Problematic anger 🌋';
    if (pct < 26) {
      icon = '😌'; title = 'Healthy Anger Relationship';
      subtitle = 'Your relationship with anger appears healthy — you feel it proportionately and manage it well.';
      traits = [
        { icon: '✅', text: '<strong>Anger is biologically necessary</strong> — it signals boundary violations, injustice, and threat. The goal is never to eliminate anger but to feel it clearly and choose how to respond.' },
        { icon: '🌊', text: '<strong>Healthy anger is clean</strong> — it arises, informs, and passes. Your pattern suggests anger is doing its job without becoming a chronic state or causing collateral damage.' },
        { icon: '💡', text: '<strong>The emotion itself is never the problem</strong> — Linehan\'s DBT framework is clear: all emotions are valid. What matters is the behaviour that follows, which you appear to manage well.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — healthy anger range<br><br>Based on: Spielberger, C.D. (1999). STAXI-2. Novaco, R.W. (2011). Anger regulation. In M. Potegal et al. (Eds.), <em>International Handbook of Anger.</em>`;
    } else if (pct < 50) {
      icon = '⚡'; title = 'Moderate Anger Tendencies';
      subtitle = 'You experience anger regularly and some aspects of how you experience or express it may be creating friction.';
      traits = [
        { icon: '🔍', text: '<strong>Anger at this level often has an unexamined signal underneath</strong> — the question is always: what is this protecting, or what loss or threat is it trying to address?' },
        { icon: '🔄', text: '<strong>Anger rumination is the key risk factor</strong> — Sukhodolsky et al. (2001) found that replaying angry thoughts (not anger intensity) is the strongest predictor of anger-related problems.' },
        { icon: '🛠️', text: '<strong>What works</strong>: anger journals to identify triggers, somatic discharge (physical movement to process physiological arousal), and EMDR or somatic therapy for trauma-based anger.' },
        { icon: '💡', text: '<strong>Anger often masks pain</strong> — van der Kolk\'s somatic work consistently finds that chronic anger is often grief or fear that the system learned to armour into aggression.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — moderate anger range<br><br>Based on: Spielberger (1999). Sukhodolsky, D.G. et al. (2001). A dispositional approach to anger. <em>Journal of Research in Personality, 35.</em>`;
    } else if (pct < 75) {
      icon = '🌋'; title = 'Significant Anger Patterns';
      subtitle = 'Anger is playing a significant role in your life — it may be chronic, intense, or creating meaningful problems.';
      traits = [
        { icon: '🔴', text: '<strong>At this level, anger has become a system rather than a signal</strong> — a default way of relating to threat, pain, or perceived injustice that is running on autopilot.' },
        { icon: '🧠', text: '<strong>Chronic anger has real health consequences</strong> — Chida & Steptoe (2009) meta-analysis found trait anger associated with significantly elevated cardiovascular risk.' },
        { icon: '🌊', text: '<strong>Suppressed anger is not safer</strong> — STAXI-2 research shows anger-in is associated with equal or greater health risks than anger-out. The goal isn\'t to contain it — it\'s to process it.' },
        { icon: '🛠️', text: '<strong>Evidence-based approaches</strong>: Cognitive-Behavioral Anger Management (CBAM), EMDR for trauma-based anger, somatic experiencing, and DBT emotion regulation skills all show strong evidence.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — significant anger range<br><br>Based on: Spielberger (1999). Chida, Y. & Steptoe, A. (2009). <em>Journal of the American College of Cardiology, 53</em>(11). Working with a therapist on anger is strongly recommended at this level.`;
    } else {
      icon = '🔥'; title = 'High Anger Profile';
      subtitle = 'Anger is playing a central and problematic role in your daily life and relationships.';
      traits = [
        { icon: '❗', text: '<strong>High trait anger affects every domain of life</strong> — relationships, health, work, and self-perception. It is treatable, but usually requires more than insight: it requires somatic work and sometimes trauma processing.' },
        { icon: '🧬', text: '<strong>Chronic high anger frequently has a trauma history</strong> — van der Kolk\'s research found that anger dysregulation is one of the most common presentations of unresolved trauma, especially early experiences of helplessness or violation.' },
        { icon: '🔗', text: '<strong>Anger and shame are often intertwined</strong> — Lewis (1971) found that what looks like anger is often shame-rage: the defensive anger that arises from intolerable feelings of inadequacy or humiliation.' },
        { icon: '🤝', text: '<strong>Please seek support</strong> — anger at this level causes suffering for you and those around you. CBAM, EMDR, and somatic trauma work are all effective approaches.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — high anger range<br><br>Based on: Spielberger (1999). van der Kolk, B. (2014). <em>The Body Keeps the Score.</em> Lewis, H.B. (1971). <em>Shame and Guilt in Neurosis.</em> Professional support is strongly recommended.`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

emotionalneglect: {
  id: 'emotionalneglect', color: '#a78bfa',
  icon: '🫧', title: 'Did I Experience Emotional Neglect?',
  descHtml: `Based on <strong>Jonice Webb's Childhood Emotional Neglect (CEN) questionnaire</strong> from <em>Running on Empty</em> (2012). CEN is not what happened to you — it's what <em>didn't</em> happen: the absence of emotional attunement from caregivers during childhood.<br><br><strong>12 questions · ~3 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "As a child, did you feel that your emotions were understood and responded to by your family?",
      sub: "Not just that you were loved, but that your feelings were noticed and validated.",
      answers: [
        { text: "Yes — I generally felt emotionally seen and understood", score: 0 },
        { text: "Sometimes — some emotions were acknowledged, others dismissed", score: 1 },
        { text: "Rarely — my emotional experience was mostly not acknowledged", score: 2 },
        { text: "Almost never — my inner world was essentially invisible in my family", score: 3 },
      ]
    },
    { text: "As a child, did you feel comfortable going to your parents when you were distressed, scared, or sad?",
      answers: [
        { text: "Yes — they were generally available and responsive", score: 0 },
        { text: "Sometimes — it depended on the situation or the parent", score: 1 },
        { text: "Rarely — going to them for emotional needs didn't feel reliable", score: 2 },
        { text: "No — I learned to handle distress alone; going to them felt pointless", score: 3 },
      ]
    },
    { text: "Growing up, do you recall your parents asking about your feelings or inner life?",
      answers: [
        { text: "Regularly — they showed genuine interest in my inner experience", score: 0 },
        { text: "Sometimes — they asked, though not consistently", score: 1 },
        { text: "Rarely — emotional conversations were uncommon", score: 2 },
        { text: "Almost never — emotions simply weren't discussed or enquired about", score: 3 },
      ]
    },
    { text: "As an adult, do you find it difficult to identify what you are feeling in a given moment?",
      sub: "Webb identifies difficulty naming emotions as one of the clearest signs of CEN.",
      answers: [
        { text: "Rarely — I'm usually able to identify my feelings reasonably well", score: 0 },
        { text: "Sometimes — certain emotions are hard to identify or name", score: 1 },
        { text: "Often — putting names to feelings is consistently hard", score: 2 },
        { text: "Very much — I frequently don't know what I'm feeling until much later, if at all", score: 3 },
      ]
    },
    { text: "Do you feel that your needs are less important than other people's, or that having needs is selfish?",
      answers: [
        { text: "Rarely — I feel entitled to having and expressing my needs", score: 0 },
        { text: "Sometimes — in certain relationships I deprioritise my needs", score: 1 },
        { text: "Often — needing things from others feels inherently demanding", score: 2 },
        { text: "Strongly — I've felt for as long as I can remember that my needs don't count", score: 3 },
      ]
    },
    { text: "Do you struggle to ask for help, even when you genuinely need it?",
      sub: "CEN teaches children that their needs are inconvenient or wrong — leading to lifelong difficulty seeking support.",
      answers: [
        { text: "Rarely — I can ask for help when I need it", score: 0 },
        { text: "Sometimes — it's uncomfortable but I do it when necessary", score: 1 },
        { text: "Often — asking for help feels difficult or shameful", score: 2 },
        { text: "Almost never — I find it nearly impossible to ask for help, even in crisis", score: 3 },
      ]
    },
    { text: "Do you sometimes feel fundamentally different from other people — like there's something essential others have that you lack?",
      sub: "Webb describes this as the 'empty feeling' — one of CEN's most common adult presentations.",
      answers: [
        { text: "Rarely — I generally feel like I belong among people", score: 0 },
        { text: "Sometimes — there are moments of feeling outside or different", score: 1 },
        { text: "Often — a persistent sense of being somehow different or missing something", score: 2 },
        { text: "Frequently — I've felt for much of my life like I lack something others simply have", score: 3 },
      ]
    },
    { text: "Are you harder on yourself than you would be on others in the same situation?",
      answers: [
        { text: "Rarely — I generally apply similar compassion to myself and others", score: 0 },
        { text: "Sometimes — I hold higher standards for myself in some areas", score: 1 },
        { text: "Often — I'm noticeably harsher on myself than I'd be on anyone else", score: 2 },
        { text: "Consistently — self-compassion feels foreign or unearned", score: 3 },
      ]
    },
    { text: "As a child, were emotions in your family generally seen as weakness, inconvenient, or something to be controlled?",
      answers: [
        { text: "No — emotions were accepted as a normal part of life", score: 0 },
        { text: "Somewhat — some emotions were accepted, others weren't", score: 1 },
        { text: "Often — showing emotions was discouraged or uncomfortable in my family", score: 2 },
        { text: "Very much — emotions were treated as weakness, drama, or a burden", score: 3 },
      ]
    },
    { text: "Do you feel a persistent sense of guilt or shame when you do something for yourself?",
      answers: [
        { text: "Rarely — self-care doesn't produce guilt", score: 0 },
        { text: "Sometimes — in certain areas, doing things for myself feels uncomfortable", score: 1 },
        { text: "Often — self-focused activity frequently produces guilt", score: 2 },
        { text: "Strongly — I feel guilty or selfish almost anytime I prioritise myself", score: 3 },
      ]
    },
    { text: "Do you feel a vague, persistent emptiness that's hard to name or explain?",
      answers: [
        { text: "Rarely — I generally feel full and connected", score: 0 },
        { text: "Sometimes — there are periods where emptiness creeps in", score: 1 },
        { text: "Often — a background emptiness is a familiar companion", score: 2 },
        { text: "Consistently — the emptiness is a defining feature of my inner experience", score: 3 },
      ]
    },
    { text: "Looking back, do you feel you had to be emotionally self-sufficient earlier than was appropriate for your age?",
      sub: "CEN children often learn to meet their own emotional needs because the adults around them weren't available.",
      answers: [
        { text: "Not particularly — I felt cared for emotionally at a developmentally appropriate level", score: 0 },
        { text: "Somewhat — I grew up fairly quickly, but wasn't entirely without support", score: 1 },
        { text: "Yes — I learned early to handle most emotional experiences on my own", score: 2 },
        { text: "Strongly — I was emotionally on my own from very early — I didn't expect comfort", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🌿 Well nurtured';
    const meterRight = 'Significant neglect 🫧';
    if (pct < 25) {
      icon = '🌿'; title = 'Well-Nurtured Emotional Foundation';
      subtitle = 'Your childhood emotional environment appears to have been reasonably attuned and supportive.';
      traits = [
        { icon: '✅', text: '<strong>Emotional attunement in childhood literally shapes the brain</strong> — Allan Schore and Daniel Siegel\'s research has established that attuned caregiving shapes the structure of the developing brain\'s emotional regulation circuits.' },
        { icon: '💛', text: '<strong>No childhood is perfect</strong> — a nurturing foundation means "good enough" parenting (Winnicott\'s term), not flawless. Imperfect but attuned caregiving is the norm for emotionally healthy adults.' },
        { icon: '💡', text: '<strong>Emotional intelligence is partly learned</strong> — if you grew up with parents who acknowledged your inner world, that becomes your template for relating to your own emotions and to others\'.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — well-nurtured range<br><br>Based on: Webb, J. (2012). <em>Running on Empty: Overcome Your Childhood Emotional Neglect.</em> Schore, A.N. (2001). Effects of a secure attachment on right brain development. <em>Infant Mental Health Journal, 22.</em>`;
    } else if (pct < 50) {
      icon = '🌘'; title = 'Mild to Moderate Emotional Neglect';
      subtitle = 'Some gaps in emotional attunement during childhood appear to be present.';
      traits = [
        { icon: '⚠️', text: '<strong>CEN exists on a spectrum</strong> — at this level, emotional attunement was inconsistent. Some emotional needs were met, others weren\'t. This creates a confusing template: the self is partly recognised, partly invisible.' },
        { icon: '🧠', text: '<strong>Common adult presentations</strong>: difficulty naming feelings (alexithymia), mild self-dismissal, discomfort asking for help, and a vague sense that others have something you don\'t.' },
        { icon: '🌱', text: '<strong>Awareness alone produces significant relief</strong> — Webb\'s research shows that simply learning that CEN is a real thing that happened — and understanding its effects — begins meaningful change for many people.' },
        { icon: '🛠️', text: '<strong>Practical starting points</strong>: feelings journals, learning emotion vocabulary (the Feelings Wheel), IFS therapy to reconnect with dismissed inner parts, and Webb\'s workbook <em>Running on Empty No More.</em>' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — mild-moderate CEN range<br><br>Based on: Webb, J. (2012). CEN often produces adults who are functional but feel "empty" or somehow incomplete. Awareness at this level allows meaningful change with relatively modest intervention.`;
    } else if (pct < 75) {
      icon = '🫧'; title = 'Significant Childhood Emotional Neglect';
      subtitle = 'Significant gaps in early emotional attunement appear likely, with real adult effects.';
      traits = [
        { icon: '🔴', text: '<strong>At this level, CEN has shaped your relationship with your own inner world</strong> — you may have learned to dismiss, distrust, or be largely out of contact with your emotions, needs, and sense of deserving care.' },
        { icon: '🧬', text: '<strong>CEN is not about dramatic events</strong> — it\'s about the daily thousand small moments of emotional misattunement. Its effects can be as significant as active abuse while being far harder to identify and name.' },
        { icon: '💔', text: '<strong>Common presentations</strong>: pervasive emptiness, difficulty feeling worthy of love, strong drive for self-sufficiency, and relationships where you give far more than you receive.' },
        { icon: '🌿', text: '<strong>Recovery is possible</strong> — IFS therapy (Internal Family Systems), attachment-focused therapy, and schema therapy are among the most effective approaches for healing CEN.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — significant CEN range<br><br>Based on: Webb (2012). Young, J. et al. (2003). <em>Schema Therapy.</em> Schwartz, R. (1995). <em>Internal Family Systems Therapy.</em> A therapist familiar with CEN or attachment-based approaches is strongly recommended.`;
    } else {
      icon = '🌚'; title = 'Severe Childhood Emotional Neglect';
      subtitle = 'Your early emotional environment appears to have been significantly neglectful, with substantial adult effects.';
      traits = [
        { icon: '❗', text: '<strong>Severe CEN is a form of childhood trauma</strong> — the absence of consistent emotional attunement produces effects equivalent to, and sometimes more lasting than, active harm. This is not a deficit in you — it\'s something that happened to you by omission.' },
        { icon: '🧠', text: '<strong>The deepest wound of CEN</strong> — Webb identifies it as a pervasive unconscious belief that your emotions don\'t matter, your needs are invisible, and you\'re fundamentally different from others in a way you can\'t name.' },
        { icon: '🔗', text: '<strong>CEN overlaps with many other presentations</strong> — depression, complex PTSD, persistent emptiness, identity disturbance, and chronic loneliness can all be presentations of severe CEN.' },
        { icon: '🤝', text: '<strong>Please seek therapeutic support</strong> — IFS, EMDR, somatic therapy, and attachment-focused approaches all produce meaningful results with CEN. You deserve emotional attunement now, even if you didn\'t get it then.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — severe CEN range<br><br>Based on: Webb, J. (2012). <em>Running on Empty.</em> Herman, J.L. (1992). <em>Trauma and Recovery.</em> van der Kolk, B. (2014). <em>The Body Keeps the Score.</em> Professional support is strongly recommended.`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

narcissism: {
  id: 'narcissism', color: '#f59e0b',
  icon: '👑', title: 'Do I Have Narcissistic Tendencies?',
  descHtml: `Based on the <strong>Narcissistic Personality Inventory (NPI-16)</strong> by Ames et al. (2006) and Pincus & Lukowitsky's distinction between grandiose and vulnerable narcissism. Narcissistic traits exist on a spectrum — this quiz measures where you fall, not whether you have a disorder.<br><br><strong>12 questions · ~3 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "I am a special person with abilities or qualities that most people don't have.",
      sub: "Answer honestly — this is not about whether you're 'allowed' to think this.",
      answers: [
        { text: "Not like me — I see myself as largely similar to others", score: 0 },
        { text: "Somewhat — I have some qualities that set me apart", score: 1 },
        { text: "Often — I do feel I have unusual qualities", score: 2 },
        { text: "Very much — I genuinely feel I am more special than most people", score: 3 },
      ]
    },
    { text: "I expect to be treated with special consideration in situations where others are not.",
      answers: [
        { text: "Rarely — I expect standard treatment", score: 0 },
        { text: "Sometimes — in certain contexts I feel I deserve different treatment", score: 1 },
        { text: "Often — I feel I warrant special consideration", score: 2 },
        { text: "Consistently — I genuinely expect more consideration than the average person", score: 3 },
      ]
    },
    { text: "I feel that other people often don't give me the recognition I deserve.",
      sub: "NPI research identifies this 'entitlement-exploitativeness' dimension as central to narcissism.",
      answers: [
        { text: "Rarely — I feel my recognition is roughly appropriate", score: 0 },
        { text: "Sometimes — there are areas where I feel underappreciated", score: 1 },
        { text: "Often — I frequently feel undervalued relative to my actual worth", score: 2 },
        { text: "Strongly — a persistent sense of being underrecognised is very present for me", score: 3 },
      ]
    },
    { text: "I am skilled at influencing or steering people to get what I want.",
      answers: [
        { text: "Not really — I rely on honest communication", score: 0 },
        { text: "Somewhat — I can be persuasive but stop short of manipulation", score: 1 },
        { text: "Often — I am skilled at getting others to do what I want", score: 2 },
        { text: "Yes — I'm quite effective at steering people toward outcomes I prefer", score: 3 },
      ]
    },
    { text: "I become quite upset when I'm criticised, ignored, or not treated as I expect to be.",
      sub: "Pincus & Lukowitsky (2010) identify 'narcissistic injury' — intense distress to perceived slights — as the core of vulnerable narcissism.",
      answers: [
        { text: "Rarely — I handle criticism without significant distress", score: 0 },
        { text: "Sometimes — certain types of criticism affect me more than they should", score: 1 },
        { text: "Often — criticism or being ignored causes significant upset", score: 2 },
        { text: "Strongly — being criticised or ignored is one of the most difficult experiences I face", score: 3 },
      ]
    },
    { text: "I feel I am more intelligent, perceptive, or capable than most people I encounter.",
      answers: [
        { text: "Rarely — I see others as largely comparable to me in ability", score: 0 },
        { text: "Sometimes — in certain areas I feel more capable than average", score: 1 },
        { text: "Often — I frequently see myself as more able than those around me", score: 2 },
        { text: "Consistently — I generally feel I'm operating at a higher level than most", score: 3 },
      ]
    },
    { text: "I have a strong need for admiration from others — it matters significantly how others perceive me.",
      sub: "The need for external validation is one of the most consistently replicated features of narcissism across cultures.",
      answers: [
        { text: "Rarely — admiration is nice but not something I rely on", score: 0 },
        { text: "Sometimes — external validation matters, though I don't need it constantly", score: 1 },
        { text: "Often — I have a significant need for others to admire or think highly of me", score: 2 },
        { text: "Strongly — how others perceive me is very important to my sense of self", score: 3 },
      ]
    },
    { text: "In conversations, I find it natural to bring things back to my own experiences, achievements, or perspective.",
      answers: [
        { text: "Rarely — I actively work to make conversations mutual", score: 0 },
        { text: "Sometimes — it happens, though I'm aware of it", score: 1 },
        { text: "Often — conversations do tend to centre on me", score: 2 },
        { text: "Frequently — I'm most comfortable when I'm the subject of conversation", score: 3 },
      ]
    },
    { text: "I find it difficult to genuinely consider how my actions affect others when it conflicts with what I want.",
      answers: [
        { text: "Rarely — empathy and consideration of others are natural for me", score: 0 },
        { text: "Sometimes — under certain conditions, self-interest overrides consideration of others", score: 1 },
        { text: "Often — I find myself prioritising my needs in ways that minimise others' experiences", score: 2 },
        { text: "Frequently — consideration of others competes strongly with my own interests", score: 3 },
      ]
    },
    { text: "I believe I deserve the best — best partners, best outcomes, best treatment.",
      answers: [
        { text: "Not particularly — I have realistic expectations", score: 0 },
        { text: "Somewhat — I have high standards but can manage realistic outcomes", score: 1 },
        { text: "Often — I feel I deserve exceptional outcomes and am genuinely bothered when I don't get them", score: 2 },
        { text: "Strongly — a deep sense of deserving the best is central to how I navigate life", score: 3 },
      ]
    },
    { text: "I fantasise about being highly successful, admired, powerful, or famous.",
      answers: [
        { text: "Rarely — I have ambitions but not persistent fantasies about exceptional status", score: 0 },
        { text: "Sometimes — I have occasional fantasies of significant success or recognition", score: 1 },
        { text: "Often — I spend significant time imagining scenarios where I'm greatly admired", score: 2 },
        { text: "Frequently — fantasies of exceptional status or admiration are a regular feature of my inner life", score: 3 },
      ]
    },
    { text: "I feel envious of others' successes or qualities, or I believe others are envious of me.",
      sub: "Both directions are relevant — envying others, or believing you are envied.",
      answers: [
        { text: "Rarely — I can celebrate others' success without envy", score: 0 },
        { text: "Sometimes — certain successes trigger envy", score: 1 },
        { text: "Often — envy (of others or belief in others' envy of me) is present", score: 2 },
        { text: "Significantly — envy or the sense of being envied features frequently in my experience", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🤝 Healthy self-regard';
    const meterRight = 'High narcissism 👑';
    if (pct < 26) {
      icon = '🤝'; title = 'Healthy Self-Regard';
      subtitle = 'Your self-view appears realistic and grounded — neither self-deflating nor inflated.';
      traits = [
        { icon: '✅', text: '<strong>Not all confidence is narcissism</strong> — research distinguishes healthy self-esteem (stable, realistic, internally-sourced) from narcissistic self-regard (fragile, inflated, dependent on external validation).' },
        { icon: '🌱', text: '<strong>Healthy narcissism exists</strong> — Kohut (1977) distinguished healthy narcissism (the capacity to love yourself and have ambitions) from pathological narcissism. Some self-regard is necessary for functioning.' },
        { icon: '💡', text: '<strong>Empathy is a key differentiator</strong> — people with low narcissism maintain genuine interest in others\' inner lives as ends in themselves, not instruments to manage for self-regulation.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — healthy self-regard range<br><br>Based on: Ames, D.R. et al. (2006). The NPI-16. <em>Journal of Research in Personality, 40</em>(4). Pincus, A.L. & Lukowitsky, M.R. (2010). Pathological narcissism. <em>Annual Review of Clinical Psychology, 6.</em>`;
    } else if (pct < 50) {
      icon = '⭐'; title = 'Mild Narcissistic Tendencies';
      subtitle = 'Some narcissistic traits are present — this is normal and common.';
      traits = [
        { icon: '⚠️', text: '<strong>Narcissistic traits are normally distributed across the population</strong> — Stinson et al. (2008) found most people fall somewhere on the narcissism spectrum rather than having a discrete disorder.' },
        { icon: '🔍', text: '<strong>At this level, key traits to watch</strong>: the need for admiration, sensitivity to criticism, and occasional entitlement. These don\'t cause problems unless they\'re increasing or affecting close relationships.' },
        { icon: '💡', text: '<strong>Narcissistic traits often reflect unmet early needs</strong> — Kohut\'s self-psychology framework suggests these patterns emerge when early needs for mirroring and recognition weren\'t sufficiently met.' },
        { icon: '🌱', text: '<strong>Self-awareness is itself anti-narcissistic</strong> — the fact that you\'re examining these patterns reduces the likelihood of blind spots that cause harm in relationships.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — mild narcissistic tendencies range<br><br>Based on: Ames et al. (2006). Stinson, F.S. et al. (2008). <em>Journal of Clinical Psychiatry, 69</em>(7). Kohut, H. (1977). <em>The Restoration of the Self.</em>`;
    } else if (pct < 75) {
      icon = '👑'; title = 'Significant Narcissistic Traits';
      subtitle = 'Narcissistic traits are significantly present and may be creating friction in your relationships.';
      traits = [
        { icon: '🔴', text: '<strong>At this level, narcissistic patterns are likely creating real relational costs</strong> — entitlement, need for admiration, and difficulty with empathy are felt by those close to you, even if not by you.' },
        { icon: '🌊', text: '<strong>Grandiose and vulnerable narcissism often coexist</strong> — Pincus & Lukowitsky (2010) found that the same person often oscillates between feeling superior (grandiose) and feeling injured or underappreciated (vulnerable).' },
        { icon: '🧠', text: '<strong>Narcissism is paradoxically fragile</strong> — the inflated self-image requires constant maintenance through external validation, making it more brittle, not more stable, than healthy self-esteem.' },
        { icon: '🛠️', text: '<strong>Schema therapy and psychodynamic approaches</strong> show the strongest evidence for reducing pathological narcissism. Mentalisation-based therapy (MBT) also helps by increasing capacity to see others as full people.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — significant narcissistic traits range<br><br>Based on: Ames et al. (2006). Pincus & Lukowitsky (2010). Campbell, W.K. & Miller, J.D. (Eds., 2011). <em>Handbook of Narcissism and Narcissistic Personality Disorder.</em> Therapeutic support is recommended.`;
    } else {
      icon = '🔮'; title = 'High Narcissism Profile';
      subtitle = 'Narcissistic traits are highly elevated and likely creating significant relational difficulties.';
      traits = [
        { icon: '❗', text: '<strong>High narcissism at this level may significantly impair close relationships</strong> — empathy deficits, entitlement, and sensitivity to criticism create patterns that partners and others experience as deeply hurtful.' },
        { icon: '🧬', text: '<strong>Narcissistic traits at this level usually have developmental roots</strong> — either excessive idealisation by caregivers (preventing reality-testing) or emotional neglect (producing compensatory grandiosity as defense).' },
        { icon: '💔', text: '<strong>The hidden suffering of high narcissism</strong> — despite appearances, people with high narcissism often suffer significantly from shame, relationships that can\'t sustain them, and the exhaustion of maintaining the self-image.' },
        { icon: '🤝', text: '<strong>Therapy works, but requires honesty</strong> — schema therapy, psychodynamic therapy, and transference-focused psychotherapy (TFP) all show evidence. Insight must come before change is possible.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — high narcissism range<br><br>Based on: Ames et al. (2006). Kernberg, O.F. (1975). <em>Borderline Conditions and Pathological Narcissism.</em> If your relationships are suffering, professional support is strongly recommended.`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},


mindfulness: {
  id: 'mindfulness', color: '#06b6d4',
  icon: '🌿', title: 'How Present Am I?',
  descHtml: `Based on the <strong>Mindful Attention Awareness Scale</strong> (MAAS; Brown & Ryan, 2003, <em>Journal of Personality and Social Psychology, 84</em>(4)), this quiz measures dispositional mindfulness — how often you operate on autopilot versus being attentively present in daily life.<br><br><strong>10 questions · ~2 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "I find myself doing things on autopilot without really paying attention to what I'm doing.",
      sub: "Think about everyday activities — driving, eating, moving through routines.",
      answers: [
        { text: "Rarely — I'm generally present and intentional in what I do", score: 3 },
        { text: "Sometimes — I catch myself on autopilot but it isn't constant", score: 2 },
        { text: "Often — operating on autopilot is a recognisable pattern for me", score: 1 },
        { text: "Almost always — I frequently arrive somewhere or finish something with no memory of doing it", score: 0 },
      ]
    },
    { text: "I find it difficult to stay focused on what's happening in the present moment.",
      answers: [
        { text: "Rarely — I'm generally able to bring my attention to the present", score: 3 },
        { text: "Sometimes — my mind drifts but I can usually return to the present", score: 2 },
        { text: "Often — staying present takes real effort and I frequently lose it", score: 1 },
        { text: "Almost always — my mind is nearly always somewhere other than where I am", score: 0 },
      ]
    },
    { text: "I rush through activities without genuinely noticing or experiencing them.",
      sub: "For example, eating while distracted, moving between tasks without pausing.",
      answers: [
        { text: "Rarely — I tend to slow down and experience what I'm doing", score: 3 },
        { text: "Sometimes — I rush in certain situations but not habitually", score: 2 },
        { text: "Often — rushing through activities is my default mode", score: 1 },
        { text: "Almost always — I rarely fully experience the activity I'm engaged in", score: 0 },
      ]
    },
    { text: "I forget someone's name almost immediately after being introduced to them.",
      answers: [
        { text: "Rarely — I usually retain names because I'm paying attention when introduced", score: 3 },
        { text: "Sometimes — I forget occasionally, especially in busy social situations", score: 2 },
        { text: "Often — I frequently forget names almost as soon as I've heard them", score: 1 },
        { text: "Almost always — names disappear within seconds of meeting someone", score: 0 },
      ]
    },
    { text: "I break or spill things because of inattention — moving or acting on autopilot rather than with awareness.",
      answers: [
        { text: "Rarely — I tend to move with care and awareness", score: 3 },
        { text: "Sometimes — small accidents happen but not frequently", score: 2 },
        { text: "Often — inattention-related mishaps happen regularly", score: 1 },
        { text: "Very frequently — accidents caused by not paying attention are a regular occurrence", score: 0 },
      ]
    },
    { text: "I find myself snacking or eating without noticing whether I'm actually hungry.",
      answers: [
        { text: "Rarely — I generally notice my hunger signals before eating", score: 3 },
        { text: "Sometimes — I eat mindlessly in certain contexts (stress, TV, etc.)", score: 2 },
        { text: "Often — I frequently eat out of habit or distraction rather than actual hunger", score: 1 },
        { text: "Almost always — awareness of hunger rarely informs when I eat", score: 0 },
      ]
    },
    { text: "I get so preoccupied with the future or the past that I miss what's happening right now.",
      sub: "Planning, worrying, ruminating — these pull attention away from the present.",
      answers: [
        { text: "Rarely — I can plan and reflect without losing the present", score: 3 },
        { text: "Sometimes — future or past preoccupation costs me some present experience", score: 2 },
        { text: "Often — my attention is frequently somewhere other than now", score: 1 },
        { text: "Almost always — the present is consistently crowded out by past or future", score: 0 },
      ]
    },
    { text: "I carry out activities without being fully attentive to what I'm doing — as though on automatic pilot.",
      answers: [
        { text: "Rarely — I'm mostly engaged with what I'm doing as I do it", score: 3 },
        { text: "Sometimes — I go through the motions in certain routine tasks", score: 2 },
        { text: "Often — I frequently act without real engagement or awareness", score: 1 },
        { text: "Almost always — automatic pilot is my dominant mode of operating", score: 0 },
      ]
    },
    { text: "I don't notice feelings of tension, discomfort, or emotion in my body until they've become significant.",
      sub: "Mindfulness includes interoception — awareness of physical and emotional signals.",
      answers: [
        { text: "Rarely — I tend to notice subtle physical/emotional signals early", score: 3 },
        { text: "Sometimes — I notice them, but often after they've already built up", score: 2 },
        { text: "Often — emotions and tension usually build before I become aware of them", score: 1 },
        { text: "Almost always — I only notice feelings when they've become impossible to ignore", score: 0 },
      ]
    },
    { text: "I find it difficult to pay full attention to one thing at a time — my mind tends to multitask.",
      answers: [
        { text: "Rarely — I can generally give one thing my full attention", score: 3 },
        { text: "Sometimes — sustained single-focus is possible but not easy", score: 2 },
        { text: "Often — my attention is split and hard to gather on one thing", score: 1 },
        { text: "Almost always — my mind is nearly always running multiple threads simultaneously", score: 0 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '😶 Autopilot';
    const meterRight = 'Fully present 🌿';
    if (pct < 26) {
      icon = '🌫️'; title = 'Low Mindfulness';
      subtitle = 'You spend much of your time on autopilot — moving through life without fully inhabiting your experience.';
      traits = [
        { icon: '⚠️', text: '<strong>Autopilot has real costs</strong> — Brown & Ryan (2003) found that low dispositional mindfulness predicted significantly lower wellbeing, more negative affect, and less life satisfaction across multiple studies.' },
        { icon: '🧠', text: '<strong>The mind\'s default mode is wandering</strong> — Killingsworth & Gilbert\'s (2010) landmark study found minds are wandering nearly 47% of waking hours, and mind-wandering consistently predicts lower happiness, regardless of what the mind wanders to.' },
        { icon: '🌱', text: '<strong>Mindfulness can be built</strong> — Kabat-Zinn\'s Mindfulness-Based Stress Reduction (MBSR) programme demonstrates measurable changes in attentional patterns after just 8 weeks of practice.' },
        { icon: '🛠️', text: '<strong>Start small</strong>: even 5 minutes of deliberate sensory attention daily — the texture of food, the feeling of feet on the ground — begins to rewire the brain\'s default mode network over time.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — low mindfulness range<br><br>Based on: Brown, K.W. & Ryan, R.M. (2003). The benefits of being present. <em>Journal of Personality and Social Psychology, 84</em>(4), 822–848. Kabat-Zinn, J. (1994). <em>Wherever You Go, There You Are.</em> Siegel, D.J. (2010). <em>The Mindful Therapist.</em>`;
    } else if (pct < 50) {
      icon = '🌥️'; title = 'Moderate Mindfulness';
      subtitle = 'You have some capacity for present-moment awareness, but autopilot tendencies are frequent.';
      traits = [
        { icon: '🔍', text: '<strong>Mindfulness exists on a spectrum</strong> — even at this level, you have genuine moments of presence. The work is extending those moments and catching yourself sooner when you drift.' },
        { icon: '💡', text: '<strong>The key mechanism is metacognitive awareness</strong> — Siegel (2010) calls this "mindsight": the ability to observe your own mental processes without being fully identified with them. It can be cultivated.' },
        { icon: '🔄', text: '<strong>Informal practice often outperforms formal meditation</strong> — research shows that deliberate attention during everyday activities (eating, walking, conversations) has comparable benefits to seated meditation for many people.' },
        { icon: '🌿', text: '<strong>The research is consistent</strong>: higher dispositional mindfulness predicts better emotional regulation, lower anxiety and depression, stronger relationships, and better immune functioning.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — moderate mindfulness range<br><br>Based on: Brown & Ryan (2003). Killingsworth, M.A. & Gilbert, D.T. (2010). A wandering mind is an unhappy mind. <em>Science, 330</em>(6006). Kabat-Zinn, J. (1994). <em>Wherever You Go, There You Are.</em>`;
    } else if (pct < 75) {
      icon = '🌤️'; title = 'Solid Mindfulness';
      subtitle = 'You have a genuine capacity for present-moment awareness — you live with more intention than most.';
      traits = [
        { icon: '✅', text: '<strong>At this level, mindfulness is a real resource</strong> — Brown & Ryan found that people scoring in this range show measurably better emotional regulation and recover more quickly from negative events.' },
        { icon: '🔬', text: '<strong>Mindfulness at this level has neurological correlates</strong> — Lazar et al. (2005) found thickening in the prefrontal cortex and insula in regular meditators, associated with better attention and interoception.' },
        { icon: '🌱', text: '<strong>The growth edge at this level</strong> is extending mindfulness into high-stress or high-emotion moments — where autopilot is most likely to take over and when presence matters most.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — solid mindfulness range<br><br>Based on: Brown & Ryan (2003). Lazar, S.W. et al. (2005). Meditation experience is associated with increased cortical thickness. <em>NeuroReport, 16</em>(17). Siegel, D.J. (2010). <em>The Mindful Therapist.</em>`;
    } else {
      icon = '🌿'; title = 'High Mindfulness';
      subtitle = 'You demonstrate a strong capacity for present-moment awareness — you live with genuine attentiveness.';
      traits = [
        { icon: '🏆', text: '<strong>High dispositional mindfulness is associated with a wide range of benefits</strong> — Brown & Ryan\'s research links high MAAS scores with greater vitality, positive affect, and autonomy, and lower anxiety, depression, and neuroticism.' },
        { icon: '🧘', text: '<strong>Presence isn\'t the absence of thought</strong> — at this level, you likely still have thoughts about past and future, but you\'re less captured by them. Siegel calls this "integration" — being with experience rather than being swept away by it.' },
        { icon: '💡', text: '<strong>Your pattern is relatively rare</strong> — Killingsworth & Gilbert\'s large-scale study found only a minority of people maintain this level of present-moment contact across daily life. It reflects something genuinely cultivated.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — high mindfulness range<br><br>Based on: Brown, K.W. & Ryan, R.M. (2003). <em>Journal of Personality and Social Psychology, 84</em>(4). Kabat-Zinn, J. (1994). <em>Wherever You Go, There You Are.</em> Siegel, D.J. (2010). <em>The Mindful Therapist.</em>`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

dissociation: {
  id: 'dissociation', color: '#7c3aed',
  icon: '🫥', title: 'Do I Dissociate?',
  descHtml: `Based on the <strong>Dissociative Experiences Scale II</strong> (DES-II; Carlson & Putnam, 1993), the gold standard clinical screening tool for dissociative experiences. This is a <em>screening instrument only</em>, not a diagnostic tool.<br><br><strong>10 questions · ~2 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "I find myself somewhere — a room, a place, outside — without knowing how I got there or why.",
      sub: "This refers to gaps in autobiographical continuity, not just distraction.",
      answers: [
        { text: "Never or almost never", score: 0 },
        { text: "Occasionally — a few times a year", score: 1 },
        { text: "Fairly often — monthly or more", score: 2 },
        { text: "Frequently — a regular experience", score: 3 },
      ]
    },
    { text: "People, places, or familiar objects feel unreal, distant, or as though they are not really there.",
      sub: "This is called derealisation — the world or others seem like a dream, a set, or at a remove.",
      answers: [
        { text: "Never or almost never", score: 0 },
        { text: "Occasionally — in certain situations or when very tired/stressed", score: 1 },
        { text: "Fairly often — a recurring experience", score: 2 },
        { text: "Frequently — a significant and regular feature of my experience", score: 3 },
      ]
    },
    { text: "I feel as though I am watching myself from outside my body — observing my own actions, as if from a distance.",
      sub: "This is called depersonalisation — feeling detached from your own body, thoughts, or emotions.",
      answers: [
        { text: "Never or almost never", score: 0 },
        { text: "Occasionally — in specific states (extreme stress, exhaustion)", score: 1 },
        { text: "Fairly often — this happens with some regularity", score: 2 },
        { text: "Frequently — feeling outside myself is a familiar experience", score: 3 },
      ]
    },
    { text: "I look in the mirror and do not recognise myself, or my reflection feels unfamiliar or strange.",
      answers: [
        { text: "Never or almost never", score: 0 },
        { text: "Occasionally", score: 1 },
        { text: "Fairly often", score: 2 },
        { text: "Frequently — my reflection often feels unfamiliar or not quite 'me'", score: 3 },
      ]
    },
    { text: "Other people tell me about events I was present for — conversations, things I said, places I went — that I have no memory of.",
      sub: "Dissociative amnesia can range from patches to extended gaps in memory.",
      answers: [
        { text: "Never or almost never", score: 0 },
        { text: "Occasionally — there are occasional gaps that others point out", score: 1 },
        { text: "Fairly often — gaps in memory that others fill in are a recognisable pattern", score: 2 },
        { text: "Frequently — significant gaps that others need to fill in happen regularly", score: 3 },
      ]
    },
    { text: "I feel like a different person in different contexts or situations — not just adapting, but feeling like a fundamentally different self.",
      sub: "This reflects identity fragmentation — distinct self-states rather than adaptive social flexibility.",
      answers: [
        { text: "Rarely — I feel basically continuous across different situations", score: 0 },
        { text: "Sometimes — I notice significant variation in how I feel and behave", score: 1 },
        { text: "Often — the 'me' in different contexts feels meaningfully different", score: 2 },
        { text: "Frequently — different contexts feel like different people, not the same self", score: 3 },
      ]
    },
    { text: "I find objects, drawings, writing, or evidence of things I've done that I don't remember creating or doing.",
      answers: [
        { text: "Never or almost never", score: 0 },
        { text: "Occasionally", score: 1 },
        { text: "Fairly often", score: 2 },
        { text: "Frequently", score: 3 },
      ]
    },
    { text: "I hear voices, sounds, or commentary inside my head that doesn't feel like my own thinking.",
      sub: "Inner voices in dissociation are ego-dystonic — they feel distinct from the self's own internal dialogue.",
      answers: [
        { text: "Never or almost never", score: 0 },
        { text: "Occasionally — I'm aware of inner voices that feel somewhat distinct", score: 1 },
        { text: "Fairly often", score: 2 },
        { text: "Frequently — inner voices that feel separate are a regular experience", score: 3 },
      ]
    },
    { text: "I feel emotionally numb, cut off, or detached from my own feelings — as though a glass wall exists between me and my emotions.",
      sub: "Emotional detachment is a core dissociative process — the numbing of affective experience.",
      answers: [
        { text: "Rarely — I feel my emotions with reasonable directness", score: 0 },
        { text: "Sometimes — in certain situations or periods I feel cut off from emotion", score: 1 },
        { text: "Often — emotional numbness or detachment is a regular experience", score: 2 },
        { text: "Frequently — feeling cut off from my emotions is more the rule than the exception", score: 3 },
      ]
    },
    { text: "When I'm under stress, time feels strange — either passing very fast or very slowly — or I 'come to' and realise I've been somewhere else mentally.",
      answers: [
        { text: "Rarely or never", score: 0 },
        { text: "Sometimes — stress does distort my sense of time or presence", score: 1 },
        { text: "Often — stress-related time distortion or 'coming to' is recognisable", score: 2 },
        { text: "Frequently — time distortion and spacey episodes are a consistent stress response", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🟢 Non-dissociative';
    const meterRight = 'High dissociation 🫥';
    if (pct < 26) {
      icon = '🟢'; title = 'Non-Dissociative Range';
      subtitle = 'Your responses suggest minimal dissociative experiences — within the everyday range.';
      traits = [
        { icon: '✅', text: '<strong>Mild transient dissociation is universal</strong> — highway hypnosis (driving on autopilot), absorption in a book, or brief derealization from exhaustion affect almost everyone occasionally. This isn\'t clinically significant.' },
        { icon: '🧠', text: '<strong>The DES-II measures frequency, not presence</strong> — Putnam et al. designed the scale to distinguish ordinary dissociative experiences (near-universal) from clinically significant ones (much rarer). Your frequency is in the healthy range.' },
        { icon: '💡', text: '<strong>Dissociation exists on a spectrum</strong> — van der Kolk (2014) emphasises that all mammals have dissociative capacities as an evolutionary response to overwhelming threat. The question is frequency and interference with daily life.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — non-dissociative range<br><br>Based on: Carlson, E.B. & Putnam, F.W. (1993). An update on the Dissociative Experiences Scale. <em>Dissociation, 6</em>(1). Ross, C.A. et al. (1991). The frequency of multiple personality disorder. <em>Journal of Nervous and Mental Disease, 179.</em> van der Kolk, B. (2014). <em>The Body Keeps the Score.</em>`;
    } else if (pct < 50) {
      icon = '🌀'; title = 'Mild to Moderate Dissociation';
      subtitle = 'You experience dissociative states with some regularity — possibly linked to stress, trauma history, or nervous system patterns.';
      traits = [
        { icon: '🔍', text: '<strong>Dissociation at this level often has a protective history</strong> — the brain learns to detach during overwhelming experiences. What was once adaptive becomes automatic in less threatening contexts.' },
        { icon: '🌊', text: '<strong>Stress is a reliable trigger</strong> — mild-to-moderate dissociation frequently intensifies under stress or in situations that resemble past threatening contexts, even without conscious awareness of the connection.' },
        { icon: '🧠', text: '<strong>Grounding techniques have strong evidence</strong> — sensory grounding (5-4-3-2-1, temperature, texture) interrupts dissociative activation by re-engaging the somatosensory system, which operates differently from the dissociated state.' },
        { icon: '💡', text: '<strong>Trauma-informed therapy is the indicated approach</strong> — EMDR, somatic experiencing, and internal family systems (IFS) all have evidence for reducing dissociative experiences by processing the underlying material.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — mild to moderate dissociation range<br><br>Based on: Carlson & Putnam (1993). van der Kolk, B. (2014). <em>The Body Keeps the Score.</em> Note: clinical threshold on the DES-II is typically a mean score of >30 (corresponding to frequent dissociation across items). Consider discussing with a mental health professional.`;
    } else if (pct < 75) {
      icon = '🌫️'; title = 'Significant Dissociation';
      subtitle = 'Dissociative experiences are a significant and frequent feature of your life. This level warrants professional attention.';
      traits = [
        { icon: '🔴', text: '<strong>At this level, dissociation is likely interfering with daily functioning</strong> — memory gaps, identity discontinuity, and depersonalisation at this frequency create real difficulties in relationships, work, and self-continuity.' },
        { icon: '🧬', text: '<strong>Significant dissociation is strongly linked to trauma history</strong> — Ross et al. (1991) and van der Kolk\'s research consistently find that higher DES-II scores predict earlier, more severe, or more chronic trauma, particularly relational trauma.' },
        { icon: '🛠️', text: '<strong>The evidence-based treatment is phase-based</strong> — ISSTD guidelines recommend safety stabilisation first (grounding, regulation skills), before trauma processing, to prevent retraumatisation. Internal family systems (IFS) and sensorimotor psychotherapy have strong evidence.' },
        { icon: '🤝', text: '<strong>Please consider professional support</strong> — a trauma-informed therapist experienced in dissociation can make a significant difference. Dissociation at this level is treatable.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — significant dissociation range<br><br>Based on: Carlson & Putnam (1993). DES-II clinical threshold: mean score >30. Ross, C.A. et al. (1991). <em>Journal of Nervous and Mental Disease, 179.</em> van der Kolk, B. (2014). <em>The Body Keeps the Score.</em> Professional support is recommended.`;
    } else {
      icon = '🫥'; title = 'High Dissociation';
      subtitle = 'Your responses suggest frequent, significant dissociative experiences across multiple domains. Please seek professional support.';
      traits = [
        { icon: '❗', text: '<strong>This level of dissociation is clinically significant</strong> — frequent amnesia, identity fragmentation, depersonalisation and derealisation at this level typically indicate a need for professional trauma assessment and treatment.' },
        { icon: '🧠', text: '<strong>High dissociation often reflects the nervous system\'s most extreme protection</strong> — van der Kolk\'s work shows that when neither fight nor flight was possible (often in early relational or chronic trauma), the brain\'s final protection is structural dissociation.' },
        { icon: '🛡️', text: '<strong>Dissociation was adaptive at its origin</strong> — it allowed survival in situations that were otherwise unbearable. The goal of therapy isn\'t to eliminate this capacity but to increase choice: to be able to stay present when it\'s safe.' },
        { icon: '🤝', text: '<strong>Support is available</strong> — trauma-informed therapists specialising in structural dissociation, DID, and complex PTSD can help. EMDR, IFS, somatic experiencing, and phase-based trauma treatment all have strong evidence at this level.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — high dissociation range<br><br>Based on: Carlson & Putnam (1993). DES-II mean score >30 indicates clinical-level dissociation (Ross et al., 1991). van der Kolk, B. (2014). <em>The Body Keeps the Score.</em> Strongly recommended to seek professional evaluation from a trauma-informed clinician.`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

impostor: {
  id: 'impostor', color: '#0ea5e9',
  icon: '🎭', title: 'Do I Have Impostor Syndrome?',
  descHtml: `Based on the <strong>Clance Impostor Phenomenon Scale</strong> (CIPS; Clance, 1978; validated Chrisman et al., 1995). Impostor syndrome is the persistent belief that you are a fraud who will eventually be "found out" — despite external evidence of competence.<br><br><strong>10 questions · ~2 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "I am afraid that people who matter to me will find out that I'm not as capable as they think I am.",
      sub: "This is the core fear of impostor phenomenon — anticipated exposure.",
      answers: [
        { text: "Rarely — I generally feel my competence is reasonably accurate", score: 0 },
        { text: "Sometimes — the fear shows up in certain contexts", score: 1 },
        { text: "Often — the fear of being 'found out' is a regular presence", score: 2 },
        { text: "Frequently — this fear significantly shapes my behaviour", score: 3 },
      ]
    },
    { text: "When I succeed at something important, I attribute it mainly to luck, timing, or circumstances rather than my own ability.",
      sub: "Clance identified external attribution of success as one of the most consistent markers of impostor phenomenon.",
      answers: [
        { text: "Rarely — I generally recognise my own contribution to my successes", score: 0 },
        { text: "Sometimes — I can see my role, but doubt creeps in", score: 1 },
        { text: "Often — luck or circumstance feels like the more accurate explanation", score: 2 },
        { text: "Almost always — my successes feel like things that happened to me, not things I earned", score: 3 },
      ]
    },
    { text: "When I am praised or congratulated, I feel uncomfortable — as though the person doesn't really know what they're talking about.",
      answers: [
        { text: "Rarely — I can generally receive positive feedback with reasonable grace", score: 0 },
        { text: "Sometimes — positive feedback triggers some internal resistance or dismissal", score: 1 },
        { text: "Often — praise feels unearned, and I tend to dismiss or deflect it", score: 2 },
        { text: "Almost always — compliments feel actively uncomfortable, like they're addressed to the wrong person", score: 3 },
      ]
    },
    { text: "Even in areas where I've had repeated success, I still fear that my next performance will reveal a fundamental inadequacy.",
      answers: [
        { text: "Rarely — past success generally gives me reasonable confidence going forward", score: 0 },
        { text: "Sometimes — the fear resurfaces despite my track record", score: 1 },
        { text: "Often — past success feels irrelevant to what might happen next", score: 2 },
        { text: "Consistently — a history of success provides little or no protection against this fear", score: 3 },
      ]
    },
    { text: "I'm aware that other people seem smarter, more capable, or more qualified than me — and fear this will eventually become obvious.",
      sub: "This involves social comparison and the belief that others see through you, even if they haven't caught on yet.",
      answers: [
        { text: "Rarely — I can hold my own competence alongside others' without persistent comparison", score: 0 },
        { text: "Sometimes — I make unfavourable comparisons in certain settings", score: 1 },
        { text: "Often — I frequently feel outpaced by others and fear it shows", score: 2 },
        { text: "Consistently — I nearly always feel less capable than the people around me", score: 3 },
      ]
    },
    { text: "I have difficulty fully accepting a compliment or achievement without an internal 'yes, but…' that qualifies or deflates it.",
      answers: [
        { text: "Rarely — I can let good news land without immediately undermining it", score: 0 },
        { text: "Sometimes — I notice the qualifying voice, but don't always believe it", score: 1 },
        { text: "Often — positive feedback consistently triggers an internal counter-argument", score: 2 },
        { text: "Almost always — the 'yes, but' arrives before the appreciation does", score: 3 },
      ]
    },
    { text: "I work significantly harder than necessary — driven by a fear that any gap in effort will expose my incompetence.",
      sub: "Overwork is a common coping behaviour in impostor phenomenon — a preemptive defence against exposure.",
      answers: [
        { text: "Rarely — my effort level is generally proportionate to the task", score: 0 },
        { text: "Sometimes — I over-prepare in certain high-stakes situations", score: 1 },
        { text: "Often — I regularly put in far more effort than the task requires, from fear rather than interest", score: 2 },
        { text: "Consistently — anxiety about being exposed drives me to overprepare most of the time", score: 3 },
      ]
    },
    { text: "I feel like a fraud in my professional role, academic setting, or social position — as though I don't really belong there.",
      answers: [
        { text: "Rarely — I generally feel reasonably entitled to the positions I hold", score: 0 },
        { text: "Sometimes — in certain contexts or after certain failures, the fraud feeling emerges", score: 1 },
        { text: "Often — I regularly feel like I've been mistakenly admitted somewhere I don't truly belong", score: 2 },
        { text: "Almost always — the sense of being a fraud in my position is persistent", score: 3 },
      ]
    },
    { text: "If I perform well on something, my first thought is relief that I wasn't caught out — not satisfaction in what I achieved.",
      sub: "This relief response (rather than pride) is a diagnostic marker of impostor phenomenon.",
      answers: [
        { text: "Rarely — success tends to produce genuine satisfaction rather than just relief", score: 0 },
        { text: "Sometimes — relief and satisfaction are mixed", score: 1 },
        { text: "Often — relief dominates — I avoided exposure rather than demonstrated competence", score: 2 },
        { text: "Almost always — success feels like a near miss, not an accomplishment", score: 3 },
      ]
    },
    { text: "I feel that my achievements do not accurately reflect my actual ability — they overstate what I'm truly capable of.",
      answers: [
        { text: "Rarely — I feel my achievements are generally a fair representation of my ability", score: 0 },
        { text: "Sometimes — there's a gap between my outcomes and my sense of my true capability", score: 1 },
        { text: "Often — my achievements consistently feel like they overshoot my actual competence", score: 2 },
        { text: "Almost always — I feel my achievements are largely a misrepresentation of who I really am", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🟢 No impostor syndrome';
    const meterRight = 'High impostor syndrome 🎭';
    if (pct < 26) {
      icon = '🟢'; title = 'No Significant Impostor Syndrome';
      subtitle = 'You demonstrate a relatively healthy relationship with your own competence — you can own your achievements without excessive self-doubt.';
      traits = [
        { icon: '✅', text: '<strong>A healthy self-appraisal is balanced</strong> — Clance\'s research distinguishes healthy humility and self-awareness (which acknowledge genuine uncertainty) from impostor phenomenon (which systematically denies evidence of competence).' },
        { icon: '💡', text: '<strong>Low impostor syndrome doesn\'t mean arrogance</strong> — it means you can hold your successes and failures with approximate accuracy. Dunning & Kruger\'s (1999) research found that competent people tend to slightly underestimate themselves — which is different from the persistent fraud narrative.' },
        { icon: '🌱', text: '<strong>Competence calibration matters for wellbeing</strong> — Sakulku & Alexander (2011) found that people who can own their achievements report significantly better occupational functioning, less anxiety, and more sustainable performance.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — no significant impostor syndrome<br><br>Based on: Clance, P.R. (1978). The impostor phenomenon. <em>Georgia State University.</em> Sakulku, J. & Alexander, J. (2011). The impostor phenomenon. <em>International Journal of Behavioral Science, 6</em>(1). Harvey, J.C. & Katz, C. (1985). <em>If I'm So Successful, Why Do I Feel Like a Fake?</em>`;
    } else if (pct < 50) {
      icon = '🎭'; title = 'Mild Impostor Tendencies';
      subtitle = 'Some impostor-like experiences are present — self-doubt and difficulty internalising success appear in certain contexts.';
      traits = [
        { icon: '🔍', text: '<strong>Impostor tendencies are extremely common</strong> — Clance\'s original work found these patterns in 70% of high-achieving individuals. At a mild level, they can actually motivate preparation without becoming crippling.' },
        { icon: '⚠️', text: '<strong>The key risk is chronic under-ownership</strong> — when successes are consistently attributed to luck and failures to ability, the internal evidence base for competence never grows, even through repeated success.' },
        { icon: '🌱', text: '<strong>Externalising attribution is the core mechanism to work on</strong> — cognitive behavioural approaches focus on systematically challenging the evidence for fraud beliefs and building an accurate internal success archive.' },
        { icon: '💡', text: '<strong>Impostor syndrome is particularly common among women, minorities, and first-generation achievers</strong> — contextual factors matter. Clance\'s (1985) research showed that in environments where belonging is uncertain, impostor feelings intensify.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — mild impostor tendencies<br><br>Based on: Clance (1978). Chrisman, S.M. et al. (1995). Validation of the CIPS. <em>Current Psychology, 14.</em> Sakulku & Alexander (2011). Harvey & Katz (1985). <em>If I'm So Successful, Why Do I Feel Like a Fake?</em>`;
    } else if (pct < 75) {
      icon = '🌫️'; title = 'Significant Impostor Syndrome';
      subtitle = 'Impostor syndrome is meaningfully present — fear of exposure, difficulty owning success, and fraud feelings are recurring themes.';
      traits = [
        { icon: '🔴', text: '<strong>At this level, impostor syndrome has real costs</strong> — it drives overwork, inhibits appropriate self-advocacy, creates anxiety before high-stakes situations, and prevents the satisfaction of genuine achievement.' },
        { icon: '🧠', text: '<strong>The impostor cycle is self-reinforcing</strong> — fear of failure → over-preparation or avoidance → success attributed to extra effort or luck → no update to self-concept → next challenge triggers the same fear.' },
        { icon: '🛠️', text: '<strong>Evidence-based approaches include</strong>: CBT for challenging fraud beliefs with actual evidence, ACT for learning to act despite the doubt without needing it to disappear, and mentoring relationships where high achievers normalise the experience.' },
        { icon: '🌊', text: '<strong>Impostor syndrome is often rooted in early experiences</strong> — excessive praise for achievement (rather than effort), environments where mistakes were shaming, or families where competence felt conditional on outcomes.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — significant impostor syndrome range<br><br>Based on: Clance (1978). Sakulku & Alexander (2011). <em>International Journal of Behavioral Science, 6</em>(1). Harvey & Katz (1985). Chrisman et al. (1995). Therapeutic support can be highly effective at this level.`;
    } else {
      icon = '🚨'; title = 'High Impostor Syndrome';
      subtitle = 'Impostor syndrome is significantly elevated and is likely creating real suffering and limitation in how you live and work.';
      traits = [
        { icon: '❗', text: '<strong>High impostor syndrome at this level is associated with significant anxiety, depression, and burnout</strong> — the constant vigilance for exposure and the gap between internal self-view and external success is exhausting.' },
        { icon: '🧬', text: '<strong>Impostor phenomenon interacts with perfectionism</strong> — Clance (1985) found that high-impostor individuals are often highly perfectionistic, treating mistakes as confirmatory evidence of their fraud rather than as normal learning events.' },
        { icon: '🔗', text: '<strong>The internal experience is a hidden cost</strong> — Sakulku & Alexander note that externally successful people with high impostor syndrome live with a persistent private narrative of inadequacy that is invisible to others, creating profound isolation.' },
        { icon: '🤝', text: '<strong>Therapy works</strong> — CBT, schema therapy, and group-based approaches (where hearing others describe identical fears can be powerfully normalising) have the strongest evidence. The belief that you are a fraud can be changed with targeted work.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — high impostor syndrome range<br><br>Based on: Clance, P.R. (1978); Clance, P.R. (1985). <em>The Impostor Phenomenon.</em> Sakulku & Alexander (2011). Harvey & Katz (1985). <em>If I'm So Successful, Why Do I Feel Like a Fake?</em> Professional support is recommended.`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

alexithymia: {
  id: 'alexithymia', color: '#8b5cf6',
  icon: '🔇', title: 'Can I Name My Emotions?',
  descHtml: `Based on the <strong>Toronto Alexithymia Scale</strong> (TAS-20; Bagby, Parker & Taylor, 1994, <em>Journal of Psychosomatic Research, 38</em>(1)). Alexithymia (from Greek: "no words for feelings") was coined by Sifneos (1973) and describes difficulty identifying, describing, and processing emotions.<br><br><strong>10 questions · ~2 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "When I feel something emotionally, I have difficulty knowing exactly what that feeling is.",
      sub: "This refers to identifying the specific emotion — not just knowing you feel 'bad' or 'off', but being able to name what you're experiencing.",
      answers: [
        { text: "Rarely — I can usually identify what I'm feeling with reasonable clarity", score: 0 },
        { text: "Sometimes — I can name some emotions clearly, but others remain vague", score: 1 },
        { text: "Often — I frequently feel something without being able to name it", score: 2 },
        { text: "Almost always — identifying what I'm feeling is genuinely difficult", score: 3 },
      ]
    },
    { text: "I find it hard to describe my feelings to other people — I struggle to find the words.",
      sub: "This is the expressive dimension of alexithymia — separate from identifying emotions internally.",
      answers: [
        { text: "Rarely — I can usually find words to describe my emotional experience", score: 0 },
        { text: "Sometimes — with certain emotions or certain people, description is difficult", score: 1 },
        { text: "Often — putting feelings into words is genuinely hard for me", score: 2 },
        { text: "Almost always — I find it very difficult to describe what I'm feeling", score: 3 },
      ]
    },
    { text: "I have physical sensations in my body when I'm upset, but I'm not sure what emotion is causing them.",
      sub: "For example, tension, stomach discomfort, or a tight chest — without clarity on the emotional origin.",
      answers: [
        { text: "Rarely — I can usually connect bodily sensations to specific emotions", score: 0 },
        { text: "Sometimes — the connection between physical sensations and emotions is unclear", score: 1 },
        { text: "Often — I notice body sensations but don't know what they're emotionally about", score: 2 },
        { text: "Almost always — my body reacts emotionally, but I rarely know what the feeling is", score: 3 },
      ]
    },
    { text: "I prefer analysing problems logically rather than exploring how I feel about them.",
      sub: "This is the externally-oriented thinking dimension of alexithymia — preferring facts and logic to inner experience.",
      answers: [
        { text: "Not particularly — I find emotional processing as valuable as logical analysis", score: 0 },
        { text: "Sometimes — in certain situations I default to logic and analysis over feeling", score: 1 },
        { text: "Often — analysis and logic are clearly more natural to me than emotional processing", score: 2 },
        { text: "Strongly — I consistently prefer thinking about problems rather than feeling through them", score: 3 },
      ]
    },
    { text: "I find it pointless or unnecessary to examine deeper feelings or their meaning.",
      answers: [
        { text: "Rarely — I find emotional self-examination meaningful and useful", score: 0 },
        { text: "Sometimes — I see the value but don't find it particularly natural", score: 1 },
        { text: "Often — I'm sceptical of the value of examining feelings closely", score: 2 },
        { text: "Strongly — I find deep emotional introspection pointless or overly self-indulgent", score: 3 },
      ]
    },
    { text: "People in my life tell me that I don't fully understand them emotionally — or that I seem disconnected from their feelings.",
      sub: "Alexithymia affects not just one's own emotions but the capacity to resonate with others' emotional experience.",
      answers: [
        { text: "Rarely — I'm generally considered emotionally attuned", score: 0 },
        { text: "Sometimes — this feedback has come up in certain relationships", score: 1 },
        { text: "Often — emotional disconnection or misattuning has been a recurring theme in my relationships", score: 2 },
        { text: "Frequently — I'm regularly perceived as emotionally unavailable or hard to connect with", score: 3 },
      ]
    },
    { text: "I prefer to focus on the factual details or practical aspects of a situation rather than on people's emotional reactions.",
      answers: [
        { text: "Rarely — I give appropriate weight to both facts and feelings", score: 0 },
        { text: "Sometimes — I'm more comfortable with concrete details, but feelings still matter to me", score: 1 },
        { text: "Often — facts and practical matters feel more real and tractable to me than emotions", score: 2 },
        { text: "Consistently — I nearly always focus on the concrete and practical over the emotional", score: 3 },
      ]
    },
    { text: "I'm genuinely unsure how I feel about important things in my life — important relationships, choices, or experiences.",
      sub: "This is not ambivalence about decisions, but uncertainty about the emotional content of significant life experiences.",
      answers: [
        { text: "Rarely — I generally have a sense of my emotional orientation to important things", score: 0 },
        { text: "Sometimes — there are areas of genuine emotional uncertainty", score: 1 },
        { text: "Often — I frequently don't know how I actually feel about things that matter", score: 2 },
        { text: "Almost always — emotional uncertainty about important matters is the rule, not the exception", score: 3 },
      ]
    },
    { text: "I find emotions confusing — they don't seem to operate according to any logic I can understand.",
      answers: [
        { text: "Rarely — while not always predictable, emotions make sense to me in context", score: 0 },
        { text: "Sometimes — certain emotional reactions confuse me", score: 1 },
        { text: "Often — I regularly find emotions, mine or others', confusing and hard to follow", score: 2 },
        { text: "Almost always — emotional reactions — mine or others' — regularly feel opaque and inexplicable", score: 3 },
      ]
    },
    { text: "When I'm emotionally affected by something, I notice it more as a physical state than as a feeling I could describe.",
      sub: "For example: tension, fatigue, or a hollow feeling — with no accompanying emotional label.",
      answers: [
        { text: "Rarely — I experience my emotional reactions as recognisable feelings, not just body states", score: 0 },
        { text: "Sometimes — emotions do sometimes register more physically than emotionally", score: 1 },
        { text: "Often — I more frequently notice physical states than named emotions", score: 2 },
        { text: "Almost always — emotional experiences mostly register as body states rather than identifiable feelings", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🟢 Emotionally fluent';
    const meterRight = 'High alexithymia 🔇';
    if (pct < 26) {
      icon = '🌊'; title = 'Emotionally Fluent';
      subtitle = 'You appear to have good emotional awareness — you can generally identify, describe, and process what you feel.';
      traits = [
        { icon: '✅', text: '<strong>Emotional fluency has significant protective effects</strong> — Taylor, Bagby & Parker (1997) found that low alexithymia predicts better psychological wellbeing, richer social relationships, and more effective stress processing.' },
        { icon: '💡', text: '<strong>Emotion labelling itself is therapeutic</strong> — Lieberman et al.\'s (2007) neuroscience research found that naming an emotion reduces amygdala activation — the biological basis of "name it to tame it".' },
        { icon: '🌱', text: '<strong>Emotional fluency supports physical health too</strong> — higher alexithymia scores are associated with increased somatic complaints, chronic pain, and autoimmune conditions. Naming feelings helps the body regulate.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — emotionally fluent range<br><br>Based on: Bagby, R.M., Parker, J.D.A. & Taylor, G.J. (1994). The twenty-item Toronto Alexithymia Scale. <em>Journal of Psychosomatic Research, 38</em>(1), 23–32. Sifneos, P.E. (1973). The prevalence of 'alexithymic' characteristics in psychosomatic patients. <em>Psychotherapy and Psychosomatics, 22.</em>`;
    } else if (pct < 50) {
      icon = '🔦'; title = 'Mild Alexithymia';
      subtitle = 'Some difficulty identifying and describing emotions is present — your emotional inner life is sometimes unclear or hard to articulate.';
      traits = [
        { icon: '🔍', text: '<strong>Mild alexithymia is more common than recognised</strong> — Bagby et al. (1994) found approximately 13% of the general population meeting full alexithymia criteria, with a much larger proportion showing partial features.' },
        { icon: '🧠', text: '<strong>The gap between feeling and language is the key difficulty</strong> — Taylor & Bagby\'s research highlights that alexithymia is not an absence of emotion, but a difficulty in cognitive elaboration of emotional states — the emotions are there, but the processing pathway to language is less developed.' },
        { icon: '🌱', text: '<strong>Emotion vocabulary can be expanded</strong> — deliberately learning a richer emotional lexicon (beyond "fine", "good", "upset") builds neural pathways between the limbic system and prefrontal cortex, improving emotional processing over time.' },
        { icon: '🔗', text: '<strong>Alexithymia is linked to attachment history</strong> — van der Kolk (2014) and Fonagy\'s mentalisation research both find that alexithymia often reflects early environments where emotional states weren\'t named, mirrored, or elaborated on by caregivers.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — mild alexithymia range<br><br>Based on: Bagby et al. (1994). Taylor, G.J., Bagby, R.M. & Parker, J.D.A. (1997). <em>Disorders of Affect Regulation.</em> Sifneos (1973). van der Kolk, B. (2014). <em>The Body Keeps the Score.</em>`;
    } else if (pct < 75) {
      icon = '🔇'; title = 'Significant Alexithymia';
      subtitle = 'Difficulty identifying and describing emotions is a significant feature of your experience. This affects relationships and wellbeing.';
      traits = [
        { icon: '🔴', text: '<strong>At this level, alexithymia has real relational costs</strong> — difficulty describing emotional experience makes intimacy harder, creates misattunement with partners, and can lead others to experience you as emotionally unavailable or cold.' },
        { icon: '🧬', text: '<strong>Alexithymia is associated with comorbid conditions</strong> — Bagby et al. found higher alexithymia scores in people with PTSD, ASD, depression, substance use disorders, and chronic pain — often as a shared underlying mechanism.' },
        { icon: '🛠️', text: '<strong>What helps</strong>: therapy approaches that focus on emotion identification and labelling (such as emotion-focused therapy, EFT), body-based approaches (somatic experiencing, yoga), and deliberate "feelings journaling" — naming emotional states in writing regularly.' },
        { icon: '🧠', text: '<strong>The brain can develop this capacity</strong> — mentalisation-based therapy (MBT), developed by Fonagy and colleagues, is specifically designed to build the capacity to understand and name one\'s own and others\' mental states.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — significant alexithymia range<br><br>Based on: Bagby et al. (1994). Taylor et al. (1997). Sifneos (1973). van der Kolk, B. (2014). <em>The Body Keeps the Score.</em> Note: alexithymia is also associated with ASD and PTSD — professional consultation may be beneficial.`;
    } else {
      icon = '🫙'; title = 'High Alexithymia';
      subtitle = 'Emotional identification and description are significantly impaired. Your inner emotional world may feel largely inaccessible.';
      traits = [
        { icon: '❗', text: '<strong>High alexithymia profoundly affects wellbeing</strong> — without access to emotional information, decision-making, self-care, and intimate connection are all impaired. Sifneos (1973) noted that alexithymia patients often rely on external cues and structure to navigate a world others navigate emotionally.' },
        { icon: '🌊', text: '<strong>Physical symptoms often carry the emotional load</strong> — Taylor et al. found that when emotions cannot be processed psychologically, they are often expressed somatically: chronic pain, gastrointestinal symptoms, fatigue, or autoimmune conditions may have an emotional loading that isn\'t being processed mentally.' },
        { icon: '🔗', text: '<strong>Comorbidity with ASD and PTSD is significant</strong> — Frith & Hill (2003) found high alexithymia in ASD; van der Kolk found it centrally in complex PTSD. In both cases, early experience may have shaped neural pathways away from emotional elaboration.' },
        { icon: '🤝', text: '<strong>Specialised support can help</strong> — emotion-focused therapy, somatic experiencing, MBT, and affect regulation training have all shown benefit. Working with a therapist who understands alexithymia and doesn\'t expect you to already have the language is important.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — high alexithymia range<br><br>Based on: Bagby et al. (1994). <em>Journal of Psychosomatic Research, 38</em>(1). Taylor et al. (1997). <em>Disorders of Affect Regulation.</em> Sifneos, P.E. (1973). van der Kolk, B. (2014). <em>The Body Keeps the Score.</em> Professional support from a therapist experienced in alexithymia is recommended.`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

lifesatisfaction: {
  id: 'lifesatisfaction', color: '#10b981',
  icon: '🌅', title: 'How Satisfied Am I with My Life?',
  descHtml: `Based on the <strong>Satisfaction with Life Scale</strong> (SWLS; Diener, Emmons, Larsen & Griffin, 1985, <em>Journal of Personality Assessment, 49</em>(1)) — one of the most widely-used subjective wellbeing measures in psychology worldwide. It measures the cognitive dimension of life satisfaction: your overall judgment of how your life is going.<br><br><strong>7 questions · ~1 minute</strong>`,
  type: 'spectrum',
  questions: [
    { text: "In most ways, my life is close to my ideal.",
      sub: "Your personal ideal — not a comparison with others or a social standard.",
      answers: [
        { text: "Strongly disagree — my life is far from what I would consider ideal", score: 0 },
        { text: "Disagree — there are meaningful gaps between my life and my ideal", score: 1 },
        { text: "Agree — my life is reasonably close to what I would want it to be", score: 2 },
        { text: "Strongly agree — my life closely matches what I would choose", score: 3 },
      ]
    },
    { text: "The conditions of my life are excellent.",
      sub: "Conditions refers to circumstances — relationships, health, financial situation, environment.",
      answers: [
        { text: "Strongly disagree — the conditions of my life are quite poor", score: 0 },
        { text: "Disagree — my life conditions have significant problems or limitations", score: 1 },
        { text: "Agree — the objective conditions of my life are generally good", score: 2 },
        { text: "Strongly agree — the conditions of my life are excellent", score: 3 },
      ]
    },
    { text: "I am satisfied with my life.",
      sub: "A global judgment — overall, not about any specific domain.",
      answers: [
        { text: "Strongly disagree — I am significantly dissatisfied with my life overall", score: 0 },
        { text: "Disagree — I am more dissatisfied than satisfied", score: 1 },
        { text: "Agree — I am more satisfied than dissatisfied", score: 2 },
        { text: "Strongly agree — I feel genuinely satisfied with my life", score: 3 },
      ]
    },
    { text: "So far I have gotten the important things I want in life.",
      sub: "Not everything — but the things that genuinely matter to you.",
      answers: [
        { text: "Strongly disagree — the things that matter most to me are largely absent", score: 0 },
        { text: "Disagree — key things are missing or unrealised", score: 1 },
        { text: "Agree — I have achieved or have most of the important things I want", score: 2 },
        { text: "Strongly agree — the most important things I wanted in life are present", score: 3 },
      ]
    },
    { text: "If I could live my life over, I would change almost nothing.",
      sub: "This measures retrospective acceptance — how you relate to the life you've lived.",
      answers: [
        { text: "Strongly disagree — I would change a great deal", score: 0 },
        { text: "Disagree — there are significant things I would want to change", score: 1 },
        { text: "Agree — I would change relatively little; I'm broadly at peace with how my life has gone", score: 2 },
        { text: "Strongly agree — I would change almost nothing", score: 3 },
      ]
    },
    { text: "I feel a clear sense of purpose or meaning in my life.",
      sub: "Meaning and purpose are consistent predictors of life satisfaction, independent of circumstances.",
      answers: [
        { text: "Rarely — purpose and meaning are largely absent for me", score: 0 },
        { text: "Sometimes — I have moments of purpose, but not a stable, clear sense of it", score: 1 },
        { text: "Often — I generally feel a reasonably clear sense of purpose", score: 2 },
        { text: "Strongly — purpose and meaning are a clear, present feature of my daily life", score: 3 },
      ]
    },
    { text: "Overall, I would say my wellbeing — emotional, physical, and relational — is good.",
      sub: "A holistic assessment of how you are doing across the different domains of life.",
      answers: [
        { text: "Strongly disagree — my overall wellbeing is quite poor across multiple domains", score: 0 },
        { text: "Disagree — my wellbeing has significant problems", score: 1 },
        { text: "Agree — my overall wellbeing is generally good", score: 2 },
        { text: "Strongly agree — my overall wellbeing is strong across most domains", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🌑 Low satisfaction';
    const meterRight = 'Very satisfied 🌅';
    if (pct < 26) {
      icon = '🌑'; title = 'Low Life Satisfaction';
      subtitle = 'You are experiencing significant dissatisfaction with your life — across circumstances, goals, and overall wellbeing.';
      traits = [
        { icon: '⚠️', text: '<strong>Low life satisfaction at this level often co-occurs with depression and anxiety</strong> — Diener et al. (1985) found SWLS scores in this range are significantly correlated with depressive symptoms and should not be dismissed as merely circumstantial.' },
        { icon: '🔍', text: '<strong>Circumstances matter, but they explain less than expected</strong> — Brickman & Campbell\'s adaptation research found that circumstances (income, status, even health) account for only 10–15% of life satisfaction variance. Cognitive patterns — how you interpret and relate to your life — account for far more.' },
        { icon: '🌱', text: '<strong>Life satisfaction can change</strong> — Lyubomirsky, Sheldon & Schkade\'s (2005) research identified intentional activities (meaningful engagement, relationships, acts of kindness, mindfulness) as the most powerful lever for sustainable wellbeing improvement.' },
        { icon: '🤝', text: '<strong>Meaning matters more than happiness</strong> — Frankl\'s work and subsequent research found that a sense of meaning provides psychological resilience even under extremely difficult circumstances. Finding or creating meaning is often more tractable than trying to feel happier.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — low life satisfaction range<br><br>Based on: Diener, E., Emmons, R.A., Larsen, R.J. & Griffin, S. (1985). The satisfaction with life scale. <em>Journal of Personality Assessment, 49</em>(1), 71–75. Pavot, W. & Diener, E. (1993). Review of the SWLS. <em>Psychological Assessment, 5</em>(2). Seligman, M.E.P. (2011). <em>Flourish</em> (PERMA model).`;
    } else if (pct < 50) {
      icon = '⛅'; title = 'Moderate Life Satisfaction';
      subtitle = 'You have a mixed relationship with your life — some satisfaction, but significant unmet needs or unfulfilled areas.';
      traits = [
        { icon: '🔄', text: '<strong>Moderate satisfaction often reflects genuine ambivalence</strong> — specific domains may be satisfying while others are not. Diener\'s domain-satisfaction research found work, relationships, health, and meaning operate somewhat independently.' },
        { icon: '💡', text: '<strong>The PERMA model identifies the five empirical pillars of wellbeing</strong> (Seligman, 2011): Positive emotion, Engagement, Relationships, Meaning, and Achievement. Identifying which is most depleted is more useful than trying to improve "satisfaction" abstractly.' },
        { icon: '🌱', text: '<strong>Social connection is the highest-return investment</strong> — Holt-Lunstad et al.\'s (2015) meta-analysis found that social isolation is as damaging to health as smoking 15 cigarettes a day. Relationships are the most consistently replicated predictor of life satisfaction.' },
        { icon: '🔬', text: '<strong>The hedonic treadmill is real</strong> — Brickman & Campbell (1971) found that positive and negative events have less durable effects on satisfaction than people expect, as people adapt. Long-term satisfaction requires ongoing meaningful engagement, not better circumstances.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — moderate life satisfaction range<br><br>Based on: Diener et al. (1985). Pavot & Diener (1993). Seligman, M.E.P. (2011). <em>Flourish.</em> Brickman, P. & Campbell, D.T. (1971). Hedonic relativism and planning the good society. In M.H. Appley (Ed.), <em>Adaptation Level Theory.</em>`;
    } else if (pct < 75) {
      icon = '🌤️'; title = 'High Life Satisfaction';
      subtitle = 'You report meaningful satisfaction with your life — your circumstances, achievements, and overall wellbeing are in a good place.';
      traits = [
        { icon: '✅', text: '<strong>High life satisfaction has protective effects across domains</strong> — Pavot & Diener (1993) found that high SWLS scores predict better physical health, better occupational performance, stronger social relationships, and greater resilience under stress.' },
        { icon: '🔬', text: '<strong>Positive emotions broaden and build</strong> — Fredrickson\'s (2001) broaden-and-build theory shows that positive emotions expand cognitive resources, improve problem-solving, and build lasting personal strengths — creating a virtuous cycle.' },
        { icon: '🌱', text: '<strong>Satisfaction is partly a skill</strong> — Diener\'s longitudinal research found that people who maintain high satisfaction tend to actively invest in meaningful activities and relationships rather than merely enjoying favourable circumstances.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — high life satisfaction range<br><br>Based on: Diener et al. (1985). Pavot & Diener (1993). <em>Psychological Assessment, 5</em>(2). Fredrickson, B.L. (2001). The role of positive emotions. <em>American Psychologist, 56</em>(3). Seligman (2011).`;
    } else {
      icon = '🌅'; title = 'Very High Life Satisfaction';
      subtitle = 'You report very high satisfaction with your life — you feel your circumstances and overall wellbeing are excellent.';
      traits = [
        { icon: '🏆', text: '<strong>Very high life satisfaction is associated with flourishing</strong> — Keyes (2002) distinguishes "languishing" (low wellbeing despite absence of illness) from "flourishing" (high wellbeing with full functioning). Your score suggests flourishing.' },
        { icon: '🌊', text: '<strong>High satisfaction supports prosocial behaviour</strong> — Diener & Biswas-Diener\'s research found that happy, satisfied people are more generous, more helpful, and form stronger social connections — suggesting wellbeing isn\'t merely internal but outward-looking.' },
        { icon: '💡', text: '<strong>Authentic satisfaction is resilient</strong> — people with genuinely high life satisfaction (rooted in meaning, relationships, and purpose rather than just circumstances) show markedly better recovery from adversity and life transitions.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — very high life satisfaction range<br><br>Based on: Diener et al. (1985). <em>Journal of Personality Assessment, 49</em>(1). Pavot & Diener (1993). Keyes, C.L.M. (2002). The mental health continuum. <em>Journal of Health and Social Behavior, 43.</em> Seligman (2011). <em>Flourish.</em>`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

shame: {
  id: 'shame', color: '#ec4899',
  icon: '🩹', title: 'How Much Shame Do I Carry?',
  descHtml: `Based on <strong>Nathanson's Compass of Shame</strong> (1992), <strong>Tangney & Dearing's GASP scale</strong> (2002), and <strong>Lewis's</strong> (1971) foundational distinction between shame and guilt. Shame is the belief that the <em>self</em> is fundamentally defective — not "I did something bad" but "I <em>am</em> bad."<br><br><strong>10 questions · ~2 minutes</strong>`,
  type: 'spectrum',
  questions: [
    { text: "When I make a mistake, my first reaction is to feel that something is fundamentally wrong with me — not just that I did something wrong.",
      sub: "This is the core Lewis (1971) distinction: shame (I am bad) vs. guilt (I did something bad).",
      answers: [
        { text: "Rarely — mistakes feel behavioural, not reflections of who I am", score: 0 },
        { text: "Sometimes — certain failures do trigger a sense of fundamental inadequacy", score: 1 },
        { text: "Often — mistakes typically make me feel defective rather than just mistaken", score: 2 },
        { text: "Almost always — failure feels like confirmation that something is wrong with me at a basic level", score: 3 },
      ]
    },
    { text: "When I am embarrassed or do something wrong in front of others, I have a strong urge to disappear, hide, or escape.",
      sub: "The withdrawal response is one of the four poles in Nathanson's (1992) Compass of Shame.",
      answers: [
        { text: "Rarely — embarrassment is uncomfortable but doesn't produce a strong urge to vanish", score: 0 },
        { text: "Sometimes — in certain situations the urge to disappear is strong", score: 1 },
        { text: "Often — the wish to hide or disappear after embarrassment is a familiar, strong impulse", score: 2 },
        { text: "Almost always — exposure feels so unbearable that escape or disappearing feels necessary", score: 3 },
      ]
    },
    { text: "I experience my self-criticism as global — not 'I made a mistake' but 'I'm stupid/worthless/unlovable'.",
      sub: "Global self-attribution is a defining feature of shame-proneness across all major theoretical models.",
      answers: [
        { text: "Rarely — my self-criticism is usually specific to the behaviour in question", score: 0 },
        { text: "Sometimes — criticism about specific behaviours can expand into global self-judgements", score: 1 },
        { text: "Often — self-criticism tends to be sweeping and generalised", score: 2 },
        { text: "Almost always — I am the problem, not what I did — this is my default internal response to failure", score: 3 },
      ]
    },
    { text: "I feel shame about who I am — my history, my body, my character, things that feel unchangeable about me.",
      sub: "Shame about fixed self-attributes (body, history, identity) differs from guilt about actions.",
      answers: [
        { text: "Rarely — I have a reasonable relationship with who I fundamentally am", score: 0 },
        { text: "Sometimes — there are aspects of myself or my history I carry with some shame", score: 1 },
        { text: "Often — shame about fixed aspects of who I am is a meaningful presence", score: 2 },
        { text: "Significantly — deep shame about fundamental aspects of myself is a persistent experience", score: 3 },
      ]
    },
    { text: "I am intensely perfectionistic — driven not by a love of excellence but by the fear of being exposed as inadequate.",
      sub: "Shame-driven perfectionism operates from fear of exposure, not from positive motivation.",
      answers: [
        { text: "Rarely — my perfectionism, if I have it, is more about standards than fear", score: 0 },
        { text: "Sometimes — fear of inadequacy does drive my perfectionism in certain areas", score: 1 },
        { text: "Often — my perfectionism is substantially driven by the fear of being exposed as not good enough", score: 2 },
        { text: "Strongly — avoiding the exposure of inadequacy is the primary engine of my perfectionism", score: 3 },
      ]
    },
    { text: "I struggle to separate what I do from who I am — my failures feel like they define me, not just reflect what happened.",
      answers: [
        { text: "Rarely — I can usually distinguish between my actions and my identity", score: 0 },
        { text: "Sometimes — significant failures can blur the line between behaviour and self", score: 1 },
        { text: "Often — I genuinely struggle to see failures as events rather than as evidence of who I am", score: 2 },
        { text: "Strongly — I am my failures — this conflation is pervasive and automatic", score: 3 },
      ]
    },
    { text: "I feel deeply frightened of being truly known — I believe that if others saw all of me, they would reject or abandon me.",
      sub: "Brown's (2010) shame research identifies this fear of full disclosure as central to chronic shame.",
      answers: [
        { text: "Rarely — I can let people in without the expectation of rejection", score: 0 },
        { text: "Sometimes — there are specific areas where I fear exposure would lead to rejection", score: 1 },
        { text: "Often — the fear that being fully known would lead to rejection significantly shapes my relationships", score: 2 },
        { text: "Persistently — I operate on the belief that full disclosure would lead others to leave or reject me", score: 3 },
      ]
    },
    { text: "After I fail at something, I feel worthless — as though the failure has stripped away my value as a person.",
      answers: [
        { text: "Rarely — failure is disappointing but doesn't reach my sense of worth as a person", score: 0 },
        { text: "Sometimes — significant failures do temporarily deplete my sense of worth", score: 1 },
        { text: "Often — failure reliably produces a sense of worthlessness", score: 2 },
        { text: "Almost always — failure and worthlessness feel directly connected in my experience", score: 3 },
      ]
    },
    { text: "When others react with disappointment, disapproval, or criticism, I experience shame rather than just concern or regret.",
      sub: "The difference: concern/regret is about the behaviour; shame is about what their reaction reveals about you.",
      answers: [
        { text: "Rarely — others' negative reactions produce concern or regret, not shame about who I am", score: 0 },
        { text: "Sometimes — certain people's disapproval or certain contexts trigger shame", score: 1 },
        { text: "Often — disappointment or criticism from others frequently triggers shame rather than just regret", score: 2 },
        { text: "Almost always — others' negative reactions are a powerful trigger for feelings of fundamental inadequacy", score: 3 },
      ]
    },
    { text: "I believe I am fundamentally less worthy than other people — that there is something essentially defective about me that others don't have.",
      sub: "This belief in fundamental unworthiness is the core of what Brown (2010) calls 'toxic shame'.",
      answers: [
        { text: "Rarely — I see myself as fundamentally similar to others in basic worth", score: 0 },
        { text: "Sometimes — I can feel fundamentally lesser, though not as a fixed belief", score: 1 },
        { text: "Often — a sense of fundamental inadequacy compared to others is a regular presence", score: 2 },
        { text: "Persistently — the belief that I am fundamentally more defective or less worthy than others is stable and pervasive", score: 3 },
      ]
    },
  ],
  getResult(pct) {
    let icon, title, subtitle, traits, extra;
    const meterLeft = '🟢 Healthy guilt';
    const meterRight = 'High shame 🩹';
    if (pct < 26) {
      icon = '🟢'; title = 'Low Shame, Healthy Guilt';
      subtitle = 'You appear to relate to failure and mistakes with guilt (behaviour-focused) rather than shame (self-focused) — a psychologically healthier pattern.';
      traits = [
        { icon: '✅', text: '<strong>Guilt is adaptive; shame is not</strong> — Tangney & Dearing (2002) found in repeated studies that guilt-proneness (I did something wrong) predicts prosocial behaviour, empathy, and repair. Shame-proneness predicts avoidance, aggression, and depression.' },
        { icon: '💡', text: '<strong>Healthy self-criticism is specific and behavioural</strong> — Lewis (1971) found that the healthiest people can say "I made a mistake" without it spreading into "I am a mistake." This distinction is the core of the shame-guilt differentiation.' },
        { icon: '🌱', text: '<strong>Low shame is associated with better relationships</strong> — Brown\'s (2010) research found that people with lower shame levels have greater capacity for vulnerability, which in turn predicts relationship quality, creativity, and belonging.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — low shame range<br><br>Based on: Lewis, H.B. (1971). <em>Shame and Guilt in Neurosis.</em> Nathanson, D.L. (1992). <em>Shame and Pride.</em> Tangney, J.P. & Dearing, R.L. (2002). <em>Shame and Guilt.</em> Brown, B. (2010). <em>The Gifts of Imperfection.</em>`;
    } else if (pct < 50) {
      icon = '🩺'; title = 'Moderate Shame';
      subtitle = 'Some chronic shame is present — you carry it in particular areas, and it occasionally colours how you respond to failure or exposure.';
      traits = [
        { icon: '🔍', text: '<strong>Moderate shame often operates in specific domains</strong> — Nathanson\'s Compass of Shame identifies four defensive responses: withdrawal (hiding), avoidance (denial/distraction), attack self (self-criticism), attack others (externalising blame). Identifying your default compass point helps.' },
        { icon: '🌊', text: '<strong>Shame thrives in secrecy</strong> — Brown\'s research found that the most effective antidote to shame is sharing the experience with someone trustworthy. Shame "cannot survive being shared with someone who responds with empathy".' },
        { icon: '🧠', text: '<strong>Self-compassion directly counteracts shame</strong> — Neff\'s (2003) research found that self-compassion (treating yourself as you would treat a good friend who failed) specifically targets the global self-attack that characterises shame, and predicts better wellbeing outcomes than self-esteem.' },
        { icon: '💡', text: '<strong>Shame and perfectionism often travel together</strong> — at this level, perfectionism driven by fear of exposure is common. Frost\'s research found that socially-prescribed perfectionism (performing for others\' approval) has the strongest link to shame and negative affect.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — moderate shame range<br><br>Based on: Lewis (1971). Nathanson (1992). Tangney & Dearing (2002). Brown, B. (2010). Neff, K.D. (2003). Self-compassion. <em>Self and Identity, 2</em>(2).`;
    } else if (pct < 75) {
      icon = '🩹'; title = 'Significant Shame';
      subtitle = 'Chronic shame is a significant presence — it shapes how you relate to failure, others\' perceptions, and your own worthiness.';
      traits = [
        { icon: '🔴', text: '<strong>Significant shame is associated with depression, social anxiety, and self-harm</strong> — Tangney et al.\'s research found that shame-proneness is a robust predictor of depression, anxiety, and a range of self-destructive behaviours, while guilt-proneness predicts none of these outcomes.' },
        { icon: '🧬', text: '<strong>Shame and aggression are connected</strong> — Lewis (1971) identified "shame-rage" — the explosive anger that arises from intolerable shame. Nathanson\'s Compass of Shame shows that "attack others" (externalising through rage) is as common a shame defence as withdrawal.' },
        { icon: '🛠️', text: '<strong>Evidence-based treatments include</strong>: shame-focused CBT, compassion-focused therapy (CFT, Paul Gilbert), schema therapy (identifying and working with the "defective/worthless" schema), and EMDR for shame-laden memories.' },
        { icon: '🌱', text: '<strong>Shame has developmental roots</strong> — Brown\'s research identified several shame-producing experiences: being punished/rejected for expressing emotion, having needs shamed, appearance scrutiny, and environments where belonging was conditional on performance.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — significant shame range<br><br>Based on: Lewis (1971). Nathanson (1992). Tangney & Dearing (2002). Brown (2010). Gilbert, P. (2010). <em>The Compassionate Mind.</em> Professional support is recommended at this level.`;
    } else {
      icon = '💔'; title = 'High Shame';
      subtitle = 'Chronic shame is deeply present and is likely a central organising principle of how you experience yourself, others, and the world.';
      traits = [
        { icon: '❗', text: '<strong>High chronic shame is one of the most painful human experiences</strong> — it carries the belief that the self is fundamentally defective, unlovable, and undeserving. This level of shame is associated with serious depression, self-harm, suicidal ideation, and substance use.' },
        { icon: '🧠', text: '<strong>Shame at this level often has early developmental origins</strong> — Brown\'s research, Lewis\'s clinical work, and van der Kolk\'s trauma findings all converge: early experiences of abuse, abandonment, conditional love, or chronic emotional shaming wire the self-concept around fundamental inadequacy.' },
        { icon: '🔗', text: '<strong>Shame is interpersonally transmitted and interpersonally healed</strong> — because shame is rooted in relational experience ("I am not acceptable to others"), healing requires a corrective relational experience: a therapist or relationship where full disclosure doesn\'t lead to rejection.' },
        { icon: '🤝', text: '<strong>Please seek support</strong> — compassion-focused therapy (CFT), schema therapy, and EMDR have the strongest evidence for working with high shame. The most important thing is finding a therapist who understands shame and can tolerate hearing it without flinching.' },
      ];
      extra = `<strong>Score:</strong> ${pct}% — high shame range<br><br>Based on: Lewis (1971). <em>Shame and Guilt in Neurosis.</em> Nathanson (1992). <em>Shame and Pride.</em> Tangney & Dearing (2002). Brown (2010). van der Kolk, B. (2014). <em>The Body Keeps the Score.</em> Professional therapeutic support is strongly recommended.`;
    }
    return { icon, title, subtitle, traits, meterPct: pct, meterLeft, meterRight, extra };
  }
},

}; // end genericQuizzes
