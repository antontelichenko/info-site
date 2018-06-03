import React from 'react';

import NewsList from '../../../../widgets/NewsList/NewsList';

const NewsMain =()=>{
    return(
    <div>
        <NewsList
            type="card"
            loadMore={true}
            start={3}
            amount={9}
            />
    </div>
    )
}
export default NewsMain;