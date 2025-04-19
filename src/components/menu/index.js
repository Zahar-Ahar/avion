import styles from './styles.module.scss'
import '../../asset/styles/global.scss'

export default function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.menu__elements}>
                <div className={styles.el}>
                    <a href={'https://youtu.be/dQw4w9WgXcQ'}>Plant pots</a>
                </div>
                <div className={styles.el}>
                    <a href={'https://youtu.be/dQw4w9WgXcQ'}>Ceramics</a>
                </div>
                <div className={styles.el}>
                    <a href={'https://youtu.be/dQw4w9WgXcQ'}>Tables</a>
                </div>
                <div className={styles.el}>
                    <a href={'https://youtu.be/dQw4w9WgXcQ'}>Chairs</a>
                </div>
                <div className={styles.el}>
                    <a href={'https://youtu.be/dQw4w9WgXcQ'}>Crockery</a>
                </div>
                <div className={styles.el}>
                    <a href={'https://youtu.be/dQw4w9WgXcQ'}>Tableware</a>
                </div>
                <div className={styles.el}>
                    <a href={'https://youtu.be/dQw4w9WgXcQ'}>Cutlery</a>
                </div>
            </div>
        </div>
    )
}