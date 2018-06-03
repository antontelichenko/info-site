import React from 'react';
// import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../../src/widgets/NewsList/NewsList'
import VideosList from '../../src/widgets/VideosList/VideoList';

const Home = () =>{
    return(
        <div>
            {/*<NewsSlider/>*/}
            <NewsList
                type='card'
                loadmore={true}
                start={0}
                amount={3}

            />
            <VideosList
                type="card"
                title={true}
                loadmore={true}
                start={0}
                amount={3}
            />
        </div>
    )
}

export default Home;