import React from 'react';

import PostData from '../../Element/postData';

const header = (props) => {

    const postData = ( date, author) => (
        <PostData data={{date,author}} />
    )

    return(
        <div>
            {postData(props.date, props.author)}
        </div>
    )
}
export default  header;