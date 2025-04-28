import styles from './styles.module.scss'
import Button from "../../components/button";

export default function Registration() {
    return (
        <div className={styles.registration}>
            <div className={styles.registration__signUp}>
                <div className={styles.info}>
                    <div className={styles.title}>
                        Join the club and get the benefits
                    </div>
                    <div className={styles.description}>
                        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and
                        more
                    </div>
                </div>
                <div className={styles.itemForm}>
                    <input className={styles.email} type="email" placeholder={'your@email.com'}/>
                    <Button className={styles.button} type={'signup'}>
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    )
}