import React from 'react';
import styles from '../videosList.css';
import VideoListTemplate from '../VideosTemplate';


const videosRelated=(props)=> (
   <div className={styles.relatedWrapper}>
       <VideoListTemplate
           data={props.data}
           authors={props.authors}
           />
       </div>
)

export default videosRelated;