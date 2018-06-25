import React, { Component } from 'react';
// import axios from 'axios';
import {firebaseDB, firebaseLooper, firebaseVideos} from "../../../../firebase";

import styles from '../../articles.css';

import Header from './header';
import VideosRelated from '../../../../widgets/VideosList/VideosRelated/videosRelated';


class VideoArticle extends Component {

    state = {
        video:[],
        author:[],
        authors:[],
        related:[]
    }

    componentWillMount(){

        firebaseDB.ref(`videos/${this.props.match.params.id}`).once('value')
            .then((snapshot)=>{
                let video=snapshot.val();

                firebaseVideos.orderByChild('id').equalTo(video.author).once('value')
                    .then((snapshot)=>{
                        const author=firebaseLooper(snapshot);
                        this.setState({
                            video,
                            author
                        });
                        this.getRelated();
                    })
            })

        // axios.get(`http://localhost:3004/videos?id=${this.props.match.params.id}`)
        //     .then(response => {
        //         let video = response.data[0];
        //
        //         axios.get(`http://localhost:3004/videos?id=${this.props.match.params.id}`)
        //             .then(response => {
        //                 this.setState({
        //                     video,
        //                     author:response.data
        //                 });
        //                 this.getRelated();
        //             })
        //     })
    }

    getRelated =()=>{

        firebaseVideos.once('value')
            .then((snapshot)=>{
                let authors=firebaseLooper(snapshot);

                firebaseVideos
                    .orderByChild('id')
                    .equalTo(this.state.video.id+1)
                    .limitToFirst(1).once('value')
                    .then((snapshot)=>{
                        const related = firebaseLooper(snapshot);
                        this.setState({
                            authors,
                            related
                        });

                    })
            })

        // axios.get(`http://localhost:3004/videos?`)
        //     .then( response=>{
        //         let authors = response.data
        //
        //     axios.get(`http://localhost:3004/videos?q=${this.state.author[0].author}&_limit=3`)
        //         .then(response=>{
        //             this.setState({
        //                 authors,
        //                 related: response.data
        //             })
        //         })
        //     })
    }

    render(){
        const video = this.state.video;
        // console.log(video);
        return(
            <div className={styles.articleWrapper}>
                <Header
                    // authorData={author[0]}
                    date={video.date}
                    author={video.author}

                />
                <div className={video.videoWrapper}>
                    <h1>{video.title}</h1>
                    <iframe
                        title="videoplayer"
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${video.url}`}>

                    </iframe>

                </div>
                <VideosRelated
                    data={this.state.related}
                    authors={this.state.authors}
                    />

            </div>
        )
    }
}

export default VideoArticle;