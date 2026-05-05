export const traumaTypes = [
  {
    id: 'relationship',
    emoji: '💔',
    label: 'Relationship Trauma',
    desc: 'Toxic partner, emotional/physical abuse, codependency',
    questions: [
      { text: "When someone raises their voice at you, what happens inside?", sub: "Notice your body's first reaction.",
        answers: [
          { text: "I stay present — it's unpleasant but I don't spiral", r: 3 },
          { text: "I tense up but recover relatively quickly", r: 2 },
          { text: "I freeze or go numb automatically", r: 1 },
          { text: "I feel the same terror I felt back then — my body takes over", r: 0 }
        ]
      },
      { text: "When a new person shows you genuine kindness, how do you react?", sub: "Kindness can feel unsafe to those with relationship trauma.",
        answers: [
          { text: "I receive it openly — I believe people can be genuinely kind", r: 3 },
          { text: "I appreciate it, though I sometimes wonder what they want", r: 2 },
          { text: "I feel confused or undeserving", r: 1 },
          { text: "I distrust it completely — kindness is usually a manipulation", r: 0 }
        ]
      },
      { text: "Do you feel you deserved what happened in that relationship?", sub: "Misplaced responsibility is one of the heaviest burdens of abuse.",
        answers: [
          { text: "No — I understand clearly that it wasn't my fault", r: 3 },
          { text: "Mostly no, but I still catch myself wondering what I could have done differently", r: 2 },
          { text: "Part of me still believes I caused it or provoked it", r: 1 },
          { text: "Yes — I feel I deserved it or brought it on myself", r: 0 }
        ]
      },
      { text: "Can you talk about that relationship without crying or shutting down?", sub: "Emotional regulation when recalling trauma is a healing marker.",
        answers: [
          { text: "Yes — I can discuss it calmly and even find meaning in it", r: 3 },
          { text: "Mostly yes, though certain details still hit hard", r: 2 },
          { text: "It depends on the day — sometimes I'm okay, sometimes not", r: 1 },
          { text: "No — I avoid the topic entirely or break down when it comes up", r: 0 }
        ]
      },
      { text: "How do you feel about trusting a new partner?", sub: "",
        answers: [
          { text: "I can trust again — I've learned to read people better", r: 3 },
          { text: "I trust slowly, with appropriate caution", r: 2 },
          { text: "I want to trust, but fear takes over before I can", r: 1 },
          { text: "I can't — the thought of trusting again feels impossible or dangerous", r: 0 }
        ]
      },
      { text: "When you think about that person now, what emotion is strongest?", sub: "",
        answers: [
          { text: "Mostly neutral, or a distant sadness — they don't live in me anymore", r: 3 },
          { text: "Some residual anger or hurt, but it doesn't consume me", r: 2 },
          { text: "Still a lot of pain, confusion, or longing mixed together", r: 1 },
          { text: "Overwhelming emotion — anger, grief, or even a pull toward them", r: 0 }
        ]
      },
      { text: "Do you find yourself repeating similar relationship patterns?", sub: "Repetition compulsion is a strong sign of unresolved trauma.",
        answers: [
          { text: "No — I've actively broken the pattern and I can see the difference", r: 3 },
          { text: "I'm aware of the pattern and actively working against it", r: 2 },
          { text: "I notice it but seem unable to stop it from happening", r: 1 },
          { text: "Yes — I keep ending up in the same situations with different people", r: 0 }
        ]
      },
      { text: "Do you feel responsible for the other person's behavior toward you?", sub: "",
        answers: [
          { text: "No — I understand that their behavior was their responsibility", r: 3 },
          { text: "Mostly no, but small doubts occasionally surface", r: 2 },
          { text: "I often replay what I said or did to see what triggered them", r: 1 },
          { text: "Yes — I believe I caused their behavior toward me", r: 0 }
        ]
      },
      { text: "Can you set a clear limit with someone who oversteps you?", sub: "",
        answers: [
          { text: "Yes — I can name my limits clearly and hold them", r: 3 },
          { text: "Usually yes, though certain people make it harder", r: 2 },
          { text: "I struggle — guilt or fear of conflict stops me", r: 1 },
          { text: "No — setting limits feels dangerous or impossible", r: 0 }
        ]
      },
      { text: "How do you feel about your worth as a partner today?", sub: "",
        answers: [
          { text: "I know I have real value to offer in a relationship", r: 3 },
          { text: "I'm rebuilding my confidence — it's coming back", r: 2 },
          { text: "I still carry a lot of doubt about whether I'm enough", r: 1 },
          { text: "That relationship convinced me I'm fundamentally unlovable", r: 0 }
        ]
      },
      { text: "Can you recognize early red flags in new connections?", sub: "",
        answers: [
          { text: "Yes — I'm much better at spotting them and I listen to that instinct", r: 3 },
          { text: "I notice them but sometimes rationalize them away", r: 2 },
          { text: "I notice them but feel powerless to act on what I see", r: 1 },
          { text: "No — I still get pulled in before realizing the pattern", r: 0 }
        ]
      },
      { text: "What does being alone feel like now?", sub: "Comfort with solitude is a key indicator of healing.",
        answers: [
          { text: "Peaceful — I enjoy my own company and feel complete on my own", r: 3 },
          { text: "Mostly fine, with occasional loneliness", r: 2 },
          { text: "Uncomfortable — I fill it with distractions or people", r: 1 },
          { text: "Terrifying — I'll accept almost anything to avoid it", r: 0 }
        ]
      }
    ]
  },
  {
    id: 'childhood',
    emoji: '👶',
    label: 'Childhood Trauma',
    desc: 'Neglect, emotional unavailability, abuse, toxic home',
    questions: [
      { text: "When a parental figure criticizes you today, how do you feel?", sub: "",
        answers: [
          { text: "I can hear it without it defining me — I separate their opinion from my worth", r: 3 },
          { text: "It stings, but I can process it and move on", r: 2 },
          { text: "It triggers a deep, disproportionate shame response", r: 1 },
          { text: "I collapse inside — it confirms everything I was told about myself", r: 0 }
        ]
      },
      { text: "Can you speak about your childhood without being overwhelmed?", sub: "",
        answers: [
          { text: "Yes — I can discuss it with perspective, even some compassion", r: 3 },
          { text: "Mostly, though certain memories are still raw", r: 2 },
          { text: "It's hard — I tend to minimize it or get flooded with emotion", r: 1 },
          { text: "No — I either completely avoid it or break apart when it surfaces", r: 0 }
        ]
      },
      { text: "Do you believe you were loved as a child, even imperfectly?", sub: "This is about your felt sense, not your logic.",
        answers: [
          { text: "Yes — I can hold both the love and the failure at the same time", r: 3 },
          { text: "I think so, but the doubt is still there sometimes", r: 2 },
          { text: "I intellectually think they tried, but I don't feel it", r: 1 },
          { text: "No — I feel fundamentally unwanted", r: 0 }
        ]
      },
      { text: "How do you handle authority figures in your life?", sub: "",
        answers: [
          { text: "I relate to them as I would any adult — with appropriate respect, not fear", r: 3 },
          { text: "Some nervousness, but I can advocate for myself", r: 2 },
          { text: "I become overly compliant or overly defiant", r: 1 },
          { text: "I feel paralyzed — I either people-please completely or shut down", r: 0 }
        ]
      },
      { text: "Do you feel you still carry shame from things that weren't your fault?", sub: "",
        answers: [
          { text: "No — I've clearly separated what belongs to me and what was theirs", r: 3 },
          { text: "Less than before, but some still lingers", r: 2 },
          { text: "Yes — I intellectually know it wasn't my fault but still feel responsible", r: 1 },
          { text: "Deeply — shame feels like my core identity", r: 0 }
        ]
      },
      { text: "When someone close to you is emotionally unavailable, what happens?", sub: "",
        answers: [
          { text: "I notice it and address it directly — I don't internalize it as a verdict on me", r: 3 },
          { text: "It's uncomfortable but I can usually separate it from my worth", r: 2 },
          { text: "I work harder to reach them, blaming myself for the distance", r: 1 },
          { text: "I collapse — it reactivates the original wound completely", r: 0 }
        ]
      },
      { text: "How do you feel about your right to take up space in the world?", sub: "",
        answers: [
          { text: "I have as much right to exist, speak, and take up space as anyone", r: 3 },
          { text: "I'm working on believing it — most days I do", r: 2 },
          { text: "I often feel like I'm too much, or not enough", r: 1 },
          { text: "I feel like a burden or like I don't deserve space", r: 0 }
        ]
      },
      { text: "Do you still try to earn love from people who won't give it freely?", sub: "",
        answers: [
          { text: "No — I've stopped chasing unavailable people", r: 3 },
          { text: "I catch myself starting to, but I can stop", r: 2 },
          { text: "Yes, and I know why, but I can't seem to stop the pattern", r: 1 },
          { text: "Constantly — I'm still trying to get love from the original source", r: 0 }
        ]
      },
      { text: "Can you set limits with your family today?", sub: "",
        answers: [
          { text: "Yes — I've established clear limits and I maintain them", r: 3 },
          { text: "Mostly — it's harder with family than others", r: 2 },
          { text: "I try, but guilt usually wins", r: 1 },
          { text: "No — family limits feel impossible or dangerous", r: 0 }
        ]
      },
      { text: "When you imagine your inner child, what do you feel?", sub: "Close your eyes for a moment if you can.",
        answers: [
          { text: "Compassion — I can hold that child with gentleness now", r: 3 },
          { text: "Sadness, but also care — I'm learning to parent them", r: 2 },
          { text: "Pain — it's still hard to face that version of myself", r: 1 },
          { text: "Nothing, or shame — I've disconnected from that part of myself", r: 0 }
        ]
      },
      { text: "Do you find it easy to ask for help?", sub: "",
        answers: [
          { text: "Yes — I've learned that needing help is normal and human", r: 3 },
          { text: "I can do it, though it still takes effort", r: 2 },
          { text: "I avoid it — I'd rather struggle alone than be a burden", r: 1 },
          { text: "Impossible — asking for help feels shameful or dangerous", r: 0 }
        ]
      },
      { text: "How does receiving genuine affection feel?", sub: "",
        answers: [
          { text: "Warm and natural — I can receive it without shutting down", r: 3 },
          { text: "Good, though sometimes I need a moment to settle into it", r: 2 },
          { text: "Uncomfortable — I tense up or feel I don't deserve it", r: 1 },
          { text: "It makes me want to pull away — it doesn't feel safe", r: 0 }
        ]
      }
    ]
  },
  {
    id: 'grief',
    emoji: '🕊️',
    label: 'Grief & Loss',
    desc: 'Death, divorce, sudden absence, losing someone or something',
    questions: [
      { text: "Can you think about the person or thing you lost without it breaking you?", sub: "",
        answers: [
          { text: "Yes — I can hold them in my memory with more love than pain", r: 3 },
          { text: "Mostly — certain memories are still tender", r: 2 },
          { text: "It depends — some days I'm okay, others the grief is fresh", r: 1 },
          { text: "No — thinking about it still completely destabilizes me", r: 0 }
        ]
      },
      { text: "Have you accepted that the loss is real and permanent?", sub: "Acceptance doesn't mean it's okay — it means you've stopped fighting reality.",
        answers: [
          { text: "Yes — I've made peace with the reality, even though it hurt", r: 3 },
          { text: "Mostly — there are still moments of disbelief or bargaining", r: 2 },
          { text: "I understand it logically, but emotionally I still resist it", r: 1 },
          { text: "No — a part of me still waits for it to be undone", r: 0 }
        ]
      },
      { text: "Do you feel guilty about moving forward with your life?", sub: "",
        answers: [
          { text: "No — I've made peace with the idea that moving forward honors them", r: 3 },
          { text: "Sometimes, but I'm working through it", r: 2 },
          { text: "Yes — thriving feels like a betrayal", r: 1 },
          { text: "Completely — I've unconsciously stopped myself from living fully", r: 0 }
        ]
      },
      { text: "Can you speak about them or it with warmth rather than just pain?", sub: "",
        answers: [
          { text: "Yes — I can remember the good, the funny, the beautiful parts", r: 3 },
          { text: "Sometimes warmth comes through, other times it's just ache", r: 2 },
          { text: "Rarely — the pain overshadows almost every memory", r: 1 },
          { text: "No — I avoid talking about them entirely", r: 0 }
        ]
      },
      { text: "Do you allow yourself to grieve when it comes up, without pushing it away?", sub: "",
        answers: [
          { text: "Yes — I let it move through me rather than suppressing it", r: 3 },
          { text: "Most of the time — I'm learning to sit with it", r: 2 },
          { text: "I try to push it down but it keeps surfacing in other ways", r: 1 },
          { text: "No — I can't face it so I numb or distract constantly", r: 0 }
        ]
      },
      { text: "How do you feel about forming new attachments after this loss?", sub: "",
        answers: [
          { text: "Open — loss taught me how precious connection is", r: 3 },
          { text: "Cautious, but willing", r: 2 },
          { text: "Hesitant — loving again feels too risky", r: 1 },
          { text: "Closed — I can't bear the thought of losing again", r: 0 }
        ]
      },
      { text: "Have you found any meaning or growth through this experience?", sub: "Not everyone does, and that's okay — this is just where you are.",
        answers: [
          { text: "Yes — it changed me and I can see some of that change as valuable", r: 3 },
          { text: "I'm beginning to find pieces of meaning", r: 2 },
          { text: "Not yet — it still mostly feels senseless", r: 1 },
          { text: "No — and the question feels cruel", r: 0 }
        ]
      },
      { text: "Do you still feel intense anger about the loss?", sub: "",
        answers: [
          { text: "No — I've worked through the anger stage", r: 3 },
          { text: "Sometimes, but it's no longer the dominant emotion", r: 2 },
          { text: "Yes — I'm still very angry, at fate, at people, at everything", r: 1 },
          { text: "The anger consumes me and I don't know what to do with it", r: 0 }
        ]
      },
      { text: "Can you experience joy without it feeling like a betrayal?", sub: "",
        answers: [
          { text: "Yes — I've given myself permission to feel happiness", r: 3 },
          { text: "Usually, though sometimes joy brings a wave of guilt", r: 2 },
          { text: "I feel guilty whenever I have a good moment", r: 1 },
          { text: "I've unconsciously blocked joy to stay loyal to the grief", r: 0 }
        ]
      },
      { text: "How do you cope on anniversaries or triggering days?", sub: "",
        answers: [
          { text: "I allow myself to feel, honor the day, and keep living", r: 3 },
          { text: "It's harder those days, but I get through them", r: 2 },
          { text: "I dread them for weeks and struggle to function on them", r: 1 },
          { text: "I completely fall apart and can't function for days", r: 0 }
        ]
      },
      { text: "Have you been able to rebuild your sense of the future?", sub: "",
        answers: [
          { text: "Yes — I have a vision of my future that I'm working toward", r: 3 },
          { text: "I'm slowly rebuilding it, piece by piece", r: 2 },
          { text: "The future feels empty or pointless without them/it", r: 1 },
          { text: "I have no future in my mind — the loss took it with it", r: 0 }
        ]
      },
      { text: "Do you talk about the loss with others, or do you keep it completely locked away?", sub: "",
        answers: [
          { text: "I can share it when appropriate — it doesn't feel like a secret anymore", r: 3 },
          { text: "With close people, yes — I've opened up carefully", r: 2 },
          { text: "I want to but I protect others from it, or I fear their reaction", r: 1 },
          { text: "Completely locked away — no one knows the true depth of it", r: 0 }
        ]
      }
    ]
  },
  {
    id: 'betrayal',
    emoji: '🗡️',
    label: 'Betrayal Trauma',
    desc: 'Cheating, broken trust, backstabbing, deception',
    questions: [
      { text: "Can you trust someone new, or does past betrayal color everything?", sub: "",
        answers: [
          { text: "I can trust — I've learned to use discernment, not blanket distrust", r: 3 },
          { text: "I can, though it takes more time than it used to", r: 2 },
          { text: "I want to, but fear takes over before I get there", r: 1 },
          { text: "No — I assume everyone will eventually betray me", r: 0 }
        ]
      },
      { text: "When you think about the person who betrayed you, what do you feel?", sub: "",
        answers: [
          { text: "Mostly neutral — they no longer have power over my emotional state", r: 3 },
          { text: "Some residual hurt or anger, but it doesn't rule me", r: 2 },
          { text: "Still intense emotion — pain, rage, or obsessive replaying", r: 1 },
          { text: "All-consuming feelings that I can't seem to escape", r: 0 }
        ]
      },
      { text: "Have you been able to forgive — for yourself, not for them?", sub: "Forgiveness is releasing the poison you're drinking, not pardoning their behavior.",
        answers: [
          { text: "Yes — I've released the weight of carrying it", r: 3 },
          { text: "I'm in the process — some days more than others", r: 2 },
          { text: "Not yet — it still feels impossible or unjust", r: 1 },
          { text: "No — forgiving feels like letting them win", r: 0 }
        ]
      },
      { text: "Do you constantly watch for signs that people will betray you?", sub: "",
        answers: [
          { text: "No — I observe people naturally, without hypervigilance", r: 3 },
          { text: "Sometimes, in certain situations", r: 2 },
          { text: "Often — I'm always half-expecting to be hurt", r: 1 },
          { text: "Yes — I'm in constant low-level surveillance mode in all relationships", r: 0 }
        ]
      },
      { text: "Has the betrayal changed how you see yourself?", sub: "",
        answers: [
          { text: "It challenged me but ultimately didn't diminish my sense of self", r: 3 },
          { text: "I'm rebuilding my self-image after it shook me", r: 2 },
          { text: "I feel foolish, naive, or like there's something wrong with me", r: 1 },
          { text: "It destroyed my self-worth — I still see myself through the lens of it", r: 0 }
        ]
      },
      { text: "Can you be vulnerable with someone close to you now?", sub: "",
        answers: [
          { text: "Yes — I can let people in while staying grounded in myself", r: 3 },
          { text: "With the right person, yes — slowly and carefully", r: 2 },
          { text: "I want to but I always pull back before getting too close", r: 1 },
          { text: "No — vulnerability feels like handing someone a weapon", r: 0 }
        ]
      },
      { text: "Do you still replay the betrayal trying to find what you missed?", sub: "",
        answers: [
          { text: "No — I've accepted that what happened wasn't about my failures", r: 3 },
          { text: "Rarely — it comes up sometimes but I move on", r: 2 },
          { text: "Regularly — I go over it looking for what I should have seen", r: 1 },
          { text: "Obsessively — it loops constantly", r: 0 }
        ]
      },
      { text: "How do you handle being let down in small ways now?", sub: "",
        answers: [
          { text: "I can address it proportionally — small things stay small", r: 3 },
          { text: "Sometimes small things trigger bigger reactions, but I catch it", r: 2 },
          { text: "Small letdowns feel like confirmation of a bigger pattern", r: 1 },
          { text: "Any disappointment floods me with the original betrayal", r: 0 }
        ]
      },
      { text: "Do you feel foolish for having trusted in the first place?", sub: "",
        answers: [
          { text: "No — trusting was rational given what I knew. The fault was theirs.", r: 3 },
          { text: "Less so — I'm understanding that trusting wasn't weakness", r: 2 },
          { text: "Sometimes — I wish I had been more guarded", r: 1 },
          { text: "Yes — I feel naive and stupid for not seeing it", r: 0 }
        ]
      },
      { text: "Have you established new personal limits from what you learned?", sub: "",
        answers: [
          { text: "Yes — I've grown and I know my non-negotiables clearly now", r: 3 },
          { text: "I'm working on defining them", r: 2 },
          { text: "I have them in theory but I struggle to enforce them", r: 1 },
          { text: "No — I don't know where I stand or what I'll accept", r: 0 }
        ]
      },
      { text: "Can you distinguish between a trustworthy person and a risky one?", sub: "",
        answers: [
          { text: "Yes — I've developed real discernment from this experience", r: 3 },
          { text: "Better than before — I'm still sharpening that skill", r: 2 },
          { text: "I'm not sure I trust my own judgment anymore", r: 1 },
          { text: "No — everyone either seems perfectly safe or completely dangerous", r: 0 }
        ]
      },
      { text: "Does the thought of that betrayal still consume regular parts of your day?", sub: "",
        answers: [
          { text: "No — it's part of my past, not my present", r: 3 },
          { text: "Occasionally, but not daily", r: 2 },
          { text: "It comes up often and I have to actively push it away", r: 1 },
          { text: "Yes — it's constantly in the background of my mind", r: 0 }
        ]
      }
    ]
  },
  {
    id: 'social',
    emoji: '🎭',
    label: 'Social Trauma',
    desc: 'Bullying, humiliation, social rejection, exclusion',
    questions: [
      { text: "When you enter a new group, what is your baseline assumption?", sub: "",
        answers: [
          { text: "That people are generally okay — I give them a fair chance", r: 3 },
          { text: "Cautious but open — I wait and see", r: 2 },
          { text: "That I'll be judged or excluded eventually", r: 1 },
          { text: "That I don't belong and it's only a matter of time before they see it", r: 0 }
        ]
      },
      { text: "When someone laughs near you, what's your first thought?", sub: "",
        answers: [
          { text: "Something must be funny — it rarely crosses my mind it's about me", r: 3 },
          { text: "Usually nothing, but occasionally a small doubt flickers", r: 2 },
          { text: "I often wonder if they're laughing at me", r: 1 },
          { text: "My body immediately assumes they're laughing at me", r: 0 }
        ]
      },
      { text: "How do you feel about sharing your opinions in a group?", sub: "",
        answers: [
          { text: "I speak when I have something to say — I trust my voice", r: 3 },
          { text: "I do it, though I sometimes second-guess myself after", r: 2 },
          { text: "I censor myself heavily out of fear of judgment", r: 1 },
          { text: "I stay silent almost always — the risk feels too high", r: 0 }
        ]
      },
      { text: "Can you think about those who bullied or excluded you without rage or shame?", sub: "",
        answers: [
          { text: "Yes — I've processed it and it no longer owns me", r: 3 },
          { text: "Mostly, though some residual feeling remains", r: 2 },
          { text: "Still painful — anger or shame rises quickly", r: 1 },
          { text: "No — it's still raw and consuming", r: 0 }
        ]
      },
      { text: "Do you still perform or shrink yourself in social settings because of past experiences?", sub: "",
        answers: [
          { text: "No — I show up as myself and let people take it or leave it", r: 3 },
          { text: "Sometimes I catch myself performing, but I notice it and adjust", r: 2 },
          { text: "Often — I manage my presentation very carefully in groups", r: 1 },
          { text: "Constantly — I feel like a character, not a person, in social settings", r: 0 }
        ]
      },
      { text: "How does public attention feel — positive or negative?", sub: "",
        answers: [
          { text: "I can handle it — I don't need to hide from being seen", r: 3 },
          { text: "Slightly uncomfortable, but manageable", r: 2 },
          { text: "Very uncomfortable — I want to disappear when noticed", r: 1 },
          { text: "Terrifying — being seen feels like being exposed to attack", r: 0 }
        ]
      },
      { text: "Do you feel you belong in social spaces?", sub: "",
        answers: [
          { text: "Yes — I've found my people and I know I deserve connection", r: 3 },
          { text: "More than before — I'm finding my place", r: 2 },
          { text: "I feel on the outside in most groups", r: 1 },
          { text: "Nowhere — I've always been and will always be an outsider", r: 0 }
        ]
      },
      { text: "Has the experience made it harder to form close friendships?", sub: "",
        answers: [
          { text: "No — I have close friendships and I've healed that capacity", r: 3 },
          { text: "A little — I'm slower to open up but I can get there", r: 2 },
          { text: "Yes — I keep people at a certain distance", r: 1 },
          { text: "Completely — I don't let anyone get truly close", r: 0 }
        ]
      },
      { text: "How do you respond when someone speaks harshly to you in public?", sub: "",
        answers: [
          { text: "I can respond firmly without collapsing or exploding", r: 3 },
          { text: "I handle it, though I replay it afterward", r: 2 },
          { text: "I freeze or immediately apologize, even when I did nothing wrong", r: 1 },
          { text: "I either shut down completely or react with disproportionate emotion", r: 0 }
        ]
      },
      { text: "Do you feel your voice and presence matter in a room?", sub: "",
        answers: [
          { text: "Yes — I have the right to be heard and to exist in shared spaces", r: 3 },
          { text: "I'm learning to believe that — I'm getting there", r: 2 },
          { text: "I doubt it — I often feel invisible or like a disruption", r: 1 },
          { text: "No — I feel like my presence is a burden to others", r: 0 }
        ]
      },
      { text: "Can you tell the difference between someone who is safe and someone who isn't?", sub: "",
        answers: [
          { text: "Yes — I've developed real instinct for who's trustworthy", r: 3 },
          { text: "Better than before — I'm still building the skill", r: 2 },
          { text: "I'm not sure I trust my instincts socially anymore", r: 1 },
          { text: "No — everyone feels like a potential threat", r: 0 }
        ]
      },
      { text: "What has the experience of social trauma taught you about yourself?", sub: "This question has no wrong answer.",
        answers: [
          { text: "That I'm resilient — I survived it and I know who I am", r: 3 },
          { text: "I'm still discovering the lessons, but something is shifting", r: 2 },
          { text: "That I'm different, and not in a good way — I'm still the outsider", r: 1 },
          { text: "That there's something fundamentally wrong with me", r: 0 }
        ]
      }
    ]
  },
  {
    id: 'selfworth',
    emoji: '🪞',
    label: 'Self-Worth Trauma',
    desc: 'Chronic shame, never feeling enough, constant criticism',
    questions: [
      { text: "When you make a mistake, how do you talk to yourself?", sub: "",
        answers: [
          { text: "With the same compassion I'd offer a good friend", r: 3 },
          { text: "With some kindness, though a critical voice still comes", r: 2 },
          { text: "Harshly — I take mistakes as evidence of my inadequacy", r: 1 },
          { text: "I crucify myself — one mistake confirms everything I fear about myself", r: 0 }
        ]
      },
      { text: "Do you feel you are inherently worthy of love without needing to earn it?", sub: "",
        answers: [
          { text: "Yes — I've stopped performing for love and just let myself be", r: 3 },
          { text: "I'm learning to believe it — most days I do", r: 2 },
          { text: "I believe others deserve it, but struggle to feel it's true for me", r: 1 },
          { text: "No — love feels like something I'll always have to earn", r: 0 }
        ]
      },
      { text: "Can you receive a genuine compliment without deflecting or dismissing it?", sub: "",
        answers: [
          { text: "Yes — I can say thank you and let it land", r: 3 },
          { text: "I'm getting better — I catch myself deflecting and try to stop", r: 2 },
          { text: "I almost always deflect or minimize it immediately", r: 1 },
          { text: "Compliments make me deeply uncomfortable or feel false", r: 0 }
        ]
      },
      { text: "How often do you compare yourself to others in a way that diminishes you?", sub: "",
        answers: [
          { text: "Rarely — I've learned that comparison is a trap", r: 3 },
          { text: "Sometimes, but I notice it and redirect", r: 2 },
          { text: "Often — I almost always come out feeling less than", r: 1 },
          { text: "Constantly — I measure myself against others as a reflex", r: 0 }
        ]
      },
      { text: "Do you feel shame about things that are fundamental to who you are?", sub: "",
        answers: [
          { text: "No — I've made peace with who I am, including the parts that were shamed", r: 3 },
          { text: "Less than before — I'm reclaiming parts of myself that were rejected", r: 2 },
          { text: "Yes — some core parts of me still feel wrong or too much", r: 1 },
          { text: "Yes — who I am at my core feels like something to be hidden", r: 0 }
        ]
      },
      { text: "When you set a personal limit, do you feel guilty?", sub: "",
        answers: [
          { text: "No — limits are an act of self-respect, not selfishness", r: 3 },
          { text: "Sometimes, but I've learned to hold them despite the discomfort", r: 2 },
          { text: "Almost always — I feel I'm being unfair or too demanding", r: 1 },
          { text: "Yes — my needs feel illegitimate compared to others' comfort", r: 0 }
        ]
      },
      { text: "Do you believe your needs are as valid as other people's?", sub: "",
        answers: [
          { text: "Yes — my needs matter just as much as anyone else's", r: 3 },
          { text: "I'm working on believing it — mostly yes", r: 2 },
          { text: "Intellectually yes, but I consistently put others' needs above mine", r: 1 },
          { text: "No — other people's needs always feel more important than mine", r: 0 }
        ]
      },
      { text: "Can you look at yourself in the mirror with neutrality or kindness?", sub: "",
        answers: [
          { text: "Yes — I see a person, not a list of flaws", r: 3 },
          { text: "Most days — some days are harder than others", r: 2 },
          { text: "I avoid it or I pick myself apart immediately", r: 1 },
          { text: "I actively dislike what I see", r: 0 }
        ]
      },
      { text: "Do you sabotage good things in your life because you don't feel you deserve them?", sub: "",
        answers: [
          { text: "No — I've stopped punishing myself for receiving good things", r: 3 },
          { text: "Occasionally I notice the impulse, but I'm catching it earlier", r: 2 },
          { text: "Yes — when things are going well I often find a way to ruin it", r: 1 },
          { text: "Consistently — happiness feels like a setup for a fall", r: 0 }
        ]
      },
      { text: "How do you feel when people see the 'real' you?", sub: "",
        answers: [
          { text: "Safe — my real self is worth knowing", r: 3 },
          { text: "Vulnerable but okay — I'm learning to let people in", r: 2 },
          { text: "Anxious — I manage what people see very carefully", r: 1 },
          { text: "Terrified — the real me feels like something to be ashamed of", r: 0 }
        ]
      },
      { text: "Can you celebrate your own achievements without minimizing them?", sub: "",
        answers: [
          { text: "Yes — I allow myself to feel proud of what I've done", r: 3 },
          { text: "I'm learning to — I let it land a little longer each time", r: 2 },
          { text: "I minimize almost immediately — 'it wasn't a big deal'", r: 1 },
          { text: "I feel like a fraud — achievements confirm I've fooled people", r: 0 }
        ]
      },
      { text: "When someone says 'I love you' or 'I'm proud of you', what's your gut reaction?", sub: "",
        answers: [
          { text: "Warmth — I can receive it and believe it", r: 3 },
          { text: "Good, though a small part of me still questions it", r: 2 },
          { text: "Doubt — I wonder what they want or when they'll see the truth", r: 1 },
          { text: "Discomfort or disbelief — it doesn't feel real or safe", r: 0 }
        ]
      }
    ]
  }
];

