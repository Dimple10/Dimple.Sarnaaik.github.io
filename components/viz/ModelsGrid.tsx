'use client'

import { useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

interface MassScale {
  id: string
  name: string
  range: string
  projects: string[]
  detail: string
}

const SCALES: MassScale[] = [
  {
    id: 'cluster',
    name: 'Cluster scales',
    range: '10¹³–10¹⁵ M☉',
    projects: ['Galacticus Merger Trees'],
    detail:
      'At cluster scales, beyond-CDM dark matter models predict distinct halo mass function shapes. My Galacticus calibration work constrains how WDM, IDM, and FDM alter halo abundances from group to cluster mass — providing the top-end anchor for multi-scale merger tree fits.',
  },
  {
    id: 'galaxy',
    name: 'Galaxy scales',
    range: '10¹⁰–10¹³ M☉',
    projects: ['Galacticus Merger Trees'],
    detail:
      'Milky Way–mass halos and their satellites are the most extensively mapped regime. I calibrate Galacticus merger tree parameters against the COZMIC N-body suites at this scale, testing how backsplash halo populations and progenitor mass functions differ across CDM and beyond-CDM models.',
  },
  {
    id: 'dwarf',
    name: 'Dwarf galaxies',
    range: '10⁷–10¹⁰ M☉',
    projects: ['Galacticus Merger Trees', 'EDGE Mocks', 'Roman Astrometry'],
    detail:
      'Dwarf galaxies are where different dark matter candidates diverge most sharply. I study this regime from three angles: calibrating merger tree statistics with Galacticus, building EDGE hydrodynamical simulation mocks for Roman imaging, and forecasting Roman astrometric sensitivity to subhalo populations near the dwarf threshold.',
  },
  {
    id: 'subgalactic',
    name: 'Sub-galactic',
    range: '>1 M☉',
    projects: ['Roman Astrometry', 'EDGE Mocks'],
    detail:
      'Below the classical dwarf scale lies a largely unexplored regime — where CDM predicts abundant subhalos but wave-like and self-interacting models predict suppression. My Roman forward-model pipeline probes this regime via gravitational perturbations of stellar apparent accelerations, while EDGE mocks test SBF signatures in ultra-faint systems.',
  },
]

export default function ModelsGrid() {
  const { isMobile } = useBreakpoint()
  const [selected, setSelected] = useState<string | null>(null)

  const selectedScale = SCALES.find((s) => s.id === selected)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: 'var(--gold-bright)',
          marginBottom: '4px',
        }}
      >
        Mass Scales
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '10px',
        }}
      >
        {SCALES.map((scale) => {
          const isSelected = selected === scale.id
          return (
            <button
              key={scale.id}
              onClick={() => setSelected(isSelected ? null : scale.id)}
              style={{
                background: isSelected
                  ? 'rgba(91, 163, 201, 0.06)'
                  : 'var(--bg-surface)',
                border: `1px solid ${isSelected ? 'var(--gold-mid)' : 'var(--border)'}`,
                padding: '14px',
                cursor: 'none',
                textAlign: 'left',
                transition: 'all 0.2s ease',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: isSelected ? 'var(--gold-bright)' : 'var(--text-primary)',
                  marginBottom: '4px',
                }}
              >
                {scale.name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '9px',
                  color: 'var(--text-muted)',
                  letterSpacing: '1px',
                  marginBottom: '10px',
                }}
              >
                {scale.range}
              </div>

              {/* Project dots */}
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                {scale.projects.map((p) => (
                  <div
                    key={p}
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? 'var(--gold-bright)' : 'var(--gold-dim)',
                      transition: 'background-color 0.2s ease',
                    }}
                  />
                ))}
              </div>
            </button>
          )
        })}
      </div>

      {/* Detail panel */}
      {selectedScale && (
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--gold-dim)',
            padding: '20px',
            transition: 'all 0.3s ease',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
            <div
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                color: 'var(--gold-bright)',
              }}
            >
              {selectedScale.name}
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {selectedScale.projects.map((p) => (
                <span
                  key={p}
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: 'var(--gold-dim)',
                    border: '1px solid var(--border)',
                    padding: '2px 6px',
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {selectedScale.detail}
          </p>
        </div>
      )}
    </div>
  )
}
