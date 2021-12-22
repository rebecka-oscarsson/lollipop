import { useState } from 'react';
import styles from './Menu.module.scss';

function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.Menu}>
            {menuOpen ? (
                <div className={styles.MenuOpen}>
                    <div
                        className={styles.MenuLinesOpen}
                        onClick={() => setMenuOpen(false)}
                    >
                        <div className={styles.LinesContainerOpen}>
                            <div className={styles.LineOpen1}></div>
                            <div className={styles.LineOpen2}></div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.MenuHeader}>Meny</div>
                        <div className={styles.MenuItem}>Om Oss</div>
                        <div className={styles.MenuItem}>Våra rätter</div>
                        <div className={styles.MenuItem}>Kontakt</div>
                        <div className={styles.MenuItem}>Hitta till oss</div>
                        <div className={styles.MenuItem}>Catering</div>
                        <div className={styles.MenuItem}>Take Away</div>
                        <button className={styles.BookTableBtn}>
                            Boka bord
                        </button>
                    </div>
                </div>
            ) : (
                <div className={styles.MenuClosed}>
                    <div
                        className={styles.MenuLinesClosed}
                        onClick={() => setMenuOpen(true)}
                    >
                        <div className={styles.LinesContainerClosed}>
                            <div className={styles.LineClosed1}></div>
                            <div className={styles.LineClosed2}></div>
                            <div className={styles.LineClosed3}></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;
