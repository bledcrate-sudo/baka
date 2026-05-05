import BackButton from './BackButton'
import { traumaTypes } from '../data/traumaQuiz'

export default function TraumaTypeSelect({ goTo, setTraumaState }) {
  const start = (type) => {
    setTraumaState({ selected: type, q: 0, totalResolved: 0 })
    goTo('trauma-quiz')
  }
  return (
    <div>
      <BackButton onClick={() => goTo('hub')} />
      <div className="glass-card rounded-[24px] px-7 py-9 sm:px-11 sm:py-12 text-center">
        <div className="text-[52px] mb-4">🌿</div>
        <h2 className="font-serif text-[1.75rem] font-bold mb-2.5 leading-[1.2]"
          style={{ background: 'linear-gradient(135deg, #2ec4b6, #55efc4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Did I Resolve My Trauma?
        </h2>
        <p className="text-[#7e79a0] text-[0.86rem] leading-[1.7] mb-6">
          Healing is not linear — it looks different for everyone. Select the type of trauma you want to explore. Your questions will be tailored to that experience.<br/><br/>
          <strong className="text-white/80">12 questions · ~2 minutes</strong>
        </p>
        <div className="flex flex-col gap-2 text-left">
          {traumaTypes.map(t => (
            <button key={t.id} onClick={() => start(t)}
              className="flex items-center gap-3.5 px-4 py-4 min-h-[62px] rounded-[16px] border border-white/8 text-left w-full transition-all hover:bg-white/5 hover:border-[rgba(46,196,182,0.3)] active:scale-[0.985]"
              style={{ background: 'rgba(255,255,255,0.04)' }}>
              <span className="text-[1.5rem] shrink-0">{t.emoji}</span>
              <div>
                <div className="font-semibold text-[0.92rem]">{t.label}</div>
                <div className="text-[0.76rem] text-[#7e79a0] mt-0.5 leading-[1.35]">{t.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
