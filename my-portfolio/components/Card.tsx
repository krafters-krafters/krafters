import React from 'react'
import styles from './Card.module.css'
import Button from './Button'

type CardProps = {
  image?: string
  title?: string
  subtitle?: string
  primaryButton?: { label: string; onClick?: () => void }
  secondaryButton?: { label: string; onClick?: () => void }
  borders?: boolean
  background?: string
  shadows?: boolean
}

export default function Card({
  image,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  borders = false,
  background,
  shadows = false,
}: CardProps) {
  // Prepare dynamic style
  const backgroundStyle = background
  ? background.startsWith('url(') || background.startsWith('http') || background.startsWith('/')
    ? { backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background }
  : undefined


  return (
    <div
      className={`
        ${styles.card}
        ${borders ? styles.cardWithBorder : ''}
        ${shadows ? styles.cardWithShadow : ''}
      `}
      style={backgroundStyle}
    >
      {image && <img src={image} alt="Card image" className={styles.image} />}

      {title && <h2 className={styles.title}>{title}</h2>}

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

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
