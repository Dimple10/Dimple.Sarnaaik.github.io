'use client'

import { useRef, useEffect } from 'react'

interface BannerParticle {
  x: number
  y: number
  angle: number
  radius: number
  speed: number
  eccentricity: number
  phase: number
}

const NUM_PARTICLES = 200
const GRID_CELL = 6

export default function NBodyBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<BannerParticle[]>([])
  const rafRef = useRef<number>(0)
  const tRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const init = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const maxR = Math.min(canvas.width * 0.45, canvas.height * 1.8)

      particlesRef.current = Array.from({ length: NUM_PARTICLES }, (_, i) => {
        const r = maxR * (0.1 + Math.pow(Math.random(), 0.5) * 0.9)
        const phase = Math.random() * Math.PI * 2
        const speed = (0.004 + Math.random() * 0.006) * (maxR / r) * 0.3
        const ecc = Math.random() * 0.35

        return {
          x: cx,
          y: cy,
          angle: phase,
          radius: r,
          speed,
          eccentricity: ecc,
          phase: Math.random() * Math.PI * 2,
        }
      })
    }

    const resize = () => {
      init()
    }

    init()
    window.addEventListener('resize', resize)

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      const cx = w / 2
      const cy = h / 2

      ctx.clearRect(0, 0, w, h)

      tRef.current += 1

      const particles = particlesRef.current

      // Update orbital positions
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.angle += p.speed

        // Elliptical orbit
        const a = p.radius
        const b = p.radius * (1 - p.eccentricity)
        p.x = cx + a * Math.cos(p.angle) * Math.cos(p.phase) - b * Math.sin(p.angle) * Math.sin(p.phase)
        p.y = cy + a * Math.cos(p.angle) * Math.sin(p.phase) + b * Math.sin(p.angle) * Math.cos(p.phase) * 0.35
      }

      // Density field
      const gridW = Math.ceil(w / GRID_CELL)
      const gridH = Math.ceil(h / GRID_CELL)

      for (let gx = 0; gx < gridW; gx++) {
        for (let gy = 0; gy < gridH; gy++) {
          const worldX = gx * GRID_CELL + GRID_CELL / 2
          const worldY = gy * GRID_CELL + GRID_CELL / 2

          let brightness = 0
          for (let i = 0; i < particles.length; i++) {
            const ddx = worldX - particles[i].x
            const ddy = worldY - particles[i].y
            const d2 = ddx * ddx + ddy * ddy
            brightness += 1.0 / (d2 + 150)
          }
          brightness = Math.min(brightness * 2500, 1)

          if (brightness > 0.02) {
            ctx.fillStyle = `rgba(200, 120, 30, ${brightness * 0.35})`
            ctx.fillRect(gx * GRID_CELL, gy * GRID_CELL, GRID_CELL, GRID_CELL)
          }
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = cx - p.x
        const dy = cy - p.y
        const d = Math.sqrt(dx * dx + dy * dy)
        const centrality = Math.max(0, 1 - d / (Math.min(w, h) * 0.8))
        const alpha = 0.3 + centrality * 0.5

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 169, 110, ${alpha})`
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '16px',
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '9px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: 'var(--gold-mid)',
          pointerEvents: 'none',
        }}
      >
        N-body dark matter halo simulation · live
      </div>
    </div>
  )
}
