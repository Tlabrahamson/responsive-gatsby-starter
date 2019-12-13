import React from 'react'
import styles from '../css/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.theFooter}>
            <h3>&copy; Footer {new Date().getFullYear()} All rights reserved</h3>
        </footer>
    )
}
