'use client'
import { useRef, useEffect, ReactNode } from 'react'

interface InfiniteScrollProps {
  items: { content: ReactNode }[]
  speed?: number
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  className?: string
  itemClassName?: string
}

export default function InfiniteScroll({
  items,
  speed = 40,
  direction = 'left',
  pauseOnHover = true,
  className = '',
  itemClassName = '',
}: InfiniteScrollProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const totalWidth = track.scrollWidth / 2
    let startTime: number | null = null
    let offset = direction === 'left' ? 0 : -totalWidth
    let animId: number
    let paused = false

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      if (!paused) {
        const delta = (timestamp - (startTime || timestamp)) / 1000
        startTime = timestamp
        if (direction === 'left') {
          offset -= speed * delta
          if (offset <= -totalWidth) offset += totalWidth
        } else {
          offset += speed * delta
          if (offset >= 0) offset -= totalWidth
        }
        track.style.transform = `translateX(${offset}px)`
      }
      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    if (pauseOnHover) {
      track.addEventListener('mouseenter', () => { paused = true })
      track.addEventListener('mouseleave', () => { paused = false; startTime = null })
    }

    return () => cancelAnimationFrame(animId)
  }, [speed, direction, pauseOnHover])

  const doubled = [...items, ...items]

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex will-change-transform" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <div key={i} className={`flex-shrink-0 ${itemClassName}`}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  )
}
