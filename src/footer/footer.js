import React from 'react';
import styles from './footer.css';
import {Link} from 'react-router-dom';

const footer = () => (
        <div className={styles.footer}>
            <Link to="/" className={styles.logo}>
                CARS_SITE
            </Link>
            <div className={styles.rights}>
                @CARS {new Date().getFullYear()}
            </div>
        </div>

)
export default footer;