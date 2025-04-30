'use client'

import React from 'react'
import styles from './Blog.module.css'
import Button from './Button'
import Link from 'next/link'

type BlogProps = {
  image?: string
  title?: string
  subtitle?: string
  slug: string
}

export default function Blog({
  image,
  title,
  subtitle,
  slug,
}: BlogProps) {
  const backgroundImageStyle = image
    ? {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {}

  return (
    <div className={styles.blog} style={backgroundImageStyle}>
      <div className={styles.overlay}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.buttons}>
          <Link href={`/articles/${slug}`}>
            <Button label="See full article" variant="primary" />
          </Link>
        </div>
      </div>
    </div>
  )
}
