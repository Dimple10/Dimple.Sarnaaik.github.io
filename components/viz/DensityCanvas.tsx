'use client'

import { useRef, useEffect, useState } from 'react'

// ── types ─────────────────────────────────────────────────────────────────────

interface Star {
  x: number
  y: number
  size: number
  brightness: number
  color: string
  flickerSpeed: number
  flickerOffset: number
  bloom: boolean
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  brightness: number
}

// ── lensing math ──────────────────────────────────────────────────────────────

function applyLens(
  sx: number, sy: number,
  mx: number, my: number,
  lensStrength: number, lensR: number
): [number, number] {
  const dx = sx - mx, dy = sy - my
  const dist = Math.sqrt(dx * dx + dy * dy)
  if (dist < lensR && dist > 1) {
    const deflect = lensStrength * (1 - dist / lensR) / (dist + 8)
    return [sx + dx * deflect * 0.012, sy + dy * deflect * 0.012]
  }
  return [sx, sy]
}

// ── star generation ───────────────────────────────────────────────────────────

function generateStars(): Star[] {
  const colors = ['#fff8f0', '#ffe8c0', '#fff0d8', '#ffd080', '#ffffff']
  return Array.from({ length: 180 }, (_, i) => {
    const size = 0.8 + Math.random() * 2.7
    return {
      x: Math.random(),
      y: Math.random(),
      size,
      brightness: 0.4 + Math.random() * 0.6,
      color: colors[i % colors.length],
      flickerSpeed: 0.5 + Math.random() * 2.0,
      flickerOffset: Math.random() * Math.PI * 2,
      bloom: size > 2.2,
    }
  })
}

// ── particle generation ───────────────────────────────────────────────────────

function generateParticles(): Particle[] {
  const maxR = 0.48
  return Array.from({ length: 220 }, () => {
    const angle = Math.random() * Math.PI * 2
    const r = maxR * Math.pow(Math.random(), 0.4)
    return {
      x: 0.5 + r * Math.cos(angle),
      y: 0.5 + r * Math.sin(angle),
      vx: (Math.random() - 0.5) * 0.001,
      vy: (Math.random() - 0.5) * 0.001,
      brightness: 0.6 + Math.random() * 0.4,
    }
  })
}

// ── component ─────────────────────────────────────────────────────────────────

