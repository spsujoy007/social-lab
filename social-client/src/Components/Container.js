import React from 'react';

const Container = ({children}) => {
    return (
        <div className='md:max-w-[90vw] mx-auto'>
            {children}
        </div>
    );
};

export default Container;