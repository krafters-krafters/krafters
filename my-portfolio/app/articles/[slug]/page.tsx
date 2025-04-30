'use client'

import styles from './page.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

type Article = {
  id: number
  title: string
  subtitle: string
  slug: string
  content: string
  image?: {
    url: string
  } | null
}

export default function ArticlePage() {
  const { slug } = useParams()
  const router = useRouter()
  const [article, setArticle] = useState<Article | null>(null)

  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await axios.get(
          `http://localhost:1337/api/articles?filters[slug][$eq]=${slug}&populate=*`
        )

        const data = res.data.data?.[0]

        if (!data) return

        setArticle({
          id: data.id,
          title: data.title || data.attributes?.title,
          subtitle: data.subtitle || data.attributes?.subtitle,
          slug: data.slug || data.attributes?.slug,
          content: data.content || data.attributes?.content,
          image: data.image?.url
            ? { url: data.image.url }
            : data.attributes?.image?.data?.attributes?.url
            ? { url: data.attributes.image.data.attributes.url }
            : null,
        })
      } catch (error) {
        console.error('Failed to fetch article:', error)
      }
    }

    fetchArticle()
  }, [slug])

  if (!article) return <p>Loading...</p>

  return (
    <main className={styles.body}>
      <button onClick={() => router.back()}>
        ← Back
      </button>
      <div className={styles.hero}>
        <h1>{article.title}</h1>
        <h3>{article.subtitle}</h3>
        {article.image && (
        <img
          src={`http://localhost:1337${article.image.url}`}
          alt="Article"
        />
      )}
      </div>

      <p className={styles.paragraph}>
        {article.content}
      </p>
    </main>
  )
}
