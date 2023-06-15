import React from 'react'
import styles from '@/components/nav/nav.module.css'

const Nav = () => {
  const navLogoURL = "/assets/icons/wonderpets-logo.png";

  return (
    <div>
      <nav className={styles.nav}>
        <a href="/">
          {/* wonder pets logo and title */}
          <div className={styles.nav_logo}>
            <img src={navLogoURL} alt="wonder pets logo" width="50px"/>
            <span>Wonder Pets</span>
          </div>
        </a>

        {/* navigation links */}
        <ul className={styles.nav_links}>
          <li><a href="/">About</a></li>
          <li>Get Involved
            <ul className={styles.get_involved}>
              <li><a href='/'>Adopt a Pet</a></li>
              <li><a href='/'>Donate</a></li>
              <li><a href='/'>Join Us</a></li>
            </ul>
          </li>
          <li><a href='/'>Resources</a></li>
          <li><a href='/'>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav