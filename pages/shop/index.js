// import { useStatus } from 'react';
// import Item from '../../components/home/MenuItem2';
// import styles from '../../components/home/MenuItem2.module.scss';
// import ReactPaginate from 'react-paginate';

// export default function ItemContainer({ categories }) {
//     const [pageNumber, setPageNumber] = useStatus(0);
//     const itemsPerPage = 10;
//     const pagesVisited = pageNumber * itemsPerPage;

//     const displayProducts = categories.slice(
//         pagesVisited,
//         pagesVisited + itemsPerPage
//     );

//     const changePage = ({ selected }) => {
//         setPageNumber(selected);
//     };

//     const pageCount = Math.ceil(categories.length / itemsPerPage);

//     return (
//         <div>
//             <h1 className={styles.homepage}>Shop Page</h1>
//           <div className={styles.container}>
//               {displayProducts.map(({ name, remote_url, cid, price }) => (
//                   <Item key={cid} name={name} remote_url={remote_url} price={price} />   
//               ))}
//           </div>
//           <ReactPaginate
//             previousLabel={'Prev'}
//             nextLabel={'Next'}
//             pageCount={pageCount}
//             onPageChange={changePage}
//             containerClassName={styles.paginationBttns}
//             previousClassName={styles.previousBttn}
//             nextLinkClassName={styles.nextBttn}
//             disabledClassName={styles.paginationDisabled}
//             activeClassName={styles.paginationActive}
//           />
//         </div>
//     );
// }
import Layout from '../../components/layout/Layout'
import MenuContainer from '../../components/home/MenuContainerShop'

export async function getServerSideProps() {
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop');
  const categories = await response.json();



  return {
    props: {
      categories
    }
  }
}

const Home = ({categories}) => {
  return (
    <Layout>
      <MenuContainer key={categories[0].cid} categories={categories}/>
    </Layout>
  )
}
export default Home;