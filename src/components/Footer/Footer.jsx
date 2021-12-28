import styles from './Footer.module.scss'
function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.Adress}>
                <h3>Hitta till oss</h3>
                <p>Storgatan 1</p>
                <p>123 45 Stockholm</p>
                <p>Lilla Torg</p>
                <p>211 33 Malmö</p>

                <div className={styles.icons}>
                    <div className={styles.icon_facebook}/> 
                    <div className={styles.icon_instagram}/>
                </div>
            </div>
            <div className={styles.Hours}>
                <h3>Öppettider</h3>
                <div className={styles.opening_days}>
                    <p>Måndag - Fredag </p>
                    <p>11:00-18:30</p>
                </div>
                <div className={styles.opening_days}>
                    <p>Lördag</p>
                    <p>11:00-22:00</p>
                </div>
                <div className={styles.opening_days}>
                    <p>Söndag</p>
                    <p>11:00-20:00</p>
                </div>
            </div>
            <div className={styles.Logo}></div>
            <div className={styles.NewsLetter}>
                <h3>Nyhetsbrev</h3>
                <p>Vill du ha unika deals?<br />
                    Signa upp dig på vårat nyhetsbrev här!
                </p>
                <input type='text' placeholder='namn@mail.se' />
                <button>Prenumerera</button>
            </div>
        </div>
    )
}

export default Footer
