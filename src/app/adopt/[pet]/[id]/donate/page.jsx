"use client";

import React from "react";
import styles from "@/app/adopt/[pet]/[id]/donate/page.module.css";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { getPet } from "@/app/firebase/pets";
import { submitDonation } from "@/app/firebase/donation";
import { getStorage, getDownloadURL, ref } from "firebase/storage";

/* bootstrap css */
import "bootstrap/dist/css/bootstrap.css";

const Donate = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [isImage, setIsImage] = useState(true);
  const [image, setImage] = useState(null);
  const formRef = useRef();
  const pathName = usePathname();
  const [petName, setPetName] = useState("Pet Name");
  const [petImageSrc, setPetImageSrc] = useState("");
  const storage = getStorage();
  const [donationType, setDonationType] = useState("incash");

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
  };

  // load pet image
  async function loadImage(imageURL) {
    getDownloadURL(ref(storage, imageURL))
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (e) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();

        setPetImageSrc(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }

  // load pet image and pet name
  useEffect(() => {
    let petUid = pathName.split("/");
    petUid = petUid[petUid.length - 2];
    async function getPetImageURL(petUid) {
      const petData = await getPet(petUid);
      await loadImage(petData.imageURL);
      setPetName(petData.name);
    }
    getPetImageURL(petUid);
  }, []);

  // donation form submit action
  async function handleSubmit(event) {
    event.preventDefault();
    if (confirm("Are you sure you want to submit the donation?")) {
      const donationData = Object.fromEntries(
        new FormData(formRef.current).entries()
      );
      let petUid = pathName.split("/");
      let petData = {};
      petUid = petUid[petUid.length - 2];

      if (isImage) {
        petData = await getPet(petUid);
        donationData.ownerUid = petData.ownerUid;
        donationData.petUid = petData.petUid;

        // submit data
        await submitDonation(donationData);
        alert("Donation Submitted!");

        //console.log(petData);
        //console.log(donationData);

        location.reload();
      } else {
        alert("Donation Submission Failed!");
      }
    }
  }

  /* bootstrap js */
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  // handle donation type change
  const handleDonationTypeChange = (event) => {
    setDonationType(event.target.value);
  };

  return (
    <div className={`${styles.donate_wrapper}`}>
      <h1 className={`${styles.donate_h1}`}>Donation Form</h1>
      <p className={`${styles.donate_sub}`}>
        Thank you for considering donating to Wonder Pets. Your contribution
        will make a difference in the lives of our furry friends.
      </p>

      {/* pet image and name */}
      <div className={`${styles.pet_wrapper}`}>
        <img
          src={petImageSrc}
          alt="pet image"
          className={`${styles.pet_image}`}
        />
        <h2 className={`${styles.pet_name}`}>{petName}</h2>
      </div>

      <form ref={formRef} className={`${styles.form}`} onSubmit={handleSubmit}>
        {/* full name */}
        <label htmlFor="name" className={`form-label`}>
          Full Name<span className={`${styles.required}`}>*</span>
        </label>
        <input
          type="text"
          name="name"
          className={`form-control`}
          id="name"
          placeholder="Maria Clara"
          required
        />

        {/* sex */}
        <label htmlFor="sex" className={`form-label`}>
          Sex<span className={`${styles.required}`}>*</span>
        </label>
        <select name="sex" id="sex" className={`form-select`} required>
          <option value="male">Male</option>
          <option value="female" selected>
            Female
          </option>
        </select>

        {/* birthdate */}
        <label htmlFor="birthdate" className={`form-label`}>
          Birthdate<span className={`${styles.required}`}>*</span>
        </label>
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          className={`form-control`}
          required
        />

        {/* address */}
        <label htmlFor="address" className={`form-label`}>
          Address<span className={`${styles.required}`}>*</span>
        </label>
        <input
          type="text"
          name="address"
          id="address"
          className={`form-control`}
          required
          placeholder="12 Mabuhay St., San Diego City, Laguna"
        />

        {/* phone */}
        <label htmlFor="contact" className={`form-label`}>
          Phone<span className={`${styles.required}`}>*</span>
        </label>
        <input
          type="text"
          name="contact"
          id="contact"
          className={`form-control`}
          required
          placeholder="09xxxxxxxxx"
        />

        {/* email */}
        <label htmlFor="email" className={`form-label`}>
          Email<span className={`${styles.required}`}>*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={`form-control`}
          required
          placeholder="mariaclara@gmail.com"
        />

        {/* donation type */}
        <label htmlFor="donationType" className={`form-label`}>
          Donation Type<span className={`${styles.required}`}>*</span>
        </label>
        <select
          name="donationType"
          id="donationType"
          className={`form-select`}
          required
          value={donationType}
          onChange={handleDonationTypeChange}
        >
          <option value="incash">In-Cash</option>
          <option value="inkind">In-Kind</option>
        </select>

        {/* inkind donation options */}
        {donationType === "inkind" && (
          <div id="inkindDonationOptions">
            <label htmlFor="petFood" className={`form-label`}>
              Pet Foods (kg)
            </label>
            <input
              type="number"
              name="petFood"
              id="petFood"
              className={`form-control`}
              min="0"
            />

            <label htmlFor="cleaningSupply" className={`form-label`}>
              Cleaning Supplies (pcs)
            </label>
            <input
              type="number"
              name="cleaningSupply"
              id="cleaningSupply"
              className={`form-control`}
              min="0"
            />

            <label htmlFor="toysTreats" className={`form-label`}>
              Toys and Treats (pcs)
            </label>
            <input
              type="number"
              name="toysTreats"
              id="toysTreats"
              className={`form-control`}
              min="0"
            />

            <label htmlFor="medications" className={`form-label`}>
              Medications and Supplements (pcs)
            </label>
            <input
              type="number"
              name="medications"
              id="medications"
              className={`form-control`}
              min="0"
            />
          </div>
        )}

        {/* incash donation options */}
        {donationType === "incash" && (
          <div id="incashDonationOptions">
            <label htmlFor="amount" className={`form-label`}>
              Amount<span className={`${styles.required}`}>*</span>
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              className={`form-control`}
              min="0"
              required
            />
          </div>
        )}

        {/* message */}
        <label htmlFor="message" className={`form-label`}>
          Message<span className={`${styles.required}`}>*</span>
        </label>
        <textarea
          name="message"
          id="message"
          cols=""
          rows="5"
          placeholder="Leave a message (optional)"
          className={`form-control`}
        ></textarea>

        {/* donation image */}
        <label htmlFor="image" className={`form-label`}>
          Upload a picture of your donation
          <span className={`${styles.required}`}>*</span>
        </label>
        <input
          id="image"
          name="image"
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          className={`form-control`}
          aria-describedby="imageHelp"
          required
          onChange={uploadToClient}
        />
        <div id="imageHelp" className={`form-text`}>
          We appreciate your generosity. Please upload an image of your
          donation or the receipt.
        </div>
        <img src={imageSrc} alt="" className={`${styles.image}`} />

        <button type="submit" className={`btn btn-success ${styles.btnSubmit}`}>
          Submit Donation
        </button>
      </form>
    </div>
  );
};

export default Donate;
