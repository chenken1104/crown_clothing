import { useStatus } from 'react';
// import Item from './shop_item';
import styles from './shop.module.scss';
import ReactPaginate from 'react-paginate';

const Products= ({ products }) => {
   
    const [pageNumber, setPageNumber] = useStatus(0);

    const itemsPerPage = 10;
    const pagesVisited = pageNumber * itemsPerPage;

    const displayProducts = products.slice(
        pagesVisited,
        pagesVisited + itemsPerPage
    );

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const pageCount = Math.ceil(products.length / itemsPerPage);
    return (
        <div>
            <h1 className={styles.homepage}>Shop Page</h1>
          <div className={styles.container}>
              {displayProducts.map(({ name, remote_url, cid, price }) => (
                  <Product key={cid} name={name} remote_url={remote_url} price={price} />   
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
};
export default Products;