'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Navbar.module.css'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Ressources', path: '/ressources' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="/logo.svg" alt="Cinquième Logo" />
          <span className={styles.logoText}>Cinquième</span>
        </div>

        <nav className={styles.nav}>
          {navItems.map(item => (
            <Link
              key={item.path}
              href={item.path}
              className={`${styles.link} ${pathname === item.path ? styles.activeLink : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger for mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </header>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className={styles.overlay}>
          <button
            className={styles.close}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <div className={styles.mobileNav}>
            {navItems.map(item => (
              <Link
                key={item.path}
                href={item.path}
                className={`${styles.mobileLink} ${pathname === item.path ? styles.activeLink : ''}`}
                onClick={() => setMenuOpen(false)} // Close on navigation
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
