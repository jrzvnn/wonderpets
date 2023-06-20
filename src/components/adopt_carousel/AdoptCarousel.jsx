import React from 'react'
import styles from '@/components/adopt_carousel/adoptcarousel.module.css'

const AdoptCarousel = () => {
  return (
    <div className={styles.wrapper}>
        {/* card */}
        <div className={styles.card}>
            <img src="/assets/icons/cat.svg" alt="" width="50px" />
            <div className={styles.card_label}>
                <span>Adopt a cat</span>
            </div>
        </div>
    </div>
  )
}

export default AdoptCarousel