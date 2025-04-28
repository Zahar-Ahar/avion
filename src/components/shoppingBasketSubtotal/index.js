import styles from './styles.module.scss'
import Button from "../button";
import {useState, useEffect} from "react";
import BasketCard from "../basketCard";

export default function ShoppingBasketSubtotal({productList}) {

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let price = 0
        productList.map((product) => {
            price = price + product.price
        })
        setTotalPrice(price)
    }, [productList])

    return (
        <div className={styles.shoppingBasketSubtotal}>
            <div className={styles.shoppingBasketSubtotal__info}>
                <div className={styles.subtotal}>
                    <div className={styles.title}>
                        {productList.name}
                    </div>
                    <div className={styles.total}>
                        £{totalPrice}
                    </div>
                </div>
                <div className={styles.description}>
                    Taxes and shipping are calculated at checkout
                </div>
            </div>
            <div className={styles.button}>
                <Button type={'signup'}>
                    Go to checkout
                </Button>
            </div>
        </div>
    )
}