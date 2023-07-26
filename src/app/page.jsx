"use client";
import styles from "@/app/page.module.css";
import "material-icons/iconfont/material-icons.css";
import AdoptCarousel from "@/components/adopt_carousel/AdoptCarousel";
import FeaturedPet from "@/components/featured_pet/FeaturedPet";
import Link from "next/link";

export default function Home() {
  const materialIcons = "material-icons-outlined";

  return (
    <div className={styles.home}>
      {/* display section*/}
      <div className={styles.display_container}>
        <h1 className={styles.h1}>Where Love Meets HOME.</h1>
        <p className={styles.subtitle}>
          Welcome to “Wonder Pets: Where Love Meets Home” Your Path to Pet
          Adoption! we aim to bring about a world where there are no more
          homeless pets.
        </p>
        <div className={styles.adopt_donate_container}>
          <a href="#adopt_section">
            <button className={styles.adopt_button}>Adopt</button>
          </a>
          <button className={styles.button_donate}>Donate</button>
        </div>
        <br />
        <br />
        <img
          src={`/assets/stock/dog_display.png`}
          className={styles.display_img}
          alt=""
        />
      </div>

      {/* who are we */}
      <div className={styles.who_are_we_container}>
        <h2>Who Are We?</h2>
        <p>
          PAWSsion Project Foundation INC. is a Philippine-based non-profit
          organization with a profound dedication to the welfare of animals,
          founded in October 2018 by Malou Perez. PAWSsion Project's mission
          centers around a dedication of creating a home for animals that have
          experienced hardship. Their unwavering resolve drives them to confront
          the urgent problems associated with animal abuse and neglect, actively
          combating the prevalent difficulties encountered by stray animals
          throughout the Philippines.
        </p>
      </div>

      {/* our history, impact, values */}
      <div className={`${styles.hist_imp_val_container}`}>
        <div className={`${styles.hist_imp_val_list_container}`}>
          <span className={`${materialIcons} ${styles.icon}`}>
            hourglass_top
          </span>
          <h3>Our History</h3>
          <p>
            Founded in 2018, the organization has significantly impacted animal
            lives through extensive network, facilitating rescues, providing
            medical treatment, and matching animals with loving homes.
          </p>
        </div>
        <div className={`${styles.hist_imp_val_list_container}`}>
          <span className={`${materialIcons} ${styles.icon}`}>
            emoji_nature
          </span>
          <h3 className={`${styles.red}`}>Our Impact</h3>
          <p>
            Since 2019, PAWSsion project rescues 200 pets, and over 600 rehomed
            animals.
          </p>
        </div>
        <div className={`${styles.hist_imp_val_list_container}`}>
          <span className={`${materialIcons} ${styles.icon}`}>
            cruelty_free
          </span>
          <h3>Our Values</h3>
          <p>
            PAWSsion project dedicated to rescue, rehabilitate, and rehome
            abused, abandoned and neglected animals.
          </p>
        </div>
      </div>

      {/* Adopt Dog and Cat*/}
      <br />
      <br />
      <br />
      <div id="adopt_section" className={`${styles.adopt_dog_cat_wrapper}`}>
        <h2 className={`${styles.adopt_dog_cat_title}`}>
          Your New Best Friend Is Waiting For You
        </h2>
        <img
          class={`${styles.dog_cat_img}`}
          src="/assets/stock/dog_cat_adopt.png"
          alt=""
        />
        <Link href="/adopt/dog">
          <button className={`${styles.dog_cat_button} ${styles.dog_button}`}>
            Adopt a Dog
          </button>
        </Link>
        <Link href="/adopt/cat">
          <button className={`${styles.dog_cat_button} ${styles.cat_button}`}>
            Adopt a Cat
          </button>
        </Link>
      </div>

      {/* adopt a dog, cat, bird, fish, cute pet */}
      <AdoptCarousel />

      {/* featured pet */}
      <FeaturedPet
        petName="TOBY"
        petImageURL="/assets/stock/featured_pet_example.png"
        description="Lovely Toby loves people, cuddling toys, and giving lots of kisses! Toby is looking to find a forever home with a family who appreciates his maturity and is happy to load him up with lots of pets and belly rubs.
        "
      />
    </div>
  );
}
