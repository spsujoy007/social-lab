import React, { useState } from 'react';
import { IoMdClose, IoMdImages } from "react-icons/io"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { TbPhotoPlus } from "react-icons/tb"
import profileImg from '../../../assests/profileimg.jpg'
import ModalCommon from '../../../Components/ModalCommon';

const CreatePostHome = () => {

    const [selectPhoto, setSelectPhoto] = useState(true)
    const [viewImage, setViewImage] = useState('')
    
    const handleSelectPhoto = (e) => {
        const imgs = e.target.files[0]
        const img = URL.createObjectURL(imgs)
        setViewImage(img)
        // console.log(imgs)

    }

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
                <label onClick={() => setSelectPhoto(!selectPhoto)} className={`text-2xl hover:bg-gray-100 p-2 md:px-6 px-2 rounded-xl text-primary flex items-center gap-x-1 cursor-pointer hover:text-black duration-300`} htmlFor="create_postModal" >
                    <IoMdImages></IoMdImages> <span className='text-lg text-black'>Photo</span>
                </label>
                <label className={`text-2xl hover:bg-gray-100 p-2 md:px-6 px-2 rounded-xl text-yellow-500 flex items-center gap-x-1 cursor-pointer hover:text-black duration-300`} htmlFor="create_postModal" >
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

                <textarea className={`w-full rounded-md  p-3 text-black placeholder:text-gray-400 ${!selectPhoto ? "min-h-[60px]" : 'min-h-[120px]' } bg-transparent text-lg outline-none mt-5`} placeholder={`What's going on, Johnson?`} name="" id=""></textarea>

                {/* select photo div  */}
                <div className={`border-[1px] border-primary p-2 mb-2 rounded-md ${selectPhoto ?  "hidden" : 'block'} duration-300`}>
                    {
                        viewImage ?
                        <div>
                            <div className='flex justify-end -mb-[45px] mr-[10px] p-2'>
                                <IoMdClose onClick={() => setViewImage('')} className='text-black text-3xl bg-[#ffffffc0] shadow-xl rounded-full z-20 cursor-pointer'></IoMdClose>
                            </div>
                            <img className='rounded-md' src={viewImage} alt="" />
                        </div>
                        :
                        <div>
                            <label htmlFor="photoSelector" className='rounded-md'>
                                <div className='bg-white commonShadow flex flex-col items-center text-center px-5 py-10 w-full rounded-md'>
                                    <div className='flex justify-center mb-4'>
                                        <TbPhotoPlus className='text-4xl text-primary'></TbPhotoPlus>
                                    </div>
                                    <h5 className='text-md font-bold text-black'>Select Photo</h5>
                                    <p className='text-sm'>click to add a photo</p>
                                </div>
                            </label>
                            <input onChange={(e) => handleSelectPhoto(e)} className='hidden' id='photoSelector' type="file" accept='.png, .jpg' name="image" />
                        </div>
                    }
                </div>
                

                {/* add in image and location section  */}
                <div className='bg-white rounded-md flex items-center py-1 px-3 justify-between '>
                    <h4 className='text-black text-sm'>Add in image</h4>
                    <div className='flex items-center '>

                    <div onClick={() => setSelectPhoto(!selectPhoto)} className={`md:px-5 px-2 hover:bg-gray-100 duration-300 py-2 rounded-xl cursor-pointer ${!selectPhoto && 'text-black'}`}>
                        <IoMdImages className='text-3xl '></IoMdImages>
                    </div>
                    <div className='md:px-5 px-2 hover:bg-gray-100 duration-300 py-2 rounded-xl cursor-pointer' >
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