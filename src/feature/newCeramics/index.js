import styles from './styles.module.scss'
import '../../asset/styles/global.scss'
import Chair from '../../asset/image/chairRight.png'
import ClayPottery from '../../asset/image/clayPottery.png'
import Vase from '../../asset/image/vase.png'
import Lamp from '../../asset/image/Lamp.png'
import Button from "../../components/button";

export default function NewCeramics() {
    return (
        <div className={styles.newCeramics}>
            <div className={styles.newCeramics__headline}>
                New ceramics
            </div>
            <div className={styles.newCeramics__menu}>
                <div className={styles.el}>
                    <img className={styles.image} src={Chair} alt=""/>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            The Dandy chair
                        </div>
                        <div className={styles.price}>
                            £250
                        </div>
                    </div>
                </div>
                <div className={styles.el}>
                    <img className={styles.image} src={ClayPottery} alt=""/>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            Rustic Vase Set
                        </div>
                        <div className={styles.price}>
                            £155
                        </div>
                    </div>
                </div>
                <div className={styles.el}>
                    <img className={styles.image} src={Vase} alt=""/>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            The Silky Vase
                        </div>
                        <div className={styles.price}>
                            £125
                        </div>
                    </div>
                </div>
                <div className={styles.el}>
                    <img className={styles.image} src={Lamp} alt=""/>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            The Lucy Lamp
                        </div>
                        <div className={styles.price}>
                            £399
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.button}>
                <Button type={'feature'} >
                    View collection
                </Button>
            </div>
        </div>
    )
}