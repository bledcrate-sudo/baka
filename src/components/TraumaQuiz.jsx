import { useMemo, useRef } from 'react'

export default function TraumaQuiz({ goTo, state, setState }) {
  const { selected, q, totalResolved } = state
  if (!selected) return null
  const questions = selected.questions
  const question = questions[q]
  const shuffled = useMemo(() => [...question.answers].sort(() => Math.random() - 0.5), [q, selected?.id])
  const keys = ['A','B','C','D']
  const selectedRef = useRef(null)
  const pct = Math.round((q / questions.length) * 100)

  const pick = (answer) => {
    if (selectedRef.current) return
    selectedRef.current = answer
    setState(s => ({ ...s, totalResolved: s.totalResolved + answer.r }))
    setTimeout(() => {
      selectedRef.current = null
      if (q + 1 < questions.length) {
        setState(s => ({ ...s, q: s.q + 1 }))
      } else {
        goTo('trauma-result')
      }
    }, 400)
  }

  return (
    <div>
      <button onClick={() => goTo('trauma-type')} className="flex items-center gap-1.5 mb-3.5 px-5 py-2.5 rounded-full border border-white/10 text-[#7e79a0] text-sm font-medium transition-all hover:bg-white/5 active:scale-95">
        ‹ Change type
      </button>
      <div className="glass-card rounded-[24px] px-5 py-7 sm:px-9 sm:py-9" style={{ paddingBottom: 80 }}>
        <div className="mb-6">
          <div className="flex justify-between text-xs text-[#7e79a0] mb-2">
            <span>Question {q + 1} of {questions.length}</span>
            <span>{pct}%</span>
          </div>
          <div className="h-1 bg-white/7 rounded-full overflow-hidden">
            <div className="h-full rounded-full progress-bar-fill" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #2ec4b6, #55efc4)' }} />
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 bg-[rgba(46,196,182,0.08)] border border-[rgba(46,196,182,0.22)] rounded-full px-3 py-1 text-xs text-[#2ec4b6] font-semibold mb-4">
          {selected.emoji} {selected.label}
        </div>
        <div className="text-[0.68rem] text-[#2ec4b6] font-bold uppercase tracking-[1.8px] mb-3">Question {q + 1}</div>
        <div className="font-serif text-[1.3rem] sm:text-[1.42rem] leading-[1.5] font-semibold mb-1.5">{question.text}</div>
        {question.sub && <div className="text-[#7e79a0] text-[0.8rem] italic leading-[1.6] mb-5">{question.sub}</div>}
        <div className="flex flex-col gap-2.5 mt-5">
          {shuffled.map((a, i) => (
            <button key={i} onClick={() => pick(a)}
              className="flex items-center gap-3 px-4 py-3.5 rounded-[16px] text-left text-sm leading-[1.5] min-h-[54px] border border-white/8 transition-all hover:bg-white/6 hover:border-white/18 active:scale-[0.987]"
              style={{ background: 'rgba(255,255,255,0.04)', color: '#f0ecfc' }}>
              <span className="w-8 h-8 rounded-[10px] bg-white/6 flex items-center justify-center text-xs font-bold shrink-0">{keys[i]}</span>
              <span>{a.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
