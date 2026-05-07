import BackButton from './BackButton'

export default function GenericIntro({ goTo, state, setState }) {
  const { quiz } = state
  if (!quiz) return null

  const start = () => {
    const scores = {}
    if (quiz.type === 'multiaxis') {
      Object.keys(quiz.categories).forEach(k => scores[k] = 0)
    }
    setState(s => ({ ...s, q: 0, score: 0, scores, result: null }))
    goTo('generic-quiz')
  }

  return (
    <div>
      <BackButton onClick={() => goTo('hub')} />
      <div className="glass-card rounded-[24px] px-7 py-11 sm:px-11 sm:py-14 text-center" style={{ paddingBottom: 80 }}>
        <div className="text-[52px] mb-4">{quiz.icon}</div>
        <h2 className="font-serif text-[1.75rem] sm:text-[2rem] font-bold mb-3.5 leading-[1.2]" style={{ color: 'var(--quiz-color)' }}>
          {quiz.title}
        </h2>
        <div className="text-[#7e79a0] leading-[1.8] mb-8 text-sm" dangerouslySetInnerHTML={{ __html: quiz.descHtml.replace(/<strong>/g, '<strong style="color:rgba(240,236,252,0.9)">') }} />
        <button onClick={start}
          className="px-12 py-4 rounded-full font-semibold text-white text-base transition-all hover:opacity-90 hover:scale-[1.03] active:scale-[0.98] active:opacity-85"
          style={{ background: 'var(--quiz-color)', boxShadow: '0 4px 24px color-mix(in srgb, var(--quiz-color) 35%, transparent)' }}>
          Begin
        </button>
      </div>
    </div>
  )
}
