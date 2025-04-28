import styles from './styles.module.scss'
import Chair from '../../asset/image/chairRight.png'

export default function Product({product}) {
    return (
        <div className={styles.product}>
            <img className={styles.image} src={product.image} alt=""/>
            <div className={styles.info}>
                <div className={styles.title}>
                    {product.name}
                </div>
                <div className={styles.price}>
                    {product.price}
                </div>
            </div>
        </div>
    )
}