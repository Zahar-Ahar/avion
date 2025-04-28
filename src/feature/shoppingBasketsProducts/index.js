import styles from './styles.module.scss'
import { useState } from 'react'
import BasketCard from "../../components/basketCard";

export default function ShoppingBasketProducts({productList}) {
    return (
        <div className={styles.shoppingBasketProducts}>
            <div className={styles.shoppingBasketProducts__headline}>
                Your shopping cart
            </div>
            <div className={styles.shoppingBasketProducts__cart}>
                {productList.map((product) => {
                    return (
                        <BasketCard product={product}/>
                    )
                })}
            </div>
        </div>
    )
}