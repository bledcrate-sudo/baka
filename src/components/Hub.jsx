import { useState } from 'react'

const HUB_QUIZZES = [
  // Relationships
  { id: 'love', icon: '💗', title: 'Love or Attachment?', sub: 'Are your feelings rooted in love, or emotional dependency?', color: '#e8607a', colorRgb: '232,96,122', section: 'Relationships', onClick: (goTo) => goTo('intro') },
  { id: 'attachment', icon: '🔗', title: 'What Is My Attachment Style?', sub: 'Secure, anxious, avoidant, or disorganized — find your pattern.', color: '#5a9ef5', colorRgb: '90,158,245', section: 'Relationships', onClick: (_, l) => l('attachment') },
  { id: 'wound', icon: '🕳️', title: 'What Is My Core Wound?', sub: 'Rejection, abandonment, humiliation, betrayal, or injustice?', color: '#f07e5a', colorRgb: '240,126,90', section: 'Relationships', onClick: (_, l) => l('wound') },
  // Inner World
  { id: 'trauma', icon: '🌿', title: 'Did I Resolve My Trauma?', sub: 'Choose your trauma type and find out where you are in healing.', color: '#2ec4b6', colorRgb: '46,196,182', section: 'Inner World', onClick: (goTo) => goTo('trauma-type') },
  { id: 'healing', icon: '🌱', title: 'Am I Healing or Surviving?', sub: 'Are you processing pain, or just managing its symptoms?', color: '#56cfb2', colorRgb: '86,207,178', section: 'Inner World', onClick: (_, l) => l('healing') },
  { id: 'compassion', icon: '🫶', title: 'How Self-Compassionate Am I?', sub: 'Measure your inner voice — kindness or relentless self-criticism?', color: '#ecc94b', colorRgb: '236,201,75', section: 'Inner World', onClick: (_, l) => l('compassion') },
  // Mental Health Screening
  { id: 'phq9', icon: '🌧️', title: 'Am I Experiencing Depression?', sub: 'PHQ-9 clinical screening — the standard tool used by doctors worldwide.', color: '#9b8ff5', colorRgb: '155,143,245', section: 'Mental Health Screening', onClick: (_, l) => l('phq9') },
  { id: 'gad7', icon: '⚡', title: 'How Much Anxiety Am I Carrying?', sub: 'GAD-7 — the clinical standard for measuring anxiety symptoms.', color: '#f472b6', colorRgb: '244,114,182', section: 'Mental Health Screening', onClick: (_, l) => l('gad7') },
  { id: 'emreg', icon: '🌊', title: 'How Well Do I Regulate My Emotions?', sub: 'Based on the DERS scale — discover your emotional regulation capacity.', color: '#a8a1f8', colorRgb: '168,161,248', section: 'Mental Health Screening', onClick: (_, l) => l('emreg') },
  // Stress & Burnout
  { id: 'burnout', icon: '🔥', title: 'Am I Burning Out?', sub: 'Maslach Burnout Inventory — measure exhaustion, cynicism, and lost purpose.', color: '#f97316', colorRgb: '249,115,22', section: 'Stress & Burnout', onClick: (_, l) => l('burnout') },
  { id: 'stress', icon: '🌀', title: 'How Stressed Am I?', sub: 'PSS-10 — the clinical standard for measuring perceived psychological stress.', color: '#f59e0b', colorRgb: '245,158,11', section: 'Stress & Burnout', onClick: (_, l) => l('stress') },
  // Self & Social
  { id: 'selfesteem', icon: '🌟', title: 'How Is My Self-Esteem?', sub: 'Rosenberg Self-Esteem Scale — validated in 53+ countries to measure global self-worth.', color: '#10b981', colorRgb: '16,185,129', section: 'Self & Social', onClick: (_, l) => l('selfesteem') },
  { id: 'loneliness', icon: '🌑', title: 'How Lonely Am I?', sub: 'UCLA Loneliness Scale — the gold standard for measuring perceived social isolation.', color: '#94a3b8', colorRgb: '148,163,184', section: 'Self & Social', onClick: (_, l) => l('loneliness') },
  { id: 'socialanxiety', icon: '👁️', title: 'Do I Have Social Anxiety?', sub: 'Based on SPIN — a validated clinical screen for social anxiety disorder.', color: '#c084fc', colorRgb: '192,132,252', section: 'Self & Social', onClick: (_, l) => l('socialanxiety') },
]

const SECTIONS = ['All', 'Relationships', 'Inner World', 'Mental Health Screening', 'Stress & Burnout', 'Self & Social']

