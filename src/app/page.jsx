"use client"
import styles from '@/app/page.module.css'
import 'material-icons/iconfont/material-icons.css';
import AdoptCarousel from '@/components/adopt_carousel/AdoptCarousel';
import FeaturedPet from '@/components/featured_pet/FeaturedPet';
import Link from 'next/link';

export default function Home() { 
  const materialIcons = "material-icons-outlined"

  return (
    <div className={styles.home}>
      {/* display section*/}
      <div className={styles.display_container}>
        <h1 className={styles.h1}>Where Love Meets HOME.</h1>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quibusdam dolorum sunt.</p>
        <div className={styles.adopt_donate_container}>
          <a href="#adopt_section"><button className={styles.adopt_button}>Adopt</button></a>
          <button className={styles.button_donate}>Donate</button>
        </div>
        <img src={`/assets/stock/dog_display.png`} className={styles.display_img} alt="" />
      </div>

      {/* who are we */}
      <div className={styles.who_are_we_container}>
        <h2>Who Are We?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam placeat id culpa. Necessitatibus possimus quo sequi dicta aliquid architecto voluptatibus, error saepe, consectetur corporis id ad rem, omnis porro sint.</p>
      </div>

      {/* our history, impact, values */}
      <div className={`${styles.hist_imp_val_container}`}>
        <div className={`${styles.hist_imp_val_list_container}`}>
          <span className={`${materialIcons} ${styles.icon}`}>hourglass_top</span>
          <h3>Our History</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, possimus!</p>
        </div>
        <div className={`${styles.hist_imp_val_list_container}`}>
          <span className={`${materialIcons} ${styles.icon}`}>emoji_nature</span>
          <h3 className={`${styles.red}`}>Our Impact</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, possimus!</p>
        </div>
        <div className={`${styles.hist_imp_val_list_container}`}>
          <span className={`${materialIcons} ${styles.icon}`}>cruelty_free</span>
          <h3>Our Values</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, possimus!</p>
        </div>
      </div>

      {/* Adopt Dog and Cat*/}
      <div id="adopt_section" className={`${styles.adopt_dog_cat_wrapper}`}>
        <h2 className={`${styles.adopt_dog_cat_title}`}>Your New Best Friend Is Waiting For You</h2>
        <img class={`${styles.dog_cat_img}`} src="/assets/stock/dog_cat_adopt.png" alt="" /> 
        <Link href='/adopt/dog'><button className={`${styles.dog_cat_button} ${styles.dog_button}`}>Adopt a Dog</button></Link>
        <Link href='/adopt/cat'><button className={`${styles.dog_cat_button} ${styles.cat_button}`}>Adopt a Cat</button></Link>
      </div>

      {/* adopt a dog, cat, bird, fish, cute pet */}
      <AdoptCarousel />

      {/* featured pet */}
      <FeaturedPet petName="TOBY" petImageURL="/assets/stock/featured_pet_example.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, dolor tenetur? Et quisquam debitis quae, illum, numquam molestias, voluptas deleniti placeat impedit nostrum possimus necessitatibus in tempora nobis consequatur asperiores."/>
      

    </div>
  )
}
