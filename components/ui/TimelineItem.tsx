'use client'

import { useState } from 'react'

interface TimelineItemProps {
  year: string
  title: string
  subtitle?: string
  tags?: string[]
  linkLabel?: string
  linkHref?: string
  extra?: React.ReactNode
}

export default function TimelineItem({
  year,
  title,
  subtitle,
  tags,
  linkLabel,
  linkHref,
  extra,
}: TimelineItemProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        gap: '2rem',
        paddingLeft: '1.5rem',
        position: 'relative',
        paddingBottom: '2rem',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        transition: 'transform 0.2s ease',
      }}
    >
      {/* Timeline dot */}
      <div
        style={{
          position: 'absolute',
          left: '-5px',
          top: '6px',
          width: '9px',
          height: '9px',
          borderRadius: '50%',
          border: `1px solid ${hovered ? 'var(--gold-bright)' : 'var(--gold-dim)'}`,
          backgroundColor: hovered ? 'var(--gold-bright)' : 'transparent',
          transition: 'all 0.2s ease',
        }}
      />

      {/* Year */}
      <div
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '10px',
          letterSpacing: '2px',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          minWidth: '48px',
          paddingTop: '3px',
        }}
      >
        {year}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: 'var(--font-dm-serif), serif',
            fontSize: '15px',
            color: hovered ? 'var(--text-primary)' : 'var(--text-primary)',
            marginBottom: '4px',
            lineHeight: 1.4,
          }}
        >
          {title}
        </div>

        {subtitle && (
          <div
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '11px',
              color: 'var(--text-secondary)',
              letterSpacing: '1px',
              marginBottom: '8px',
            }}
          >
            {subtitle}
          </div>
        )}

        {tags && tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
            {tags.map((tag) => (
              <span key={tag} className="tag-muted">
                {tag}
              </span>
            ))}
          </div>
        )}

        {linkLabel && linkHref && (
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '10px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--gold-mid)',
              textDecoration: 'none',
            }}
          >
            {linkLabel} →
          </a>
        )}

        {extra}
      </div>
    </div>
  )
}
