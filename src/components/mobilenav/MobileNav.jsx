"use client";

import React from "react";
import "material-icons/iconfont/material-icons.css";
import styles from "@/components/mobilenav/mobilenav.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

const MobileNav = () => {
  const navLogoURL = "/assets/icons/wonderpets_logo.png";
  const materialIcons = "material-icons-outlined";
  const [menuState, setMenuState] = useState(false);

  function toggleMenu() {
    setMenuState(menuState == false ? true : false);
  }

  return (
    <div className={styles.meta_nav}>
      <nav className={styles.nav}>
        {/* menu icon */}
        <span
          className={`${materialIcons} ${styles.menu}`}
          onClick={toggleMenu}
        >
          menu
        </span>
        {/* wonder pets logo and title */}
        <a href="/">
          <div className={styles.nav_logo}>
            <img src={navLogoURL} alt="wonder pets logo" />
            <span>Wonder Pets</span>
          </div>
        </a>
      </nav>

      {/* toggle nav links */}
      {menuState ? (
        <div className={styles.nav_links_container}>
          <ul className={styles.nav_links}>
            <li className={styles.nav_link}>
              <a href="/about">
                <span className={`${materialIcons} ${styles.nav_link_icon}`}>
                  info
                </span>
                About
              </a>
            </li>
            <li className={styles.nav_link}>
              <a href="/#adopt_section">
                <span className={`${materialIcons} ${styles.nav_link_icon}`}>
                  pets
                </span>
                Adopt
              </a>
            </li>
            <li className={styles.nav_link}>
              <a href="/">
                <span className={`${materialIcons} ${styles.nav_link_icon}`}>
                  food_bank
                </span>
                Donate
              </a>
            </li>
            <li className={styles.nav_link}>
              <a href="https://www.facebook.com/groups/1519693255505870/?ref=share_group_link">
                <span className={`${materialIcons} ${styles.nav_link_icon}`}>
                  handshake
                </span>
                Join Us
              </a>
            </li>
            <li className={styles.nav_link}>
              <a href="/">
                <span className={`${materialIcons} ${styles.nav_link_icon}`}>
                  folder_open
                </span>
                Resources
              </a>
            </li>
            <li className={styles.nav_link}>
              <a href="mailto:softengwonderpet@gmail.com">
                <span className={`${materialIcons} ${styles.nav_link_icon}`}>
                  contact_support
                </span>
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default MobileNav;
