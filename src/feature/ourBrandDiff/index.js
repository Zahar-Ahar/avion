import styles from './styles.module.scss'
import Delivery from '../../asset/icons/Delivery.svg'
import CheckMark from '../../asset/icons/CheckMark.svg'
import Price from '../../asset/icons/Price.svg'
import Ecology from '../../asset/icons/Ecology.svg'

export default function OurBrandDiff() {
    return (
        <div className={styles.ourBrandDiff}>
            <div className={styles.ourBrandDiff__headline}>
                What makes our brand different
            </div>
            <div className={styles.ourBrandDiff__items}>
                <div className={styles.card}>
                    <div className={styles.card__icon}>
                        <img src={Delivery} alt=""/>
                    </div>
                    <div className={styles.card__info}>
                        <div className={styles.title}>
                            Next day as standard
                        </div>
                        <div className={styles.description}>
                            Order before 3pm and get your order
                            the next day as standard
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__icon}>
                        <img src={CheckMark} alt=""/>
                    </div>
                    <div className={styles.card__info}>
                        <div className={styles.title}>
                            Made by true artisans
                        </div>
                        <div className={styles.description}>
                            Handmade crafted goods made with
                            real passion and craftmanship
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__icon}>
                        <img src={Price} alt=""/>
                    </div>
                    <div className={styles.card__info}>
                        <div className={styles.title}>
                            Unbeatable prices
                        </div>
                        <div className={styles.description}>
                            For our materials and quality
                            you won’t find better prices anywhere
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__icon}>
                        <img src={Ecology} alt=""/>
                    </div>
                    <div className={styles.card__info}>
                        <div className={styles.title}>
                            Recycled packaging
                        </div>
                        <div className={styles.description}>
                            We use 100% recycled packaging to
                            ensure our footprint is manageable
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}