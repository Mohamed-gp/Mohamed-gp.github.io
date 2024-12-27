'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
}

export function MouseClickEffect() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }
      setParticles((prev) => [...prev, newParticle])

      // Remove the particle after animation
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id))
      }, 1000)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <AnimatePresence>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ scale: 0, x: particle.x, y: particle.y }}
          animate={{ scale: 1, opacity: 0 }}
          exit={{ scale: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-8 h-8 bg-primary rounded-full pointer-events-none"
          style={{ left: -16, top: -16 }}
        />
      ))}
    </AnimatePresence>
  )
}

