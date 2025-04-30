'use client'

import styles from './Animation.module.css'
import React, { useState } from 'react'

export default function Animation() {
  const [isActive, setIsActive] = useState(false)

  const handleMouseDown = () => {
    setIsActive(true)
  }

  const handleMouseUp = () => {

    setTimeout(() => {
      setIsActive(false)
    }, 500)
  }

  return (
    <div
      className={`${styles.firewrapper} ${isActive ? styles.active : ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={styles.fire}>
        <div className={styles.fireleft}>
          <div className={styles.mainfire}></div>
          <div className={styles.particlefire}></div>
        </div>
        <div className={styles.firecenter}>
          <div className={styles.mainfire}></div>
          <div className={styles.particlefire}></div>
        </div>
        <div className={styles.fireright}>
          <div className={styles.mainfire}></div>
          <div className={styles.particlefire}></div>
        </div>
        <div className={styles.firebottom}>
          <div className={styles.mainfire}></div>
        </div>
      </div>
    </div>
  )
}
