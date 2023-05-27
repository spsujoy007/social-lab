import React from 'react';
import { IoMdImages } from "react-icons/io"
import { HiOutlineLocationMarker } from "react-icons/hi"

const CreatePostHome = () => {

    const profileImg = "https://images.unsplash.com/photo-1622020920816-cd528763211a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybWFsJTIwbWFufGVufDB8fDB8fHww&w=1000&q=80"

    const iconButtonDesign = `text-2xl text-primary flex items-center gap-x-1 cursor-pointer hover:text-black duration-300`

    return (
        <div className='bg-white p-3 rounded-xl'>
            <div className='flex items-center gap-x-4'>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img className="avatar" src={profileImg} alt="" />
                    </div>
                </div>
                <label className="w-full bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full py-3 px-3 outline-none text-black" htmlFor="create_postModal" >
                    <span type="text" style={{userSelect: 'none'}}> what's going on?</span>
                </label>
            </div>

            <div className='md:ml-16 mt-3 flex items-center gap-x-8'>
                <label className={iconButtonDesign} htmlFor="create_postModal" >
                    <IoMdImages></IoMdImages> <span className='text-lg'>Photo</span>
                </label>
                <label className={iconButtonDesign} htmlFor="create_postModal" >
                    <HiOutlineLocationMarker></HiOutlineLocationMarker> <span className='text-lg'>Location</span> 
                </label>
            </div>

            {/* modal  */}
            <input type="checkbox" id="create_postModal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label htmlFor="create_postModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
              </div>
            </div>
        </div>
    );
};

export default CreatePostHome;