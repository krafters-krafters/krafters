'use client'

import PriceCard from '@/components/PriceCard';
import styles from './page.module.css'
import Card from '@/components/Card'
import fadeStyles from '../fadeIn.module.css'
import useGsapFadeIn from '@/hooks/useGsapFadeIn'

export default function Pricing() {

    const heroRef = useGsapFadeIn({ delay: 0.2 })
    const pricecardsRef = useGsapFadeIn({ delay: 0.2 })
    const footerRef = useGsapFadeIn({ delay: 0.2 })

    return (
      <main className={styles.body}>
      <div ref={heroRef} className={`${styles.hero} ${fadeStyles.preHidden}`}>
        <h1>Pricing</h1>
        <p>
          All the features that you deserve in an <br />
          adapted back office for your business.
        </p>
        <div ref={pricecardsRef} className={`${styles.pricecards} ${fadeStyles.preHidden}`}>
          <PriceCard
            background='none'
            title="Starter"
            subtitle="adapted back office for 60DT/mois."
            text="Small businesses : All core features available. No workers space."
            secondaryButton={{label: 'Subscribe' }}>
          </PriceCard>
          <PriceCard
            background='none'
            title="Standard"
            subtitle="adapted back office for 80DT/mois."
            text="Growing brands : All features available. Up to 5 workers in workers space."
            secondaryButton={{label: 'Subscribe' }}>
          </PriceCard>
          <PriceCard
            title="Pro"
            subtitle="adapted back office for 100DT/mois."
            text="Large enterprises : All features available. adapted for your business."
            primaryButton={{label: 'Subscribe' }}>
          </PriceCard>
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
      
    );
  }
  