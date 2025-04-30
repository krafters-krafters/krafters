'use client'

import { useState } from 'react'
import styles from './page.module.css'
import Button from '@/components/Button'
import { FaArrowRight } from 'react-icons/fa'
import fadeStyles from '@/app/fadeIn.module.css'
import useGsapFadeIn from '@/hooks/useGsapFadeIn'

export default function Contact() {
  const heroRef = useGsapFadeIn({ delay: 0.2 })
  const formcontainerRef = useGsapFadeIn({ delay: 0.4 })

  const [message, setMessage] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (res.ok) {
      setMessage('Message sent!')
    } else {
      setMessage('Error sending message.')
    }
  }

  return (
    <main className={styles.body}>
                  <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      <div ref={heroRef} className={`${styles.hero} ${fadeStyles.preHidden}`}>
        <h1>Contact</h1>
        <p>Have questions about Cinquième or need assistance setting up your back office? Our team is ready to support you. Reach out to us and we'll get back to you as soon as possible.

</p>
      </div>
      <div ref={formcontainerRef} className={`${styles.formcontainer} ${fadeStyles.preHidden}`}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <Button label="Send" variant="primary" icon={<FaArrowRight />} iconPosition="right"/>

        </form>
      </div>
    </main>
  )
}
