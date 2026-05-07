import { useEffect, useRef, useState } from 'react'

const STARS = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 0.8 + Math.random() * 2,
  delay: Math.random() * 4,
  dur: 2 + Math.random() * 3,
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
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10,
      }}
    >
      {/* Header */}
      <div
        className="landing-header"
        style={{
          flexShrink: 0,
          zIndex: 20,
          padding: '28px 36px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: vis ? 1 : 0,
          transform: vis ? 'translateY(0)' : 'translateY(-16px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
          background: 'radial-gradient(ellipse 100% 140% at 50% 10%, rgba(150,138,255,0.22) 0%, rgba(210,80,115,0.10) 50%, transparent 80%)',
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          {/* Brand pill */}
          <div className="landing-label" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            color: 'rgba(168,161,248,0.6)',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: 18,
            padding: '5px 14px',
            borderRadius: 100,
            border: '1px solid rgba(168,161,248,0.15)',
            background: 'rgba(168,161,248,0.05)',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(168,161,248,0.7)', display: 'inline-block', boxShadow: '0 0 6px rgba(168,161,248,0.8)' }} />
            Shugi
          </div>

          <div className="landing-title" style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            background: 'linear-gradient(135deg, #f0ecfc 0%, rgba(168,161,248,0.85) 45%, rgba(232,96,122,0.9) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 12,
            opacity: vis ? 1 : 0,
            transform: vis ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
          }}>
            Your mind deserves care.<br />Let healing begin.
          </div>

          <div className="landing-sub" style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(0.8rem, 1.5vw, 0.92rem)',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.04em',
            fontWeight: 400,
            fontStyle: 'italic',
            opacity: vis ? 1 : 0,
            transform: vis ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.9s ease 0.45s, transform 0.9s ease 0.45s',
          }}>
            Talk to someone who listens. Understand yourself better. One step at a time.
          </div>
        </div>
      </div>

      {/* Separator line between header and panels */}
      <div style={{
        height: 1,
        flexShrink: 0,
        background: 'linear-gradient(to right, transparent 0%, rgba(168,161,248,0.2) 30%, rgba(232,96,122,0.2) 70%, transparent 100%)',
        opacity: vis ? 1 : 0,
        transition: 'opacity 1s ease 0.5s',
        zIndex: 20,
      }} />

      {/* Two panels */}
      <div style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      }}
        className="panels-row"
      >
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
              ? 'radial-gradient(ellipse at 30% 50%, rgba(168,161,248,0.2) 0%, rgba(10,8,18,0.98) 65%)'
              : 'radial-gradient(ellipse at 30% 50%, rgba(168,161,248,0.09) 0%, rgba(10,8,18,0.98) 65%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 40px',
            transition: 'background 0.5s ease',
            opacity: vis ? 1 : 0,
            transform: vis ? 'translateX(0)' : 'translateX(-30px)',
            transitionProperty: 'background, opacity, transform',
            transitionDuration: '0.5s, 0.8s, 0.8s',
            transitionDelay: '0s, 0.1s, 0.1s',
            overflow: 'hidden',
          }}
        >
          <StarField side="left" />

          {/* Divider glow — right edge */}
          <div style={{
            position: 'absolute',
            right: 0,
            top: '8%',
            bottom: '8%',
            width: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(168,161,248,0.4) 35%, rgba(232,96,122,0.4) 65%, transparent)',
            zIndex: 2,
          }} className="hidden sm:block" />

          {/* Glow blob */}
          <div style={{
            position: 'absolute',
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,161,248,0.22), transparent 70%)',
            filter: 'blur(70px)',
            transform: hoverAI ? 'scale(1.35)' : 'scale(1)',
            transition: 'transform 0.7s ease',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 340 }}>
            {/* Emoji in glowing circle */}
            <div className="panel-icon" style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: hoverAI ? 'rgba(168,161,248,0.18)' : 'rgba(168,161,248,0.09)',
              border: '1px solid rgba(168,161,248,0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.2rem',
              marginBottom: 20,
              boxShadow: hoverAI ? '0 0 32px rgba(168,161,248,0.4), inset 0 0 20px rgba(168,161,248,0.08)' : '0 0 16px rgba(168,161,248,0.15)',
              transition: 'all 0.4s ease',
              transform: hoverAI ? 'scale(1.08)' : 'scale(1)',
            }}>
              🌙
            </div>

            {/* Label chip */}
            <div style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(168,161,248,0.5)',
              fontWeight: 700,
              marginBottom: 8,
            }}>AI Companion</div>

            <div className="panel-title" style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#f0ecfc',
              marginBottom: 12,
              letterSpacing: '-0.01em',
            }}>
              Shugi AI
            </div>

            <div className="panel-desc" style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.88rem',
              color: 'rgba(168,161,248,0.8)',
              lineHeight: 1.7,
              letterSpacing: '0.01em',
              marginBottom: 28,
            }}>
              Talk to an AI that thinks<br />deeply about you
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 28px',
              borderRadius: 100,
              border: '1px solid rgba(168,161,248,0.35)',
              background: hoverAI ? 'rgba(168,161,248,0.15)' : 'rgba(168,161,248,0.06)',
              color: 'rgba(168,161,248,0.95)',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              transform: hoverAI ? 'translateY(-2px)' : 'none',
              boxShadow: hoverAI ? '0 4px 20px rgba(168,161,248,0.2)' : 'none',
            }}>
              Enter
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            {/* Trust line */}
            <div style={{
              marginTop: 12,
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.2)',
              letterSpacing: '0.05em',
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
              ? 'radial-gradient(ellipse at 70% 50%, rgba(232,96,122,0.2) 0%, rgba(10,8,18,0.98) 65%)'
              : 'radial-gradient(ellipse at 70% 50%, rgba(232,96,122,0.09) 0%, rgba(10,8,18,0.98) 65%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 40px',
            transition: 'background 0.5s ease',
            opacity: vis ? 1 : 0,
            transform: vis ? 'translateX(0)' : 'translateX(30px)',
            transitionProperty: 'background, opacity, transform',
            transitionDuration: '0.5s, 0.8s, 0.8s',
            transitionDelay: '0s, 0.25s, 0.25s',
            overflow: 'hidden',
          }}
        >
          <StarField side="right" />

          {/* Glow blob */}
          <div style={{
            position: 'absolute',
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,96,122,0.22), transparent 70%)',
            filter: 'blur(70px)',
            transform: hoverQ ? 'scale(1.35)' : 'scale(1)',
            transition: 'transform 0.7s ease',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 340 }}>
            {/* Emoji in glowing circle */}
            <div className="panel-icon" style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: hoverQ ? 'rgba(232,96,122,0.18)' : 'rgba(232,96,122,0.09)',
              border: '1px solid rgba(232,96,122,0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.2rem',
              marginBottom: 20,
              boxShadow: hoverQ ? '0 0 32px rgba(232,96,122,0.4), inset 0 0 20px rgba(232,96,122,0.08)' : '0 0 16px rgba(232,96,122,0.15)',
              transition: 'all 0.4s ease',
              transform: hoverQ ? 'scale(1.08)' : 'scale(1)',
            }}>
              🪐
            </div>

            {/* Label chip */}
            <div style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(232,96,122,0.5)',
              fontWeight: 700,
              marginBottom: 8,
            }}>14 Quizzes</div>

            <div className="panel-title" style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#f0ecfc',
              marginBottom: 12,
              letterSpacing: '-0.01em',
            }}>
              Know Yourself
            </div>

            <div className="panel-desc" style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.88rem',
              color: 'rgba(232,96,122,0.8)',
              lineHeight: 1.7,
              letterSpacing: '0.01em',
              marginBottom: 28,
            }}>
              Discover your patterns through<br />guided psychology quizzes
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 28px',
              borderRadius: 100,
              border: '1px solid rgba(232,96,122,0.35)',
              background: hoverQ ? 'rgba(232,96,122,0.15)' : 'rgba(232,96,122,0.06)',
              color: 'rgba(232,96,122,0.95)',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              transform: hoverQ ? 'translateY(-2px)' : 'none',
              boxShadow: hoverQ ? '0 4px 20px rgba(232,96,122,0.2)' : 'none',
            }}>
              Explore
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            {/* Trust line */}
            <div style={{
              marginTop: 12,
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.2)',
              letterSpacing: '0.05em',
            }}>
              Free · Attachment · Depression · Anxiety
            </div>
          </div>
        </button>
      </div>

      {/* Bottom tagline */}
      <div style={{
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        textAlign: 'center',
        opacity: vis ? 0.25 : 0,
        transition: 'opacity 1.2s ease 0.6s',
        pointerEvents: 'none',
      }}>
        <span style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '0.65rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
        }}>
          — R
        </span>
      </div>

      <style>{`
        @keyframes twinkle {
          from { opacity: 0.15; }
          to { opacity: 1; }
        }
        @media (min-width: 640px) {
          .sm\\:flex-row { flex-direction: row !important; }
          .sm\\:block { display: block !important; }
        }
        .hidden { display: none; }
        @media (min-width: 700px) {
          .panels-row { flex-direction: row !important; }
        }
        @media (max-width: 699px) {
          .panels-row { flex-direction: column !important; }
        }
        @media (max-width: 639px) {
          .landing-header { padding: 16px 20px 20px !important; }
          .landing-title { font-size: clamp(1.5rem, 7vw, 2rem) !important; margin-bottom: 8px !important; }
          .landing-sub { font-size: 0.75rem !important; }
          .landing-label { font-size: 0.75rem !important; margin-bottom: 10px !important; }
          .landing-panel { padding: 28px 20px !important; }
          .panel-icon { width: 56px !important; height: 56px !important; font-size: 1.8rem !important; margin-bottom: 14px !important; }
          .panel-title { font-size: clamp(1.6rem, 8vw, 2.2rem) !important; }
          .panel-desc { font-size: 0.82rem !important; margin-bottom: 18px !important; }
        }
      `}</style>
    </div>
  )
}
