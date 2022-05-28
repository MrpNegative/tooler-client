import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loading;