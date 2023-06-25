"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from '@/components/pet_image_slider/petimageslider.module.css'

const PetImageSlider = ({images}) => {
    const [mainImage, setMainImage] = useState(images[0]);

    function changeMainImage(e) {
        const imageURL = e.target.getAttribute('value'); 
        setMainImage(imageURL);
    }

    return (
        <div className={styles.wrapper}>

            {/* main image*/}
            <div>
                <Image className={styles.main_image} src={mainImage} alt={"pet image"} width='1000' height='1000'></Image>
            </div>

            { /* side images */}
            <div className={styles.images_slide}>
                {
                    images.map((image, i) => (
                        <Image key={image} className={`${styles.image} ${(image == mainImage) ? styles.highlight_image : ''}`} src={image} alt={"pet image"} width='1000' height='1000' onClick={changeMainImage} value={image}></Image>
                    ))
                }
            </div>
        </div>
    )
}

export default PetImageSlider