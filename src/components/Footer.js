import React from 'react'
import styles from '../css/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.theFooter}>
            <p>&copy; Footer {new Date().getFullYear()} All rights reserved</p>
        </footer>
    )
}
