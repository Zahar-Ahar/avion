import styles from './styles.module.scss'
import classNames from "classnames";


export default function Button({ children, className, type='white', onClick}) {
    return (
        <button

            onClick={onClick}

            className={
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