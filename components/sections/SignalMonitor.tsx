'use client'

import { useEffect, useRef, useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'

// ── palette ───────────────────────────────────────────────────────────────────
const BG    = '#070706'
const SURF  = '#0e0d0b'
const GAP   = '#141410'
const GOLD  = '#c8a96e'
const MUTED = '#2a2820'
const SEC   = '#a09070'

// ── panel definitions ─────────────────────────────────────────────────────────
const PANELS = [
  { name: 'Rubin / LSST',   badge: 'live',       desc: 'rotating RA/Dec coords',                  accentRGB: [160, 180, 210] as const, noise: 0.07, freq: 0.28, spikeProb: 0.010, footerLabel: 'weak lensing shear γ',        initVal: '0.0312' },
  { name: 'JWST · NIRCam',  badge: 'live',       desc: 'Program 4521 · subhalo lensing',           accentRGB: [160, 180, 210] as const, noise: 0.04, freq: 0.16, spikeProb: 0.005, footerLabel: 'surface brightness Σ',        initVal: '0.841 e⁻/s' },
  { name: 'Chandra · ACIS', badge: 'processing', desc: '0.5–7 keV · Bullet Cluster field',         accentRGB: [200, 169, 110] as const, noise: 0.13, freq: 0.50, spikeProb: 0.025, footerLabel: 'X-ray counts',                initVal: '847 cts/ks' },
  { name: 'DES · DECam',    badge: 'live',       desc: 'Y6 · strong lens candidate catalog',       accentRGB: [160, 180, 210] as const, noise: 0.06, freq: 0.22, spikeProb: 0.008, footerLabel: 'lens candidates tonight',      initVal: '+3 confirmed' },
  { name: 'CMB-S4 · SPT',   badge: 'processing', desc: '150 GHz · lensing κ reconstruction',       accentRGB: [160, 180, 210] as const, noise: 0.03, freq: 0.10, spikeProb: 0.002, footerLabel: 'κ power spectrum',            initVal: 'ℓ = 200–2000' },
  { name: 'SAGA Survey',    badge: 'archive',    desc: 'Milky Way analogs · satellite census',      accentRGB: [170, 155, 110] as const, noise: 0.02, freq: 0.07, spikeProb: 0.001, footerLabel: 'satellite luminosity fn.',    initVal: '101 hosts · complete' },
] as const

type PanelBadge = 'live' | 'processing' | 'archive'

const RUBIN_COORDS = ['02h 31m / -89°', '04h 15m / -72°', '08h 44m / -43°', '11h 22m / -28°', '14h 08m / -61°']

// ── event log pool ────────────────────────────────────────────────────────────
type LogColor = 'hi' | 'gold' | 'muted'

const EVENT_POOL: Array<{ src: string; color: LogColor; msg: string }> = [
  { src: '[JWST]',    color: 'hi',   msg: 'New subhalo candidate detected · z = 0.43' },
  { src: '[Rubin]',   color: 'hi',   msg: 'Shear catalog updated · +2,841 sources' },
  { src: '[Chandra]', color: 'gold', msg: 'Bullet Cluster obs. complete · 240 ks exposure' },
  { src: '[DES]',     color: 'hi',   msg: 'Strong lens confirmed · grade A · ID 00441' },
  { src: '[CMB-S4]',  color: 'muted',msg: 'κ reconstruction patch 14 uploaded' },
  { src: '[SAGA]',    color: 'muted',msg: 'Host NGC 4258 satellite pass complete' },
  { src: '[Rubin]',   color: 'gold', msg: 'Shear excess flagged · σ = 3.1 · review queued' },
  { src: '[JWST]',    color: 'hi',   msg: 'Einstein ring resolved · arc width 0.6″' },
  { src: '[Chandra]', color: 'gold', msg: 'Off-axis point source · PBH candidate logged' },
  { src: '[DES]',     color: 'muted',msg: 'Seeing 0.72″ · photometric conditions nominal' },
  { src: '[System]',  color: 'muted',msg: 'Dark matter halo catalog v3.1 sync complete' },
]

const LOG_COLORS: Record<LogColor, string> = { hi: '#8a9870', gold: '#a08840', muted: MUTED }

// ── signal canvas ─────────────────────────────────────────────────────────────
function SignalCanvas({
  accentRGB, noise, freq, spikeProb,
}: {
  accentRGB: readonly [number, number, number]
  noise: number
  freq: number
  spikeProb: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bufRef = useRef<number[]>([])
  const tRef = useRef(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const W = canvas.width, H = canvas.height

    bufRef.current = Array.from({ length: W }, (_, i) => {
      const tt = i * freq * 0.1
      return 0.14 + Math.sin(tt) * 0.05 + Math.cos(tt * 0.37) * 0.03
    })

    const [r, g, b] = accentRGB

    const frame = () => {
      tRef.current += 1
      const t = tRef.current
      const buf = bufRef.current

      buf.shift()
      let v = 0.14 + Math.sin(t * freq * 0.08) * 0.05 + Math.cos(t * freq * 0.08 * 0.37) * 0.03 + (Math.random() - 0.5) * noise
      if (Math.random() < spikeProb) v += Math.random() * 0.5 + 0.25
      buf.push(Math.max(0.02, Math.min(0.97, v)))

      ctx.clearRect(0, 0, W, H)

      ctx.fillStyle = '#0c0b09'
      ctx.fillRect(0, 0, W, H)

      ctx.strokeStyle = '#0f0e0c'
      ctx.lineWidth = 0.5
      for (let gx = 0; gx < W; gx += 3) {
        ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke()
      }
      for (let gy = 0; gy < H; gy += 3) {
        ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke()
      }

      ctx.beginPath()
      ctx.moveTo(0, H)
      buf.forEach((val, x) => ctx.lineTo(x, H - val * H))
      ctx.lineTo(W, H)
      ctx.closePath()
      ctx.fillStyle = `rgba(${r},${g},${b},0.05)`
      ctx.fill()

      ctx.beginPath()
      buf.forEach((val, x) => x === 0 ? ctx.moveTo(x, H - val * H) : ctx.lineTo(x, H - val * H))
      ctx.strokeStyle = `rgba(${r},${g},${b},0.75)`
      ctx.lineWidth = 1.2
      ctx.stroke()

      ctx.strokeStyle = `rgba(${r},${g},${b},0.4)`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(W - 1, 0)
      ctx.lineTo(W - 1, H)
      ctx.stroke()

      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafRef.current)
  }, [accentRGB, noise, freq, spikeProb])

  return (
    <canvas
      ref={canvasRef}
      width={280}
      height={72}
      style={{ width: '100%', height: '72px', display: 'block' }}
    />
  )
}

// ── badge ─────────────────────────────────────────────────────────────────────
function Badge({ type }: { type: PanelBadge }) {
  const styles: Record<PanelBadge, { dot: string; text: string; border: string }> = {
    live:       { dot: '#4a7a4a', text: '#6a9a6a', border: '#1a2a1a' },
    processing: { dot: '#8a7a30', text: '#a09040', border: '#2a2010' },
    archive:    { dot: '#4a4a4a', text: '#6a6a6a', border: '#1a1a1a' },
  }
  const s = styles[type]
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      fontFamily: 'monospace', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase',
      color: s.text, border: `1px solid ${s.border}`, padding: '2px 7px', borderRadius: 2,
    }}>
      <span style={{
        width: 5, height: 5, borderRadius: '50%', backgroundColor: s.dot,
        animation: type === 'live' ? 'pulse-dot 2s ease-in-out infinite' : 'none',
      }} />
      {type}
    </span>
  )
}

