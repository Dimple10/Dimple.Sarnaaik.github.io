'use client'

import { useRef, useEffect, useState } from 'react'

const AXES = [
  { label: 'Gravitational /\nAstrophysical Probes', level: 0.85 },
  { label: 'Theory &\nModel Building', level: 0.7 },
  { label: 'Simulations\n(N-body / Hydro)', level: 0.75 },
]

const SIZE = 300
const CX = SIZE / 2
const CY = SIZE / 2
const MAX_R = 105
const GRIDLINES = [0.25, 0.5, 0.75, 1.0]

function polarToCart(angle: number, r: number) {
  return {
    x: CX + r * Math.cos(angle - Math.PI / 2),
    y: CY + r * Math.sin(angle - Math.PI / 2),
  }
}

export default function TechniquesRadar() {
  const [scale, setScale] = useState(1.0)
  const rafRef = useRef<number>(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = (t: number) => {
      if (!startRef.current) startRef.current = t
      const elapsed = (t - startRef.current) / 3000
      const s = 0.98 + 0.02 * (0.5 + 0.5 * Math.sin(elapsed * Math.PI * 2))
      setScale(s)
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const n = AXES.length
  const angles = AXES.map((_, i) => (i * Math.PI * 2) / n)

  // Polygon points
  const polyPoints = AXES.map((ax, i) => polarToCart(angles[i], ax.level * MAX_R))
  const polyStr = polyPoints.map((p) => `${p.x},${p.y}`).join(' ')

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: 'var(--gold-bright)',
          marginBottom: '4px',
        }}
      >
        Techniques
      </div>
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ overflow: 'visible' }}
      >
        {/* Grid lines */}
        {GRIDLINES.map((level) => {
          const pts = angles
            .map((a) => polarToCart(a, level * MAX_R))
            .map((p) => `${p.x},${p.y}`)
            .join(' ')
          return (
            <polygon
              key={level}
              points={pts}
              fill="none"
              stroke="var(--border)"
              strokeWidth="1"
              opacity={0.7}
            />
          )
        })}

        {/* Axes */}
        {angles.map((a, i) => {
          const end = polarToCart(a, MAX_R)
          return (
            <line
              key={i}
              x1={CX}
              y1={CY}
              x2={end.x}
              y2={end.y}
              stroke="var(--border)"
              strokeWidth="1"
              opacity={0.5}
            />
          )
        })}

        {/* Filled polygon */}
        <g
          style={{
            transform: `scale(${scale})`,
            transformOrigin: `${CX}px ${CY}px`,
          }}
        >
          <polygon
            points={polyStr}
            fill="rgba(200, 169, 110, 0.15)"
            stroke="var(--gold-mid)"
            strokeWidth="1.5"
          />
          {/* Level dots */}
          {AXES.map((ax, i) => {
            const pt = polarToCart(angles[i], ax.level * MAX_R)
            return (
              <circle
                key={i}
                cx={pt.x}
                cy={pt.y}
                r={4}
                fill="var(--gold-bright)"
                opacity={0.9}
              />
            )
          })}
        </g>

        {/* Labels */}
        {AXES.map((ax, i) => {
          const labelR = MAX_R + 28
          const pt = polarToCart(angles[i], labelR)
          const lines = ax.label.split('\n')

          return (
            <text
              key={i}
              x={pt.x}
              y={pt.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--text-secondary)"
              fontSize="9"
              fontFamily="var(--font-jetbrains), monospace"
              letterSpacing="1"
            >
              {lines.map((line, li) => (
                <tspan
                  key={li}
                  x={pt.x}
                  dy={li === 0 ? (lines.length > 1 ? '-7' : '0') : '14'}
                >
                  {line}
                </tspan>
              ))}
            </text>
          )
        })}

        {/* Center dot */}
        <circle cx={CX} cy={CY} r={3} fill="var(--gold-dim)" />
      </svg>
    </div>
  )
}
