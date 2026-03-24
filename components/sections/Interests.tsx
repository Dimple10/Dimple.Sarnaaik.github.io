'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

// TODO: Replace with Dimple's real interests. These are placeholder suggestions.
const INTERESTS = [
  {
    icon: '◎',
    title: 'Astronomy Outreach',
    description:
      'Sharing the wonders of the cosmos with the public through events, star parties, and science communication.',
    // TODO: Add specific outreach activities/organizations
  },
  {
    icon: '◈',
    title: 'Photography',
    description:
      'Capturing light — from landscapes to astrophotography, finding the sublime in long exposures.',
    // TODO: Add specific photography interests/links
  },
  {
    icon: '◇',
    title: 'Hiking',
    description:
      'Exploring the trails around Los Angeles and Southern California — finding perspective under open skies.',
    // TODO: Add favorite trails or locations
  },
  {
    icon: '♩',
    title: 'Music',
    description:
      'Listening and playing — music as a form of creativity and mental reset between long days of research.',
    // TODO: Add specific music interests/instruments
  },
  {
    icon: '⬡',
    title: 'Science Communication',
    description:
      'Writing and talking about dark matter and cosmology for non-specialist audiences.',
    // TODO: Add specific sci-comm activities
  },
  {
    icon: '◉',
    title: 'Teaching & Mentoring',
    description:
      'Supporting the next generation of physicists through TAing, tutoring, and informal mentoring.',
    // TODO: Add specific teaching roles
  },
]

export default function Interests() {
  return (
    <section
      id="interests"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 8vw, 120px)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <ScrollReveal>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            07 · Beyond Research
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
            Interests
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
            {/* TODO: Add a personal note about interests/passions outside research */}
            Life beyond the equations — the things that inspire, ground, and
            recharge me outside of the lab.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger delay={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {INTERESTS.map((interest, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  padding: '28px 24px',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor =
                    'var(--gold-dim)'
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
                <div
                  style={{
                    fontSize: '20px',
                    color: 'var(--gold-dim)',
                    marginBottom: '14px',
                    lineHeight: 1,
                  }}
                >
                  {interest.icon}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                  }}
                >
                  {interest.title}
                </div>

                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={0.4}>
          <div
            style={{
              marginTop: '80px',
              paddingTop: '40px',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--text-muted)',
              }}
            >
              Dimple Sarnaaik · USC Astrophysics · {new Date().getFullYear()}
            </div>

            <div
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
              }}
            >
              <a
                href="mailto:sarnaaik@usc.edu"
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color =
                    'var(--gold-bright)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color =
                    'var(--text-muted)'
                }}
              >
                sarnaaik@usc.edu
              </a>

              <a
                href="https://github.com/Dimple10"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color =
                    'var(--gold-bright)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color =
                    'var(--text-muted)'
                }}
              >
                GitHub
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
