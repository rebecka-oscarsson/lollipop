import { useState } from 'react';
import styles from './Menu.module.scss';
function Menu() {
    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <div className={styles.Menu}>
            {menuOpen ? (
                <div className={styles.MenuOpen}>
                    <div onClick={() => setMenuOpen(false)}>Close menu</div>
                    <div>
                        <div className={styles.MenuHeader}>Menu</div>
                        Om Oss <br />
                        Våra rätter <br />
                        Kontakt <br />
                        Hitta till oss <br />
                        Catering <br />
                        Take Away <br />
                        <button className={styles.BokaBordBtn}>
                            Boka bord
                        </button>
                    </div>
                </div>
            ) : (
                <div className={styles.MenuClosed}>
                    <div
                        className={styles.MenuLines}
                        onClick={() => setMenuOpen(true)}
                    >
                        <div className={styles.LinesContainer}>
                            <div className={styles.Line1}></div>
                            <div className={styles.Line2}></div>
                            <div className={styles.Line3}></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;
