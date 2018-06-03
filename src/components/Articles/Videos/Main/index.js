import React from 'react';

import VideoList from '../../../../widgets/VideosList/VideoList';

const VideosMain = () => (
     <div>
        <VideoList
            type="card"
            title={false}
            loadmore={true}
            start={0}
            amount={10}
            />
    </div>
    )


export default VideosMain;