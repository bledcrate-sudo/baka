import { useEffect, useState } from 'react'

const STARS = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 0.7 + Math.random() * 1.8,
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
            background: side === 'left' ? 'rgba(168,161,248,0.9)' : 'rgba(232,96,122,0.9)',
            animation: `twinkle ${s.dur}s ease-in-out infinite alternate`,
            animationDelay: `${s.delay}s`,
            boxShadow: side === 'left'
              ? `0 0 ${s.size * 4}px rgba(168,161,248,0.7)`
              : `0 0 ${s.size * 4}px rgba(232,96,122,0.7)`,
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
      {/* Wordmark */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30,
        display: 'flex', justifyContent: 'center', padding: '24px 0',
        opacity: vis ? 1 : 0,
        transition: 'opacity 0.8s ease',
        pointerEvents: 'none',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          fontFamily: 'Manrope, sans-serif',
          fontSize: '0.68rem', letterSpacing: '0.3em',
          color: 'rgba(168,161,248,0.55)',
          textTransform: 'uppercase', fontWeight: 700,
          padding: '6px 16px', borderRadius: 100,
          border: '1px solid rgba(168,161,248,0.12)',
          background: 'rgba(10,8,18,0.7)',
          backdropFilter: 'blur(8px)',
        }}>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(168,161,248,0.8)', display: 'inline-block', boxShadow: '0 0 6px rgba(168,161,248,0.9)' }} />
          Shugi
        </div>
      </div>

      {/* Two panels */}
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
              ? 'radial-gradient(ellipse at 28% 55%, rgba(168,161,248,0.22) 0%, rgba(10,8,18,0.98) 65%)'
              : 'radial-gradient(ellipse at 28% 55%, rgba(168,161,248,0.10) 0%, rgba(10,8,18,0.98) 65%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 32px',
            transition: 'background 0.6s ease',
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : 'translateX(-20px)',
            transitionProperty: 'background, opacity, transform',
            transitionDuration: '0.6s, 0.8s, 0.8s',
            overflow: 'hidden',
            textAlign: 'left',
          }}
        >
          <StarField side="left" />

          {/* Vertical divider */}
          <div className="panel-divider-v" style={{
            position: 'absolute', right: 0, top: '8%', bottom: '8%', width: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(168,161,248,0.3) 35%, rgba(232,96,122,0.3) 65%, transparent)',
            zIndex: 2,
          }} />

          {/* Glow blob */}
          <div style={{
            position: 'absolute', left: '10%', top: '25%',
            width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,161,248,0.18), transparent 70%)',
            filter: 'blur(80px)',
            transform: hoverAI ? 'scale(1.35)' : 'scale(1)',
            transition: 'transform 0.8s ease',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: 340 }}>
            <div style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.6rem', letterSpacing: '0.25em',
              textTransform: 'uppercase', color: 'rgba(168,161,248,0.55)',
              fontWeight: 700, marginBottom: 20,
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.7s ease 0.25s',
            }}>
              AI Companion
            </div>

            <div style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2.8rem, 4.5vw, 4rem)',
              fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em',
              color: 'rgba(240,236,252,0.96)',
              marginBottom: 18,
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s',
            }}>
              Shugi AI
            </div>

            <div style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.87rem',
              color: 'rgba(168,161,248,0.5)',
              lineHeight: 1.7, marginBottom: 30,
              fontWeight: 400,
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.8s ease 0.4s',
            }}>
              Talk freely about what you're carrying.<br />No judgment. No agenda.
            </div>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              color: hoverAI ? 'rgba(168,161,248,0.95)' : 'rgba(168,161,248,0.65)',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em',
              borderBottom: '1px solid rgba(168,161,248,0.3)',
              paddingBottom: 3,
              transition: 'color 0.25s ease, opacity 0.8s ease',
              opacity: vis ? 1 : 0,
              transitionDelay: '0s, 0.55s',
            }}>
              Start talking
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <div style={{
              marginTop: 16, fontFamily: 'Manrope, sans-serif',
              fontSize: '0.67rem', color: 'rgba(255,255,255,0.18)',
              letterSpacing: '0.04em',
              opacity: vis ? 1 : 0, transition: 'opacity 0.8s ease 0.65s',
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
              ? 'radial-gradient(ellipse at 72% 45%, rgba(232,96,122,0.22) 0%, rgba(10,8,18,0.98) 65%)'
              : 'radial-gradient(ellipse at 72% 45%, rgba(232,96,122,0.10) 0%, rgba(10,8,18,0.98) 65%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 32px',
            transition: 'background 0.6s ease',
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : 'translateX(20px)',
            transitionProperty: 'background, opacity, transform',
            transitionDuration: '0.6s, 0.8s, 0.8s',
            transitionDelay: '0s, 0.12s, 0.12s',
            overflow: 'hidden',
            textAlign: 'left',
          }}
        >
          <StarField side="right" />

          {/* Glow blob */}
          <div style={{
            position: 'absolute', right: '10%', top: '20%',
            width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,96,122,0.18), transparent 70%)',
            filter: 'blur(80px)',
            transform: hoverQ ? 'scale(1.35)' : 'scale(1)',
            transition: 'transform 0.8s ease',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: 340 }}>
            <div style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.6rem', letterSpacing: '0.25em',
              textTransform: 'uppercase', color: 'rgba(232,96,122,0.55)',
              fontWeight: 700, marginBottom: 20,
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.7s ease 0.35s',
            }}>
              20 Psychology Quizzes
            </div>

            <div style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2.8rem, 4.5vw, 4rem)',
              fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em',
              color: 'rgba(240,236,252,0.96)',
              marginBottom: 18,
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s',
            }}>
              Know{' '}
              <em style={{ color: 'rgba(232,96,122,0.9)', fontStyle: 'italic', fontWeight: 600 }}>Yourself</em>
            </div>

            <div style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.87rem',
              color: 'rgba(232,96,122,0.5)',
              lineHeight: 1.7, marginBottom: 30,
              fontWeight: 400,
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.8s ease 0.5s',
            }}>
              Validated clinical tools for love,<br />burnout, anxiety, and trauma.
            </div>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              color: hoverQ ? 'rgba(232,96,122,0.95)' : 'rgba(232,96,122,0.65)',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em',
              borderBottom: '1px solid rgba(232,96,122,0.3)',
              paddingBottom: 3,
              transition: 'color 0.25s ease, opacity 0.8s ease',
              opacity: vis ? 1 : 0,
              transitionDelay: '0s, 0.65s',
            }}>
              Explore quizzes
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <div style={{
              marginTop: 16, fontFamily: 'Manrope, sans-serif',
              fontSize: '0.67rem', color: 'rgba(255,255,255,0.18)',
              letterSpacing: '0.04em',
              opacity: vis ? 1 : 0, transition: 'opacity 0.8s ease 0.75s',
            }}>
              Free · Love · Burnout · Anxiety · 17 more
            </div>
          </div>
        </button>
      </div>

      {/* Bottom signature */}
      <div style={{
        position: 'absolute', bottom: 18, left: 0, right: 0,
        textAlign: 'center', opacity: vis ? 0.2 : 0,
        transition: 'opacity 1.4s ease 0.8s',
        pointerEvents: 'none', zIndex: 20,
      }}>
        <span style={{
          fontFamily: 'Manrope, sans-serif', fontSize: '0.62rem',
          letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
        }}>— R</span>
      </div>

      <style>{`
        @keyframes twinkle {
          from { opacity: 0.15; }
          to { opacity: 1; }
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
            min-height: 100svh !important; overflow-y: auto !important;
            -webkit-overflow-scrolling: touch !important;
          }
          .landing-panel {
            flex: none !important; min-height: 52svh !important;
            padding: 48px 28px !important;
            align-items: flex-start !important; text-align: left !important;
          }
        }
        @media (max-width: 480px) {
          .landing-panel { padding: 40px 22px !important; min-height: 55svh !important; }
        }
      `}</style>
    </div>
  )
}
