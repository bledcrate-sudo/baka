import { useState, useRef, useEffect } from 'react'

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
  // New validated quizzes
  { id: 'ptsd', icon: '🌫️', title: 'Am I Carrying Trauma Symptoms?', sub: 'PCL-5 — the gold standard trauma symptom checklist from the National Center for PTSD.', color: '#8b5cf6', colorRgb: '139,92,246', section: 'Mental Health Screening', onClick: (_, l) => l('ptsd') },
  { id: 'ocd', icon: '🔁', title: 'Do I Have OCD Tendencies?', sub: 'OCI-R — Foa et al.\'s validated obsessive-compulsive inventory across six symptom dimensions.', color: '#06b6d4', colorRgb: '6,182,212', section: 'Mental Health Screening', onClick: (_, l) => l('ocd') },
  { id: 'adhd', icon: '⚡', title: 'Do I Have ADHD Patterns?', sub: 'ASRS v1.1 — the WHO-endorsed adult ADHD self-report screener by Kessler et al.', color: '#f59e0b', colorRgb: '245,158,11', section: 'Mental Health Screening', onClick: (_, l) => l('adhd') },
  { id: 'insomnia', icon: '🌙', title: 'How Bad Is My Insomnia?', sub: 'ISI — Morin\'s Insomnia Severity Index, used in clinical trials worldwide.', color: '#6366f1', colorRgb: '99,102,241', section: 'Stress & Burnout', onClick: (_, l) => l('insomnia') },
  { id: 'perfectionism', icon: '🎯', title: 'Is My Perfectionism Helping or Hurting?', sub: 'Based on Frost\'s FMPS — distinguishes healthy striving from fear-driven perfectionism.', color: '#e879f9', colorRgb: '232,121,249', section: 'Inner World', onClick: (_, l) => l('perfectionism') },
  { id: 'codependency', icon: '🪢', title: 'Am I Codependent?', sub: 'Based on Beattie, Mellody & Friel — maps emotional enmeshment and self-abandonment patterns.', color: '#fb923c', colorRgb: '251,146,60', section: 'Relationships', onClick: (_, l) => l('codependency') },
  // New quizzes
  { id: 'resilience', icon: '🪨', title: 'How Resilient Am I?', sub: 'Brief Resilience Scale (Smith et al., 2008) — measures your capacity to recover from adversity and bounce back.', color: '#34d399', colorRgb: '52,211,153', section: 'Inner World', onClick: (_, l) => l('resilience') },
  { id: 'grief', icon: '🕊️', title: 'Am I in Complicated Grief?', sub: 'PG-13 (Prigerson et al., 2009) — the clinical standard for screening prolonged grief disorder.', color: '#818cf8', colorRgb: '129,140,248', section: 'Inner World', onClick: (_, l) => l('grief') },
  { id: 'anger', icon: '🌋', title: 'How Do I Relate to Anger?', sub: 'STAXI-2 (Spielberger, 1999) — explores trait anger, anger expression, and anger suppression.', color: '#ef4444', colorRgb: '239,68,68', section: 'Inner World', onClick: (_, l) => l('anger') },
  { id: 'emotionalneglect', icon: '🫧', title: 'Did I Experience Emotional Neglect?', sub: 'Based on Jonice Webb\'s CEN questionnaire — maps the invisible wounds of childhood emotional neglect.', color: '#a78bfa', colorRgb: '167,139,250', section: 'Relationships', onClick: (_, l) => l('emotionalneglect') },
  { id: 'narcissism', icon: '👑', title: 'Do I Have Narcissistic Tendencies?', sub: 'NPI-16 (Ames et al., 2006) — measures narcissistic traits on a spectrum, from healthy to pathological.', color: '#f59e0b', colorRgb: '245,158,11', section: 'Self & Social', onClick: (_, l) => l('narcissism') },
  { id: 'mindfulness', icon: '🌿', title: 'How Present Am I?', sub: 'MAAS (Brown & Ryan, 2003) — measures dispositional mindfulness and tendency to operate on autopilot.', color: '#06b6d4', colorRgb: '6,182,212', section: 'Inner World', onClick: (_, l) => l('mindfulness') },
  { id: 'dissociation', icon: '🫥', title: 'Do I Dissociate?', sub: 'DES-II (Putnam, 1993) — the gold standard clinical screening tool for dissociative experiences.', color: '#7c3aed', colorRgb: '124,58,237', section: 'Mental Health Screening', onClick: (_, l) => l('dissociation') },
  { id: 'impostor', icon: '🎭', title: 'Do I Have Impostor Syndrome?', sub: 'CIPS (Clance, 1978) — measures the belief that you\'re a fraud who will eventually be "found out".', color: '#0ea5e9', colorRgb: '14,165,233', section: 'Self & Social', onClick: (_, l) => l('impostor') },
  { id: 'alexithymia', icon: '🔇', title: 'Can I Name My Emotions?', sub: 'TAS-20 (Bagby et al., 1994) — measures alexithymia, the clinical difficulty identifying and describing feelings.', color: '#8b5cf6', colorRgb: '139,92,246', section: 'Inner World', onClick: (_, l) => l('alexithymia') },
  { id: 'lifesatisfaction', icon: '🌅', title: 'How Satisfied Am I with My Life?', sub: 'SWLS (Diener et al., 1985) — one of the most widely-used wellbeing measures in psychology worldwide.', color: '#10b981', colorRgb: '16,185,129', section: 'Self & Social', onClick: (_, l) => l('lifesatisfaction') },
  { id: 'shame', icon: '🩹', title: 'How Much Shame Do I Carry?', sub: 'Based on Nathanson\'s Compass of Shame (1992) and Tangney\'s GASP scale — maps chronic shame vs. healthy guilt.', color: '#ec4899', colorRgb: '236,72,153', section: 'Inner World', onClick: (_, l) => l('shame') },
  { id: 'bodydysmorphia', icon: '🪞', title: 'Do I Have Body Dysmorphia Signs?', sub: 'BDDQ (Phillips, 1996) — measures preoccupation with appearance flaws, distress, and functional impairment.', color: '#f472b6', colorRgb: '244,114,182', section: 'Mental Health Screening', onClick: (_, l) => l('bodydysmorphia') },
  { id: 'hypersensitivity', icon: '🌊', title: 'Am I Highly Sensitive?', sub: 'HSPS (Aron & Aron, 1996) — measures Sensory Processing Sensitivity found in 15–20% of the population.', color: '#a78bfa', colorRgb: '167,139,250', section: 'Personality', onClick: (_, l) => l('hypersensitivity') },
  { id: 'dependency', icon: '🧲', title: 'Am I Emotionally Dependent?', sub: 'Emotional Dependency Scale (Lemos & Londoño, 2006) — maps need for approval and fear of abandonment in relationships.', color: '#fb923c', colorRgb: '251,146,60', section: 'Relationships', onClick: (_, l) => l('dependency') },
  { id: 'anhedonia', icon: '🩶', title: 'Am I Losing the Ability to Feel Pleasure?', sub: 'SHAPS (Snaith et al., 1995) — the clinical standard for measuring anhedonia, a core symptom of depression.', color: '#64748b', colorRgb: '100,116,139', section: 'Mental Health Screening', onClick: (_, l) => l('anhedonia') },
  { id: 'fearofabandonment', icon: '💔', title: 'How Strong Is My Fear of Abandonment?', sub: 'Abandonment Schema Scale (Young, 1994) — maps the core belief that loved ones are unstable or will leave.', color: '#e8607a', colorRgb: '232,96,122', section: 'Relationships', onClick: (_, l) => l('fearofabandonment') },
  { id: 'emotionalintelligence', icon: '🧭', title: 'What Is My Emotional Intelligence?', sub: 'SSEIT (Schutte et al., 1998) — measures perceiving, using, understanding, and managing emotions across contexts.', color: '#10b981', colorRgb: '16,185,129', section: 'Inner World', onClick: (_, l) => l('emotionalintelligence') },
]

