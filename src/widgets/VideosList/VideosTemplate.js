import React from 'react';
import styles from './videosList.css';
import{Link} from 'react-router-dom';
// import RouteImg from '../../images/cars/1.jpg';
import CardInfo from '../CardInfo/CardInfo';

const VideosTemplate =(props)=> {
    return props.data.map((item, i)=>(

        <Link to={`/videos/${item.id}`} key={i}>
            <div className={styles.videoListItem_wrapper}>
                <div className={styles.left}
                    style={{
                        background: `url(${item.image})`

                    }}
                >
                    <div></div>
                </div>
                <div>
                    <div className={styles.right}>
                        <CardInfo authors={props.authors} author={item.author} date={item.date} />
                        <h2>{item.title}</h2>
                    </div>
                </div>
            </div>
        </Link>

    ))
}

export default  VideosTemplate;