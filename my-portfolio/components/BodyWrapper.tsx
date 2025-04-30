'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [showOverlay, setShowOverlay] = useState(pathname === '/contact')

  useEffect(() => {
    const body = document.body

    if (pathname === '/contact') {
      body.style.backgroundImage = 'linear-gradient(3.8deg, #243AFF 3.12%, #000000 77.53%)'
      body.style.backgroundSize = 'cover'
      body.style.backgroundRepeat = 'no-repeat'
      body.style.minHeight = '100vh'

      // Show overlay then fade it out
      setShowOverlay(true)
      setTimeout(() => {
        setShowOverlay(false)
      }, 50) // trigger transition
    } else {
      // Reset background
      body.style.backgroundImage = ''
      body.style.backgroundColor = 'black'
      setShowOverlay(false)
    }

    return () => {
      body.style.backgroundImage = ''
      body.style.backgroundColor = 'black'
    }
  }, [pathname])

  return (
    <>
      {showOverlay && <div className="fade-overlay" />}
      <main className={pathname === '/contact' ? '' : 'p-6'}>{children}</main>
    </>
  )
}
