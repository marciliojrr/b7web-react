import styles from './styles.module.css'

export const Button = () => {
    return (
        <div className={styles.square}>
            <button className={styles.button}>Texto qualquer</button>
            <p className={styles.legend}>Legend</p>
        </div>
    )
}