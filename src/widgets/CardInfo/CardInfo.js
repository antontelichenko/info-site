import React from 'react'
import FontAwesome from 'react-fontawesome';
import styles from './CarsInfo.css';


const CardInfo = (props) => {
    return(
        <div className={styles.cardInfo}>
            <span className={styles.author}>
                {props.author}
            </span>
            <span className={styles.date}>
                <FontAwesome name="clock-o" />
                {props.date}
            </span>
        </div>
    )
}
export default CardInfo;