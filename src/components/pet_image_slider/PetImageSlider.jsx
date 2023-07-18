"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from '@/components/pet_image_slider/petimageslider.module.css'
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const PetImageSlider = ({ image }) => {
    const [mainImage, setMainImage] = useState(image);
    const storage = getStorage();

    // load image
    useEffect(() => {
        (async () => {
            await loadImage();
        })()
    })


    // download image and get its URL
    async function loadImage() {
        getDownloadURL(ref(storage, image))
            .then((url) => {
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (e) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();

                setMainImage(url);
            })
            .catch((error) => {
                // Handle any errors
            })
    }

    function changeMainImage(e) {
        const imageURL = e.target.getAttribute('value');
        setMainImage(imageURL);
    }

    return (
        <div className={styles.wrapper}>

            {/* main image*/}
            <div>
                <img className={styles.main_image} src={mainImage} alt={"pet image"} width='1000' height='1000' />
            </div>

            { /* side images 
            <div className={styles.images_slide}>
                {
                    images.map((image, i) => (
                        <Image key={image} className={`${styles.image} ${(image == mainImage) ? styles.highlight_image : ''}`} src={image} alt={"pet image"} width='1000' height='1000' onClick={changeMainImage} value={image}></Image>
                    ))
                }
            </div>
            */}
        </div>
    )
}

export default PetImageSlider