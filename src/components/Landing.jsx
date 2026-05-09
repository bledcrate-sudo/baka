import { useEffect, useState } from 'react'

const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 0.7 + Math.random() * 1.6,
  delay: Math.random() * 5,
  dur: 2.5 + Math.random() * 3,
}))

function StarField({ side }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STARS.filter((_, i) => (side === 'left' ? i % 2 === 0 : i % 2 !== 0)).map(s => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            borderRadius: '50%',
            background: side === 'left' ? 'oklch(74% 0.15 284)' : 'oklch(62% 0.18 11)',
            animation: `twinkle ${s.dur}s ease-in-out infinite alternate`,
            animationDelay: `${s.delay}s`,
            boxShadow: side === 'left'
              ? `0 0 ${s.size * 3}px oklch(74% 0.15 284 / 0.6)`
              : `0 0 ${s.size * 3}px oklch(62% 0.18 11 / 0.6)`,
          }}
        />
      ))}
    </div>
  )
}

export default function Landing({ goTo }) {
  const [vis, setVis] = useState(false)
  const [hoverAI, setHoverAI] = useState(false)
  const [hoverQ, setHoverQ] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVis(true), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className="landing-root"
      style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column', zIndex: 10 }}
    >
      {/* Wordmark — absolute overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30,
        display: 'flex', justifyContent: 'center', padding: '26px 0',
        opacity: vis ? 1 : 0,
        transition: 'opacity 0.8s ease 0.1s',
        pointerEvents: 'none',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          fontFamily: 'Manrope, sans-serif',
          fontSize: '0.68rem', letterSpacing: '0.3em',
          color: 'oklch(52% 0.05 284)',
          textTransform: 'uppercase', fontWeight: 700,
          padding: '6px 16px', borderRadius: 100,
          border: '1px solid oklch(22% 0.028 284)',
          background: 'oklch(7% 0.018 284 / 0.85)',
          backdropFilter: 'blur(8px)',
        }}>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'oklch(70% 0.14 284)', display: 'inline-block', boxShadow: '0 0 5px oklch(70% 0.14 284 / 0.8)' }} />
          Shugi
        </div>
      </div>

      {/* Panels */}
      <div className="panels-row" style={{ display: 'flex', flex: 1 }}>

        {/* AI Panel */}
        <button
          className="landing-panel"
          onMouseEnter={() => setHoverAI(true)}
          onMouseLeave={() => setHoverAI(false)}
          onClick={() => { window.location.href = '/chat' }}
          style={{
            flex: 1,
            position: 'relative',
            border: 'none',
            cursor: 'pointer',
            background: hoverAI
              ? 'radial-gradient(ellipse 75% 70% at 15% 65%, oklch(22% 0.11 284 / 0.55) 0%, oklch(5.5% 0.018 284) 70%)'
              : 'radial-gradient(ellipse 65% 60% at 15% 65%, oklch(18% 0.09 284 / 0.35) 0%, oklch(5.5% 0.018 284) 70%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            padding: '0 52px 72px 52px',
            transition: 'background 0.65s ease',
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : 'translateX(-24px)',
            transitionProperty: 'background, opacity, transform',
            transitionDuration: '0.65s, 0.85s, 0.85s',
            overflow: 'hidden',
            textAlign: 'left',
          }}
        >
          <StarField side="left" />

          {/* Vertical divider — right edge */}
          <div className="panel-divider-v" style={{
            position: 'absolute', right: 0, top: '6%', bottom: '6%', width: 1,
            background: 'linear-gradient(to bottom, transparent, oklch(35% 0.06 284 / 0.4) 30%, oklch(35% 0.07 11 / 0.4) 70%, transparent)',
            zIndex: 2,
          }} />

          {/* Glow blob */}
          <div style={{
            position: 'absolute', left: '-60px', bottom: '-60px',
            width: 440, height: 440, borderRadius: '50%',
            background: 'radial-gradient(circle, oklch(20% 0.1 284 / 0.35), transparent 70%)',
            filter: 'blur(80px)',
            transform: hoverAI ? 'scale(1.3)' : 'scale(1)',
            transition: 'transform 0.8s ease',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: 360 }}>
            <div style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.6rem', letterSpacing: '0.25em',
              textTransform: 'uppercase', color: 'oklch(60% 0.1 284)',
              fontWeight: 700, marginBottom: 18,
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.7s ease 0.3s',
            }}>
              AI Companion
            </div>

            <div style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(3.2rem, 5.5vw, 5rem)',
              fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.025em',
              color: 'oklch(94% 0.008 284)',
              marginBottom: 20,
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(16px)',
              transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
            }}>
              Shugi AI
            </div>

            <div style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.86rem',
              color: 'oklch(45% 0.05 284)',
              lineHeight: 1.7, marginBottom: 32,
              fontWeight: 400,
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.8s ease 0.5s',
            }}>
              Talk freely about what you're carrying.<br />No judgment. No agenda.
            </div>

            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                color: hoverAI ? 'oklch(78% 0.15 284)' : 'oklch(65% 0.13 284)',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em',
                borderBottom: '1px solid oklch(65% 0.13 284 / 0.4)',
                paddingBottom: 3,
                transition: 'color 0.3s ease, opacity 0.8s ease',
                opacity: vis ? 1 : 0,
                transitionDelay: '0s, 0.65s',
              }}
            >
              Start talking
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <div style={{
              marginTop: 14,
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.67rem', color: 'oklch(32% 0.03 284)',
              letterSpacing: '0.04em',
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.8s ease 0.7s',
            }}>
              Free · No account needed
            </div>
          </div>
        </button>

        {/* Quiz Panel */}
        <button
          className="landing-panel"
          onMouseEnter={() => setHoverQ(true)}
          onMouseLeave={() => setHoverQ(false)}
          onClick={() => goTo('hub')}
          style={{
            flex: 1,
            position: 'relative',
            border: 'none',
            cursor: 'pointer',
            background: hoverQ
              ? 'radial-gradient(ellipse 75% 70% at 85% 35%, oklch(20% 0.1 11 / 0.55) 0%, oklch(5.5% 0.018 284) 70%)'
              : 'radial-gradient(ellipse 65% 60% at 85% 35%, oklch(16% 0.08 11 / 0.35) 0%, oklch(5.5% 0.018 284) 70%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            padding: '88px 52px 0 52px',
            transition: 'background 0.65s ease',
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : 'translateX(24px)',
            transitionProperty: 'background, opacity, transform',
            transitionDuration: '0.65s, 0.85s, 0.85s',
            transitionDelay: '0s, 0.15s, 0.15s',
            overflow: 'hidden',
            textAlign: 'right',
          }}
        >
          <StarField side="right" />

          {/* Glow blob */}
          <div style={{
            position: 'absolute', right: '-60px', top: '-60px',
            width: 440, height: 440, borderRadius: '50%',
            background: 'radial-gradient(circle, oklch(18% 0.1 11 / 0.35), transparent 70%)',
            filter: 'blur(80px)',
            transform: hoverQ ? 'scale(1.3)' : 'scale(1)',
            transition: 'transform 0.8s ease',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: 360 }}>
            <div style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.6rem', letterSpacing: '0.25em',
              textTransform: 'uppercase', color: 'oklch(58% 0.1 11)',
              fontWeight: 700, marginBottom: 18,
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.7s ease 0.45s',
            }}>
              20 Psychology Quizzes
            </div>

            <div style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(3.2rem, 5.5vw, 5rem)',
              fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.025em',
              color: 'oklch(94% 0.008 284)',
              marginBottom: 20,
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(16px)',
              transition: 'opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s',
            }}>
              Know{' '}
              <em style={{ color: 'oklch(67% 0.17 11)', fontStyle: 'italic', fontWeight: 600 }}>Yourself</em>
            </div>

            <div style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.86rem',
              color: 'oklch(45% 0.05 284)',
              lineHeight: 1.7, marginBottom: 32,
              fontWeight: 400,
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.8s ease 0.6s',
            }}>
              Validated clinical tools for love,<br />burnout, anxiety, and trauma.
            </div>

            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                color: hoverQ ? 'oklch(73% 0.17 11)' : 'oklch(60% 0.15 11)',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em',
                borderBottom: '1px solid oklch(60% 0.15 11 / 0.4)',
                paddingBottom: 3,
                transition: 'color 0.3s ease, opacity 0.8s ease',
                opacity: vis ? 1 : 0,
                transitionDelay: '0s, 0.75s',
              }}
            >
              Explore quizzes
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <div style={{
              marginTop: 14,
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.67rem', color: 'oklch(32% 0.03 284)',
              letterSpacing: '0.04em',
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.8s ease 0.8s',
            }}>
              Free · Love · Burnout · Anxiety · 17 more
            </div>
          </div>
        </button>
      </div>

      {/* Bottom signature */}
      <div style={{
        position: 'absolute', bottom: 20, left: 0, right: 0,
        textAlign: 'center',
        opacity: vis ? 0.18 : 0,
        transition: 'opacity 1.4s ease 0.8s',
        pointerEvents: 'none', zIndex: 20,
      }}>
        <span style={{
          fontFamily: 'Manrope, sans-serif', fontSize: '0.62rem',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'oklch(55% 0.03 284)',
        }}>— R</span>
      </div>

      <style>{`
        @keyframes twinkle {
          from { opacity: 0.12; }
          to { opacity: 0.9; }
        }
        @media (min-width: 700px) {
          .panels-row { flex-direction: row !important; }
          .panel-divider-v { display: block !important; }
        }
        @media (max-width: 699px) {
          .panels-row { flex-direction: column !important; }
          .panel-divider-v { display: none !important; }
          .landing-root {
            position: relative !important; inset: auto !important;
            min-height: 100svh !important; min-height: 100dvh !important;
            overflow-y: auto !important; -webkit-overflow-scrolling: touch !important;
          }
          .landing-panel {
            flex: none !important; min-height: 52svh !important; min-height: 52dvh !important;
            padding: 52px 28px 40px !important;
            justify-content: center !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
        }
        @media (max-width: 480px) {
          .landing-panel { min-height: 55svh !important; padding: 44px 24px 36px !important; }
        }
      `}</style>
    </div>
  )
}
