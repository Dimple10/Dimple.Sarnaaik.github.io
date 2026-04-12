'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'

// ---------------------------------------------------------------------------
// Gallery data
// For COZMIC / Symphony: add your own images to public/images/ and update src
// All JWST + Euclid images are NASA/ESA public domain
// ---------------------------------------------------------------------------
const ITEMS = [
  {
    id: 'jwst-deep-field',
    src: 'https://esawebb.org/media/archives/images/screen/weic2205a.jpg',
    label: 'JWST · NIRCam',
    title: "Webb's First Deep Field",
    desc: "SMACS 0723 — 4,600 galaxies across 13+ billion years of cosmic history in a patch of sky the size of a grain of sand held at arm's length.",
    credit: 'NASA, ESA, CSA, STScI',
    colSpan: 2,
    rowSpan: 2,
    featured: true,
  },
  {
    id: 'jwst-pillars',
    src: 'https://esawebb.org/media/archives/images/screen/weic2215a.jpg',
    label: 'JWST · NIRCam',
    title: 'Pillars of Creation',
    desc: "Newly formed stars embedded in the Eagle Nebula's dusty columns, 6,500 light-years from Earth.",
    credit: 'NASA, ESA, CSA, STScI',
    colSpan: 1,
    rowSpan: 2,
    featured: false,
  },
  {
    id: 'jwst-carina',
    src: 'https://esawebb.org/media/archives/images/screen/weic2212a.jpg',
    label: 'JWST · NIRCam',
    title: 'Cosmic Cliffs',
    desc: "The 'mountains' and 'valleys' of NGC 3324 — a stellar nursery at the edge of a giant gaseous cavity, 7,600 light-years away.",
    credit: 'NASA, ESA, CSA, STScI',
    colSpan: 1,
    rowSpan: 1,
    featured: false,
  },
  {
    id: 'jwst-stephan',
    src: 'https://esawebb.org/media/archives/images/screen/weic2206a.jpg',
    label: 'JWST · NIRCam + MIRI',
    title: "Stephan's Quintet",
    desc: 'Five galaxies locked in gravitational interaction — a live view of galactic mergers shaping dark matter halos.',
    credit: 'NASA, ESA, CSA, STScI',
    colSpan: 1,
    rowSpan: 1,
    featured: false,
  },
  {
    id: 'jwst-cartwheel',
    src: 'https://esawebb.org/media/archives/images/screen/heic2211a.jpg',
    label: 'JWST · NIRCam + MIRI',
    title: 'Cartwheel Galaxy',
    desc: "The aftermath of a high-speed collision — a bull's-eye of star formation 500 million light-years away.",
    credit: 'NASA, ESA, CSA, STScI',
    colSpan: 1,
    rowSpan: 1,
    featured: false,
  },
  {
    id: 'euclid-perseus',
    src: 'https://esahubble.org/media/archives/images/screen/heic2316a.jpg',
    label: 'Euclid · VIS + NISP',
    title: 'Perseus Cluster',
    desc: 'One thousand galaxies of the Perseus cluster and over 100,000 additional galaxies — Euclid probing the large-scale structure of the dark universe.',
    credit: 'ESA/Euclid/Euclid Consortium/NASA',
    colSpan: 2,
    rowSpan: 1,
    featured: false,
  },
  {
    // Add your Symphony simulation image: public/images/symphony-dm.jpg
    id: 'symphony',
    src: '/Dimple.Sarnaaik.github.io/images/symphony-dm.jpg',
    label: 'Symphony · N-body',
    title: 'Dark Matter Halo Structure',
    desc: 'Zoom-in N-body simulations of Milky Way-mass halos — comparing CDM, WDM, and fuzzy DM substructure at sub-galactic scales.',
    credit: 'Symphony Collaboration',
    colSpan: 1,
    rowSpan: 1,
    featured: false,
    localPlaceholder: true,
  },
  {
    // Add your COZMIC lensing image: public/images/cozmic-lens.jpg
    id: 'cozmic',
    src: '/Dimple.Sarnaaik.github.io/images/cozmic-lens.jpg',
    label: 'COZMIC · HST / JWST',
    title: 'Strong Gravitational Lensing',
    desc: 'Einstein rings and arcs from the COZMIC survey — constraining dark matter substructure through lensing statistics at galaxy scales.',
    credit: 'COZMIC Survey',
    colSpan: 1,
    rowSpan: 1,
    featured: false,
    localPlaceholder: true,
  },
]

