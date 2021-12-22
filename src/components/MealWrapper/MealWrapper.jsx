import styles from './MealWrapper.module.scss'
import foodPhoto from '../../images/foodPhoto.jpg'
function MealWrapper() {
    return (
        <section className={styles.MealWrapper}>
            <h2 className={styles.MealwrapparHeader}>Favoriter</h2>
            <div className={styles.MealCard}>
                <div className={styles.MealCardPicContainer}>
                    <img
                        className={styles.MealCardPic}
                        src={foodPhoto}
                        alt="pic"
                    />
                </div>
                <div className={styles.MealCardTextContainer}>
                    <h3 className={styles.MealCardHeade}>OHANA BOWL</h3>
                    <p className={styles.MealCardText}>
                        Ris,lax,gurka,edamame,böner,mango
                    </p>
                    <p className={styles.MealCardText}>
                        Toppad med chilimajnäs.
                    </p>
                    <p className={styles.MealCardPris}>120 kr</p>
                </div>
            </div>
            <div className={styles.MealCard}>
                <div className={styles.MealCardPicContainer}>
                    <img
                        className={styles.MealCardPic}
                        src={foodPhoto}
                        alt="pic"
                    />
                </div>
                <div className={styles.MealCardTextContainer}>
                    <h3 className={styles.MealCardHeader2}>OPAE BOWL</h3>
                    <p className={styles.MealCardText}>
                        Ris,lax,gurka,edamame,böner,mango
                    </p>
                    <p className={styles.MealCardText}>
                        Toppad med chilimajnäs.
                    </p>
                    <p className={styles.MealCardPrice}>120 kr</p>
                </div>
            </div>
            <div className={styles.MealCard}>
                <div className={styles.MealCardPicContainer}>
                    <img
                        className={styles.MealCardPic}
                        src={foodPhoto}
                        alt="pic"
                    />
                </div>
                <div className={styles.MealCardTextContainer}>
                    <h3 className={styles.MealCardHeader}>KAMALII BOWL</h3>
                    <p className={styles.MealCardText}>
                        Ris,lax,gurka,edamame,böner,mango
                    </p>
                    <p className={styles.MealCardText}>
                        Toppad med chilimajnäs.
                    </p>
                    <p className={styles.MealCardPris}>120 kr</p>
                </div>
            </div>
        </section>
    )
}

export default MealWrapper
