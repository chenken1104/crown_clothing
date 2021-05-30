import Layout from '../../components/layout/Layout'
import MenuContainer from '../../components/home/MenuContainerJackets'

export async function getServerSideProps() {
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop/jackets');
  const categories = await response.json();



  return {
    props: {
      categories
    }
  }
}

const Jackets = ({categories}) => {
  return (
    <Layout>
      <MenuContainer key={categories[0].cid} categories={categories}/>
    </Layout>
  )
}
export default Jackets;