import React from 'react'
import styles from './PriceCard.module.css'
import Button from './Button'

type PriceCardProps = {
  title?: string
  subtitle?: string
  text?: string
  primaryButton?: { label: string; onClick?: () => void }
  secondaryButton?: { label: string; onClick?: () => void }
  background?: string
}

export default function PriceCard({
  title,
  subtitle,
  text,
  primaryButton,
  secondaryButton,
  background,
}: PriceCardProps) {
  return (
    <div
      className={`
        ${styles.pricecard}
      `}
      style={background ? { background } : undefined}
    >

      {title && <h2 className={styles.title}>{title}</h2>}

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      {text && <p className={styles.text}>{text}</p>}

      {(primaryButton || secondaryButton) && (
        <div className={styles.buttons}>
          {primaryButton && (
            <Button
              label={primaryButton.label}
              onClick={primaryButton.onClick}
              variant="primary"
            />
          )}
          {secondaryButton && (
            <Button
              label={secondaryButton.label}
              onClick={secondaryButton.onClick}
              variant="secondary"
            />
          )}
        </div>
      )}
    </div>
  )
}
