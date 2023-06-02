import React, { useContext, useState } from 'react';
import coverPic from '../../assests/coverpic.jpg'
import profileImg from '../../assests/profileimg.jpg'
import './Home.css'
import SuggestionProfiles from './SuggestionProfiles/SuggestionProfiles';
import SearchBar from './SearchBarItem/SearchBar';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from 'react-query';
import { crudContext } from '../../Context/DataProvider';
import { Link } from 'react-router-dom';

const InformationSide = () => {
    const {user} = useContext(AuthContext)
    const {getuserinfo: userdata} = useContext(crudContext)

    return (
        <div className='top-10 sticky'>

                    <div className='lg:mb-10 mt-7 lg:block hidden'>
                        <SearchBar></SearchBar>
                    </div>

                <div className=' rounded-xl overflow-hidden bg-[#ffffff] commonShadow pb-8'>
                    
                <div className='w-full h-[210px] overflow-hidden '>
                    <img src={coverPic} alt="cover" />
                </div>

                <div className='w-[160px] h-[160px] rounded-full overflow-hidden mx-auto -mt-[80px] z-10 border-4 border-y-primary border-x-white'>
                    {/* user photo ############################################################### */}
                    <img className='z-10' src={userdata?.photoURL} alt="profile_image" />
                </div>

                <div className='mt-3 text-center px-7'>
                    {/* user name and bio  ########################################### */}
                    <h3 className=' font-bold text-2xl text-[#323232]'>{userdata.full_name}</h3>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, architecto!</p>


                <div className='flex mx-auto text-center mt-5 py-2 mb-2'>
                    <div className='w-1/2 text-center'>
                        <p className='text-xl font-bold text-[#323232]'>10k</p>
                        <p className='mt-1 text-md'>Followers</p>
                    </div>

                    <div className='flex items-center'>
                        <div className="h-[60px] w-[2px] bg-primary rounded-full"></div>
                    </div> 

                    <div className='w-1/2 text-center'>
                        <p className='text-xl font-bold text-[#323232]'>100</p>
                        <p className='mt-1 text-md'>Following</p>
                    </div>

                </div>
                
                <Link to={`/${userdata?.username}`}>
                    <button className='bg-gradient-to-r from-primary to-[#8AD7D1] text-white px-12 py-2 rounded-xl text-lg hover:scale-95 duration-300'>
                    View Profile
                </button>
                </Link>

                </div>

                </div>


                {/* suggestion profile list here ...........  */}
                <div>
                    <SuggestionProfiles></SuggestionProfiles>
                </div>

        </div>
    );
};

export default InformationSide;