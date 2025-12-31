'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface SectionRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function SectionReveal({ children, delay = 0, className = '' }: SectionRevealProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls?.start?.('visible')
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: delay ?? 0,
            ease: 'easeOut',
          },
        },
      }}
      className={className ?? ''}
    >
      {children}
    </motion.div>
  )
}
