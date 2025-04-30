'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface GsapFadeInOptions {
  scrollTrigger?: ScrollTrigger.Vars
  delay?: number
  duration?: number
}

export default function useGsapFadeIn(options: GsapFadeInOptions = {}) {
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const anim = gsap.fromTo(
      elementRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || 1,
        delay: options.delay || 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          ...options.scrollTrigger,
        },
      }
    )

    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [options])

  return elementRef
}
