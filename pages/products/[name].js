import {data} from "../../data"
import styles from "../../styles/Product.module.css"

const Product =() => {
  return (
    <div className={styles.container}>

    </div>
  )
}

export const getStaticPaths = async () => {
    const products = data;
    const paths = products.map(item => {
      return {
        params:{name: item.name}
      }
    })
}

export default Product;