import React from 'react'
import Link from 'next/link'
import styles from './MenuItem2.module.scss' 

export default function MenuItem2({title, imageUrl, size}) {
    // const linkUrl = `/shop/${title}`
    return (
        <div className={styles.card}>
        <div className={styles.text}>
         <div className={styles.portada}>
          <img src={imageUrl}/> 
          <h2>{title}</h2>
  
  <div className={styles.desc}>Morgan has but none in their pants.</div>
  </div>
    </div>
    
  
</div>
    )
}