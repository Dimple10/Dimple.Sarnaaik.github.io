'use client'

import { useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

interface DarkMatterModel {
  id: string
  name: string
  shortName: string
  descriptor: string
  experience: number
  detail: string
}

const MODELS: DarkMatterModel[] = [
  {
    id: 'wimps',
    name: 'WIMPs',
    shortName: 'WIMPs',
    descriptor: 'Weakly Interacting',
    experience: 0.8,
    detail:
      'I use weak lensing statistics from the Roman Space Telescope to constrain the WIMP mass function. Forward modeling the lensing signal across different WIMP scenarios allows us to distinguish between models at sub-galactic scales.',
  },
  {
    id: 'fuzzy',
    name: 'Fuzzy / Ultra-light DM',
    shortName: 'Fuzzy DM',
    descriptor: 'Wave-like behavior',
    experience: 0.75,
    detail:
      'Ultra-light axion dark matter suppresses small-scale structure through quantum pressure. I study how this affects merger tree statistics in Galacticus, comparing to the Symphony simulation suite to constrain axion masses.',
  },
  {
    id: 'sidm',
    name: 'SIDM',
    shortName: 'SIDM',
    descriptor: 'Self-interacting',
    experience: 0.7,
    detail:
      'Self-interacting dark matter creates cored density profiles in halos. My Roman Space Telescope forward modeling pipeline tests SIDM predictions against observed lensing convergence power spectra.',
  },
  {
    id: 'pbh',
    name: 'Primordial Black Holes',
    shortName: 'PBHs',
    descriptor: 'Compact remnants',
    experience: 0.5,
    detail:
      'Primordial black holes as dark matter candidates can be tested through their gravitational microlensing signatures. I explore how Roman\'s sensitivity enables novel constraints on the PBH mass spectrum.',
  },
]

export default function ModelsGrid() {
  const { isMobile } = useBreakpoint()
  const [selected, setSelected] = useState<string | null>(null)

  const selectedModel = MODELS.find((m) => m.id === selected)

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
        DM Models
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '10px',
        }}
      >
        {MODELS.map((model) => {
          const isSelected = selected === model.id
          return (
            <button
              key={model.id}
              onClick={() => setSelected(isSelected ? null : model.id)}
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
                {model.shortName}
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
                {model.descriptor}
              </div>

              {/* Experience bar */}
              <div
                style={{
                  height: '2px',
                  backgroundColor: 'var(--border)',
                  borderRadius: '1px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${model.experience * 100}%`,
                    backgroundColor: isSelected
                      ? 'var(--gold-bright)'
                      : 'var(--gold-dim)',
                    transition: 'background-color 0.2s ease',
                  }}
                />
              </div>
            </button>
          )
        })}
      </div>

      {/* Detail panel */}
      {selectedModel && (
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--gold-dim)',
            padding: '20px',
            transition: 'all 0.3s ease',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: 'var(--gold-bright)',
              marginBottom: '10px',
            }}
          >
            {selectedModel.name}
          </div>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {selectedModel.detail}
          </p>
        </div>
      )}
    </div>
  )
}
