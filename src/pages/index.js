import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/index.module.css'
import SEO from '../components/SEO'

export default () => (
    <Layout>
        <SEO title="Responsive Landing Starter" description="A responsive landing page made with GatsbyJS" />
        <div className={styles.container}>
            <h1>Title Test</h1>
            <h2>Title Test</h2>
            <h3>Title Test</h3>
            <h4>Title Test</h4>
            <p>Lorem Ipsum Dolor</p>
        </div>
    </Layout>
)

