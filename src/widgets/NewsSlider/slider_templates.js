import React from 'react'
import Slick from 'react-slick';
import style from './slider.css';
import {Link} from 'react-router-dom';

const SliderTemplates = (props) => {
    let template = null;
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1
    }

    switch(props.type){
        case ('featured'):
            template = props.data.map((item, i) =>{
                return(
                    <div key={i}>
                        <div className={style.featured_item}>
                            <div className={style.featured_image}
                                style={{
                                    background:`url(https://pp.userapi.com/c636531/v636531949/47694/QoHRj9BHyAw.jpg)`
                                }}></div>
                            <Link to={`/articles/${item.id}`}>
                                <div className={style.featured_caption}>
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })
            break;
        default:
            template=null;
    }
    return(
        <Slick {...settings}>
            {template}
        </Slick>
    )

}

export default SliderTemplates;
//
// import React, {Component} from 'react';
// // import axios from 'axios';
//
// const Slide = ({ image }) => {
//     const styles = {
//         backgroundImage:`url(https://pp.userapi.com/c636531/v636531949/47694/QoHRj9BHyAw.jpg)`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: '50% 60%'
//     }
//     return <div>
//         <div className="slide" style={styles}></div>
//         <div className="slide" style={styles}></div>
//         <div className="slide" style={styles}></div>
//     </div>
// }
//
// export default Slide;
