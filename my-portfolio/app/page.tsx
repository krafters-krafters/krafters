'use client'

import styles from './page.module.css'
import Button from '../components/Button'
import { FaArrowRight } from 'react-icons/fa'
import AutoScrollSlider from '@/components/AutoScrollSlider'
import Card from '@/components/Card'
import Animation from '@/components/Animation'
import fadeStyles from './fadeIn.module.css'
import useGsapFadeIn from '@/hooks/useGsapFadeIn'

export default function Home() {

  const heroRef = useGsapFadeIn({ delay: 0.2 })
  const titleRef = useGsapFadeIn({ delay: 0.2 })

  const section2Ref = useGsapFadeIn({ delay: 0.2 })
  const cardsRef = useGsapFadeIn({ delay: 0.2 })
  const section3Ref = useGsapFadeIn({ delay: 0.2 })
  const footerRef = useGsapFadeIn({ delay: 0.2 })

  return (
    <main className={styles.body}>
      <div ref={heroRef} className={`${styles.hero} ${fadeStyles.preHidden}`}>
        <div className={styles.leftcontainer}>
          <p className={styles.pretitle}>You don’t have a website yet ? <span className={styles.pretitlelink}>See how we can help you</span></p>
          <h1 ref={titleRef} className={`${styles.title} ${fadeStyles.preHidden}`}>The Back Office <br /> that you need <br /> for your <span className={styles.ecommerce}>e-commerce</span></h1>
          <p className={styles.subtitle}>All the features that you deserve in an <br /> adapted back office for your business.</p>
          <div className={styles.buttonscontainer}>
            <Button label="Start now" variant="primary" icon={<FaArrowRight />} iconPosition="right" />
            <Button label="See a demo" variant="secondary" />
          </div>
        </div>
        <div className={styles.rightcontainer}>
          <Animation/>
        </div>
      </div>
      <div  ref={section2Ref} className={`${styles.section2} ${fadeStyles.preHidden}`}>
        <p className={styles.paragraph}>
          All the features that you deserve in an <br />
          adapted back office for your business.
        </p>
        <div className={styles.screen}>
          <img className={styles.screenimage} src="Dashboard.png" alt="Dashboard picture" />
          <img className={styles.screenimage2} src="Dashboardm.png" alt="Dashboard mobile picture" />
        </div>
        <div className={styles.slidingbarcontainer}>
        <AutoScrollSlider></AutoScrollSlider>
        </div>
        <div ref={cardsRef} className={`${styles.cards} ${fadeStyles.preHidden}`}>
        <Card
          title="The Back Office that you need for your business"
          subtitle="All the essential tools built to support your Tunisian e-commerce in one powerful back office."
          secondaryButton={{label: 'More info' }}
        />
        <Card borders shadows
          title='Clean Live Dashboard'
          image='dashboardicon.svg'
          subtitle='Track sales, clients, and orders in real time with an intuitive dashboard.'
        />
        <Card borders shadows
          title='Real-time Orders'
          image='ordersicon.svg'
          subtitle='Instant updates for every order placed, helping you manage your store more efficiently.'
        />
        <Card borders shadows
          title='Organized Products'
          image='productsicon.svg'
          subtitle='Easily list, group, and manage your products with a system designed for simplicity.'
        />
        <Card borders shadows
          title='Flexible Categories'
          image='categoriesicon.svg'
          subtitle='Create, update, and display custom categories to match the needs of your product catalog.'
        />
        <Card borders shadows
          title='Creative Discounts'
          image='discounticon.svg'
          subtitle='Design attractive promotions for holidays, events, and more to boost your local online sales.'
        />
        <Card borders shadows
          title='Users Management'
          image='usersicon.svg'
          subtitle='Control who accesses your back office with clear roles and permissions tailored for your team.'
        />
        <Card borders shadows
          title='Dedicated Workers Space'
          image='logo.svg'
          subtitle='Offer a clean, separate space for staff to handle operations while you keep full control.'
        />
        </div>
      </div>
      <div ref={section3Ref} className={`${styles.section3} ${fadeStyles.preHidden}`}>
        <p className={styles.paragraph}>
          See Cinquième <br /> in action.
        </p>
        <div className={styles.gallery}>
          <div className={styles.galleryitem1}> 
            <div className={styles.videoinsert}>
              <video autoPlay muted loop >
                <source src='Dashboardvideo.mp4' type="video/mp4"/>
              </video>
            </div> 
          </div>
          <div className={styles.galleryitem2}>
            <div className={styles.imageinsert}>
              <img src="galleryimage1.png" alt="Gallery Image 1" />
            </div> 
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.galleryitem2}>
            <div className={styles.imageinsert}>
            <img src="galleryimage2.png" alt="Gallery Image 1" />
            </div>
          </div>
          <div className={styles.galleryitem1}>
            <div className={styles.videoinsert}>
              <video autoPlay muted loop >
                <source src='productsvideo.mp4' type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div ref={footerRef} className={`${styles.footer} ${fadeStyles.preHidden}`}>
          <div className={styles.cards2container}>
            <Card
            title="The Back Office that you need for your business"
            subtitle="All the features that you deserve in an adapted back office for your business."
            secondaryButton={{label: 'More info'}}
            background='none'
            />
            <Card shadows
              background='/Background1.png'
            />
            <Card shadows
              background='/Background2.png'
            />
            <Card shadows
              background='/Background3.png'
            />
          </div>
          <div className={styles.info}>
            <div className={styles.infoitem}>
              <p>All the features that you deserve in an adapted back office for your business.</p>
              <p>All the features that you deserve in an adapted back office for your business.</p>
              <p>All the features that you deserve in an adapted back office for your business.</p>
            </div>
            <div className={styles.infoitem}>
              <p>All the features that you deserve in an adapted back office for your business.</p>
              <p>All the features that you deserve in an adapted back office for your business.</p>
              <p>All the features that you deserve in an adapted back office for your business.</p>
            </div>
            <div className={styles.infoitem}>
              <p>All the features that you deserve in an adapted back office for your business.</p>
              <p>All the features that you deserve in an adapted back office for your business.</p>
              <p>All the features that you deserve in an adapted back office for your business.</p>
            </div>
            <div className={styles.infoitem}>
              <p>All the features that you deserve in an adapted back office for your business.</p>
              <p>All the features that you deserve in an adapted back office for your business.</p>
              <p>All the features that you deserve in an adapted back office for your business.</p>
            </div>
          </div>
      </div>
    </main>
  )
}
