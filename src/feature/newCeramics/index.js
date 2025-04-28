import styles from './styles.module.scss'
import '../../asset/styles/global.scss'
import Button from "../../components/button";
import products from "../../data/products.json";
import Product from "../../components/product";
import _ from "lodash";

export default function NewCeramics({OurProducts}) {

    return (
        <div className={styles.newCeramics}>
            <div className={styles.newCeramics__headline}>
                New ceramics
            </div>
            <div className={styles.newCeramics__menu}>
                {products.slice(0, 7).map((product) => {
                    return (
                        <div className={styles.el}>
                            <Product product={product}/>
                        </div>
                    )
                })}
            </div>
            <div className={styles.button}>
                <Button>
                    View collection
                </Button>
            </div>
        </div>
    )
}