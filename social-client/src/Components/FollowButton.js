import React from 'react';

const FollowButton = ({children, width, height}) => {
    return (
        <button className={`border-2 border-primary px-4 py-2 rounded-xl text-primary flex items-center gap-2 hover:bg-primary hover:text-white duration-300`}>{children}</button>
    );
};

export default FollowButton;