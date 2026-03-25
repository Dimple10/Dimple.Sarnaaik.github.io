'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import TimelineItem from '@/components/ui/TimelineItem'
import { publications } from '@/content/publications'

const ALL_MODELS = ['All', 'WIMPs', 'Fuzzy DM', 'SIDM', 'PBHs']

export default function Publications() {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filtered =
    activeFilter === 'All'
      ? publications
      : publications.filter((p) => p.models.includes(activeFilter))

  return (
    <section
      id="publications"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 8vw, 120px)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Eyebrow + title */}
        <ScrollReveal>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            03 · Publications
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-dm-serif), serif',
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '40px',
              letterSpacing: '0.02em',
            }}
          >
            Research Output
          </h2>
        </ScrollReveal>

        {/* Filter buttons */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '52px',
            }}
          >
            {ALL_MODELS.map((model) => (
              <button
                key={model}
                onClick={() => setActiveFilter(model)}
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  cursor: 'none',
                  padding: '6px 16px',
                  border:
                    activeFilter === model
                      ? '1px solid var(--gold-bright)'
                      : '1px solid var(--border-accent)',
                  color:
                    activeFilter === model
                      ? 'var(--gold-bright)'
                      : 'var(--text-muted)',
                  backgroundColor:
                    activeFilter === model
                      ? 'rgba(91, 163, 201, 0.08)'
                      : 'transparent',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== model) {
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                      'var(--text-muted)'
                    ;(e.currentTarget as HTMLButtonElement).style.color =
                      'var(--text-secondary)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== model) {
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                      'var(--border-accent)'
                    ;(e.currentTarget as HTMLButtonElement).style.color =
                      'var(--text-muted)'
                  }
                }}
              >
                {model}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div
          style={{
            position: 'relative',
            paddingLeft: '20px',
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '1px',
              background:
                'linear-gradient(to bottom, transparent, var(--gold-dim) 10%, var(--gold-dim) 90%, transparent)',
            }}
          />

          {filtered.length === 0 ? (
            <div
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '13px',
                color: 'var(--text-muted)',
                letterSpacing: '2px',
                padding: '32px 0',
              }}
            >
              No publications match this filter yet.
            </div>
          ) : (
            filtered.map((pub, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <TimelineItem
                  year={pub.year}
                  title={pub.title}
                  subtitle={`${pub.journal}${pub.authors ? ' · ' + pub.authors.join(', ') : ''}`}
                  tags={pub.models.length > 0 ? [...pub.models, ...pub.techniques] : undefined}
                  linkLabel={pub.arxiv ? 'arXiv' : pub.doi ? 'DOI' : undefined}
                  linkHref={pub.arxiv ?? pub.doi ?? undefined}
                  extra={
                    <div style={{ marginTop: '6px' }}>
                      {pub.type === 'peer-reviewed' && (
                        <span
                          style={{
                            fontFamily: 'var(--font-jetbrains), monospace',
                            fontSize: '10px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: 'var(--gold-bright)',
                            border: '1px solid var(--gold-dim)',
                            padding: '2px 8px',
                          }}
                        >
                          Peer Reviewed
                        </span>
                      )}
                      {pub.type === 'in-preparation' && (
                        <span
                          style={{
                            fontFamily: 'var(--font-jetbrains), monospace',
                            fontSize: '10px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: 'var(--text-muted)',
                            border: '1px solid var(--border-accent)',
                            padding: '2px 8px',
                          }}
                        >
                          In Preparation
                        </span>
                      )}
                      {pub.type === 'science-writing' && (
                        <span
                          style={{
                            fontFamily: 'var(--font-jetbrains), monospace',
                            fontSize: '10px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: 'var(--text-muted)',
                            border: '1px solid var(--border-accent)',
                            padding: '2px 8px',
                          }}
                        >
                          Science Writing
                        </span>
                      )}
                    </div>
                  }
                />
              </ScrollReveal>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
