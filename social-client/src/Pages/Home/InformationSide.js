import React from 'react';
import coverPic from '../../assests/coverpic.jpg'
import profileImg from '../../assests/profileimg.jpg'
import './Home.css'
import SuggestionProfiles from './SuggestionProfiles/SuggestionProfiles';

const InformationSide = () => {
    return (
        <div >


                <div className='bg-whiterounded-xl rounded-xl overflow-hidden bg-[#ffffff] commonShadow pb-8'>
                    
                <div className='w-full h-[210px] overflow-hidden '>
                    <img src={coverPic} alt="cover" />
                </div>

                {/* profile images  */}
                <div className='w-[160px] h-[160px] rounded-full overflow-hidden mx-auto -mt-[80px] z-10 border-4 border-x-primary'>
                    <img className='z-10' src={profileImg} alt="profile_image" />
                </div>

                <div className='mt-3 text-center px-7'>
                    <h3 className=' font-bold text-2xl text-[#323232]'>Johnson Baby</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, architecto!</p>


                <div className='flex mx-auto text-center border-t-2 border-b-2 mt-5 py-2 mb-5'>
                    <div className='w-1/2 text-center'>
                        <p className='text-2xl font-bold text-[#323232]'>10k</p>
                        <p className='mt-1 text-lg'>Followers</p>
                    </div>

                    <div className='flex items-center'>
                        <div className="h-[60px] w-[2px] bg-primary rounded-full"></div>
                    </div> 

                    <div className='w-1/2 text-center'>
                        <p className='text-2xl font-bold text-[#323232]'>100</p>
                        <p className='mt-1 text-lg'>Following</p>
                    </div>

                </div>
                
                <button className='bg-gradient-to-r from-primary to-[#00b1cc] text-white px-16 py-3 rounded-xl text-lg hover:scale-95 duration-300'>
                    View Profile
                </button>

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