'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function MouseShadow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <motion.div
      className="mouse-shadow"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      <div className="w-8 h-8 bg-primary opacity-20 rounded-full" />
    </motion.div>
  )
}

export function RandomKeywords({ words }: { words: string[] }) {
  const [currentWord, setCurrentWord] = useState(words[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(words[Math.floor(Math.random() * words.length)])
    }, 2000)

    return () => clearInterval(interval)
  }, [words])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentWord}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-primary inline-block"
      >
        {currentWord}
      </motion.span>
    </AnimatePresence>
  )
}

