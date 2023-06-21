import React from 'react'
import styles from '@/components/footer/footer.module.css'
import 'material-icons/iconfont/material-icons.css';

const Footer = () => {
    const materialIcons = "material-icons-outlined";
    const footerLogoURL = "/assets/icons/wonderpets_logo_gradient.png";


    return (
    <footer className={styles.footer_container}>
        <div className={`${styles.footer_logo}`}>
            <img src={footerLogoURL} alt=""/>
            <h3>Wonder Pets</h3>
        </div>
        <div className={`${styles.follow_us}`}>
            <div className={`${styles.footer_follow_icons}`}>
                <img src="/assets/icons/instagram.svg" alt="instagram icon" />
                <img src="/assets/icons/facebook.svg" alt="facebook icon" />
                <img src="/assets/icons/twitter.svg" alt="twitter icon" />
                <img src="/assets/icons/youtube.svg" alt="youtube icon" />
            </div>
            <p>Follow Us</p>
        </div>
        <div className={`${styles.contact}`}>
            <div>
                <div className={`${styles.email}`}>
                    <span className={`${materialIcons} ${styles.email_icon}`}>email</span>
                    <span> wonderpets@gmail.com</span>
                </div>
                <span>Wonder Pets © 2023</span>
            </div>
        </div>
    </footer>
    )
}

export default Footer