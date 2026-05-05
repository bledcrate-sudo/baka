import { useEffect, useRef } from 'react'

export default function BgOrbs() {
  const canvasRef = useRef(null)

  // Tiny rising particles on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = [
      'rgba(232,96,122,0.55)',
      'rgba(155,143,245,0.55)',
      'rgba(46,196,182,0.45)',
      'rgba(240,240,255,0.35)',
    ]

    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + Math.random() * window.innerHeight,
      r: 0.8 + Math.random() * 1.4,
      speed: 0.3 + Math.random() * 0.7,
      color: colors[Math.floor(Math.random() * colors.length)],
      drift: (Math.random() - 0.5) * 0.3,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.y -= p.speed
        p.x += p.drift
        if (p.y < -10) {
          p.y = canvas.height + 10
          p.x = Math.random() * canvas.width
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const orbs = [
    { size: 620, gradient: 'radial-gradient(circle, rgba(232,96,122,0.22), transparent 70%)', top: '-8%', left: '-12%', delay: '0s', dur: '22s' },
    { size: 520, gradient: 'radial-gradient(circle, rgba(155,143,245,0.18), transparent 70%)', bottom: '-8%', right: '-10%', delay: '-9s', dur: '26s' },
    { size: 360, gradient: 'radial-gradient(circle, rgba(46,196,182,0.13), transparent 70%)', top: '35%', right: '2%', delay: '-16s', dur: '30s' },
    { size: 280, gradient: 'radial-gradient(circle, rgba(245,158,11,0.10), transparent 70%)', top: '60%', left: '2%', delay: '-5s', dur: '18s' },
    { size: 200, gradient: 'radial-gradient(circle, rgba(168,161,248,0.12), transparent 70%)', top: '15%', left: '45%', delay: '-12s', dur: '24s' },
  ]

  return (
    <>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.6 }}
      />
      {/* Gradient orbs */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {orbs.map((orb, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: orb.size,
              height: orb.size,
              background: orb.gradient,
              filter: 'blur(100px)',
              borderRadius: '50%',
              animation: `drift ${orb.dur} ease-in-out infinite alternate`,
              animationDelay: orb.delay,
              top: orb.top,
              left: orb.left,
              right: orb.right,
              bottom: orb.bottom,
            }}
          />
        ))}
      </div>
    </>
  )
}
