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
            <svg width="0" height="0">
                <defs>
                    <clipPath id="desktop" clipPathUnits="objectBoundingBox">
                        <path d="m 0,0 0.00390625,0.9453125 c 0,0 0.17125052,0.0744347 0.47460938,0.0449219 C 0.89124947,0.93766195 1.0078125,0.96875 1.0078125,0.96875 L 1,0 Z" />
                    </clipPath>
                    <clipPath
                        id="tablet-or-mobile"
                        clipPathUnits="objectBoundingBox"
                    >
                        <path d="m 0,0 v 0.96875 c 0,0 0.17515677,0.0509972 0.47851563,0.0214844 0.41273384,-0.0252287 0.52929687,-0.001953 0.52929687,-0.001953 L 1,0 Z" />
                    </clipPath>
                </defs>
            </svg>
        </section>
    )
}

export default LandingPage