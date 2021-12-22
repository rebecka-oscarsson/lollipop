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
                    <nav>
                        <ul>
                            <li className={styles.MenuHeader}>Meny</li>
                            <li className={styles.MenuItem}>Om Oss</li>
                            <li className={styles.MenuItem}>Våra rätter</li>
                            <li className={styles.MenuItem}>Kontakt</li>
                            <li className={styles.MenuItem}>Hitta till oss</li>
                            <li className={styles.MenuItem}>Catering</li>
                            <li className={styles.MenuItem}>Take Away</li>
                        </ul>
                    </nav>
                    <button className={styles.BookTableBtn}>Boka bord</button>
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
