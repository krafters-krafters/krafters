'use client'

import { useEffect, useRef } from 'react'
import styles from './AutoScrollSlider.module.css'

export default function AutoScrollSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true
      slider.classList.add(styles.active)
      startX = e.pageX
      scrollLeft = slider.scrollLeft
    }

    const handleMouseLeave = () => {
      isDown = false
      slider.classList.remove(styles.active)
    }

    const handleMouseUp = () => {
      isDown = false
      slider.classList.remove(styles.active)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX
      const walk = x - startX
      slider.scrollLeft = scrollLeft - walk
    }

    slider.addEventListener('mousedown', handleMouseDown)
    slider.addEventListener('mouseleave', handleMouseLeave)
    slider.addEventListener('mouseup', handleMouseUp)
    slider.addEventListener('mousemove', handleMouseMove)

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown)
      slider.removeEventListener('mouseleave', handleMouseLeave)
      slider.removeEventListener('mouseup', handleMouseUp)
      slider.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className={styles.slider} ref={sliderRef}>
      <div className={styles.track}>
        {Array(4).fill(0).map((_, i) => (
          <p key={i}>
            All the features that you deserve in an <br />
            adapted back office for your business.
          </p>
        ))}
      </div>
    </div>
  )
}
