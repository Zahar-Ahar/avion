import styles from "../../feature/shoppingBasketsProducts/styles.module.scss";
import GrayStoneVase from "../../asset/image/GrayStoneVase.png";
import {useState, useEffect} from "react";

export default function BasketCard({product}) {
    const [quantity, setQuantity] = useState(1)
    const [priceTotal, setPriceTotal] = useState(85)

    const handleOnClick = (action) => {
        if(action === 'minus'){
            if(quantity > 1){
                setQuantity(quantity - 1)
            }
        } else if (action === 'plus') {
            if(quantity < 10){
                setQuantity(quantity + 1)
            }
        }
    }

    useEffect(() => {
        setPriceTotal(product.price * quantity)
    }, [quantity])


    return (
        <div className={styles.itemCard}>
            <div className={styles.elCard}>
                <img className={styles.image} src={GrayStoneVase} alt=""/>
                <div className={styles.info}>
                    <div className={styles.title}>
                        {product.name}
                    </div>
                    <div className={styles.description}>
                        A timeless ceramic vase with
                        a tri color grey glaze.
                    </div>
                    <div className={styles.price}>
                        £{product.price}
                    </div>
                </div>
            </div>
            <div className={styles.quantity}>
                <button onClick={() => {handleOnClick('minus')}}>
                    -
                </button>
                {quantity}
                <button
                    onClick={() => {handleOnClick('plus')}}>
                    +
                </button>
            </div>
            <div className={styles.total}>
                £{priceTotal}
            </div>
        </div>

    )
}