export default function DensityCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cvLeftRef = useRef<HTMLCanvasElement>(null)
  const cvRightRef = useRef<HTMLCanvasElement>(null)
  const cvLensRef = useRef<HTMLCanvasElement>(null)
  const divXRef = useRef<number>(0)
  const mouseRef = useRef({ x: -999, y: -999 })
  const lensRef = useRef({ strength: 70, radius: 150 })
  const rafRef = useRef<number>(0)
  const starsRef = useRef<Star[]>([])
  const particlesRef = useRef<Particle[]>([])

  const [lensMode, setLensMode] = useState<'weak' | 'strong'>('weak')
  const [divXState, setDivXState] = useState<number>(0)

  useEffect(() => {
    starsRef.current = generateStars()
    particlesRef.current = generateParticles()

    const cvLeft = cvLeftRef.current
    const cvRight = cvRightRef.current
    const cvLens = cvLensRef.current
    const container = containerRef.current
    if (!cvLeft || !cvRight || !cvLens || !container) return

    const ctx1 = cvLeft.getContext('2d')
    const ctx2 = cvRight.getContext('2d')
    const ctx3 = cvLens.getContext('2d')
    if (!ctx1 || !ctx2 || !ctx3) return

    const resize = () => {
      const w = container.offsetWidth
      const h = container.offsetHeight
      cvLeft.width = w; cvLeft.height = h
      cvRight.width = w; cvRight.height = h
      cvLens.width = w; cvLens.height = h
      if (divXRef.current === 0) {
        const initX = w * 0.46
        divXRef.current = initX
        setDivXState(initX)
      }
    }

    resize()
    window.addEventListener('resize', resize)

    // Mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    container.addEventListener('mousemove', handleMouseMove)

    // Divider drag
    let dragging = false
    const handleMouseDown = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const mx = e.clientX - rect.left
      if (Math.abs(mx - divXRef.current) < 18) {
        dragging = true
        e.preventDefault()
      }
    }
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!dragging) return
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const w = container.offsetWidth
      const clamped = Math.max(60, Math.min(w - 60, x))
      divXRef.current = clamped
      setDivXState(clamped)
    }
    const handleWindowMouseUp = () => { dragging = false }

    container.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleWindowMouseMove)
    window.addEventListener('mouseup', handleWindowMouseUp)

    const stars = starsRef.current
    const particles = particlesRef.current

    const draw = (t: number) => {
      const w = cvLeft.width
      const h = cvLeft.height
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const { strength: lensStrength, radius: lensR } = lensRef.current
      const divX = divXRef.current

      // === LAYER 1: cvLeft — visible matter, clipped to x < divX ===
      ctx1.clearRect(0, 0, w, h)
      ctx1.save()
      ctx1.beginPath()
      ctx1.rect(0, 0, divX, h)
      ctx1.clip()

      ctx1.fillStyle = '#0a0906'
      ctx1.fillRect(0, 0, divX, h)

      stars.forEach(star => {
        let sx = star.x * w, sy = star.y * h
        ;[sx, sy] = applyLens(sx, sy, mx, my, lensStrength, lensR)

        const flicker = 0.85 + 0.15 * Math.sin(t * 0.001 * star.flickerSpeed + star.flickerOffset)
        const alpha = star.brightness * flicker

        if (star.bloom) {
          const grad = ctx1.createRadialGradient(sx, sy, 0, sx, sy, star.size * 4)
          grad.addColorStop(0, `rgba(255,240,200,${alpha * 0.3})`)
          grad.addColorStop(1, 'rgba(255,240,200,0)')
          ctx1.fillStyle = grad
          ctx1.beginPath()
          ctx1.arc(sx, sy, star.size * 4, 0, Math.PI * 2)
          ctx1.fill()
        }

        ctx1.beginPath()
        ctx1.arc(sx, sy, star.size, 0, Math.PI * 2)
        ctx1.globalAlpha = alpha
        ctx1.fillStyle = star.color
        ctx1.fill()
        ctx1.globalAlpha = 1
      })
      ctx1.restore()

      // === LAYER 2: cvRight — dark matter, clipped to x >= divX ===
      ctx2.clearRect(0, 0, w, h)
      ctx2.save()
      ctx2.beginPath()
      ctx2.rect(divX, 0, w - divX, h)
      ctx2.clip()

      ctx2.fillStyle = '#060708'
      ctx2.fillRect(divX, 0, w - divX, h)

      // Pixel-level density heatmap
      const imgData = ctx2.createImageData(w, h)
      const data = imgData.data
      const step = 4
      for (let px = Math.floor(divX); px < w; px += step) {
        for (let py = 0; py < h; py += step) {
          let density = 0
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i]
            const pdx = px - p.x * w
            const pdy = py - p.y * h
            density += p.brightness * 65 / (pdx * pdx + pdy * pdy * 1.3 + 35)
          }
          density = Math.min(density, 1)
          if (density > 0.01) {
            const r = Math.floor(200 * density * 0.6)
            const g = Math.floor(100 * density * 0.4)
            const b = Math.floor(30 * density * 0.2)
            const a = Math.floor(density * 180)
            for (let ox = 0; ox < step && px + ox < w; ox++) {
              for (let oy = 0; oy < step && py + oy < h; oy++) {
                const idx = ((py + oy) * w + (px + ox)) * 4
                data[idx] = r; data[idx + 1] = g; data[idx + 2] = b; data[idx + 3] = a
              }
            }
          }
        }
      }
      ctx2.putImageData(imgData, 0, 0)

      // Update and draw particles
      particles.forEach(p => {
        const pdx = 0.5 - p.x, pdy = 0.5 - p.y
        const pdist = Math.sqrt(pdx * pdx + pdy * pdy) + 0.001
        p.vx += pdx / (pdist * pdist * 800)
        p.vy += pdy / (pdist * pdist * 800)
        p.vx *= 0.995; p.vy *= 0.995
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (spd > 0.002) { p.vx = p.vx / spd * 0.002; p.vy = p.vy / spd * 0.002 }
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x += 1; if (p.x > 1) p.x -= 1
        if (p.y < 0) p.y += 1; if (p.y > 1) p.y -= 1

        let psx = p.x * w, psy = p.y * h
        ;[psx, psy] = applyLens(psx, psy, mx, my, lensStrength, lensR)

        if (psx < divX) return

        const centrality = Math.max(0, 1 - Math.sqrt((p.x - 0.5) ** 2 + (p.y - 0.5) ** 2) / 0.48)
        const palpha = 0.35 + centrality * 0.5
        ctx2.beginPath()
        ctx2.arc(psx, psy, 1.5 + centrality, 0, Math.PI * 2)
        ctx2.fillStyle = `rgba(180, 140, 80, ${palpha})`
        ctx2.fill()
      })
      ctx2.restore()

      // === LAYER 3: cvLens — lens overlay ===
      ctx3.clearRect(0, 0, w, h)

      const nearDivider = Math.abs(mx - divX) < 20

      if (mx > 0 && !nearDivider) {
        const grad = ctx3.createRadialGradient(mx, my, 0, mx, my, lensR)
        grad.addColorStop(0, 'rgba(200,169,110,0.07)')
        grad.addColorStop(1, 'rgba(200,169,110,0)')
        ctx3.fillStyle = grad
        ctx3.beginPath()
        ctx3.arc(mx, my, lensR, 0, Math.PI * 2)
        ctx3.fill()

        // Einstein ring hint
        ctx3.beginPath()
        ctx3.arc(mx, my, lensR * 0.72, 0, Math.PI * 2)
        ctx3.strokeStyle = 'rgba(200,169,110,0.08)'
        ctx3.lineWidth = 1
        ctx3.stroke()

        // Cursor dot
        ctx3.beginPath()
        ctx3.arc(mx, my, 4, 0, Math.PI * 2)
        ctx3.fillStyle = 'rgba(200,169,110,0.9)'
        ctx3.fill()

        // Cursor ring
        ctx3.beginPath()
        ctx3.arc(mx, my, 9, 0, Math.PI * 2)
        ctx3.strokeStyle = 'rgba(200,169,110,0.25)'
        ctx3.lineWidth = 1
        ctx3.stroke()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleWindowMouseMove)
      window.removeEventListener('mouseup', handleWindowMouseUp)
    }
  }, [])

  const canvasStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    display: 'block',
  }

  const btnBase: React.CSSProperties = {
    fontFamily: 'monospace',
    fontSize: 9,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    padding: '5px 12px',
    border: '1px solid rgba(200,169,110,0.25)',
    background: 'transparent',
    color: 'rgba(200,169,110,0.5)',
    cursor: 'pointer',
  }

  const btnActive: React.CSSProperties = {
    ...btnBase,
    borderColor: 'rgba(200,169,110,0.6)',
    backgroundColor: 'rgba(200,169,110,0.08)',
    color: 'rgba(200,169,110,0.9)',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    fontSize: '9px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'rgba(200,169,110,0.27)',
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Layer 1: visible matter */}
      <canvas ref={cvLeftRef} style={canvasStyle} />
      {/* Layer 2: dark matter */}
      <canvas ref={cvRightRef} style={canvasStyle} />
      {/* Layer 3: lens overlay */}
      <canvas ref={cvLensRef} style={canvasStyle} />

      {/* Labels */}
      <div style={{ position: 'absolute', top: 16, left: 12, zIndex: 4, pointerEvents: 'none', ...labelStyle }}>
        visible matter
      </div>
      <div style={{ position: 'absolute', top: 16, right: 12, zIndex: 4, pointerEvents: 'none', ...labelStyle }}>
        dark matter
      </div>

      {/* Divider */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: divXState,
        width: 1,
        height: '100%',
        backgroundColor: 'rgba(200,169,110,0.25)',
        pointerEvents: 'none',
        zIndex: 3,
      }}>
        {/* Draggable handle */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 28,
            height: 28,
            borderRadius: 14,
            border: '1px solid rgba(200,169,110,0.4)',
            background: 'rgba(10,9,8,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'ew-resize',
            fontSize: 10,
            color: 'rgba(200,169,110,0.6)',
            pointerEvents: 'auto',
          }}
        >
          ⟺
        </div>
      </div>

      {/* Control buttons */}
      <div style={{
        position: 'absolute',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 8,
        zIndex: 5,
      }}>
        <button
          style={lensMode === 'weak' ? btnActive : btnBase}
          onClick={() => { lensRef.current = { strength: 70, radius: 150 }; setLensMode('weak') }}
        >
          weak lens
        </button>
        <button
          style={lensMode === 'strong' ? btnActive : btnBase}
          onClick={() => { lensRef.current = { strength: 160, radius: 200 }; setLensMode('strong') }}
        >
          strong lens
        </button>
        <button
          style={btnBase}
          onClick={() => {
            if (containerRef.current) {
              const x = containerRef.current.offsetWidth * 0.46
              divXRef.current = x
              setDivXState(x)
            }
          }}
        >
          reset
        </button>
      </div>
    </div>
  )
}
