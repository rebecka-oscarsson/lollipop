import styles from './Footer.module.scss'
function Footer() {
    return (
        <div className={styles.Footer}>
            <h1>Footer</h1>
            <div className={styles.Adress}>Adress</div>
            <div className={styles.Hours}>Hours</div>
            <div className={styles.NewsLetter}>Newsletter</div>
            <div className={styles.Logo}>Logo</div>
        </div>
    )
}

export default Footer
