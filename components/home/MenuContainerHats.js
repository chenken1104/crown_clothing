import styles from './MenuContainerHats.module.scss'
import MenuItem2 from './MenuItem2'
import {useState} from 'react'

export default function MenuContainerHats({categories}) {
    return (
        <div className={styles.homepage}>
            <h1 className={styles.products_header__1iU36}>Hats Page</h1>{/* v XXX Page */}
            <div className={styles.menuContainer_menu}>
                {categories.map(({name: title, remote_url: imageUrl, cid, size }) => (
                    <MenuItem2 key={cid} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
           
        </div>
    )
}