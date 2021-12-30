import styles from './LandingPage.module.scss'
import logoMobile from '../../images/logoMobile.svg'
import logo from '../../images/logo.svg'
import logoFallback from '../../images/logo.png'
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
                    <img src={logoFallback} alt="poké queen logo" />
                </picture>
                <p>Om du vill vara trendig - och äta gott!</p>
            </header>
            <section className={styles.promotionText}>
                <h1>Grand Opening 23/12</h1>
                <button className="primary-btn">Boka nu</button>
            </section>
            <div className={styles.arrowContainer}>
                <img src={arrow} className={styles.arrow} alt="pil nedåt" />
            </div>
            <svg width="0" height="0">
                {' '}
                {/*this svg is not visible but its paths are used to clip in css*/}
                <defs>
                    <clipPath id="desktop" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0 3.972864e-4,0.91065274 C 0.33151178,1.1046347 0.43093849,0.9209222 1,0.93019465 L 1,0 Z" />
                    </clipPath>
                    <clipPath
                        id="tablet-or-mobile"
                        clipPathUnits="objectBoundingBox"
                    >
                        <path d="m 0,0 v 0.96875 c 0,0 0.17515677,0.0509972 0.47851563,0.0214844 0.41273384,-0.0252287 0.52929687,0 0.52929687,0 L 1,0 Z" />
                    </clipPath>
                </defs>
            </svg>
        </section>
    )
}

export default LandingPage
