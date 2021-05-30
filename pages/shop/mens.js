import Layout from '../../components/layout/Layout'
import MenuContainer from '../../components/home/MenuContainerMens'

export async function getServerSideProps() {
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop/mens');
  const categories = await response.json();



  return {
    props: {
      categories
    }
  }
}

const Mens = ({categories}) => {
  return (
    <Layout>
      <MenuContainer key={categories[0].cid} categories={categories}/>
    </Layout>
  )
}
export default Mens;