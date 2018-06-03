import React, {Component} from 'react';
import styles from './videosList.css';
import axios from 'axios';

import Button from '../Buttons/buttons';
import VideosTemplate from './VideosTemplate';

class VideosList extends Component {
    state = {
        authors:[],
        videos:[],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    renderTitle = (title) => {
        return title ?
            <h3><strong>CARS</strong> Videos</h3>
            : null
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end);
    }

    request = (start, end) => {
        if(this.state.authors.length < 1){
                axios.get(`http://localhost:3004/articles`)
                    .then( response => {
                        this.setState({
                            authors:response.data
                        })
                    })
        }

        axios.get(`http://localhost:3004/videos?_start=${start}&_end=${end}`)
            .then(response=>{
                this.setState({
                    videos:[...this.state.videos,...response.data],
                    start,
                    end
                })
            })

    }

    renderVideos=()=> {
        let template = null;
        switch(this.props.type){
            case('card'):
                template = <VideosTemplate data={this.state.videos} authors={this.state.authors} />

                break;
            default:
                template=null
        }
        return template;
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end)
    }

    renderButton =()=>{
        return this.props.loadmore ?
            <Button
                type='loadmore'
                loadMore={()=> this.loadMore()}
                cta="Load More Videos"
            />
            :
            <Button type="linkTo" cta="more videos" linkTo="/videos" />

    }

    render(){
        console.log(this.state.videos);
        return(
            <div className={styles.videoList_wrapper}>
                {this.renderTitle(this.props.title)}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }

}
export default VideosList;