import styles from './MenuContainer.module.scss'
import MenuItem from './MenuItem'
import {useState} from 'react'
import ReactPaginate from 'react-paginate';

export default function MenuContainer({categories}) {
    // const [sections, setSections] = useState(categories);
    const [pageNumber, setPageNumber] = useStatus(0);

    const itemsPerPage = 10;
    const pagesVisited = pageNumber * itemsPerPage;

    const displayProducts = categories.slice(
        pagesVisited,
        pagesVisited + itemsPerPage
    );

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const pageCount = Math.ceil(categories.length / itemsPerPage);
    return (
        <div className={styles.homepage}>
            <div className={styles.menuContainer_menu}>
                {displayProducts.map(({name: title, remote_url: imageUrl, cid, size }) => (
                    <MenuItem key={cid} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
            <ReactPaginate
            previousLabel={'Prev'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={styles.paginationBttns}
            previousClassName={styles.previousBttn}
            nextLinkClassName={styles.nextBttn}
            disabledClassName={styles.paginationDisabled}
            activeClassName={styles.paginationActive}
            />
        </div>
        
    )
}