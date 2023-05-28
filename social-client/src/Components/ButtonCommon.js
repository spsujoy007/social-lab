import React from 'react';

const ButtonCommon = ({children, widthbtn}) => {
    console.log(`w-[${widthbtn}]`)
    return (
        
        <button className={`bg-primary text-white`}>
            {children}
        </button>

    );
};

export default ButtonCommon;