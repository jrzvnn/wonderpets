import PetImageSlider from '@/components/pet_image_slider/PetImageSlider'
import React from 'react'
import styles from '@/app/adopt/[pet]/[id]/page.module.css'

const Pet = () => {
  const materialIcons = "material-icons-outlined"
  const images = ['/assets/stock/smudge_0.jpg', '/assets/stock/smudge_1.jpg', '/assets/stock/smudge_2.jpg'];
  const petName = "Smudge";
  const characteristics = ['Curious', 'Friendly', 'Loving'];

  return (
    <div className={styles.wrapper}>
      {/* pet images */}
      <PetImageSlider images={images} />

      {/* pet name*/}
      <h2 className={styles.pet_name}>{petName}</h2>

      {/* characteristics */}
      <div className={styles.characteristics}>
        {
          characteristics.map((characteristic) => (
            <span className={styles.characteristic}>{characteristic}</span>
          ))
        }
      </div>

      {/* pet bio */}
      <div className={styles.bio}>
        <hr />
        <ul>
          <li><span className={`${materialIcons} ${styles.bio_icon}`}>today</span><span>Adult</span></li>
          <li><span className={`${materialIcons} ${styles.bio_icon}`}>male</span><span>Male</span></li>
          <li><span className={`${materialIcons} ${styles.bio_icon}`}>height</span><span>Medium</span></li>
        </ul>
      </div>

      {/* about the pet */}
      <div className={styles.about}>
        Smudge the Cat, also known as Cat at Dinner Table and the handle @smudge_lord on Instagram , is a white cat who rose to fame online for appearing in a photograph seated in front of a salad plate from the Woman Yelling at a Cat meme, sometimes referred to as Confused Cat at Dinner.
      </div>

      <button className={styles.adopt_button}>Apply to Adopt</button>

    </div>
  )
}

export default Pet