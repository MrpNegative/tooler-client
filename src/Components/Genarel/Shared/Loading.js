import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div class="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loading;