// ---------------------------------------------------------------------------
// Single gallery tile
// ---------------------------------------------------------------------------
type Item = (typeof ITEMS)[number]

function GalleryTile({ item }: { item: Item }) {
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: `span ${item.colSpan}`,
        gridRow: `span ${item.rowSpan}`,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        minHeight: item.rowSpan > 1 ? '420px' : '220px',
        cursor: 'default',
        transition: 'border-color 0.25s ease',
        borderColor: hovered ? 'var(--border-accent)' : 'var(--border)',
      }}
    >
      {/* Image or placeholder */}
      {!imgError ? (
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.6s ease, filter 0.4s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            filter: hovered ? 'brightness(0.55)' : 'brightness(0.75)',
          }}
        />
      ) : (
        // Fallback for missing local images (Symphony / COZMIC placeholders)
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(91,163,201,0.08) 0%, transparent 60%), var(--bg-surface)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '24px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: 'var(--gold-dim)',
              textAlign: 'center',
            }}
          >
            {item.label}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-dm-serif), serif',
              fontSize: '18px',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              lineHeight: 1.3,
            }}
          >
            {item.title}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--text-muted)',
              textAlign: 'center',
              marginTop: '8px',
              border: '1px dashed var(--border-accent)',
              padding: '6px 12px',
            }}
          >
            Add image → public/images/{item.id}.jpg
          </div>
        </div>
      )}

      {/* Source badge — always visible */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '9px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: 'var(--text-primary)',
          backgroundColor: 'rgba(7, 9, 15, 0.72)',
          border: '1px solid rgba(91,163,201,0.25)',
          padding: '4px 8px',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
        }}
      >
        {item.label}
      </div>

      {/* Hover overlay: title + desc + credit */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(7,9,15,0.92) 0%, rgba(7,9,15,0.55) 55%, transparent 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '20px',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-dm-serif), serif',
            fontSize: item.featured ? '22px' : '16px',
            color: 'var(--text-primary)',
            lineHeight: 1.25,
            marginBottom: '8px',
          }}
        >
          {item.title}
        </div>
        <div
          style={{
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '10px',
            maxWidth: '480px',
          }}
        >
          {item.desc}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            color: 'var(--text-muted)',
          }}
        >
          {item.credit}
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------
export default function CosmicGallery() {
  return (
    <section
      id="cosmos"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 8vw, 120px)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <ScrollReveal>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            03 · Cosmos
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
            Through the Lens
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
            Observations from JWST, Euclid, and the surveys and simulations
            that shape our understanding of dark matter's role in the cosmic
            web. Hover to explore.
          </p>
        </ScrollReveal>

        {/* Bento grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: '220px',
              gap: '12px',
            }}
            className="cosmic-grid"
          >
            {ITEMS.map((item) => (
              <GalleryTile key={item.id} item={item} />
            ))}
          </div>
        </ScrollReveal>

        {/* Caption */}
        <div
          style={{
            marginTop: '20px',
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'var(--text-muted)',
            textAlign: 'right',
          }}
        >
          JWST images: NASA, ESA, CSA, STScI · Public domain
        </div>
      </div>

      {/* Responsive grid overrides */}
      <style>{`
        @media (max-width: 900px) {
          .cosmic-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .cosmic-grid > * {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            min-height: 200px !important;
          }
        }
        @media (max-width: 580px) {
          .cosmic-grid {
            grid-template-columns: 1fr !important;
          }
          .cosmic-grid > * {
            min-height: 240px !important;
          }
        }
      `}</style>
    </section>
  )
}
