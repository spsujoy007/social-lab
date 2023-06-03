import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyProfileMain = () => {

    const profileData = useLoaderData()
    console.log(profileData)

    return (
        <div className='mt-10 bg-[#ffffffaa] rounded-xl md:max-w-[1200px] mx-auto'>
            <div className='w-full h-[400px] flex items-center overflow-hidden rounded-t-xl'>
                <img className='w-full' src="http://res.cloudinary.com/dfxhlbsf2/image/upload/v1685680150/eq22obspufi919fkgevv.jpg" alt="" />
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default MyProfileMain;