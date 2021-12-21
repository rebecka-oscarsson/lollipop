import styles from "./MealWrapper.module.scss";
function MealWrapper() {
  return (
    <div className={styles.MealWrapper}>
      MealWrapper1
      <div className={styles.MealCard1}>Card 1</div>
      <div className={styles.MealCard2}>Card 2</div>
      <div className={styles.MealCard3}>Card 3</div>
    </div>
  );
}

export default MealWrapper;
