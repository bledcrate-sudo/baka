import { useEffect, useState } from 'react'

const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 0.8 + Math.random() * 1.8,
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

function Panel({ side, onClick, hover, setHover, vis, label, title, titleAccent, description, cta, trust, delay = 0 }) {
  const isLeft = side === 'left'
  const accent = isLeft ? 'rgba(168,161,248,' : 'rgba(232,96,122,'

  return (
    <button
      className="landing-panel"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        flex: 1,
        position: 'relative',
        border: 'none',
        cursor: 'pointer',
        background: hover
          ? `radial-gradient(ellipse at ${isLeft ? '30%' : '70%'} 50%, ${accent}0.22) 0%, rgba(10,8,18,0.98) 65%)`
          : `radial-gradient(ellipse at ${isLeft ? '30%' : '70%'} 50%, ${accent}0.09) 0%, rgba(10,8,18,0.98) 65%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 40px',
        transition: 'background 0.5s ease',
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : `translateX(${isLeft ? '-20px' : '20px'})`,
        transitionProperty: 'background, opacity, transform',
        transitionDuration: `0.5s, 0.8s, 0.8s`,
        transitionDelay: `0s, ${delay}s, ${delay}s`,
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <StarField side={side} />

      {/* Vertical divider on right edge of left panel */}
      {isLeft && (
        <div className="panel-divider-v" style={{
          position: 'absolute', right: 0, top: '8%', bottom: '8%', width: 1,
          background: 'linear-gradient(to bottom, transparent, rgba(168,161,248,0.3) 35%, rgba(232,96,122,0.3) 65%, transparent)',
          zIndex: 2,
        }} />
      )}

      {/* Glow blob */}
      <div style={{
        position: 'absolute',
        left: isLeft ? '20%' : 'auto',
        right: isLeft ? 'auto' : '20%',
        top: '20%',
        width: 380, height: 380, borderRadius: '50%',
        background: `radial-gradient(circle, ${accent}0.2), transparent 70%)`,
        filter: 'blur(80px)',
        transform: hover ? 'scale(1.35)' : 'scale(1)',
        transition: 'transform 0.8s ease',
        pointerEvents: 'none',
      }} />

      {/* Content — fixed 300px wide, centered */}
      <div style={{ position: 'relative', zIndex: 2, width: '300px', maxWidth: 'calc(100% - 32px)' }}>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '0.6rem', letterSpacing: '0.25em',
          textTransform: 'uppercase', color: `${accent}0.5)`,
          fontWeight: 700, marginBottom: 20,
          opacity: vis ? 1 : 0,
          transition: `opacity 0.7s ease ${delay + 0.25}s`,
        }}>
          {label}
        </div>

        <div style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(2.6rem, 4vw, 3.6rem)',
          fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em',
          color: 'rgba(240,236,252,0.96)',
          marginBottom: 18,
          opacity: vis ? 1 : 0,
          transform: vis ? 'none' : 'translateY(14px)',
          transition: `opacity 0.9s ease ${delay + 0.15}s, transform 0.9s ease ${delay + 0.15}s`,
        }}>
          {title}
          {titleAccent && (
            <em style={{ color: isLeft ? 'rgba(168,161,248,0.9)' : 'rgba(232,96,122,0.9)', fontStyle: 'italic' }}>
              {titleAccent}
            </em>
          )}
        </div>

        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '0.85rem',
          color: `${accent}0.45)`,
          lineHeight: 1.7, marginBottom: 28,
          fontWeight: 400,
          opacity: vis ? 1 : 0,
          transition: `opacity 0.8s ease ${delay + 0.4}s`,
        }}>
          {description}
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 9,
          color: hover ? `${accent}0.95)` : `${accent}0.65)`,
          fontFamily: 'Manrope, sans-serif',
          fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em',
          borderBottom: `1px solid ${accent}0.3)`,
          paddingBottom: 3,
          transition: `color 0.25s ease`,
          opacity: vis ? 1 : 0,
          // separate opacity transition
          ...(vis ? {} : {}),
        }}>
          <span style={{
            opacity: vis ? 1 : 0,
            transition: `opacity 0.8s ease ${delay + 0.55}s`,
            display: 'inline-flex', alignItems: 'center', gap: 9,
          }}>
            {cta}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>

        <div style={{
          marginTop: 14, fontFamily: 'Manrope, sans-serif',
          fontSize: '0.66rem', color: 'rgba(255,255,255,0.18)',
          letterSpacing: '0.04em',
          opacity: vis ? 1 : 0, transition: `opacity 0.8s ease ${delay + 0.65}s`,
        }}>
          {trust}
        </div>
      </div>
    </button>
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
        opacity: vis ? 1 : 0, transition: 'opacity 0.8s ease',
        pointerEvents: 'none',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          fontFamily: 'Manrope, sans-serif',
          fontSize: '0.68rem', letterSpacing: '0.3em',
          color: 'rgba(168,161,248,0.5)',
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

      {/* Panels */}
      <div className="panels-row" style={{ display: 'flex', flex: 1 }}>
        <Panel
          side="left"
          onClick={() => { window.location.href = '/chat' }}
          hover={hoverAI}
          setHover={setHoverAI}
          vis={vis}
          label="AI Companion"
          title="Shugi AI"
          description={<>Talk freely about what you're carrying.<br />No judgment. No agenda.</>}
          cta="Start talking"
          trust="Free · No account needed"
          delay={0}
        />
        <Panel
          side="right"
          onClick={() => goTo('hub')}
          hover={hoverQ}
          setHover={setHoverQ}
          vis={vis}
          label="20 Psychology Quizzes"
          title="Know "
          titleAccent="Yourself"
          description={<>Validated clinical tools for love,<br />burnout, anxiety, and trauma.</>}
          cta="Explore quizzes"
          trust="Free · Love · Burnout · Anxiety · 17 more"
          delay={0.1}
        />
      </div>

      {/* Bottom signature */}
      <div style={{
        position: 'absolute', bottom: 18, left: 0, right: 0,
        textAlign: 'center', opacity: vis ? 0.2 : 0,
        transition: 'opacity 1.4s ease 0.8s',
        pointerEvents: 'none', zIndex: 20,
      }}>
        <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>— R</span>
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
          }
          .landing-panel {
            flex: none !important; min-height: 52svh !important;
            padding: 48px 24px !important;
          }
        }
      `}</style>
    </div>
  )
}
