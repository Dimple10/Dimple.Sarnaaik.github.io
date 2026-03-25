'use client'

import { useRef, useEffect } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

const NUM_PARTICLES = 280
const MAX_SPEED = 1.5
const MOUSE_RADIUS = 120
const GRID_CELL = 8

export default function DensityCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const rafRef = useRef<number>(0)
  const clickRef = useRef<{ x: number; y: number; time: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Resize
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const maxR = Math.min(canvas.width, canvas.height) * 0.42

      particlesRef.current = Array.from({ length: NUM_PARTICLES }, () => {
        const angle = Math.random() * Math.PI * 2
        const r = maxR * Math.pow(Math.random(), 0.4)
        return {
          x: cx + r * Math.cos(angle),
          y: cy + r * Math.sin(angle),
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
        }
      })
    }

    resize()
    window.addEventListener('resize', resize)

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true }
    }
    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }
    const handleClick = (e: MouseEvent) => {
      clickRef.current = { x: e.clientX, y: e.clientY, time: performance.now() }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    canvas.addEventListener('click', handleClick)

    const draw = (timestamp: number) => {
      const w = canvas.width
      const h = canvas.height
      const cx = w / 2
      const cy = h / 2

      ctx.clearRect(0, 0, w, h)

      const particles = particlesRef.current
      const mouse = mouseRef.current
      const click = clickRef.current

      // Update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Gravity toward center
        const dx = cx - p.x
        const dy = cy - p.y
        const dist = Math.sqrt(dx * dx + dy * dy) + 1
        const ax = dx / (dist * dist * 0.1)
        const ay = dy / (dist * dist * 0.1)
        p.vx += ax * 0.001
        p.vy += ay * 0.001

        // Mouse attraction
        if (mouse.active) {
          const mx = mouse.x - p.x
          const my = mouse.y - p.y
          const md = Math.sqrt(mx * mx + my * my)
          if (md < MOUSE_RADIUS && md > 0) {
            p.vx += (mx / md) * 0.05
            p.vy += (my / md) * 0.05
          }
        }

        // Click repulsion burst
        if (click) {
          const age = timestamp - click.time
          if (age < 600) {
            const cdx = p.x - click.x
            const cdy = p.y - click.y
            const cd = Math.sqrt(cdx * cdx + cdy * cdy) + 1
            const wave = Math.sin((age / 600) * Math.PI)
            const force = (wave * 3.0) / (cd + 50)
            p.vx += (cdx / cd) * force
            p.vy += (cdy / cd) * force
          } else if (age > 600) {
            clickRef.current = null
          }
        }

        // Damping
        p.vx *= 0.99
        p.vy *= 0.99

        // Clamp speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > MAX_SPEED) {
          p.vx = (p.vx / speed) * MAX_SPEED
          p.vy = (p.vy / speed) * MAX_SPEED
        }

        p.x += p.vx
        p.y += p.vy

        // Wrap around edges
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10
      }

      // Render density field (downsampled grid)
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
            brightness += 1.0 / (d2 + 200)
          }
          brightness = Math.min(brightness * 3000, 1)

          if (brightness > 0.02) {
            ctx.fillStyle = `rgba(20, 90, 165, ${brightness * 0.45})`
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
        const centrality = Math.max(0, 1 - d / (Math.min(w, h) * 0.45))

        const r = 1.5 + centrality * 1.2
        const alpha = 0.4 + centrality * 0.45

        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(91, 163, 201, ${alpha})`
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      canvas.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  )
}
