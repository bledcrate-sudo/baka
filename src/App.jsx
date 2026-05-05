import { useState, useCallback } from 'react'
import Hub from './components/Hub'
import LoveIntro from './components/LoveIntro'
import LoveQuiz from './components/LoveQuiz'
import LoveResult from './components/LoveResult'
import TraumaTypeSelect from './components/TraumaTypeSelect'
import TraumaQuiz from './components/TraumaQuiz'
import TraumaResult from './components/TraumaResult'
import GenericIntro from './components/GenericIntro'
import GenericQuiz from './components/GenericQuiz'
import GenericResult from './components/GenericResult'
import BgOrbs from './components/BgOrbs'
import { genericQuizzes } from './data/genericQuizzes'

export default function App() {
  const [screen, setScreen] = useState('hub')
  const [loveState, setLoveState] = useState({ q: 0, totalLove: 0, totalAttach: 0 })
  const [traumaState, setTraumaState] = useState({ selected: null, q: 0, totalResolved: 0 })
  const [genericState, setGenericState] = useState({ quiz: null, q: 0, score: 0, scores: {}, result: null })

  const goTo = useCallback((s) => {
    setScreen(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const launchQuiz = useCallback((id) => {
    const quiz = genericQuizzes[id]
    document.documentElement.style.setProperty('--quiz-color', quiz.color)
    setGenericState({ quiz, q: 0, score: 0, scores: {}, result: null })
    goTo('generic-intro')
  }, [goTo])

  const screenMap = {
    hub: <Hub goTo={goTo} launchQuiz={launchQuiz} />,
    intro: <LoveIntro goTo={goTo} setLoveState={setLoveState} />,
    quiz: <LoveQuiz goTo={goTo} state={loveState} setState={setLoveState} />,
    result: <LoveResult goTo={goTo} state={loveState} />,
    'trauma-type': <TraumaTypeSelect goTo={goTo} setTraumaState={setTraumaState} />,
    'trauma-quiz': <TraumaQuiz goTo={goTo} state={traumaState} setState={setTraumaState} />,
    'trauma-result': <TraumaResult goTo={goTo} state={traumaState} />,
    'generic-intro': <GenericIntro goTo={goTo} state={genericState} setState={setGenericState} />,
    'generic-quiz': <GenericQuiz goTo={goTo} state={genericState} setState={setGenericState} />,
    'generic-result': <GenericResult goTo={goTo} state={genericState} />,
  }

  return (
    <>
      <BgOrbs />
      <div className="relative z-10 w-full max-w-[640px] mx-auto px-4 py-12 sm:px-6 sm:py-20">
        <div key={screen} className="animate-fade-up">
          {screenMap[screen]}
        </div>
      </div>
    </>
  )
}
