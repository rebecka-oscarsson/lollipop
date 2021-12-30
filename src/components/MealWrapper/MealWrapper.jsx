import styles from './MealWrapper.module.scss'
import foodPhoto from '../../images/food-photographer-david-fedulov-Sekm9_nC2BM-unsplash.png'
function MealWrapper() {
    return (
        <section className={styles.MealWrapper}>
            <div className={styles.MealwrapparHeader}>
                <h2>Favoriter</h2>
            </div>
            <div className={styles.MealCardContainer}>
                <div className={styles.MealCard1}>
                    <div className={styles.MealCardPicContainer}>
                        <img
                            className={styles.MealCardPic}
                            src={foodPhoto}
                            alt="Ohana Bowl"
                        />
                    </div>
                    <div className={styles.MealCardTextContainer}>
                        <h3 className={styles.MealCardHeader}>OHANA BOWL</h3>
                        <p className={styles.MealCardText}>
                            Ris, lax, gurka, edamame, bönor, mango{' '}
                        </p>
                        <p className={styles.MealCardText}>
                            Toppad med chilimajnäs.
                        </p>
                        <p className={styles.MealCardPrice}>120 kr</p>
                    </div>
                </div>
                <div className={styles.MealCard2}>
                    <div className={styles.MealCardPicContainer}>
                        <img
                            className={styles.MealCardPic}
                            src={foodPhoto}
                            alt="Opae Bowl"
                        />
                    </div>
                    <div className={styles.MealCardTextContainer}>
                        <h3 className={styles.MealCardHeader}>OPAE BOWL</h3>
                        <p className={styles.MealCardText}>
                            Ris, lax, gurka, edamame, bönor, mango
                        </p>
                        <p className={styles.MealCardText}>
                            Toppad med chilimajnäs.
                        </p>
                        <p className={styles.MealCardPrice}>120 kr</p>
                    </div>
                </div>
                <div className={styles.MealCard1}>
                    <div className={styles.MealCardPicContainer}>
                        <img
                            className={styles.MealCardPic}
                            src={foodPhoto}
                            alt="Kamalii Bowl"
                        />
                    </div>
                    <div className={styles.MealCardTextContainer}>
                        <h3 className={styles.MealCardHeader}>KAMALII BOWL</h3>
                        <p className={styles.MealCardText}>
                            Ris, lax, gurka, edamame, bönor, mango{' '}
                        </p>
                        <p className={styles.MealCardText}>
                            Toppad med chilimajnäs.
                        </p>
                        <p className={styles.MealCardPrice}>120 kr</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MealWrapper
