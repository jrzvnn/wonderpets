import styles from '@/app/page.module.css'
import 'material-icons/iconfont/material-icons.css';

export default function Home() { 
  const displayImgs = ["cat_display.png", "bird_display.png", "fish_display.png", "dog_display.png", "cute_animal_display.png"]
  const displayImgURL = `assets/stock/${displayImgs[Math.floor(Math.random() * displayImgs.length)]}`
  const materialIcons = "material-icons-outlined"

  return (
    <div className={styles.home}>
      {/* display section*/}
      <div className={styles.display_container}>
        <h1 className={styles.h1}>Where Love Meets HOME.</h1>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quibusdam dolorum sunt.</p>
        <div className={styles.adopt_donate_container}>
          <button>Adopt</button>
          <button className={styles.button_donate}>Donate</button>
        </div>
        <img src={displayImgURL} className={styles.display_img} alt="" />
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
          <h3>Our Impact</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, possimus!</p>
        </div>
        <div className={`${styles.hist_imp_val_list_container}`}>
          <span className={`${materialIcons} ${styles.icon}`}>cruelty_free</span>
          <h3>Our Values</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, possimus!</p>
        </div>
      </div>

      {/* adopt a dog, cat, bird, fish, cute pet */}
      {/* implement a draggable caroussel, each slide for each pet */}

      {/* featured pets */}
      {/* implement a draggable caroussel, each slide for each pet category*/}

    </div>
  )
}
