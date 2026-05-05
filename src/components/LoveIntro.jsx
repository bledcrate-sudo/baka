import BackButton from './BackButton'

export default function LoveIntro({ goTo, setLoveState }) {
  const start = () => {
    setLoveState({ q: 0, totalLove: 0, totalAttach: 0 })
    goTo('quiz')
  }
  return (
    <div>
      <BackButton onClick={() => goTo('hub')} />
      <div className="glass-card rounded-[24px] px-7 py-11 sm:px-11 sm:py-14 text-center" style={{ paddingBottom: 80 }}>
        <div className="text-[52px] mb-4">💗</div>
        <h1 className="font-serif text-[2rem] sm:text-[2.2rem] font-bold mb-4 leading-[1.2]"
          style={{ background: 'linear-gradient(135deg, #e8607a, #9b8ff5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Love or Attachment?
        </h1>
        <p className="text-[#7e79a0] leading-[1.8] mb-8 text-sm" dangerouslySetInnerHTML={{ __html: `Love and emotional attachment can feel strikingly similar, yet they come from very different places.<br/><br/>This quiz draws from <strong style="color:#f0ecfc">attachment theory</strong> (Bowlby &amp; Ainsworth), the <strong style="color:#f0ecfc">Triangular Theory of Love</strong> (Sternberg), and research on <strong style="color:#f0ecfc">emotional dependency</strong> to help you understand what you're truly feeling.<br/><br/><strong style="color:#f0ecfc">20 questions · ~3 minutes</strong>` }} />
        <button onClick={start}
          className="px-12 py-4 rounded-full font-semibold text-white text-base transition-all hover:shadow-[0_6px_32px_rgba(232,96,122,0.35)] active:scale-[0.98] active:opacity-85"
          style={{ background: 'linear-gradient(135deg, #e8607a, #c084fc)', boxShadow: '0 4px 24px rgba(232,96,122,0.25)' }}>
          Discover My Feelings
        </button>
      </div>
    </div>
  )
}
