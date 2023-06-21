import React from 'react'
import styles from '@/components/adopt_card/adoptcard.module.css'
import Link from 'next/link'

const AdoptCard = ({imageURL, imageAlt, adoptTitle, routeURL, disable}) => {
  return (
    <div className={styles.wrapper} draggable={'false'}>
        {/* card */}
        <Link href={routeURL} className={disable}>
          <div className={styles.card}>
              <img src={imageURL} alt={imageAlt}/>
              <div className={styles.card_label}>
                  <span>{adoptTitle}</span>
              </div>
          </div>
        </Link>
    </div>
  )
}

export default AdoptCard