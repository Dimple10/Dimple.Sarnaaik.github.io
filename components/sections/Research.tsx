'use client'

import dynamic from 'next/dynamic'
import ScrollReveal from '@/components/ui/ScrollReveal'
import TagBadge from '@/components/ui/TagBadge'
import { researchProjects } from '@/content/research'
import ModelsGrid from '@/components/viz/ModelsGrid'
import TechniquesRadar from '@/components/viz/TechniquesRadar'

const NBodyBanner = dynamic(() => import('@/components/viz/NBodyBanner'), {
  ssr: false,
})

export default function Research() {
  return (
    <section
      id="research"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(80px, 10vw, 140px) 0',
      }}
    >
      {/* N-body banner */}
      <NBodyBanner />

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 clamp(24px, 8vw, 120px)',
          paddingTop: '80px',
        }}
      >
        {/* Eyebrow + title */}
        <ScrollReveal>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            02 · Research
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
            Dark Matter at the Frontier
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '600px',
              marginBottom: '60px',
            }}
          >
            I develop observational and computational tools to distinguish
            between dark matter models by probing structure at sub-galactic
            scales — where different candidates leave distinct signatures.
          </p>
        </ScrollReveal>

        {/* Radar + Models side-by-side */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
              marginBottom: '80px',
              padding: '40px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              <TechniquesRadar />
            </div>
            <div>
              <ModelsGrid />
            </div>
          </div>
        </ScrollReveal>

        {/* Project cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {researchProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.15}>
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  padding: '32px',
                  height: '100%',
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
                {/* Project number */}
                <div
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '9px',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    color: 'var(--gold-dim)',
                    marginBottom: '16px',
                  }}
                >
                  Project 0{i + 1} · {project.year}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-serif), serif',
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                    marginBottom: '16px',
                    letterSpacing: '0.01em',
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '24px',
                  }}
                >
                  {project.description}
                </p>

                {/* Technique tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '8px',
                  }}
                >
                  {project.techniques.map((t) => (
                    <TagBadge key={t} label={t} variant="gold" />
                  ))}
                </div>

                {/* Model tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '28px',
                  }}
                >
                  {project.models.map((m) => (
                    <TagBadge key={m} label={m} variant="muted" />
                  ))}
                </div>

                {/* Learn more link */}
                <a
                  href={`#publications`}
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'var(--gold-mid)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color =
                      'var(--gold-bright)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color =
                      'var(--gold-mid)'
                  }}
                >
                  Learn more →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