// ── utc clock ─────────────────────────────────────────────────────────────────
function UTCClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toUTCString().slice(17, 25) + ' UTC')
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <span style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '2px', color: SEC }}>
      {time}
    </span>
  )
}

// ── main component ────────────────────────────────────────────────────────────
export default function SignalMonitor() {
  const [rubinCoord, setRubinCoord] = useState(0)
  const [liveVals, setLiveVals] = useState({
    gamma: '0.0312', sigma: '0.841', xray: '847', halos: 1847, tb: 2.41,
  })
  const [log, setLog] = useState<Array<{ ts: string; src: string; color: LogColor; msg: string }>>([])
  const eventIdxRef = useRef(0)

  useEffect(() => {
    const id = setInterval(() => setRubinCoord(c => (c + 1) % RUBIN_COORDS.length), 5000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setLiveVals(v => ({
        gamma: (0.0312 * (1 + (Math.random() - 0.5) * 0.08)).toFixed(4),
        sigma: (0.841 * (1 + (Math.random() - 0.5) * 0.04)).toFixed(3),
        xray: String(Math.round(847 * (1 + (Math.random() - 0.5) * 0.03))),
        halos: v.halos + Math.floor(Math.random() * 4) + 1,
        tb: +(v.tb + 0.01 + Math.random() * 0.03).toFixed(2),
      }))
    }, 2000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const addEvent = () => {
      const ev = EVENT_POOL[eventIdxRef.current % EVENT_POOL.length]
      eventIdxRef.current++
      const now = new Date()
      const ts = now.toUTCString().slice(17, 25)
      setLog(l => [{ ts, src: ev.src, color: ev.color, msg: ev.msg }, ...l].slice(0, 7))
    }
    addEvent()
    const id = setInterval(addEvent, 3400)
    return () => clearInterval(id)
  }, [])

  const monoStyle = (size = 9, color = MUTED): React.CSSProperties => ({
    fontFamily: 'monospace', fontSize: size, letterSpacing: '1.5px', color,
  })

  return (
    <section id="signal-monitor" style={{ backgroundColor: BG, borderTop: `1px solid ${GAP}` }}>
      <style>{`@keyframes pulse-dot{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>

      {/* ── section header ── */}
      <ScrollReveal>
        <div style={{
          padding: '40px 40px 32px', display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', flexWrap: 'wrap', gap: 16,
        }}>
          <div>
            <div style={{ ...monoStyle(10, GOLD), letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 10 }}>
              LIVE RESEARCH
            </div>
            <h2 style={{
              fontFamily: 'var(--font-dm-serif,serif)', fontSize: '30px', fontWeight: 300,
              color: '#f0e6c8', lineHeight: 1.1, margin: '0 0 8px',
            }}>
              Signal Monitor
            </h2>
            <div style={{ ...monoStyle(11, SEC), letterSpacing: '2px' }}>
              real-time feeds from surveys &amp; observatories
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontFamily: 'monospace', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase',
              color: '#6a9a6a', border: '1px solid #1a3020', padding: '4px 10px', borderRadius: 2,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%', backgroundColor: '#4a7a4a',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }} />
              4 active feeds
            </span>
            <UTCClock />
          </div>
        </div>
      </ScrollReveal>

      {/* ── 6-panel grid ── */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
        gap: '0.5px', backgroundColor: GAP, margin: '0 0 0.5px',
      }}>
        {PANELS.map((panel, i) => {
          const desc = i === 0 ? RUBIN_COORDS[rubinCoord] : panel.desc
          const [r, g, b] = panel.accentRGB
          const footerVal =
            i === 0 ? `γ = ${liveVals.gamma}`
            : i === 1 ? `Σ = ${liveVals.sigma} e⁻/s`
            : i === 2 ? `${liveVals.xray} cts/ks`
            : panel.initVal

          return (
            <ScrollReveal key={panel.name} delay={i * 0.08}>
              <div style={{ backgroundColor: SURF, padding: '16px 16px 0', display: 'flex', flexDirection: 'column' }}>
                {/* header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <span style={{
                    ...monoStyle(10, `rgb(${r},${g},${b})`),
                    letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600,
                  }}>
                    {panel.name}
                  </span>
                  <Badge type={panel.badge} />
                </div>
                <div style={{ ...monoStyle(9, MUTED), marginBottom: 12, letterSpacing: '1px' }}>{desc}</div>

                {/* canvas */}
                <SignalCanvas
                  accentRGB={panel.accentRGB}
                  noise={panel.noise}
                  freq={panel.freq}
                  spikeProb={panel.spikeProb}
                />

                {/* footer */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '8px 0 12px', borderTop: `0.5px solid ${GAP}`, marginTop: 8,
                }}>
                  <span style={monoStyle(8, MUTED)}>{panel.footerLabel}</span>
                  <span style={{ ...monoStyle(10, `rgba(${r},${g},${b},0.9)`), letterSpacing: '1px' }}>
                    {footerVal}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      {/* ── bottom row ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5px', backgroundColor: GAP }}>
        {/* Cosmological Constraints */}
        <div style={{ backgroundColor: SURF, padding: '20px 20px' }}>
          <div style={{ ...monoStyle(10, GOLD), letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 16 }}>
            Cosmological Constraints
          </div>
          {[
            { label: 'σ₈', val: '0.812 ± 0.009' },
            { label: 'Ωm', val: '0.311 ± 0.006' },
            { label: 'H₀', val: '67.4 ± 0.5 km/s/Mpc' },
          ].map(row => (
            <div key={row.label} style={{
              display: 'flex', justifyContent: 'space-between',
              borderBottom: `0.5px solid ${GAP}`, padding: '6px 0',
            }}>
              <span style={monoStyle(9, SEC)}>{row.label}</span>
              <span style={{ ...monoStyle(9, GOLD), letterSpacing: '1px' }}>{row.val}</span>
            </div>
          ))}
          {[
            { label: 'DM halo fits completed',    val: liveVals.halos.toLocaleString() },
            { label: 'Data ingested this session', val: liveVals.tb.toFixed(2) + ' TB' },
            { label: 'Anomalies flagged',          val: '2 pending review' },
            { label: 'Pipeline version',           val: 'v2.4.1 · nominal' },
          ].map(row => (
            <div key={row.label} style={{
              display: 'flex', justifyContent: 'space-between',
              borderBottom: `0.5px solid ${GAP}`, padding: '6px 0',
            }}>
              <span style={monoStyle(9, MUTED)}>{row.label}</span>
              <span style={monoStyle(9, SEC)}>{row.val}</span>
            </div>
          ))}
        </div>

        {/* Event Log */}
        <div style={{ backgroundColor: SURF, padding: '20px 20px' }}>
          <div style={{ ...monoStyle(10, GOLD), letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 16 }}>
            Event Log
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {log.map((ev, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '56px 72px 1fr',
                gap: 8, padding: '5px 0', borderBottom: `0.5px solid ${GAP}`, alignItems: 'start',
              }}>
                <span style={monoStyle(8, MUTED)}>{ev.ts}</span>
                <span style={{ ...monoStyle(8, LOG_COLORS[ev.color]), letterSpacing: '1px' }}>{ev.src}</span>
                <span style={monoStyle(8, SEC)}>{ev.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── disclaimer strip ── */}
      <div style={{
        borderTop: `0.5px solid ${GAP}`, padding: '14px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
      }}>
        <p style={{ ...monoStyle(9, '#1e1c18'), maxWidth: 680, lineHeight: 1.6, margin: 0 }}>
          Signal feeds are schematic representations of real survey instruments relevant to my research.
          Data streams are simulated for visualization — see my publications for actual results.
        </p>
        <a href="#research" style={{
          ...monoStyle(9, 'rgba(200,169,110,0.27)'),
          borderBottom: '0.5px solid rgba(200,169,110,0.13)', textDecoration: 'none', whiteSpace: 'nowrap',
        }}>
          View Research →
        </a>
      </div>
    </section>
  )
}