export function getTraumaResult(resolvedPct, trauma) {
  const unresolvedPct = 100 - resolvedPct;
  let icon, title, subtitle, traits;
  if (resolvedPct >= 80) {
    icon = '🌸'; title = "You've Done the Work";
    subtitle = 'Your responses show significant healing from this trauma.';
    traits = [
      { icon: '🧭', text: '<strong>You have perspective on what happened</strong> — it\'s part of your story, not the whole story.' },
      { icon: '🛡️', text: '<strong>Your nervous system has found ground</strong> — triggers still happen but they no longer define your days.' },
      { icon: '🌱', text: '<strong>You\'ve rebuilt something real</strong> — trust, self-worth, or capacity for connection have returned.' },
      { icon: '🔭', text: '<strong>Your future feels like yours</strong> — the trauma is not the author of what comes next.' }
    ];
  } else if (resolvedPct >= 60) {
    icon = '🌿'; title = 'Healing in Progress';
    subtitle = 'Real work has happened. You\'re not where you started.';
    traits = [
      { icon: '✅', text: '<strong>The healing is real</strong> — even when it doesn\'t feel that way from the inside.' },
      { icon: '⚡', text: '<strong>Some triggers still land hard</strong> — that\'s normal and doesn\'t erase what you\'ve built.' },
      { icon: '🔍', text: '<strong>You have awareness</strong> — seeing the pattern is the first step to changing it.' },
      { icon: '🧭', text: '<strong>Keep going</strong> — you\'re past the hardest part. What remains is refinement.' }
    ];
  } else if (resolvedPct >= 40) {
    icon = '🌑'; title = 'Still Healing';
    subtitle = 'The trauma is still active in your life in meaningful ways.';
    traits = [
      { icon: '🌊', text: '<strong>The wound is still influencing you</strong> — relationships, self-image, and reactions carry its imprint.' },
      { icon: '🪞', text: '<strong>Some insight is present</strong> — you can see pieces of the pattern, which is where change begins.' },
      { icon: '🤝', text: '<strong>Support would shift things</strong> — this stage often needs more than self-reflection alone can offer.' },
      { icon: '💡', text: '<strong>Being in the middle is not failure</strong> — it\'s the honest truth of where most people are.' }
    ];
  } else if (resolvedPct >= 20) {
    icon = '🔒'; title = 'This Trauma Still Has a Hold';
    subtitle = 'Most energy is going toward managing it, not processing it.';
    traits = [
      { icon: '😔', text: '<strong>The wound is close to the surface</strong> — it shapes how you see yourself and what feels possible.' },
      { icon: '🧠', text: '<strong>Your nervous system hasn\'t felt safe enough yet</strong> — healing begins when safety becomes possible.' },
      { icon: '🕯️', text: '<strong>You don\'t have to do this alone</strong> — trauma-informed therapy is built exactly for this.' },
      { icon: '❤️', text: '<strong>You came here for a reason</strong> — the impulse to understand yourself is the beginning of everything.' }
    ];
  } else {
    icon = '⛓️'; title = 'This Is Unresolved';
    subtitle = 'The trauma is running close to the surface and shaping most things.';
    traits = [
      { icon: '🚨', text: '<strong>At this level, the wound shapes nearly everything</strong> — perception, reaction, relationship, possibility.' },
      { icon: '🫂', text: '<strong>This is not weakness</strong> — unprocessed trauma is what happens when pain is too large to face alone.' },
      { icon: '🌅', text: '<strong>Healing is possible regardless of how long it\'s been</strong> — trauma is not a life sentence.' },
      { icon: '🛟', text: '<strong>Please reach out to someone</strong> — a trauma-informed therapist can offer what self-reflection cannot.' }
    ];
  }
  return {
    icon, title, subtitle, traits,
    extra: `<strong>Resolved:</strong> ${resolvedPct}% · <strong>Still active:</strong> ${unresolvedPct}%<br><br>For self-reflection only. Based on trauma processing research and attachment theory.`
  };
}
