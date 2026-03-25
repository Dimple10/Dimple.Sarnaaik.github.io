'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const dotX = useMotionValue(0)
  const dotY = useMotionValue(0)
  const ringRawX = useMotionValue(0)
  const ringRawY = useMotionValue(0)

  const ringX = useSpring(ringRawX, { stiffness: 150, damping: 20, mass: 0.5 })
  const ringY = useSpring(ringRawY, { stiffness: 150, damping: 20, mass: 0.5 })

  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      ringRawX.set(e.clientX)
      ringRawY.set(e.clientY)
      setVisible(true)
    }

    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [role="button"], input, textarea, select')
      setExpanded(!!interactive)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [dotX, dotY, ringRawX, ringRawY])

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          border: '1px solid var(--gold-mid)',
          pointerEvents: 'none',
          zIndex: 9998,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: expanded ? 48 : 28,
          height: expanded ? 48 : 28,
          borderColor: expanded
            ? 'rgba(91, 163, 201, 0.8)'
            : 'rgba(61, 122, 154, 0.6)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
    </>
  )
}
