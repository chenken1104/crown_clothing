import React from 'react'
import Link from 'next/link'
import styles from './MenuItem2.module.scss' 

export default function MenuItem2({title, imageUrl, size}) {
    const linkUrl = `/shop/${title}`
    return (
        <div className={`${styles[size]} ${styles.menu_item}`}>
            <img src={imageUrl} alt='' className={styles.background_image}/>
            <Link href={linkUrl}>
                <a className={styles.content}>
                <h1 className={styles.title}>{title}</h1> 
                <span className={styles.subtitle}>SHOP NOW</span>
                </a>
                
            </Link>
        </div>
    )
}