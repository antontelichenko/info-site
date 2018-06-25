import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Link} from 'react-router-dom';
import styles from './NewsList.css';
import Button from '../Buttons/buttons';
import CardInfo from '../../widgets/CardInfo/CardInfo'
import {firebaseArticles, firebaseLooper} from '../../firebase';


class NewsList extends Component {
    state={
        authors:[],
        items:[],
        start:this.props.start,
        end:this.props.start+this.props.amount,
        amount:this.props.amount
    }

    componentWillMount(){
        this.request(this.state.start,this.state.end)
    }

    request =(start,end)=>{
        // if(this.state.authors.length<1){
        //     firebaseArticles.once('value')
        //         .then((snapshot)=>{
        //             const teams=firebaseLooper(snapshot);
        //             this.setState({
        //                 teams
        //             })
        //         })
        // }

        // if(this.state.authors.length <1){
        //     axios.get(`http://localhost:3004/articles`)
        //         .then( response => {
        //             this.setState({
        //                 articles:response.data
        //             })
        //         })
        // }

        firebaseArticles.orderByChild('id').startAt(start).endAt(end).once('value')
            .then((snapshot)=>{
                console.log("snapshot art "+snapshot.key);

                const articles =firebaseLooper(snapshot);
                this.setState({
                    items:[...this.state.items,...articles],
                    start,
                    end
                })
            })
            .catch(e=>{
                console.log(e)
            })
        // axios.get(`http://localhost:3004/articles?_start=${start}&_end=${end}`)
        //     .then(response=>{
        //         this.setState({
        //             items:[...this.state.items,...response.data],
        //             start,
        //             end
        //         })
        //     })
    }

    loadMore=()=> {
        let end = this.state.end+this.state.amount;
        this.request(this.state.end+1,end)
    }

    renderNews =(type) => {
        let template = null;

        switch(type){
            case('card'):
            template=this.state.items.map((item, i)=> (
                <CSSTransition
                    classNames={{
                        enter:styles.newsList_wrapper,
                        enterActive:styles.newsList_wrapper_enter
                    }}
                    timeout={500}
                    key={i}
                >
                    <div>
                        <div className={styles.newsList_item}>
                            <Link to={`/articles/${item.id}`}>
                                <CardInfo articles={this.state.items}  author={item.author} date={item.date} />
                                <h2>{item.title}</h2>
                            </Link>
                        </div>
                    </div>
                </CSSTransition>
            ))
            break;
            default:
                template=null;
        }
        return template;
    }

    render(){
        // console.log(this.state.items);
        return(
            <div>
                <TransitionGroup
                    component="div"
                    className="list"
                >
                {this.renderNews(this.props.type)}
                </TransitionGroup>
                <Button
                    type="loadmore"
                    loadMore={()=>this.loadMore()}
                    cta="load more news"
                />
            </div>
        )
    }
}
export default NewsList;