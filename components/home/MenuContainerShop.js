import styles from './MenuContainer.module.scss'
import MenuItem2 from './MenuItem2'
import {useState} from 'react'

export default function MenuContainer({categories}) {
    // const [sections, setSections] = useState(categories);
    return (
        <div className={styles.homepage}>
            <div className={styles.menuContainer_menu}>
                {categories.map(({name: title, remote_url: imageUrl, cid, size }) => (
                    <MenuItem2 key={cid} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        </div>
    )
}