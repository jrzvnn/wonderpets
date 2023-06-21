import React from 'react'
import styles from '@/components/featured_pet/featuredpet.module.css'

const FeaturedPet = ({petName, petImageURL, description}) => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.featured}>Featured Pet</h2>
        <h2 className={styles.featured_pet}>{petName}</h2>
        <img className={styles.featured_img} src={petImageURL} alt="featured pet image" />
        <p className={styles.description}>{description}</p>
        <button className={styles.featured_pet_button}>Learn More About <span>{petName}</span></button>
    </div>
  )
}

export default FeaturedPet