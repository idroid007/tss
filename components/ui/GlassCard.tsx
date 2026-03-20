import React, { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(108, 99, 255, 0.15)',
}) => {
  return (
    <div
      className={`relative rounded-2xl border border-brand-border backdrop-blur-xl overflow-hidden ${className}`}
      style={{
        background: 'rgba(17, 17, 24, 0.8)',
        boxShadow: `0 0 40px ${glowColor}, inset 0 1px 0 rgba(255,255,255,0.05)`,
      }}
    >
      {children}
    </div>
  )
}

export default GlassCard
