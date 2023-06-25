import React from 'react'
import styles from '@/components/adopt_header/adoptheader.module.css'
import Image from 'next/image'

const AdoptHeader = ({headerTitle, imageURL, imageAlt}) => {
  
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header_title}>{headerTitle}</h2>
      <Image className={styles.image} src={imageURL} alt={imageAlt} width='1000' height='1000'></Image>
    </div>
  )
}

export default AdoptHeader