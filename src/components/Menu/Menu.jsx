import styles from "./Menu.module.scss";
function Menu() {
  return (
    <div className={styles.Menu}>
      Menu
      <span className={styles.Line1}></span>
      <span className={styles.Line2}></span>
      <span className={styles.Line3}></span>
    </div>
  );
}

export default Menu;
