'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

const education = [
  {
    degree: 'Doctor of Philosophy, Astrophysics',
    institution: 'University of Southern California',
    period: '2021–Present',
    details: 'Primary advisor: Dr. Andrew Benson (Carnegie Observatories) · Co-advisor: Prof. Kris Pardo (USC)',
  },
  {
    degree: 'Bachelor of Science, Physics–Computer Science · Minor in Astronomy',
    institution: 'University of Southern California',
    period: '2017–2021',
    details: 'GPA: 3.76 · Astronomy GPA: 3.9 · Dean\'s List 2017–2021',
  },
]

const skills = [
  { category: 'Programming', items: ['Python', 'C++', 'Git', 'LaTeX'] },
  { category: 'Computational', items: ['MCMC', 'Bayesian Analysis', 'N-body Simulations', 'HPC / Slurm', 'Big Data'] },
  { category: 'Modeling', items: ['Galacticus', 'CLASS Code', 'Semi-analytic Modelling', 'Forward Modeling'] },
  { category: 'Communication', items: ['Science Communication', 'Public Outreach', 'Technical Writing', 'Mentorship'] },
]

const awards = [
  { year: '2025', title: 'Rockwell Dennis Hunt Scholastic Award ($5,000)', details: 'USC' },
  { year: '2024', title: 'Galactic Leader Award', details: 'Cosmolab' },
  { year: '2023–24', title: 'USC Dornsife Graduate Fellowship ($35,700)', details: 'USC Dornsife College' },
  { year: '2023', title: 'Rockwell Dennis Hunt Scholastic Award, Honorable Mention ($1,000)', details: 'USC' },
  { year: '2021–22', title: 'GSG Professional Development Fund Award ($500/year)', details: 'USC' },
  { year: '2020–21', title: 'Goel Family Scholarship ($5,000)', details: 'USC Continuing Student Scholarship' },
  { year: '2020', title: 'Summer Undergraduate Research Fund Award ($3,000)', details: 'USC' },
  { year: '2019–21', title: 'Student Opportunity for Academic Research Award ($1,000/year)', details: 'USC' },
  { year: '2018–20', title: 'Women in Science and Engineering Research Fellowship ($500/semester)', details: 'USC WiSE' },
  { year: '2017–21', title: 'Dean\'s List', details: 'USC Dornsife College' },
]

const service = [
  { role: 'Women+ in Physics (W+iP) — Co-Founder', venue: 'USC · 2024–Present' },
  { role: 'Graduate Association of Students in Physics (GASP) — President', venue: 'USC · 2022–2024' },
  { role: 'Teaching Assistant', venue: 'USC Department of Physics & Astronomy · Fall 2021–Present' },
  { role: 'Skype a Scientist — Contributing Scientist', venue: '2023–2024, 2026' },
  { role: 'Letter to a Pre-Scientist — STEM Pen Pal Volunteer', venue: '2023–2024' },
  { role: 'Undergraduate Research Symposium — Judge, Physical Sciences', venue: 'USC · 2026' },
  { role: 'The Lab Report, USC — Science Journalist / Contributing Author', venue: '2026–Present' },
  { role: 'Society of Physics Students (SPS) — Co-President', venue: 'USC · 2019–2021' },
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
                  'rgba(91, 163, 201, 0.08)'
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
