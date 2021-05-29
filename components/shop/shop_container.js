import { useStatus } from 'react';
import Item from './shop_item';
import styles from './shop.module.scss';
import ReactPaginate from 'react-paginate';

export default function ItemContainer({ categories }) {
    const [pageNumber, setPageNumber]=useStatus(0);
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
        <div>
            <h1 className={styles.homepage}>Shop Page</h1>
          <div className={styles.container}>
              {displayProducts.map(({ name, remote_url, cid, price }) => (
                  <Item key={cid} name={name} remote_url={remote_url} price={price} />   
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
    );
}