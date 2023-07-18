"use client";

import Image from 'next/image'
import React from 'react'
import styles from '@/components/adopt_catalog_card/adoptcatalogcard.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const AdoptCatalogCard = ({ data }) => {
    const materialIcons = "material-icons-outlined"
    const petId = 202;
    const router = useRouter();
    const storage = getStorage();
    const [imageSrc, setImageSrc] = useState('');

    function handlePetInfoPage() {
        router.push(`/adopt/${data.category}/${data.petUid}`);
    }

    // load image to card
    async function loadImage() {
        getDownloadURL(ref(storage, data.imageURL))
            .then((url) => {
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (e) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();

                setImageSrc(url);
            })
            .catch((error) => {
                // Handle any errors
            })
    }

    // async load pet image 
    useEffect(() => {
        (async () => {
            loadImage();
        })()
    }, [])

    return (
        <div className={styles.wrapper} onClick={handlePetInfoPage}>
            <img className={styles.image} src={imageSrc} alt={data.image} width='1000' height='1000' />
            <div className={styles.card_details}>

                {/* Pet Name */}
                <div className={styles.detail}>
                    <span className={`${styles.detail_title} ${materialIcons}`}>pets</span>
                    <span className={styles.detail_value}>{data.name}</span>
                </div>

                {/* Pet Age */}
                <div className={styles.detail}>
                    <span className={`${styles.detail_title} ${materialIcons}`}>today</span>
                    <span className={styles.detail_value}>{data.age}</span>
                </div>

                {/* Pet Size */}
                <div className={styles.detail}>
                    <span className={`${styles.detail_title} ${materialIcons}`}>height</span>
                    <span className={styles.detail_value}>{data.size}</span>
                </div>
            </div>
        </div>
    )
}

export default AdoptCatalogCard