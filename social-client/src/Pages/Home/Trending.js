import React from 'react';
import './Home.css'
import { BiHomeAlt2 } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { TbSettings2 } from "react-icons/tb";

const Trending = () => {
    return (
        <div className='top-[40px] sticky'>
            <div className='rounded-xl commonShadow bg-white p-3 flex justify-center'>
                <div className='flex items-center gap-5'>
                    <button className='text-3xl flex items-center py-2 px-4 rounded-xl text-primary hover:bg-gray-100 hover:text-black duration-500'><BiHomeAlt2></BiHomeAlt2></button>

                    <button className='text-3xl flex items-center py-2 px-4 rounded-xl text-primary hover:bg-gray-100 hover:text-black duration-500'><RxPerson></RxPerson></button>

                    <button className='text-3xl flex items-center py-2 px-4 rounded-xl text-primary hover:bg-gray-100 hover:text-black duration-500'><RiNotificationLine></RiNotificationLine></button>

                    <button className='text-3xl flex items-center py-2 px-4 rounded-xl text-primary hover:bg-gray-100 hover:text-black duration-500'><TbSettings2></TbSettings2></button>
                </div>
            </div>
            <div className='rounded-xl commonShadow bg-white '>
            <div className='mt-7 px-8 pb-5 py-3'>
                <h2 className='text-xl text-black font-bold'>Trend's for you</h2>

                {/* trend or popular hashtags here...  */}
                <div className='mt-6'>
                    <div className='mb-5'>
                        <h6 className='text-lg font-semibold text-[#313131]'>#lovebite</h6>
                        <p className='mt-2 '>10k shares</p>
                    </div>
                    <div className='mb-5'>
                        <h6 className='text-lg font-semibold text-[#313131]'>#tom&Jerry</h6>
                        <p className='mt-2 '>9.5k shares</p>
                    </div>
                    <div className='mb-5'>
                        <h6 className='text-lg font-semibold text-[#313131]'>#doramon</h6>
                        <p className='mt-2 '>9.4k shares</p>
                    </div>
                    <div className='mb-5'>
                        <h6 className='text-lg font-semibold text-[#313131]'>#Avengers</h6>
                        <p className='mt-2 '>9.4k shares</p>
                    </div>
                </div>  
            </div>
        </div>
        </div>
    );
};

export default Trending;