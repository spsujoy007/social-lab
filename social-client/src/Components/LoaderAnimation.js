import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const LoaderAnimation = () => {
    return (
        <div className='flex h-[100vh] justify-center items-center w-full'>
            <img className='w-[100px]' src="../assests/sitelogo.png" alt="" />
            <InfinitySpin 
                width='200'
                color="#08B3CC"
            />
        </div>
    );
};

export default LoaderAnimation;