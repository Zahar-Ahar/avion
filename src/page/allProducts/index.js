import ProductList from "../../feature/productList";
import Filter from "../../feature/filter";
import styles from './styles.module.scss'
import allProducts from "../../data/products-dummyimage-37.json";
import _ from "lodash";
import {useState} from "react";

export default function AllProducts() {
    const unionProductsByCategory = _.unionBy(allProducts, 'category')
    const unionProductsByDesigner = _.unionBy(allProducts, 'designer')

    return (
        <div className="container">
            <div className={styles.allProducts}>
                <Filter categories={unionProductsByCategory} designers={unionProductsByDesigner}/>
                <ProductList allProducts={allProducts}/>
            </div>
        </div>
    )
}