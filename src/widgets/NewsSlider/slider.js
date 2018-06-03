import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
            >
                <Slider>
                    <Slide index={0}>I am the first Slide.</Slide>
                    <Slide index={1}>I am the second Slide.</Slide>
                    <Slide index={2}>I am the third Slide.</Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>

            </CarouselProvider>
        );
    }
}

// import React from "react";
// import CarouselSlider from "react-carousel-slider";
//
// var data = [
//     {
//         des: "1",
//         imgSrc: "https://pp.userapi.com/c636531/v636531949/47694/QoHRj9BHyAw.jpg"
//     },
//     {
//         des: "2",
//         imgSrc: "https://pp.userapi.com/c636531/v636531949/47694/QoHRj9BHyAw.jpg"
//     },
//     {
//         des: "3",
//         imgSrc: "https://pp.userapi.com/c636531/v636531949/47694/QoHRj9BHyAw.jpg"
//     },
//     {
//         des: "4",
//         imgSrc: "https://pp.userapi.com/c636531/v636531949/47694/QoHRj9BHyAw.jpg"
//     },
//     {
//         des: "5",
//         imgSrc: "https://pp.userapi.com/c636531/v636531949/47694/QoHRj9BHyAw.jpg"
//     }
// ];
//
// /* Percantage to set height does not work well
// in prop sliderBoxStyle here because we could
// not init the height of parent element */
//
// let sliderBoxStyle = {
//     height: "250px"
//     , width: "200px"
//     , background: "transparent"
// };
//
// let itemsStyle = {
//     height: "100%", padding: "0px"
//     , padding: "15px"
//     , background:`url(https://pp.userapi.com/c636531/v636531949/47694/QoHRj9BHyAw.jpg)`
//     , borderRadius: "4px"
//     , margin: "0px 0px", padding: "0px"
// };
//
// let textBoxStyle = {
//     // textAlign: "left"
//     // ,width:"50%"
//     // , background: "transparent"
//     // , fontSize: "36px"
//     // , fontWeight: 300
// };
//
// let buttonSetting = {
//     placeOn: "middle-inside",
//     hoverEvent: true,
//     style: {
//       left: {
//         margin: "0px 0px 0px 10px"
//       },
//       right: {
//         margin: "0px 10px 0px 0px"
//       }
//     }
// };
//
// let manner = {
//     autoSliding: {interval: "4s"}
//     , duration: "0.3s"
// };
//
// const NewsSlider = () => (
//     <CarouselSlider
//         slideItems={data}
//         manner={manner}
//         buttonSetting={buttonSetting}
//         sliderBoxStyle={sliderBoxStyle}
//         itemsStyle={itemsStyle}
//         textBoxStyle={textBoxStyle}
//     />
// );
// export default NewsSlider;
// //
// render(<App />, document.getElementById("root"));

//
// import React, { Component } from "react";
// import Slider from "react-slick";
//
// export default class SimpleSlider extends Component {
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1
//         };
//         return (
//             <div>
//                 <h2> Single Item</h2>
//                 <Slider {...settings}>
//                     <div>
//                         <h3>1</h3>
//                     </div>
//                     <div>
//                         <h3>2</h3>
//                     </div>
//                     <div>
//                         <h3>3</h3>
//                     </div>
//                     <div>
//                         <h3>4</h3>
//                     </div>
//                     <div>
//                         <h3>5</h3>
//                     </div>
//                     <div>
//                         <h3>6</h3>
//                     </div>
//                 </Slider>
//             </div>
//         );
//     }
// }
// import React, {Component} from 'react';
// import axios from 'axios';
// import SliderTemplates from './slider_templates';
//
// class NewsSlider extends Component {
//
//     state = {
//         news:[]
//     }
//
//     componentWillMount(){
//         axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
//             .then( response =>{
//                 this.setState({
//                     news:response.data
//                 })
//             })
//     }
//
//     render(){
//         return(
//             <SliderTemplates data={this.state.news} type="featured" />
//         )
//     }
// }
//
// export default NewsSlider;
// import React, { Component } from 'react';
// import Slide from './slider_templates';
//
// // import { connect } from 'react-redux'
// // import * as actions from '../actions'
// // import Settings from './settings/index.js'
// // import ToggleSettings from './settings/toggle-settings'
//
// class Slider extends Component {
//     constructor(props) {
//         super(props)
//     }
//
//     // componentDidMount = () => this.props.getSliderImages()
//
//     // componentDidUpdate = (prevProps, prevState) => {
//     //     const { autoplay } = this.state
//     //
//     //     if(autoplay && prevState.autoplay !== autoplay) {
//     //         let x = window.setInterval(() => {
//     //             this.goToNextSlide()
//     //         }, 3000)
//     //         this.setState({ interval : x })
//     //     }
//     //     else if(!autoplay && prevState.autoplay !== autoplay) {
//     //         let x = window.clearInterval(this.state.interval)
//     //         this.setState({ interval : x })
//     //     }
//     // }
//
//
//     render() {
//         const {
//             images,
//             index,
//             translateValue,
//             coolButtons
//         } = this.props
//
//         return (
//             <Slide />
//         )
//     }
//
//
//     goToPreviousSlide = () => {
//         const { index, translateValue, setTranslateValue, setIndex } = this.props
//         if(index === 0) return
//
//         setTranslateValue(translateValue + this.slideWidth())
//         setIndex(index - 1)
//     }
//
//     goToNextSlide = () => {
//         const { images, index, translateValue, setTranslateValue, setIndex } = this.props
//         if(index === images.length - 1) {
//             setTranslateValue(0)
//             return setIndex(0)
//         }
//         setTranslateValue(translateValue - this.slideWidth())
//         setIndex(index + 1)
//     }
//
//     slideWidth = () => document.querySelector('.slide').clientWidth
//
// } // End Class
//
//
// export default Slider;
