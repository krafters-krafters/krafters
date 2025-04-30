'use client'

import styles from './Button.module.css'
import { ReactNode } from 'react'

interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  onClick?: () => void
}

export default function Button({
  label,
  variant = 'primary',
  icon,
  iconPosition = 'left',
  onClick,
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {icon && iconPosition === 'left' && (
        <span className={`${styles.icon} ${styles['icon-slide']}`}>{icon}</span>
      )}
      <span>{label}</span>
      {icon && iconPosition === 'right' && (
        <span className={`${styles.icon} ${styles['icon-slide']}`}>{icon}</span>
      )}
    </button>
  )
}
