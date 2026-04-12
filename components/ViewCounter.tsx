'use client'

import { useEffect, useState } from 'react'

// Free counter API — auto-creates namespace on first hit
const NAMESPACE = 'dimple-sarnaaik-portfolio'
const KEY = 'visits'
const BASE = `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}`

export default function ViewCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)
  const [keys, setKeys] = useState('')

  useEffect(() => {
    // Only increment once per browser session to avoid refresh inflation
    const alreadyCounted = sessionStorage.getItem('ds_page_counted')
    const url = alreadyCounted ? `${BASE}` : `${BASE}/up`

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setCount(data.count ?? null)
        if (!alreadyCounted) sessionStorage.setItem('ds_page_counted', '1')
      })
      .catch(() => {}) // fail silently if API is down
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
      <div
        style={{
          fontFamily: 'var(--font-dm-serif), serif',
          fontSize: '32px',
          color: 'var(--gold-bright)',
          lineHeight: 1,
        }}
      >
        {count !== null ? count.toLocaleString() : '—'}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '9px',
          color: 'var(--text-muted)',
          marginTop: '8px',
          letterSpacing: '1px',
        }}
      >
        click to dismiss · type &ldquo;views&rdquo; to toggle
      </div>
    </div>
  )
}
