import React from "react";
import styles from "@/components/footer/footer.module.css";
import "material-icons/iconfont/material-icons.css";

const Footer = () => {
  const materialIcons = "material-icons-outlined";
  const footerLogoURL = "/assets/icons/wonderpets_logo_gradient.png";

  return (
    <footer className={styles.footer_container}>
      <div className={`${styles.footer_logo}`}>
        <img src={footerLogoURL} alt="" />
        <h3>Wonder Pets</h3>
      </div>
      <div className={`${styles.follow_us}`}>
        <div className={`${styles.footer_follow_icons}`}>
          <a href="https://www.instagram.com/wonderpets_2023/">
            <img src="/assets/icons/instagram.svg" alt="instagram icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100094866736585">
            <img src="/assets/icons/facebook.svg" alt="facebook icon" />
          </a>
          <a href="https://twitter.com/WonderPets_2023">
            <img src="/assets/icons/twitter.svg" alt="twitter icon" />
          </a>
          <a href="https://www.youtube.com/channel/UCqBhG82lRd1KamKYRpAVCrw">
            <img src="/assets/icons/youtube.svg" alt="youtube icon" />
          </a>
        </div>
        <p>Follow Us</p>
      </div>
      <div className={`${styles.contact}`}>
        <div>
          <div className={`${styles.email}`}>
            <span className={`${materialIcons} ${styles.email_icon}`}>
              email
            </span>
            <span> wonderpets@gmail.com</span>
          </div>
          <span>Wonder Pets © 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
