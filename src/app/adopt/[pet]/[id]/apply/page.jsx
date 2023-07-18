"use client";

import React from 'react';
import styles from '@/app/adopt/[pet]/[id]/apply/page.module.css';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { getPet } from '@/app/firebase/pets';
import { submitApplication } from '@/app/firebase/application';
import { getStorage, getDownloadURL, ref } from 'firebase/storage';

/* bootstrap css */
import "bootstrap/dist/css/bootstrap.css"

const Apply = () => {
    const [imageSrc, setImageSrc] = useState('');
    const [isImage, setIsImage] = useState(true);
    const [image, setImage] = useState(null);
    const formRef = useRef();
    const pathName = usePathname();
    const [petName, setPetName] = useState('Pet Name');
    const [petImageSrc, setPetImageSrc] = useState('');
    const storage = getStorage();

    // display uploaded image
    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            const imageTypes = ["image/jpeg", "image/png", "image/jpg"];

            if (imageTypes.includes(i.type)) {
                setImage(i);
                setImageSrc(URL.createObjectURL(i));
                setIsImage(true);
            } else {
                alert(".png, .jpg, and .jpeg image file type is only allowed.");
                setIsImage(false);
                //location.reload();
            }
        }
    }

    // load pet image
    async function loadImage(imageURL) {
        getDownloadURL(ref(storage, imageURL))
            .then((url) => {
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (e) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();

                setPetImageSrc(url);
            })
            .catch((error) => {
                // Handle any errors
            })
    }

    // load pet image and pet name 
    useEffect(() => {
        let petUid = pathName.split("/");
        petUid = petUid[petUid.length - 2];
        async function getPetImageURL(petUid) {
            const petData = (await getPet(petUid));
            (await loadImage(petData.imageURL));
            setPetName(petData.name);
        }
        getPetImageURL(petUid);
    }, []);

    // application form submit action
    async function handleSubmit(event) {
        event.preventDefault();
        if (confirm("Are you sure you want to submit the application?")) {
            const applicationData = Object.fromEntries(new FormData(formRef.current).entries());
            let petUid = pathName.split("/");
            let petData = {}
            petUid = petUid[petUid.length - 2];

            if (isImage) {
                petData = await getPet(petUid);
                applicationData.ownerUid = petData.ownerUid;
                applicationData.petUid = petData.petUid;


                // submit data 
                await submitApplication(applicationData);
                alert("Application Submitted!");

                //console.log(petData);
                //console.log(applicationData);

                location.reload();
            } else {
                alert("Application Submssion Failed!");
            }
        }
    }

    /* bootstrap js */
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return (
        <div className={`${styles.apply_wrapper}`}>
            <h1 className={`${styles.apply_h1}`}>Application Form</h1>
            <p className={`${styles.apply_sub}`}>Thank you for considering adoption at Wonder Pets. We are excited that you are one step closer on giving a loving home to your new best friend.</p>

            {/* pet image and name */}
            <div className={`${styles.pet_wrapper}`}>
                <img src={petImageSrc} alt="pet image" className={`${styles.pet_image}`} />
                <h2 className={`${styles.pet_name}`}>{petName}</h2>
            </div>

            <form ref={formRef} className={`${styles.form}`} onSubmit={handleSubmit}>
                {/* full name */}
                <label for="name" className={`form-label`}>Full Name<span className={`${styles.required}`}>*</span></label>
                <input type="text" name="name" className={`form-control`} id="name" placeholder="Maria Clara" required />

                {/* sex */}
                <label for="sex" className={`form-label`}>Sex<span className={`${styles.required}`}>*</span></label>
                <select name="sex" id="sex" className={`form-select`} required>
                    <option value="male">Male</option>
                    <option value="female" selected>Female</option>
                </select>

                {/* birthdate */}
                <label for="birthdate" className={`form-label`}>Birthdate<span className={`${styles.required}`}>*</span></label>
                <input type="date" name="birthdate" id="birthdate" className={`form-control`} required />

                {/* address */}
                <label for="address" className={`form-label`}>Address<span className={`${styles.required}`}>*</span></label>
                <input type="text" name="address" id="address" className={`form-control`} required placeholder='12 Mabuhay St., San Diego City, Laguna' />

                {/* phone */}
                <label for="contact" className={`form-label`}>Phone<span className={`${styles.required}`}>*</span></label>
                <input type="text" name="contact" id="contact" className={`form-control`} required placeholder='09xxxxxxxxx' />

                {/* email */}
                <label for="email" className={`form-label`}>Email<span className={`${styles.required}`}>*</span></label>
                <input type="email" name="email" id="email" className={`form-control`} required placeholder='mariaclara@gmail.com' />

                {/* occupation */}
                <label for="occupation" className={`form-label`}>Occupation<span className={`${styles.required}`}>*</span></label>
                <input type="text" name="occupation" id="occupation" className={`form-control`} required placeholder='type N/A if unemployed' />

                {/* eligibility */}
                <label for="eligibility" className={`form-label`}>Eligibility<span className={`${styles.required}`}>*</span></label>
                <textarea name="eligibility" id="eligibility" cols="" rows="5" placeholder='Please state your reason why you want to adopt and take care of our pet' className={`form-control`} required></textarea>

                {/* responsibility */}
                <label for="responsibility" className={`form-label`}>Responsibility<span className={`${styles.required}`}>*</span></label>
                <textarea name="responsibility" id="responsibility" cols="" rows="3" placeholder='Who will take care of the pet besides you?' className={`form-control`} required></textarea>

                {/* environment */}
                <label for="environment" className={`form-label`}>Environment<span className={`${styles.required}`}>*</span></label>
                <textarea name="environment" id="environment" cols="" rows="5" placeholder='Please describe the new environment the pet will live in' className={`form-control`} required></textarea>

                <label for="image" className={`form-label`}>To verify your identity, please take a selfie picture together with your government valid id<span className={`${styles.required}`}>*</span></label>
                <input id="image" name="image" type="file" accept="image/jpeg, image/png, image/jpg" className={`form-control`} aria-describedby="imageHelp" required onChange={uploadToClient} />
                <div id="imageHelp" className={`form-text`}>We value your privacy. We'll never share your image with anyone else.</div>
                <img src={imageSrc} alt="" className={`${styles.image}`} />

                <button type='submit' className={`btn btn-success ${styles.btnSubmit}`}>Submit Application</button>
            </form>
        </div>
    )
}

export default Apply

