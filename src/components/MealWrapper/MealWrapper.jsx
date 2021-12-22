import styles from "./MealWrapper.module.scss";
import foodPhoto from "../../images/foodPhoto.jpg";
function MealWrapper() {
  return (
    <div className={styles.MealWrapper}>
      <h2 className={styles.MealwrapparHeader}>Favoriter</h2>
      <div className={styles.MealCard1}>
        <div className={styles.MealCardPicContainer1}>
          <img className={styles.MealCardPic1} src={foodPhoto} alt="pic" />
        </div>
        <div className={styles.MealCardTextContainer1}>
          <h3 className={styles.MealCardHeader1}>OHANA BOWL</h3>
          <p className={styles.MealCardText1}>
            Ris,lax,gurka,edamame,böner,mango
          </p>
          <p>Toppad med chilimajnäs.</p>
          <h2 className={styles.MealCardPris1}>120 kr</h2>
        </div>
      </div>
      <div className={styles.MealCard2}>
        <div className={styles.MealCardPicContainer2}>
          <img className={styles.MealCardPic2} src={foodPhoto} alt="pic" />
        </div>
        <div className={styles.MealCardTextContainer2}>
          <h3 className={styles.MealCardHeader2}>OPAE BOWL</h3>
          <p className={styles.MealCardText2}>
            Ris,lax,gurka,edamame,böner,mango
          </p>
          <p>Toppad med chilimajnäs.</p>
          <h2 className={styles.MealCardPris2}>120 kr</h2>
        </div>
      </div>
      <div className={styles.MealCard3}>
        <div className={styles.MealCardPicContainer3}>
          <img className={styles.MealCardPic3} src={foodPhoto} alt="pic" />
        </div>
        <div className={styles.MealCardTextContainer3}>
          <h3 className={styles.MealCardHeader3}>KAMALII BOWL</h3>
          <p className={styles.MealCardText3}>
            Ris,lax,gurka,edamame,böner,mango
          </p>
          <p>Toppad med chilimajnäs.</p>
          <h2 className={styles.MealCardPris3}>120 kr</h2>
        </div>
      </div>
    </div>
  );
}

export default MealWrapper;
