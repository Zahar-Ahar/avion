import styles from './styles.module.scss'
import ShoppingBasketProducts from "../../feature/shoppingBasketsProducts";
import ShoppingBasketSubtotal from "../../components/shoppingBasketSubtotal";
import productList from "../../data/products-dummyimage-37.json";

export default function ShoppingBaskets() {
    return (
        <div className="container">
            <div className={styles.shoppingbaskets}>
                <ShoppingBasketProducts productList={productList}/>
                <ShoppingBasketSubtotal productList={productList}/>
            </div>
        </div>
    )
}