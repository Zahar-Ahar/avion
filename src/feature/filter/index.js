import styles from './styles.module.scss'
    
export default function Filter({categories, designers}) {
    return (
        <div className={styles.filter}>
            <div className={styles.filter__block}>
                <div className={styles.title}>
                    Product Type
                </div>
                <div className={styles.item}>
                    {categories.map((product) => {
                        return (
                            <label className={styles.label}>
                                <input
                                    className={styles.item__el}
                                    type="checkbox"
                                    name={product.category}

                                />
                                {product.category}
                            </label>
                        )
                    })}
                </div>
            </div>
            <div className={styles.filter__block}>
                <div className={styles.title}>
                    Designer
                </div>
                <div className={styles.item}>
                    {designers.map((product) => {
                        return (
                            <label className={styles.label}>
                                <input
                                    className={styles.item__el}
                                    type="checkbox"
                                    name={product.designer}

                                />
                                {product.designer}
                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}