import { useMemo, useRef } from 'react'
import BackButton from './BackButton'

export default function GenericQuiz({ goTo, state, setState }) {
  const { quiz, q, score, scores } = state
  if (!quiz) return null
  const questions = quiz.questions
  const question = questions[q]
  const shuffled = useMemo(() => [...question.answers].sort(() => Math.random() - 0.5), [q, quiz.id])
  const keys = ['A','B','C','D']
  const selectedRef = useRef(null)
  const pct = Math.round((q / questions.length) * 100)

  const pick = (answer) => {
    if (selectedRef.current) return
    selectedRef.current = answer

    let newScore = score
    let newScores = { ...scores }
    if (quiz.type === 'multiaxis') {
      newScores[answer.cat] = (newScores[answer.cat] || 0) + 1
    } else {
      newScore = score + answer.score
    }

    setState(s => ({ ...s, score: newScore, scores: newScores }))

    setTimeout(() => {
      selectedRef.current = null
      if (q + 1 < questions.length) {
        setState(s => ({ ...s, q: s.q + 1 }))
      } else {
        // compute result
        let result
        if (quiz.type === 'multiaxis') {
          result = quiz.getResult(newScores)
        } else {
          const finalPct = Math.round((newScore / (questions.length * 3)) * 100)
          result = quiz.getResult(finalPct)
        }
        setState(s => ({ ...s, result }))
        goTo('generic-result')
      }
    }, 400)
  }

  return (
    <div>
      <BackButton onClick={() => goTo('hub')} />
      <div className="glass-card rounded-[24px] px-5 py-7 sm:px-9 sm:py-9" style={{ paddingBottom: 80 }}>
        <div className="mb-6">
          <div className="flex justify-between text-xs text-[#7e79a0] mb-2">
            <span>Question {q + 1} of {questions.length}</span>
            <span>{pct}%</span>
          </div>
          <div className="h-1 bg-white/7 rounded-full overflow-hidden">
            <div className="h-full rounded-full progress-bar-fill" style={{ width: `${pct}%`, background: 'var(--quiz-color)' }} />
          </div>
        </div>
        <div className="text-[0.68rem] font-bold uppercase tracking-[1.8px] mb-3" style={{ color: 'var(--quiz-color)' }}>Question {q + 1}</div>
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
