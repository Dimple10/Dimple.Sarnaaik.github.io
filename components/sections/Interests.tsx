'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

const INTERESTS = [
  {
    icon: '◎',
    title: 'Women+ in Physics',
    description:
      'Co-founded USC\'s first organization dedicated to supporting women and gender minorities in physics. Initiated W+iP Clips — a science communication series highlighting gender minorities in the field.',
  },
  {
    icon: '⬡',
    title: 'Science Communication',
    description:
      'Contributing author at The Lab Report (USC). Led live virtual sessions through Skype a Scientist for K–8 students on black holes, dark matter, and the Moon. APS StepUp panelist supporting high school physics teachers.',
  },
  {
    icon: '◉',
    title: 'Teaching & Mentoring',
    description:
      'Teaching assistant for 5+ years across introductory to advanced physics and astronomy labs at USC. STEM pen pal through Letter to a Pre-Scientist with a 5th grader in North Carolina. Mentored 6 underclassmen through SPS.',
  },
  {
    icon: '◇',
    title: 'Community Building',
    description:
      'As GASP President, gathered 100+ student experiences to successfully petition a change in the PhD curriculum and hosted community events for 90+ graduate students. Led astronomy outreach at Foster Elementary School.',
  },
  {
    icon: '◈',
    title: 'Graduate Education Advocacy',
    description:
      'Advocate for inclusive and equitable graduate physics education — bringing student concerns directly to the department and creating systemic change in the PhD program at USC.',
  },
  {
    icon: '♩',
    title: 'Astronomy Across Barriers',
    description:
      'Authored "Astronomy across barriers" (The Lab Report, Vol. 2), profiling USC faculty efforts to bring astronomy to underserved communities. Passionate about making astrophysics accessible to everyone.',
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
              fontSize: 'clamp(30px, 3.5vw, 48px)',
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
              fontSize: '16px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '560px',
              marginBottom: '52px',
            }}
          >
            Science doesn&apos;t happen in a vacuum. I believe deeply in building
            community, opening doors, and ensuring that physics — and the people
            doing it — reflect the full breadth of humanity.
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
                    fontSize: '14px',
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
                fontSize: '11px',
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
                  fontSize: '11px',
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
                  fontSize: '11px',
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
