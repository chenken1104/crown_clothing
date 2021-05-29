import styles from './MenuContainer.module.scss'
import MenuItem from './MenuItem'
import {useState} from 'react'

export default function MenuContainer({categories}) {
    // const [sections, setSections] = useState(categories);
    return (
        <div className={styles.homepage}>
            <div className={styles.menuContainer_menu}>
                {categories.map(({name: title, remote_url: imageUrl, cid, size }) => (
                    <MenuItem key={cid} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        </div>
    )
}