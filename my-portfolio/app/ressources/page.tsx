'use client'

import styles from './page.module.css'
import Blog from '@/components/Blog'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useGsapFadeIn from '@/hooks/useGsapFadeIn'

type Article = {
  id: number
  title: string
  subtitle: string
  slug: string
  image?: {
    url: string
  } | null
}

export default function Ressources() {
  const [articles, setArticles] = useState<Article[]>([])

  const heroRef = useGsapFadeIn({ delay: 0.2 })
  const blogRef = useGsapFadeIn({ delay: 0.4 })

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await axios.get('http://localhost:1337/api/articles?populate=*')
        const data = res.data.data.map((item: any) => ({
          id: item.id,
          title: item.title || item.attributes?.title || '',
          subtitle: item.subtitle || item.attributes?.subtitle || '',
          slug: item.slug || item.attributes?.slug || '',
          image: item.image?.url
            ? { url: item.image.url }
            : item.attributes?.image?.data?.attributes?.url
            ? { url: item.attributes.image.data.attributes.url }
            : null,
        }))
        setArticles(data)
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }

    fetchArticles()
  }, [])

  return (
    <main className={styles.body}>
      <div className={styles.hero} ref={heroRef}>
        <h1>Cinquième 1.0</h1>
        <p>
          All the features that you deserve in an <br />
          adapted back office for your business.
        </p>
      </div>

      <div className={styles.blog} ref={blogRef}>
        {articles.map((article) => (
          <Blog
            key={article.id}
            title={article.title}
            subtitle={article.subtitle}
            image={article.image ? `http://localhost:1337${article.image.url}` : undefined}
            slug={article.slug}
          />
        ))}
      </div>
    </main>
  )
}
