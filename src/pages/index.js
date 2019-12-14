import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/index.module.css'
import SEO from '../components/SEO'

export default () => (
    <Layout>
        <SEO title="Responsive Landing Starter" description="A responsive landing page made with GatsbyJS" />
        <div className={styles.container}>
            <div id="section-one" className={styles.firstSection}>
                <h1>Title Test</h1>
            </div>
            <div id="section-two" className={styles.secondSection}>
                <h2>Title Test</h2>
            </div>
            <div id="section-three" className={styles.thirdSection}>
                <h3>Title Test</h3>
            </div>
            <div id="section-four" className={styles.fouthSection}>
                <h4>Title Test</h4>
                <p>Lorem Ipsum Dolor</p>
            </div>
        </div>
    </Layout>
)

