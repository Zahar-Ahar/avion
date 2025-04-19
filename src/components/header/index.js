import styles from './styles.module.scss'
import Search from '../../asset/icons/search.svg'
import Logo from '../../asset/icons/logo.svg'
import ShoppingCart from '../../asset/icons/shoppingCart.svg'
import Profile from '../../asset/icons/profileUser.svg'

export default function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.imageEl} src={Search} alt=""/>
            <img src={Logo} alt=""/>
            <div className={styles.right}>
                <img className={styles.imageEl} src={ShoppingCart} alt=""/>
                <img className={styles.imageEl} src={Profile} alt=""/>
            </div>
        </div>
    )
}