import styles from './styles.module.scss'
import classNames from "classnames";


export default function Button({ children, className, type='white'}) {
    return (
        <button className={
            classNames(
                styles.button,
                styles[type],
                className
            )
        }>
            {children}
        </button>
    )
}