'use client'
import type { SpringOptions } from 'framer-motion'
import { useRef, useState, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface TiltedCardProps {
  children?: ReactNode
  className?: string
  containerHeight?: React.CSSProperties['height']
  containerWidth?: React.CSSProperties['width']
  scaleOnHover?: number
  rotateAmplitude?: number
}

const springValues: SpringOptions = { damping: 30, stiffness: 100, mass: 2 }

export default function TiltedCard({
  children,
  className = '',
  containerHeight = '100%',
  containerWidth = '100%',
  scaleOnHover = 1.03,
  rotateAmplitude = 10,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(useMotionValue(0), springValues)
  const rotateY = useSpring(useMotionValue(0), springValues)
  const scale = useSpring(1, springValues)

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2
    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude)
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude)
  }

  return (
    <div
      ref={ref}
      className={`relative [perspective:800px] ${className}`}
      style={{ height: containerHeight, width: containerWidth }}
      onMouseMove={handleMouse}
      onMouseEnter={() => scale.set(scaleOnHover)}
      onMouseLeave={() => {
        scale.set(1)
        rotateX.set(0)
        rotateY.set(0)
      }}
    >
      <motion.div
        className="w-full h-full [transform-style:preserve-3d]"
        style={{ rotateX, rotateY, scale }}
      >
        {children}
      </motion.div>
    </div>
  )
}
