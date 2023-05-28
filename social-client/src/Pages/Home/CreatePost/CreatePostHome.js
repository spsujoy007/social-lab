import React, { useState } from 'react';
import { IoMdImages } from "react-icons/io"
import { HiOutlineLocationMarker } from "react-icons/hi"
import profileImg from '../../../assests/profileimg.jpg'
import ModalCommon from '../../../Components/ModalCommon';
import ButtonCommon from '../../../Components/ButtonCommon';

const CreatePostHome = () => {

    return (
        <div className='bg-white p-3 rounded-xl'>
            <div className='flex items-center gap-x-4'>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img className="avatar" src={profileImg} alt="" />
                    </div>
                </div>

                {/* main post create input *********************************************** */}
                <label className="w-full bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full py-3 px-3 outline-none text-black" htmlFor="create_postModal" >
                    <span type="text" style={{userSelect: 'none'}}> what's going on?</span>
                </label>
            </div>

            {/* action buttons image and location ======================================== */}
            <div className='md:ml-16 mt-3 flex items-center' style={{userSelect: 'none'}}>
                <label className={`text-2xl hover:bg-gray-100 p-2 px-6 rounded-xl text-primary flex items-center gap-x-1 cursor-pointer hover:text-black duration-300`} htmlFor="create_postModal" >
                    <IoMdImages></IoMdImages> <span className='text-lg text-black'>Photo</span>
                </label>
                <label className={`text-2xl hover:bg-gray-100 p-2 px-6 rounded-xl text-yellow-500 flex items-center gap-x-1 cursor-pointer hover:text-black duration-300`} htmlFor="create_postModal" >
                    <HiOutlineLocationMarker></HiOutlineLocationMarker> <span className='text-lg  text-black'>Location</span> 
                </label>
            </div>

        <ModalCommon>
            <div>
                
                <div className='flex items-center gap-x-2'>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img className="avatar" src={profileImg} alt="" />
                    </div>
                </div>
                <div>
                    <h5 className='text-black'>Johnson Baby</h5>
                    <span className='text-sm'>28/05/2023</span>
                </div>
                </div>

                <textarea className='w-full min-h-[120px] bg-white text-xl outline-none mt-5' placeholder={`What's going on, Johnson?`} name="" id=""></textarea>
                
                <div className='bg-gray-200 rounded-md flex items-center py-1 px-3 justify-between'>
                    <h4 className='text-black'>Add in image</h4>
                    <div className='flex items-center '>
                    <div className='px-5 hover:bg-gray-100 duration-300 py-2 rounded-xl cursor-pointer'>
                        <IoMdImages className='text-3xl text-primary'></IoMdImages>
                    </div>
                    <div className='px-5 hover:bg-gray-100 duration-300 py-2 rounded-xl cursor-pointer' >
                        <HiOutlineLocationMarker  className='text-3xl text-primary'></HiOutlineLocationMarker>
                    </div>
                </div>
                </div>

                {/* post button here ******************* */}
                <div>
                    <button className='w-full bg-primary text-white py-2 rounded-md mt-5'>POST</button>
                </div>
            </div>
        </ModalCommon>
        </div>
    );
};

export default CreatePostHome;