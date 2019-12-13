import React, { useState } from 'react'
import { Link } from 'gatsby'
import styles from '../css/navbar.module.css'
import { FaBars } from 'react-icons/fa'
import links from '../constants/links'
import logo from '../images/logo.png'

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.alignNav}>
        <div className={styles.navContent}>
        {/* Website logo */}
          <img src={logo} className={styles.logo} alt="your logo" />
          <button className={styles.hamburgerMenu} onClick={toggleNav}>
          {/* Hamburger menu icon */}
            <FaBars className={styles.hamburgerIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
