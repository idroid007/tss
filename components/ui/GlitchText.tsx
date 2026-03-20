'use client'
import { FC } from 'react'

interface GlitchTextProps {
  children: string
  speed?: number
  enableShadows?: boolean
  className?: string
}

const GlitchText: FC<GlitchTextProps> = ({
  children,
  speed = 0.5,
  enableShadows = true,
  className = '',
}) => {
  const afterDuration = `${speed * 3}s`
  const beforeDuration = `${speed * 2}s`
  const afterShadow = enableShadows ? '-5px 0 red' : 'none'
  const beforeShadow = enableShadows ? '5px 0 cyan' : 'none'

  return (
    <>
      <style>{`
        .glitch-text {
          position: relative;
          display: inline-block;
          color: white;
          font-weight: 900;
        }
        .glitch-text::after,
        .glitch-text::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0A0A0F;
          overflow: hidden;
          clip-path: inset(0 0 0 0);
          color: white;
        }
        .glitch-text::after {
          left: 10px;
          text-shadow: ${afterShadow};
          animation: glitch ${afterDuration} infinite linear alternate-reverse;
        }
        .glitch-text::before {
          left: -10px;
          text-shadow: ${beforeShadow};
          animation: glitch ${beforeDuration} infinite linear alternate-reverse;
        }
      `}</style>
      <span
        data-text={children}
        className={`glitch-text ${className}`}
      >
        {children}
      </span>
    </>
  )
}

export default GlitchText
