'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState, ReactNode } from 'react'

interface WordRevealProps {
  children: string
  className?: string
  delay?: number
  stagger?: number
  /** 'mount' = plays immediately, 'scroll' = triggers when in view */
  trigger?: 'mount' | 'scroll'
}

export default function WordReveal({
  children,
  className = '',
  delay = 0,
  stagger = 0.08,
  trigger = 'mount',
}: WordRevealProps) {
  const words = children.split(' ')
  const ref = useRef<HTMLSpanElement>(null)
  const [inView, setInView] = useState(trigger === 'mount')

  useEffect(() => {
    if (trigger !== 'scroll') return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [trigger])

  return (
    <span ref={ref} className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`} aria-label={children}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={inView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{
              duration: 0.65,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
