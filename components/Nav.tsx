'use client'

import { useState, useEffect, useCallback } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'CV', href: '#cv' },
  { label: 'Talks', href: '#talks' },
  { label: 'Blog', href: '#blog' },
  { label: 'Interests', href: '#interests' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(observerCallback, {
        threshold: 0.3,
        rootMargin: '-60px 0px -40% 0px',
      })
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 2rem',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
          backgroundColor: scrolled
            ? 'rgba(8, 8, 8, 0.92)'
            : 'transparent',
          borderBottom: scrolled
            ? '1px solid var(--border)'
            : '1px solid transparent',
          transition:
            'background-color 0.3s ease, border-color 0.3s ease',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'none',
            fontFamily: 'var(--font-dm-serif), serif',
            fontSize: '16px',
            color: 'var(--text-primary)',
            letterSpacing: '0.05em',
            fontWeight: 400,
          }}
        >
          Dimple Sarnaaik
        </button>

        {/* Desktop nav links */}
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'none',
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color:
                    activeSection === link.href.replace('#', '')
                      ? 'var(--gold-bright)'
                      : 'var(--text-muted)',
                  transition: 'color 0.2s ease',
                  padding: '4px 0',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.href.replace('#', '')) {
                    ;(e.target as HTMLButtonElement).style.color =
                      'var(--text-secondary)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.replace('#', '')) {
                    ;(e.target as HTMLButtonElement).style.color =
                      'var(--text-muted)'
                  }
                }}
              >
                {link.label}
              </button>
            ))}

            {/* Download CV button */}
            <a
              href="/cv.pdf"
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--gold-bright)',
                border: '1px solid var(--gold-dim)',
                padding: '6px 14px',
                textDecoration: 'none',
                transition:
                  'border-color 0.2s ease, background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  'rgba(91, 163, 201, 0.08)'
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                  'var(--gold-bright)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  'transparent'
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                  'var(--gold-dim)'
              }}
            >
              Download CV
            </a>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1px',
                backgroundColor: menuOpen ? 'var(--gold-bright)' : 'var(--text-primary)',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
                transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1px',
                backgroundColor: menuOpen ? 'var(--gold-bright)' : 'var(--text-primary)',
                transition: 'opacity 0.2s ease, background-color 0.2s ease',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1px',
                backgroundColor: menuOpen ? 'var(--gold-bright)' : 'var(--text-primary)',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
                transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        )}
      </nav>

      {/* Mobile full-screen overlay */}
      {menuOpen && isMobile && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: 'rgba(8, 8, 8, 0.97)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '4px',
                color:
                  activeSection === link.href.replace('#', '')
                    ? 'var(--gold-bright)'
                    : 'var(--text-secondary)',
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/cv.pdf"
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: 'var(--gold-bright)',
              border: '1px solid var(--gold-dim)',
              padding: '10px 24px',
              textDecoration: 'none',
            }}
          >
            Download CV
          </a>
        </div>
      )}
    </>
  )
}
