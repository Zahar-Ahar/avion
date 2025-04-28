import styles from './styles.module.scss'
import Button from "../../components/button";
import {useState} from 'react'
import _ from "lodash";

export default function OurPopularProducts({OurProducts}) {
    const [counter, setCounter] = useState(4)

    const handleOnClick = () => {
        if (counter === _.size(OurProducts)) {
            setCounter(4)
        } else if (counter) {
            setCounter(_.size(OurProducts))
        }
    }
    console.log(counter)
    return (
        <div className={styles.ourPopularProducts}>
            <div className={styles.ourPopularProducts__headline}>
                Our popular products
            </div>
            <div className={styles.ourPopularProducts__menu}>
                {OurProducts.slice(0, counter).map((OurProducts) => {
                    return (
                        <div className={styles.el}>
                            <img className={styles.image} src={OurProducts.image} alt=""/>
                            <div className={styles.info}>
                                <div className={styles.title}>
                                    {OurProducts.name}
                                </div>
                                <div className={styles.price}>
                                    {OurProducts.price}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.button}>
                <Button
                    onClick={() => {
                        handleOnClick()
                    }}>
                    View collection
                </Button>
            </div>
        </div>
    )
}