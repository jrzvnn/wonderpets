"use client"

import PetImageSlider from '@/components/pet_image_slider/PetImageSlider'
import React from 'react'
import styles from '@/app/adopt/[pet]/[id]/page.module.css'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getPet } from '@/app/firebase/pets'
import { useRouter } from 'next/router'


const Pet = () => {
  const materialIcons = "material-icons-outlined"
  const [petData, setPetData] = useState([]);

  const urlPath = usePathname() + "/apply";
  let url = usePathname();

  // get pet data
  useEffect(() => {
    const fun = async () => {
      const petUid = url.split("/").pop();
      setPetData(await getPet(petUid));
    }
    fun();
  }, []);
  

  return (
    <div className={styles.wrapper}>
      {/* pet images  */}


      {petData.imageURL ? <PetImageSlider image={petData.imageURL} /> : <span>no image</span>
      }

      {/* pet name*/}
      <h2 className={styles.pet_name}>{petData.name}</h2>

      {/* characteristics */}
      <div className={styles.characteristics}>
        {(petData.traits) ?
          petData.traits.map((characteristic) => (
            <span className={styles.characteristic}>{characteristic}</span>
          ))
          : <span></span>
        }
      </div>

      {/* pet bio */}
      <div className={styles.bio}>
        <hr />
        <ul>
          <li><span className={`${materialIcons} ${styles.bio_icon}`}>today</span><span>{petData.age}</span></li>
          <li><span className={`${materialIcons} ${styles.bio_icon}`}>{petData.sex}</span><span>{petData.sex}</span></li>
          <li><span className={`${materialIcons} ${styles.bio_icon}`}>height</span><span>{petData.size}</span></li>
        </ul>
      </div>

      {/* about the pet */}
      <div className={styles.about}>
        {petData.description}
      </div>

      <button className={styles.adopt_button}><a href={urlPath}>Apply to Adopt</a></button>

    </div>
  )
}

export default Pet