const SECTIONS = ['All', 'Relationships', 'Inner World', 'Mental Health Screening', 'Stress & Burnout', 'Self & Social', 'Personality']

const TAB_COLORS = {
  'All': { color: '#e8607a', colorRgb: '232,96,122' },
  'Relationships': { color: '#5a9ef5', colorRgb: '90,158,245' },
  'Inner World': { color: '#2ec4b6', colorRgb: '46,196,182' },
  'Mental Health Screening': { color: '#9b8ff5', colorRgb: '155,143,245' },
  'Stress & Burnout': { color: '#f97316', colorRgb: '249,115,22' },
  'Self & Social': { color: '#10b981', colorRgb: '16,185,129' },
  'Personality': { color: '#a78bfa', colorRgb: '167,139,250' },
}

const TAB_LABELS = {
  'All': 'All',
  'Relationships': 'Relationships',
  'Inner World': 'Inner World',
  'Mental Health Screening': 'Mental Health',
  'Stress & Burnout': 'Stress & Burnout',
  'Self & Social': 'Self & Social',
  'Personality': 'Personality',
}

export default function Hub({ goTo, launchQuiz }) {
  const [activeTab, setActiveTab] = useState('All')
  const [tabScrolled, setTabScrolled] = useState(false)

  const tabBarRef = useRef(null)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const scrollStartLeft = useRef(0)
  const dragMoved = useRef(0)

  // Mouse wheel over tab bar → horizontal scroll
  useEffect(() => {
    const el = tabBarRef.current
    if (!el) return
    const onWheel = (e) => {
      if (e.deltaY === 0 && e.deltaX === 0) return
      e.preventDefault()
      el.scrollLeft += e.deltaY || e.deltaX
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  // Attach move/up to window — drag survives mouse leaving the element
  useEffect(() => {
    const onMove = (e) => {
      if (!isDragging.current || !tabBarRef.current) return
      const dx = e.clientX - dragStartX.current
      dragMoved.current = Math.abs(dx)
      tabBarRef.current.scrollLeft = scrollStartLeft.current - dx
    }
    const onUp = () => {
      if (!isDragging.current) return
      isDragging.current = false
      if (tabBarRef.current) {
        tabBarRef.current.style.cursor = 'grab'
        tabBarRef.current.style.userSelect = ''
      }
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  const visibleQuizzes = activeTab === 'All'
    ? HUB_QUIZZES
    : HUB_QUIZZES.filter(q => q.section === activeTab)

  const { color: activeColor, colorRgb: activeColorRgb } = TAB_COLORS[activeTab]

  return (
    <div
      className="rounded-[14px] sm:rounded-[18px]"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'oklch(8.5% 0.022 284)',
        border: '1px solid oklch(17% 0.025 284)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.55)',
      }}
    >
      {/* Top shimmer line */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Header — compact on mobile */}
      <div className="text-center pt-6 px-5 sm:pt-10 sm:px-10 pb-5 sm:pb-7">
        <div className="w-[46px] h-[46px] sm:w-[68px] sm:h-[68px] rounded-[18px] sm:rounded-[22px] bg-white/5 border border-white/10 flex items-center justify-center text-[22px] sm:text-[34px] mx-auto mb-2.5 sm:mb-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">🪐</div>
        <h1
          className="font-serif text-[1.65rem] sm:text-[2.4rem] font-bold leading-[1.15] tracking-[-0.5px] mb-1.5 sm:mb-2.5"
          style={{ color: 'oklch(94% 0.009 284)' }}
        >
          Know{' '}
          <em style={{ color: 'oklch(72% 0.17 20)', fontStyle: 'italic', fontWeight: 600 }}>Yourself</em>
        </h1>
        <p className="hidden sm:block text-[#7e79a0] text-sm leading-[1.75] max-w-[380px] mx-auto">
          37 psychology-based tools to understand your inner world — your patterns in love, your wounds, your stress, and your path to healing.
        </p>
        <p className="sm:hidden text-[#7e79a0] text-[0.78rem] leading-[1.6]">
          37 psychology tools. Pick a category below.
        </p>
      </div>

      {/* Sticky tab bar */}
      <div
        className="sticky top-0 z-20 px-5 sm:px-10 pt-2 pb-3"
        style={{ background: 'rgba(14,11,28,0.88)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
      >
        <div className="relative">
          <div
            ref={tabBarRef}
            className="flex gap-1.5 overflow-x-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', cursor: 'grab' }}
            onScroll={e => setTabScrolled(e.currentTarget.scrollLeft > 10)}
            onMouseDown={e => {
              isDragging.current = true
              dragStartX.current = e.clientX
              dragMoved.current = 0
              scrollStartLeft.current = tabBarRef.current.scrollLeft
              tabBarRef.current.style.cursor = 'grabbing'
              tabBarRef.current.style.userSelect = 'none'
              e.preventDefault()
            }}
          >
            {SECTIONS.map(section => {
              const isActive = activeTab === section
              const { color, colorRgb } = TAB_COLORS[section]
              return (
                <button
                  key={section}
                  onClick={() => { if (Math.abs(dragMoved.current) < 5) setActiveTab(section) }}
                  className="rounded-full px-3.5 sm:px-4 text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-[1.5px] whitespace-nowrap transition-all shrink-0"
                  style={{
                    minHeight: '44px',
                    ...(isActive
                      ? { background: color, color: '#fff', boxShadow: `0 2px 12px rgba(${colorRgb},0.4)` }
                      : { background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)' })
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
                >
                  {TAB_LABELS[section]}
                </button>
              )
            })}
          </div>
          {/* Left fade — shows when scrolled past start */}
          {tabScrolled && (
            <div
              className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none z-10"
              style={{ background: 'linear-gradient(to left, transparent, rgba(14,11,28,0.95))' }}
            />
          )}
          {/* Right fade — hints there are more tabs */}
          <div
            className="absolute right-0 top-0 bottom-0 w-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, transparent, rgba(14,11,28,0.95))' }}
          />
        </div>
      </div>

      {/* Content area */}
      <div className="px-5 sm:px-10 pb-7 sm:pb-10 pt-4">

        {/* Shugi AI card — compact on mobile, full on desktop */}
        {activeTab === 'All' && (
          <button
            onClick={() => window.location.href = '/chat'}
            className="flex items-center gap-3.5 sm:flex-col sm:items-start sm:gap-2.5 p-4 sm:p-5 rounded-[18px] sm:rounded-[20px] text-left w-full border border-[rgba(155,143,245,0.25)] transition-all hover:border-[rgba(155,143,245,0.5)] hover:shadow-[0_8px_36px_rgba(155,143,245,0.15)] active:scale-[0.985] mb-4 sm:mb-4"
            style={{ background: 'linear-gradient(135deg, rgba(155,143,245,0.1) 0%, rgba(168,161,248,0.06) 100%)' }}
          >
            {/* Icon + label row */}
            <div className="w-[44px] h-[44px] sm:w-[46px] sm:h-[46px] rounded-[13px] sm:rounded-[14px] bg-[rgba(155,143,245,0.18)] flex items-center justify-center text-[20px] sm:text-[22px] shrink-0">🌙</div>
            <div className="flex-1 min-w-0 sm:flex-none">
              <div className="text-[0.65rem] uppercase tracking-[1.8px] text-[rgba(168,161,248,0.9)] font-bold mb-0.5">Shugi AI</div>
              <div className="text-[0.9rem] sm:text-[0.97rem] font-bold text-white leading-tight">Personal Mental Health Assistant</div>
            </div>
            {/* Arrow on mobile, full CTA on desktop */}
            <span className="sm:hidden text-white/30 text-xl shrink-0">›</span>
            <div className="hidden sm:block">
              <p className="text-[0.8rem] text-[#7e79a0] leading-[1.55] mb-2.5">Talk freely about what you're going through — love, grief, anxiety, identity. Shugi listens without judgment.</p>
              <div className="inline-flex items-center gap-1.5 bg-[rgba(155,143,245,0.2)] border border-[rgba(155,143,245,0.35)] rounded-full px-3.5 py-1.5 text-[0.79rem] font-semibold text-purple-300">
                💬 Start a conversation →
              </div>
            </div>
          </button>
        )}

        {/* Quiz grid — 2-col always for compact feel, larger on sm */}
        <div key={activeTab} className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {visibleQuizzes.map(q => (
            <button
              key={q.id}
              onClick={() => q.onClick(goTo, launchQuiz)}
              className="flex flex-col gap-1.5 p-3.5 sm:p-4 rounded-[10px] sm:rounded-[12px] border border-white/[0.06] text-left transition-all active:scale-[0.97] group"
              style={{ background: 'rgba(255,255,255,0.025)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `rgba(${q.colorRgb},0.28)`
                e.currentTarget.style.background = `rgba(${q.colorRgb},0.05)`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
              }}
            >
              <span style={{ fontSize: '1.15rem', lineHeight: 1 }}>{q.icon}</span>
              <div className="font-serif text-[0.86rem] sm:text-[0.94rem] font-semibold leading-[1.3]">{q.title}</div>
              <div className="hidden sm:block text-[0.7rem] leading-[1.45]" style={{ color: 'oklch(55% 0.04 284)' }}>{q.sub}</div>
              <span
                className="text-[0.6rem] font-bold uppercase tracking-[1.4px] mt-0.5"
                style={{ color: `rgba(${q.colorRgb},0.55)` }}
              >
                Start →
              </span>
            </button>
          ))}
        </div>
      </div>

      <p className="text-center font-serif italic text-[0.8rem] text-white/20 pb-6 sm:pb-8">— R</p>
    </div>
  )
}
