'use client'
import { useRef, useEffect, ReactNode } from 'react'

interface LogoLoopProps {
  items: { icon: ReactNode; label: string; color?: string }[]
  speed?: number
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  iconSize?: string
}

export default function LogoLoop({
  items,
  speed = 35,
  direction = 'left',
  pauseOnHover = true,
  iconSize = 'w-8 h-8',
}: LogoLoopProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const offsetRef = useRef(0)
  const pausedRef = useRef(false)
  const lastTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const totalWidth = track.scrollWidth / 2

    const tick = (time: number) => {
      if (!pausedRef.current) {
        const delta = lastTimeRef.current !== null ? (time - lastTimeRef.current) / 1000 : 0
        lastTimeRef.current = time

        if (direction === 'left') {
          offsetRef.current -= speed * delta
          if (offsetRef.current <= -totalWidth) offsetRef.current += totalWidth
        } else {
          offsetRef.current += speed * delta
          if (offsetRef.current >= 0) offsetRef.current -= totalWidth
        }
        track.style.transform = `translateX(${offsetRef.current}px)`
      } else {
        lastTimeRef.current = null
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    if (pauseOnHover) {
      track.parentElement?.addEventListener('mouseenter', () => { pausedRef.current = true })
      track.parentElement?.addEventListener('mouseleave', () => { pausedRef.current = false })
    }

    return () => cancelAnimationFrame(rafRef.current)
  }, [speed, direction, pauseOnHover])

  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden w-full">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #111118, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #111118, transparent)' }} />

      <div ref={trackRef} className="flex items-center will-change-transform py-2" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 mx-6 group cursor-default"
          >
            <div
              className={`${iconSize} flex items-center justify-center transition-all duration-300`}
              style={{ color: item.color ?? '#ffffff99', filter: `drop-shadow(0 0 6px ${item.color ?? '#6C63FF'}55)` }}
            >
              {item.icon}
            </div>
            <span
              className="text-[11px] font-mono whitespace-nowrap transition-colors duration-300"
              style={{ color: item.color ? `${item.color}cc` : '#ffffff55' }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
