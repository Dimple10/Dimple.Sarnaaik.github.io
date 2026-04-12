'use client'

import { useEffect, useState } from 'react'

// ---------------------------------------------------------------------------
// GoatCounter — free, privacy-friendly, accurate, CORS-enabled
// Setup (2 min): https://www.goatcounter.com/signup
//   1. Sign up and choose a site code (e.g. "dimple-sarnaaik")
//   2. In GoatCounter Settings → "Allow adding visitor counts to your site"
//      enable "Public access to visitor counts"
//   3. Update GOATCOUNTER_CODE below to your chosen code
// ---------------------------------------------------------------------------
const GOATCOUNTER_CODE = 'dimple-sarnaaik' // ← update this after signing up

export default function ViewCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)
  const [keys, setKeys] = useState('')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Fetch total hit count from GoatCounter's public counter API (CORS-enabled)
    fetch(`https://${GOATCOUNTER_CODE}.goatcounter.com/counter/%2F.json`)
      .then((r) => {
        if (!r.ok) throw new Error('not ok')
        return r.json()
      })
      .then((data) => {
        setCount(data.count ?? null)
        setReady(true)
      })
      .catch(() => {
        setReady(true) // still show panel, just with — value
      })
  }, [])

  useEffect(() => {
    // Secret reveal: type "views" anywhere (not in an input/textarea)
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      const next = (keys + e.key).slice(-5)
      setKeys(next)
      if (next === 'views') {
        setVisible((v) => !v)
        setKeys('')
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [keys])

  if (!visible) return null

  return (
    <div
      onClick={() => setVisible(false)}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9999,
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-accent)',
        padding: '16px 24px',
        cursor: 'pointer',
        userSelect: 'none',
        minWidth: '160px',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '9px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: 'var(--text-muted)',
          marginBottom: '6px',
        }}
      >
        Total Views
      </div>

      {!ready ? (
        <div style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '11px',
          color: 'var(--text-muted)',
          letterSpacing: '1px',
        }}>
          loading…
        </div>
      ) : count !== null ? (
        <div
          style={{
            fontFamily: 'var(--font-dm-serif), serif',
            fontSize: '32px',
            color: 'var(--gold-bright)',
            lineHeight: 1,
          }}
        >
          {count.toLocaleString()}
        </div>
      ) : (
        <div style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '10px',
          color: 'var(--text-muted)',
          lineHeight: 1.5,
          maxWidth: '180px',
        }}>
          Set up GoatCounter first —<br />
          goatcounter.com (free)
        </div>
      )}

      <div
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '9px',
          color: 'var(--text-muted)',
          marginTop: '10px',
          letterSpacing: '1px',
        }}
      >
        click to dismiss · type &ldquo;views&rdquo; to toggle
      </div>
    </div>
  )
}
