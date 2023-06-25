import Image from 'next/image'
import React from 'react'
import styles from '@/components/adopt_catalog_card/adoptcatalogcard.module.css'
import Link from 'next/link'

const AdoptCatalogCard = ({ imageURL, imageAlt, name, age, size, category }) => {
    const materialIcons = "material-icons-outlined"
    const petId = 202;

    return (
        <div className={styles.wrapper}>
            <Link href={`/adopt/${category}/${petId}`}>
            {/* Pet Image */}
            <Image className={styles.image} src={imageURL} alt={imageAlt} width='1000' height='1000'></Image>
            <div className={styles.card_details}>

                {/* Pet Name */}
                <div className={styles.detail}>
                    <span className={`${styles.detail_title} ${materialIcons}`}>pets</span>
                    <span className={styles.detail_value}>{name}</span>
                </div>

                {/* Pet Age */}
                <div className={styles.detail}>
                    <span className={`${styles.detail_title} ${materialIcons}`}>today</span>
                    <span className={styles.detail_value}>{age}</span>
                </div>

                {/* Pet Size */}
                <div className={styles.detail}>
                    <span className={`${styles.detail_title} ${materialIcons}`}>height</span>
                    <span className={styles.detail_value}>{size}</span>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default AdoptCatalogCard