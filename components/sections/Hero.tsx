'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const DensityCanvas = dynamic(() => import('@/components/viz/DensityCanvas'), {
  ssr: false,
})

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* Interactive canvas background */}
      <DensityCanvas />

      {/* Top-right label */}
      <div
        style={{
          position: 'absolute',
          top: '80px',
          right: '24px',
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: 'var(--text-muted)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        drag to explore · click to perturb
      </div>

      {/* Center overlay */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 24px',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            color: 'var(--gold-bright)',
            marginBottom: '24px',
          }}
        >
          Astrophysics · Dark Matter Research
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            fontFamily: 'var(--font-dm-serif), serif',
            fontSize: 'clamp(52px, 7vw, 100px)',
            fontWeight: 300,
            letterSpacing: '0.04em',
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}
        >
          Dimple Sarnaaik
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: 'var(--text-muted)',
            marginBottom: '28px',
          }}
        >
          5th Year PhD Candidate · University of Southern California
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            fontFamily: 'var(--font-dm-serif), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: 'var(--text-secondary)',
            marginBottom: '48px',
          }}
        >
          "Searching for the invisible scaffolding of the universe."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            pointerEvents: 'all',
          }}
        >
          <button
            onClick={() => scrollToSection('research')}
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--bg-primary)',
              backgroundColor: 'var(--gold-bright)',
              border: '1px solid var(--gold-bright)',
              padding: '12px 28px',
              cursor: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
                'var(--gold-mid)'
              ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                'var(--gold-mid)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
                'var(--gold-bright)'
              ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                'var(--gold-bright)'
            }}
          >
            View Research
          </button>

          <a
            href="/cv.pdf"
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--gold-bright)',
              backgroundColor: 'transparent',
              border: '1px solid var(--gold-dim)',
              padding: '12px 28px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                'var(--gold-bright)'
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                'rgba(91, 163, 201, 0.08)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                'var(--gold-dim)'
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                'transparent'
            }}
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '40px',
            backgroundColor: 'var(--gold-dim)',
          }}
        />
        <div
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '8px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: 'var(--text-muted)',
          }}
        >
          scroll
        </div>
      </motion.div>
    </section>
  )
}
