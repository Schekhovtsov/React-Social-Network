import loaderGif from '../../assets/images/loader.gif';
import React from 'react';

const Preloader = () => {
    return (
        <div>
            <img src={loaderGif}/>
        </div>
    );
}

export default Preloader;