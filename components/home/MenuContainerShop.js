import styles from './MenuContainerShop.module.scss'
import MenuItem2 from './MenuItem2'
import {useState} from 'react'
import ReactPaginate from 'react-paginate';//v

export default function MenuContainer({categories}) {
    // const [sections, setSections] = useState(categories);v
    const [pageNumber, setPageNumber] = useState(0);

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
    //^
    return (
        <div className={styles.homepage}>
            <h1 className={styles.products_header__1iU36}>Shop Page</h1>{/* v XXX Page */}
            <div className={styles.menuContainer_menu}>
                {displayProducts.map(({name: title, remote_url: imageUrl, cid, size }) => (
                    <MenuItem2 key={cid} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
            {/* v */}
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
            {/* ^ */}
        </div>
    )
}