import { useMemo, useRef, useState } from 'react'
import { loveQuestions } from '../data/loveQuiz'
import BackButton from './BackButton'

export default function LoveQuiz({ goTo, state, setState }) {
  const { q, totalLove, totalAttach } = state
  const question = loveQuestions[q]
  const shuffled = useMemo(() => [...question.answers].sort(() => Math.random() - 0.5), [q])
  const keys = ['A','B','C','D']
  const selectedRef = useRef(null)
  const history = useRef([])
  const [canUndo, setCanUndo] = useState(false)

  const pick = (answer) => {
    if (selectedRef.current) return
    history.current.push({ q, totalLove, totalAttach })
    setCanUndo(true)
    selectedRef.current = answer
    setState(s => ({ ...s, totalLove: s.totalLove + answer.love, totalAttach: s.totalAttach + answer.attach }))
    setTimeout(() => {
      selectedRef.current = null
      if (q + 1 < loveQuestions.length) {
        setState(s => ({ ...s, q: s.q + 1 }))
      } else {
        goTo('result')
      }
    }, 400)
  }

  const undo = () => {
    if (selectedRef.current) return
    if (history.current.length === 0) return
    const prev = history.current.pop()
    setState(() => prev)
    setCanUndo(history.current.length > 0)
  }

  const pct = Math.round(((q + 1) / loveQuestions.length) * 100)

  return (
    <div>
      <BackButton onClick={() => goTo('hub')} />
      <div className="glass-card rounded-[24px] px-5 py-7 sm:px-9 sm:py-9">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-[#7e79a0] mb-2">
          <span>Question {q + 1} of {loveQuestions.length}</span>
          <span>{pct}%</span>
        </div>
        <div className="h-1 bg-white/7 rounded-full overflow-hidden">
          <div className="h-full rounded-full progress-bar-fill" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #e8607a, #9b8ff5)' }} />
        </div>
      </div>
      {canUndo && (
        <button onClick={undo}
          className="flex items-center gap-1.5 text-[0.72rem] text-[#7e79a0] hover:text-white/70 transition-colors mb-4 active:scale-95"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 14L4 9l5-5"/><path d="M4 9h10a7 7 0 0 1 0 14h-1"/>
          </svg>
          Undo last answer
        </button>
      )}
      <div className="text-[0.68rem] text-[#f59e0b] font-bold uppercase tracking-[1.8px] mb-3">Question {q + 1}</div>
      <div className="font-serif text-[1.3rem] sm:text-[1.42rem] leading-[1.5] font-semibold mb-1.5">{question.text}</div>
      {question.sub && <div className="text-[#7e79a0] text-[0.8rem] italic leading-[1.6] mb-5">{question.sub}</div>}
      <div className="flex flex-col gap-2.5 mt-5">
        {shuffled.map((a, i) => (
          <button key={i} onClick={() => pick(a)}
            className="flex items-center gap-3 px-4 py-3.5 rounded-[16px] text-left text-sm leading-[1.5] min-h-[54px] border border-white/8 transition-all hover:bg-white/6 hover:border-white/18 active:scale-[0.987]"
            style={{ background: 'rgba(255,255,255,0.04)', fontFamily: 'Manrope, sans-serif', color: '#f0ecfc' }}>
            <span className="w-8 h-8 rounded-[10px] bg-white/6 flex items-center justify-center text-xs font-bold shrink-0">{keys[i]}</span>
            <span>{a.text}</span>
          </button>
        ))}
      </div>
    </div>
    </div>
  )
}
