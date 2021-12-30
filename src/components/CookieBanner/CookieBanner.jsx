import styles from './CookieBanner.module.scss'
import React, { useState } from 'react'
function CookieBanner() {

    const [display, setDisplay] = useState(true)
    

    return (
        display?
            <div className={styles.CookieBanner}>
                <p> Poké Queen använder kakor (cookies) för att webbplatsen ska fungera bra för dig. 
                <span>Läs mer om kakor</span>
                </p>

                <button className={styles.CookiesBtn} onClick={() => setDisplay(false)}> 
                    Jag förstår
                </button>
            
            </div> 
        :""
    )
}

export default CookieBanner
