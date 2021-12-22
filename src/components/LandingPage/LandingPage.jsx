import styles from "./LandingPage.module.scss";
import logoMobile from "../../images/logoMobile.svg";
import logo from "../../images/logo.svg";
import arrow from "../../images/Icon awesome-long-arrow-alt-down.svg";

function LandingPage() {
  return (
    <section className={styles.LandingPage}>
      <picture>
        <source
          media="(max-width:480px)"
          srcSet={logoMobile}
        />
        <source
          media="(min-width:481px)"
          srcSet={logo}
        />
        <img src={logo} alt="poké queen logo" />
      </picture>
      <h2>Om du vill vara trendig - och äta gott!</h2>
      <h1>Grand Opening 23/12</h1>
      <button>boka nu</button>
      <img src={arrow} className={styles.arrow} alt="arrow pointing down" />
    </section>
  );
}

export default LandingPage;