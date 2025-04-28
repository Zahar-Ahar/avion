import styles from './styles.module.scss'
import Product from "../../components/product";
import Button from "../../components/button";

export default function ProductList({allProducts}) {
    return (
        <div className={styles.menuList}>
            <div className={styles.productList}>
                {allProducts.map((product) => {
                    return (
                        <div className={styles.productList__el}>
                            <Product product={product}/>
                        </div>
                    )
                })}

            </div>
            <div className={styles.button}>
                <Button>123</Button>
            </div>
        </div>
    )
}