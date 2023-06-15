"use client";


import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import styles from '@/components/mobilenav/mobilenav.module.css'
import { useEffect, useState } from 'react'

const MobileNav = () => {
    const navLogoURL = "/assets/icons/wonderpets-logo.png";
    const materialIcons = "material-icons-outlined"
    const [menuState, setMenuState] = useState(false);

    function toggleMenu() {
      setMenuState((menuState == false) ? true : false);
    }

  return (
    <div className={styles.meta_nav}>
      <nav className={styles.nav}>
          {/* menu icon */}
          <span className={`${materialIcons} ${styles.menu}`} onClick={toggleMenu}>menu</span>
          {/* wonder pets logo and title */}
          <a href="/">
            <div className={styles.nav_logo}>
                <img src={navLogoURL} alt="wonder pets logo" width="50px"/>
                <span>Wonder Pets</span>
            </div>
          </a>
      </nav>

      {/* toggle nav links */}
      {menuState ?
        (
          <div className={styles.nav_links_container}>
            <ul className={styles.nav_links}>
              <li><a href="/">About</a></li>
              <li>Get Involved
                <ul className={styles.get_involved}>
                  <li><a href="/">Adopt a Pet</a></li>
                  <li><a href="/">Donate</a></li>
                  <li><a href="/">Join Us</a></li>
                </ul>
              </li>
              <li><a href="/">Resources</a></li>
              <li><a href="/">Contact</a></li>
            </ul>  
          </div>
        ) : <span></span>
      }
    </div>

  )
}

export default MobileNav