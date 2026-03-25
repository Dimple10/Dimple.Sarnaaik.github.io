'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { useBreakpoint } from '@/hooks/useBreakpoint'

const STATS = [
  { label: 'University', value: 'USC' },
  { label: 'Advisors', value: 'Kris Pardo & Andrew Benson' },
  { label: 'Year', value: '5th Year PhD Candidate' },
  { label: 'Location', value: 'Los Angeles, CA' },
]

export default function About() {
  const { isMobile } = useBreakpoint()
  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 8vw, 120px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Starfield */}
      <div className="starfield" />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            01 · About
          </div>
        </ScrollReveal>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            marginBottom: '60px',
          }}
        >
          {/* Left: Photo */}
          <ScrollReveal delay={0.1}>
            <div
              style={{
                position: 'relative',
                maxWidth: isMobile ? '100%' : '320px',
                margin: isMobile ? '0 auto' : undefined,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '3 / 4',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement
                  if (img) img.style.transform = 'scale(1.02)'
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement
                  if (img) img.style.transform = 'scale(1)'
                }}
              >
                <Image
                  src="/Dimple.Sarnaaik.github.io/headshot.jpg"
                  alt="Dimple Sarnaaik"
                  fill
                  unoptimized
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transition: 'transform 0.4s ease',
                  }}
                />
              </div>

              {/* Gold accent border offset */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  right: '-8px',
                  width: '60%',
                  height: '60%',
                  border: '1px solid var(--gold-dim)',
                  pointerEvents: 'none',
                  zIndex: -1,
                }}
              />
            </div>
          </ScrollReveal>

          {/* Right: Bio */}
          <ScrollReveal delay={0.2}>
            <div style={{ paddingTop: '8px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-dm-serif), serif',
                  fontSize: 'clamp(30px, 3.5vw, 48px)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                  marginBottom: '28px',
                  letterSpacing: '0.02em',
                }}
              >
                Studying the dark<br />
                <span style={{ color: 'var(--gold-bright)' }}>side</span> of the universe
              </h2>

              <p
                style={{
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '20px',
                }}
              >
                I&apos;m a 5th year PhD candidate in the Department of Physics
                &amp; Astronomy at the University of Southern California. My
                research focuses on constraining dark matter models through
                astrophysical and computational methodologies — working at the
                intersection of N-body simulations, semi-analytic modeling, and
                observational forecasting.
              </p>

              <p
                style={{
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '20px',
                }}
              >
                My primary research is with{' '}
                <span style={{ color: 'var(--text-primary)' }}>
                  Dr. Andrew Benson
                </span>{' '}
                at Carnegie Observatories, where I develop and calibrate
                Galacticus — an open-source semi-analytic model of galaxy
                formation — to beyond-CDM dark matter models using MCMC
                sampling on large N-body simulation suites.
              </p>

              <p
                style={{
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '32px',
                }}
              >
                I also work with{' '}
                <span style={{ color: 'var(--text-primary)' }}>
                  Prof. Kris Pardo
                </span>{' '}
                at USC, building forward-modeling pipelines to forecast
                astrometric weak lensing signatures of dark matter subhalos in
                mock Nancy Grace Roman Space Telescope data.
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <a
                  href="mailto:sarnaaik@usc.edu"
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'var(--gold-bright)',
                    border: '1px solid var(--gold-dim)',
                    padding: '8px 16px',
                    textDecoration: 'none',
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
                  Email
                </a>

                <a
                  href="https://github.com/Dimple10"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-accent)',
                    padding: '8px 16px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color =
                      'var(--text-primary)'
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                      'var(--text-muted)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color =
                      'var(--text-secondary)'
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                      'var(--border-accent)'
                  }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stat cards */}
        <ScrollReveal delay={0.3} stagger>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1px',
              backgroundColor: 'var(--border)',
              border: '1px solid var(--border)',
              overflow: 'hidden',
            }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: '24px 20px',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.backgroundColor =
                    'rgba(91, 163, 201, 0.04)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.backgroundColor =
                    'var(--bg-surface)'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    color: 'var(--text-muted)',
                    marginBottom: '8px',
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-serif), serif',
                    fontSize: '16px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
