import React, {Component} from 'react';
import axios from 'axios';

import styles from '../../articles.css';
import Header from './header';

class NewsArticles extends Component {

    state = {
        article:[],
        author:[]
    }

    componentWillMount(){
        axios.get(`http://localhost:3004/articles?id=${this.props.match.params.id}`)
            .then(response => {
                let article = response.data[0];

                axios.get(`http://localhost:3004/articles?id=${this.props.match.params.id}`)
                    .then(response => {
                        this.setState({
                            article,
                            author:response.data
                        })
                    })
            })
    }

    render(){
        const article = this.state.article;
        // const team = this.state.team;
        return(
            
        <div className={styles.articleWrapper}>
           <Header
               // authorData={author[0]}
               date={article.date}
               author={article.author}

           />
           <div className={styles.articleBody}>
               <h1>{article.title}</h1>
               <div className={styles.articleImage}
                style={{
                    backgroundImage:`url(${article.image})`

                }}
               >
               </div>
               <div className={styles.articleText}>
                   {article.body}
               </div>
           </div>
        </div>
        )
    }
}
export default  NewsArticles;