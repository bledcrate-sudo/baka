const HUB_QUIZZES = [
  // Relationships
  { id: 'love', icon: '💗', title: 'Love or Attachment?', sub: 'Are your feelings rooted in love, or emotional dependency?', color: '#e8607a', colorRgb: '232,96,122', section: 'Relationships', onClick: (goTo) => goTo('intro') },
  { id: 'attachment', icon: '🔗', title: 'What Is My Attachment Style?', sub: 'Secure, anxious, avoidant, or disorganized — find your pattern.', color: '#5a9ef5', colorRgb: '90,158,245', onClick: (_, l) => l('attachment') },
  { id: 'wound', icon: '🕳️', title: 'What Is My Core Wound?', sub: 'Rejection, abandonment, humiliation, betrayal, or injustice?', color: '#f07e5a', colorRgb: '240,126,90', onClick: (_, l) => l('wound') },
  // Inner World
  { id: 'trauma', icon: '🌿', title: 'Did I Resolve My Trauma?', sub: 'Choose your trauma type and find out where you are in healing.', color: '#2ec4b6', colorRgb: '46,196,182', section: 'Inner World', onClick: (goTo) => goTo('trauma-type') },
  { id: 'healing', icon: '🌱', title: 'Am I Healing or Surviving?', sub: 'Are you processing pain, or just managing its symptoms?', color: '#56cfb2', colorRgb: '86,207,178', onClick: (_, l) => l('healing') },
  { id: 'compassion', icon: '🫶', title: 'How Self-Compassionate Am I?', sub: 'Measure your inner voice — kindness or relentless self-criticism?', color: '#ecc94b', colorRgb: '236,201,75', onClick: (_, l) => l('compassion') },
  // Mental Health Screening
  { id: 'phq9', icon: '🌧️', title: 'Am I Experiencing Depression?', sub: 'PHQ-9 clinical screening — the standard tool used by doctors worldwide.', color: '#9b8ff5', colorRgb: '155,143,245', section: 'Mental Health Screening', onClick: (_, l) => l('phq9') },
  { id: 'gad7', icon: '⚡', title: 'How Much Anxiety Am I Carrying?', sub: 'GAD-7 — the clinical standard for measuring anxiety symptoms.', color: '#f472b6', colorRgb: '244,114,182', onClick: (_, l) => l('gad7') },
  { id: 'emreg', icon: '🌊', title: 'How Well Do I Regulate My Emotions?', sub: 'Based on the DERS scale — discover your emotional regulation capacity.', color: '#a8a1f8', colorRgb: '168,161,248', onClick: (_, l) => l('emreg') },
]

export default function Hub({ goTo, launchQuiz }) {
  let lastSection = null
  return (
    <div
      className="glass-card rounded-[32px] p-8 sm:p-12 shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Top shimmer line */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Header */}
      <div className="text-center mb-9">
        <p className="font-serif italic text-[0.8rem] text-white/25 mb-5 tracking-wide">for my love, israe</p>
        <div className="w-[68px] h-[68px] rounded-[22px] bg-white/5 border border-white/10 flex items-center justify-center text-[34px] mx-auto mb-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">🪐</div>
        <h1 className="font-serif text-[2.4rem] sm:text-[2.6rem] font-bold leading-[1.15] tracking-[-0.5px] mb-2.5"
          style={{ background: 'linear-gradient(135deg, #e8607a 0%, #c084fc 50%, #2ec4b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Know <em>Yourself</em>
        </h1>
        <p className="text-[#7e79a0] text-sm leading-[1.75] max-w-[380px] mx-auto">
          Nine psychology-based tools to understand your inner world — your patterns in love, your wounds, and your path to healing.
        </p>
      </div>

      {/* Quiz list */}
      <div className="flex flex-col gap-2">
        {/* Shugi AI */}
        <div className="text-[0.63rem] uppercase tracking-[2.5px] text-white/25 font-bold flex items-center gap-2.5 mt-4 mb-0.5">
          Talk to Someone
          <div className="flex-1 h-px bg-gradient-to-r from-white/7 to-transparent" />
        </div>
        <button
          onClick={() => window.location.href = '/chat'}
          className="flex flex-col gap-2.5 p-5 rounded-[20px] text-left w-full border border-[rgba(155,143,245,0.25)] transition-all hover:border-[rgba(155,143,245,0.5)] hover:shadow-[0_8px_36px_rgba(155,143,245,0.15)] active:scale-[0.985]"
          style={{ background: 'linear-gradient(135deg, rgba(155,143,245,0.1) 0%, rgba(168,161,248,0.06) 100%)' }}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-[46px] h-[46px] rounded-[14px] bg-[rgba(155,143,245,0.18)] flex items-center justify-center text-[22px] shrink-0">🌙</div>
            <div>
              <div className="text-[0.68rem] uppercase tracking-[1.8px] text-[rgba(168,161,248,0.9)] font-bold mb-0.5">Shugi AI</div>
              <div className="text-[0.97rem] font-bold text-white">Personal Mental Health Assistant</div>
            </div>
          </div>
          <p className="text-[0.8rem] text-[#7e79a0] leading-[1.55]">Talk freely about what you're going through — love, grief, anxiety, identity. Shugi listens without judgment.</p>
          <div className="inline-flex items-center gap-1.5 bg-[rgba(155,143,245,0.2)] border border-[rgba(155,143,245,0.35)] rounded-full px-3.5 py-1.5 text-[0.79rem] font-semibold text-purple-300 self-start">
            💬 Start a conversation →
          </div>
        </button>

        {/* Quiz buttons */}
        {HUB_QUIZZES.map((q) => {
          const showSection = q.section && q.section !== lastSection
          if (showSection) lastSection = q.section
          return (
            <div key={q.id}>
              {showSection && (
                <div className="text-[0.63rem] uppercase tracking-[2.5px] text-white/25 font-bold flex items-center gap-2.5 mt-4 mb-0.5">
                  {q.section}
                  <div className="flex-1 h-px bg-gradient-to-r from-white/7 to-transparent" />
                </div>
              )}
              <button
                onClick={() => q.onClick(goTo, launchQuiz)}
                className="relative flex items-center gap-3.5 w-full text-left px-4 py-4 min-h-[70px] rounded-[18px] border border-white/8 transition-all active:scale-[0.984] group overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.04)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `rgba(${q.colorRgb},0.3)`
                  e.currentTarget.style.background = `rgba(${q.colorRgb},0.05)`
                  e.currentTarget.style.boxShadow = `0 4px 20px rgba(${q.colorRgb},0.1)`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Left accent line */}
                <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-r-[3px] opacity-0 group-hover:opacity-80 transition-opacity" style={{ background: q.color }} />
                {/* Icon */}
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-[1.6rem] shrink-0 transition-transform group-hover:scale-[1.06]"
                  style={{ background: `rgba(${q.colorRgb},0.14)` }}>
                  {q.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-[1.05rem] font-semibold leading-[1.25] mb-0.5">{q.title}</div>
                  <div className="text-[0.77rem] text-[#7e79a0] leading-[1.45]">{q.sub}</div>
                </div>
                <span className="text-white/20 text-[1.3rem] shrink-0 ml-2 transition-all group-hover:text-white/50 group-hover:translate-x-1">›</span>
              </button>
            </div>
          )
        })}
      </div>

      <p className="text-center font-serif italic text-[0.8rem] text-white/20 mt-7">— R</p>
    </div>
  )
}
