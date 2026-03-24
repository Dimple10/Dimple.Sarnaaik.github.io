'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { talks } from '@/content/talks'

const TYPE_COLORS: Record<string, string> = {
  Talk: 'var(--gold-bright)',
  Seminar: 'var(--gold-bright)',
  Poster: '#a8c8a0',
  Panelist: '#8ab4c8',
  Workshop: '#c8b090',
  Colloquium: '#c0a0c8',
}

export default function Talks() {
  return (
    <section
      id="talks"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 8vw, 120px)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <ScrollReveal>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            05 · Talks
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-dm-serif), serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '16px',
              letterSpacing: '0.02em',
            }}
          >
            Presentations
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '560px',
              marginBottom: '52px',
            }}
          >
            {/* TODO: Add a brief note about talks/presentation philosophy */}
            Seminars, conference talks, and posters presenting my research on
            dark matter at various venues.
          </p>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {talks.map((talk, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  padding: '28px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor =
                    'var(--border-accent)'
                  ;(e.currentTarget as HTMLDivElement).style.transform =
                    'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor =
                    'var(--border)'
                  ;(e.currentTarget as HTMLDivElement).style.transform =
                    'translateY(0)'
                }}
              >
                {/* Type badge */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontSize: '9px',
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      color: TYPE_COLORS[talk.type] ?? 'var(--text-muted)',
                      border: `1px solid ${TYPE_COLORS[talk.type] ?? 'var(--border)'}`,
                      padding: '2px 8px',
                      borderRadius: '2px',
                      opacity: 0.8,
                    }}
                  >
                    {talk.type}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      letterSpacing: '1px',
                    }}
                  >
                    {talk.season} {talk.year}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-serif), serif',
                    fontSize: '17px',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    lineHeight: 1.35,
                    flex: 1,
                  }}
                >
                  {talk.title}
                </h3>

                {/* Venue + location */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: 'var(--text-secondary)',
                      marginBottom: '2px',
                    }}
                  >
                    {talk.venue}
                  </div>
                  {talk.location && (
                    <div
                      style={{
                        fontFamily: 'var(--font-jetbrains), monospace',
                        fontSize: '9px',
                        color: 'var(--text-muted)',
                        letterSpacing: '1px',
                      }}
                    >
                      {talk.location}
                    </div>
                  )}
                </div>

                {/* Abstract snippet */}
                {talk.abstract && (
                  <p
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {talk.abstract.slice(0, 120)}
                    {talk.abstract.length > 120 ? '…' : ''}
                  </p>
                )}

                {/* Slides link */}
                {talk.slides && (
                  <a
                    href={talk.slides}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      color: 'var(--gold-mid)',
                      textDecoration: 'none',
                    }}
                  >
                    Slides →
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}

          {/* Placeholder for upcoming talks */}
          <ScrollReveal delay={talks.length * 0.1}>
            <div
              style={{
                backgroundColor: 'transparent',
                border: '1px dashed var(--border)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                minHeight: '160px',
                opacity: 0.5,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                }}
              >
                {/* TODO: Add upcoming talks */}
                More talks coming soon
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
