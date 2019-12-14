import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../css/navbar.module.css"
import { FaBars } from "react-icons/fa"
import logo from "../images/logo.png"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.alignNav}>
        <div className={styles.navContent}>
          <Link to={"/#"}>
            {/* Website logo */}
            <img src={logo} className={styles.logo} alt="your logo" />
          </Link>
          <button className={styles.hamburgerMenu} onClick={toggleNav}>
            {/* Hamburger menu icon */}
            <FaBars className={styles.hamburgerIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav} `
              : `${styles.navLinks}`
          }
        >
          <Link to="/#">Link 1</Link>
          <Link to="/#section-two">Link 2</Link>
          <Link to="/#section-three">Link 3</Link>
          <Link to="/#section-four">Link 4</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
