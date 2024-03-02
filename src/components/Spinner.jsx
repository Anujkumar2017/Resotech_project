import React from 'react';
import loading from './images/loading.gif';

const Spinner = () => {
    return (
        <div className='mb-3'>
            <img src={loading} height="30px" />
        </div>
    )
}

export default Spinner