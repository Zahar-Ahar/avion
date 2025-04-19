import styles from './styles.module.scss'
import Button from "../../components/button";
import ChairRight from '../../asset/image/chairRight.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__wrap}>
                <div className={styles.banner__info}>
                    <div className={styles.title}>
                        <div className={styles.headline}>
                            The furniture brand for the future, with timeless designs
                        </div>
                        <Button type={'banner'}>
                            View collection
                        </Button>
                    </div>
                    <div className={styles.description}>
                        A new era in eco friendly furniture with Avelon, the French luxury retail brand
                        with nice fonts, tasteful colors and a beautiful way to display things digitally
                        using modern web technologies.
                    </div>
                </div>
                <img className={styles.previewImage} src={ChairRight} alt=""/>
            </div>
        </div>
    )
}