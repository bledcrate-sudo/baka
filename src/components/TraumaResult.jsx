import { useEffect, useRef } from 'react'
import { getTraumaResult } from '../data/traumaQuiz'

export default function TraumaResult({ goTo, state }) {
  const { selected, totalResolved } = state
  if (!selected) return null
  const maxScore = selected.questions.length * 3
  const resolvedPct = Math.round((totalResolved / maxScore) * 100)
  const result = getTraumaResult(resolvedPct, selected)
  const meterRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => {
      if (meterRef.current) meterRef.current.style.width = resolvedPct + '%'
    }, 200)
    return () => clearTimeout(t)
  }, [resolvedPct])

  return (
    <div className="glass-card rounded-[24px] px-7 py-10 sm:px-11 sm:py-14 text-center" style={{ paddingBottom: 80 }}>
      <div className="text-[60px] mb-4">{result.icon}</div>
      <div className="font-serif text-[1.8rem] sm:text-[2rem] font-bold mb-2.5 leading-[1.2]">{result.title}</div>
      <div className="text-[#7e79a0] text-[0.87rem] leading-[1.6] mb-7">{result.subtitle}</div>
      <div className="mb-7">
        <div className="flex justify-between text-xs font-semibold mb-2.5">
          <span style={{ color: '#2ec4b6' }}>🌿 Resolved</span>
          <span style={{ color: '#f472b6' }}>🔒 Unresolved</span>
        </div>
        <div className="h-2.5 bg-white/6 rounded-full overflow-hidden">
          <div ref={meterRef} className="meter-fill" style={{ width: '0%', background: 'linear-gradient(90deg, #2ec4b6, #55efc4)' }} />
        </div>
      </div>
      <div className="text-left mt-6 pt-6 border-t border-white/8">
        <div className="text-[0.68rem] uppercase tracking-[1.8px] text-white/25 font-bold mb-4">What Your Answers Reveal</div>
        {result.traits.map((t, i) => (
          <div key={i} className="flex items-start gap-3 mb-4 text-sm leading-[1.6] text-[#7e79a0]">
            <span className="text-base shrink-0 mt-0.5">{t.icon}</span>
            <span dangerouslySetInnerHTML={{ __html: t.text.replace(/<strong>/g, '<strong style="color:#f0ecfc;font-weight:600">') }} />
          </div>
        ))}
        <div className="mt-5 p-4 rounded-[14px] border border-white/8 text-[0.8rem] text-[#7e79a0] leading-[1.7]"
          style={{ background: 'rgba(255,255,255,0.03)' }}
          dangerouslySetInnerHTML={{ __html: result.extra }} />
      </div>
      <button onClick={() => goTo('hub')} className="mt-6 w-full sm:w-auto px-10 py-3.5 rounded-full border border-white/15 text-[#7e79a0] text-[0.92rem] font-medium transition-all hover:bg-white/5 active:scale-[0.98]">
        ← Back to Home
      </button>
    </div>
  )
}
