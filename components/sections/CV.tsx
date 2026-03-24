'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

const education = [
  {
    degree: 'PhD Cosmology',
    institution: 'University of Southern California',
    period: '2021–Present',
    details: 'Advisors: Kris Pardo & Andrew Benson (Carnegie Observatories)',
  },
  {
    degree: "Bachelor's Degree",
    institution: 'TODO: Fill in undergraduate institution',
    period: 'TODO: Fill in years',
    details: 'TODO: Fill in major/department',
  },
]

// TODO: Fill in real skills, awards, and service
const skills = [
  { category: 'Languages', items: ['Python', 'C++', 'Mathematica'] },
  { category: 'Frameworks', items: ['NumPy', 'SciPy', 'Astropy', 'emcee'] },
  { category: 'Tools', items: ['Galacticus', 'CAMB', 'Git', 'HPC/Slurm'] },
  { category: 'Techniques', items: ['MCMC', 'Power Spectra', 'Forward Modeling', 'N-body Analysis'] },
]

const awards = [
  { year: '2021', title: 'USC Provost Fellowship', details: 'TODO: Add details' },
  // TODO: Add more awards
]

const service = [
  { role: 'TODO: Fill in service roles', venue: 'e.g., reviewer, outreach, etc.' },
]

export default function CV() {
  return (
    <section
      id="cv"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 8vw, 120px)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <ScrollReveal>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '60px',
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: '16px' }}>
                04 · CV
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-dm-serif), serif',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                  letterSpacing: '0.02em',
                }}
              >
                Curriculum Vitae
              </h2>
            </div>

            <a
              href="/cv.pdf"
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--gold-bright)',
                border: '1px solid var(--gold-dim)',
                padding: '10px 20px',
                textDecoration: 'none',
                alignSelf: 'flex-start',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                  'var(--gold-bright)'
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  'rgba(200, 169, 110, 0.08)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                  'var(--gold-dim)'
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  'transparent'
              }}
            >
              Download Full CV (PDF)
            </a>
          </div>
        </ScrollReveal>

        {/* Two columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
          }}
        >
          {/* Left: Education */}
          <ScrollReveal delay={0.1}>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: 'var(--gold-bright)',
                  marginBottom: '28px',
                }}
              >
                Education
              </div>

              <div
                style={{
                  position: 'relative',
                  paddingLeft: '20px',
                }}
              >
                {/* Timeline line */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '1px',
                    background:
                      'linear-gradient(to bottom, var(--gold-dim), transparent)',
                  }}
                />

                {education.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'relative',
                      paddingBottom: '32px',
                    }}
                  >
                    {/* Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-24px',
                        top: '6px',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        border: '1px solid var(--gold-dim)',
                        backgroundColor: i === 0 ? 'var(--gold-dim)' : 'transparent',
                      }}
                    />

                    <div
                      style={{
                        fontFamily: 'var(--font-jetbrains), monospace',
                        fontSize: '9px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: 'var(--text-muted)',
                        marginBottom: '6px',
                      }}
                    >
                      {item.period}
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-dm-serif), serif',
                        fontSize: '17px',
                        color: 'var(--text-primary)',
                        marginBottom: '4px',
                      }}
                    >
                      {item.degree}
                    </div>

                    <div
                      style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        marginBottom: '4px',
                      }}
                    >
                      {item.institution}
                    </div>

                    <div
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                        fontStyle: 'italic',
                      }}
                    >
                      {item.details}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Skills + Awards + Service */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '48px',
            }}
          >
            {/* Skills */}
            <ScrollReveal delay={0.2}>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    color: 'var(--gold-bright)',
                    marginBottom: '24px',
                  }}
                >
                  Technical Skills
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  {skills.map((skill) => (
                    <div key={skill.category}>
                      <div
                        style={{
                          fontFamily: 'var(--font-jetbrains), monospace',
                          fontSize: '9px',
                          textTransform: 'uppercase',
                          letterSpacing: '2px',
                          color: 'var(--text-muted)',
                          marginBottom: '8px',
                        }}
                      >
                        {skill.category}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '6px',
                        }}
                      >
                        {skill.items.map((item) => (
                          <span key={item} className="tag-muted">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Awards */}
            <ScrollReveal delay={0.3}>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    color: 'var(--gold-bright)',
                    marginBottom: '24px',
                  }}
                >
                  Awards & Honors
                </div>
                {awards.map((award, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-jetbrains), monospace',
                        fontSize: '10px',
                        color: 'var(--text-muted)',
                        minWidth: '40px',
                      }}
                    >
                      {award.year}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-primary)',
                          marginBottom: '2px',
                        }}
                      >
                        {award.title}
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: 'var(--text-muted)',
                          fontStyle: 'italic',
                        }}
                      >
                        {award.details}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Service */}
            <ScrollReveal delay={0.35}>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    color: 'var(--gold-bright)',
                    marginBottom: '24px',
                  }}
                >
                  Service & Outreach
                </div>
                {service.map((s, i) => (
                  <div key={i} style={{ marginBottom: '12px' }}>
                    <div
                      style={{
                        fontSize: '14px',
                        color: 'var(--text-primary)',
                        marginBottom: '2px',
                      }}
                    >
                      {s.role}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                        fontStyle: 'italic',
                      }}
                    >
                      {s.venue}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