const TAB_COLORS = {
  'All': { color: '#e8607a', colorRgb: '232,96,122' },
  'Relationships': { color: '#5a9ef5', colorRgb: '90,158,245' },
  'Inner World': { color: '#2ec4b6', colorRgb: '46,196,182' },
  'Mental Health Screening': { color: '#9b8ff5', colorRgb: '155,143,245' },
  'Stress & Burnout': { color: '#f97316', colorRgb: '249,115,22' },
  'Self & Social': { color: '#10b981', colorRgb: '16,185,129' },
}

const TAB_LABELS = {
  'All': 'All',
  'Relationships': 'Relationships',
  'Inner World': 'Inner World',
  'Mental Health Screening': 'Mental Health',
  'Stress & Burnout': 'Stress & Burnout',
  'Self & Social': 'Self & Social',
}

export default function Hub({ goTo, launchQuiz }) {
  const [activeTab, setActiveTab] = useState('All')

  const visibleQuizzes = activeTab === 'All'
    ? HUB_QUIZZES
    : HUB_QUIZZES.filter(q => q.section === activeTab)

  const activeColor = TAB_COLORS[activeTab]

  return (
    <div
      className="glass-card rounded-[32px] p-5 sm:p-10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Top shimmer line */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Header */}
      <div className="text-center mb-7">
        <div className="w-[54px] h-[54px] sm:w-[68px] sm:h-[68px] rounded-[22px] bg-white/5 border border-white/10 flex items-center justify-center text-[26px] sm:text-[34px] mx-auto mb-3 sm:mb-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">🪐</div>
        <h1 className="font-serif text-[1.9rem] sm:text-[2.4rem] font-bold leading-[1.15] tracking-[-0.5px] mb-2.5"
          style={{ background: 'linear-gradient(135deg, #e8607a 0%, #c084fc 50%, #2ec4b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Know <em>Yourself</em>
        </h1>
        <p className="text-[#7e79a0] text-sm leading-[1.75] max-w-[380px] mx-auto">
          Fourteen psychology-based tools to understand your inner world — your patterns in love, your wounds, your stress, and your path to healing.
        </p>
      </div>

      {/* Tab bar */}
      <div className="flex gap-2 overflow-x-auto pb-1 mb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {SECTIONS.map(section => {
          const isActive = activeTab === section
          const { color, colorRgb } = TAB_COLORS[section]
          return (
            <button
              key={section}
              onClick={() => setActiveTab(section)}
              className="rounded-full px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[1.5px] whitespace-nowrap transition-all shrink-0"
              style={isActive
                ? { background: color, color: '#fff', boxShadow: `0 2px 12px rgba(${colorRgb},0.35)` }
                : { background: 'transparent', color: 'rgba(255,255,255,0.4)' }
              }
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
            >
              {TAB_LABELS[section]}
            </button>
          )
        })}
      </div>

      {/* Shugi AI card — only on All tab */}
      {activeTab === 'All' && (
        <button
          onClick={() => window.location.href = '/chat'}
          className="flex flex-col gap-2.5 p-5 rounded-[20px] text-left w-full border border-[rgba(155,143,245,0.25)] transition-all hover:border-[rgba(155,143,245,0.5)] hover:shadow-[0_8px_36px_rgba(155,143,245,0.15)] active:scale-[0.985] mb-4"
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
      )}

      {/* Quiz grid */}
      <div key={activeTab} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {visibleQuizzes.map(q => (
          <button
            key={q.id}
            onClick={() => q.onClick(goTo, launchQuiz)}
            className="flex flex-col gap-2 p-4 rounded-[18px] border border-white/[0.08] text-left transition-all active:scale-[0.97]"
            style={{ background: 'rgba(255,255,255,0.04)' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `rgba(${q.colorRgb},0.3)`
              e.currentTarget.style.boxShadow = `0 4px 20px rgba(${q.colorRgb},0.12)`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div
              className="w-11 h-11 rounded-[13px] flex items-center justify-center text-[1.5rem]"
              style={{ background: `rgba(${q.colorRgb},0.14)` }}
            >
              {q.icon}
            </div>
            <div>
              <div className="font-serif text-[0.95rem] font-semibold leading-[1.3] mb-0.5">{q.title}</div>
              <div className="text-[0.72rem] text-[#7e79a0] leading-[1.4]">{q.sub}</div>
            </div>
            <div className="mt-auto pt-1">
              <span className="text-[0.68rem] font-bold uppercase tracking-[1.2px] transition-colors" style={{ color: q.color + '99' }}>
                Start →
              </span>
            </div>
          </button>
        ))}
      </div>

      <p className="text-center font-serif italic text-[0.8rem] text-white/20 mt-7">— R</p>
    </div>
  )
}
