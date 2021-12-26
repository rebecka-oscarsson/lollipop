import styles from './LandingPage.module.scss'
import logoMobile from '../../images/logoMobile.svg'
import logo from '../../images/logo.svg'
import arrow from '../../images/Icon awesome-long-arrow-alt-down.svg'

function LandingPage() {
    return (
        <section className={styles.LandingPage}>
            <header>
                <picture>
                    <source
                        type="image/svg+xml"
                        media="(max-width:480px)"
                        srcSet={logoMobile}
                    />
                    <source
                        type="image/svg+xml"
                        media="(min-width:481px)"
                        srcSet={logo}
                    />
                    <img src={logo} alt="poké queen logo" />
                    {/*//den här ska jag byta ut mot en png-bild för gamla browsers*/}
                </picture>
                <h2>Om du vill vara trendig - och äta gott!</h2>
            </header>
            <section className={styles.promotionText}>
                <h1>Grand Opening 23/12</h1>
                <button className="primary-btn">boka nu</button>
            </section>
            <div className={styles.arrowContainer}>
            <img
                src={arrow}
                className={styles.arrow}
                alt="arrow pointing down"
            />
            </div>
        </section>
    )
}

export default LandingPage