import React, { useState } from 'react';
import { useContext } from 'react';
import { crudContext } from '../../../Context/DataProvider';
import { useQuery } from 'react-query';
import LoaderAnimation from '../../../Components/LoaderAnimation';
import CreatePostHome from '../CreatePost/CreatePostHome';
import { AuthContext } from '../../../Context/AuthProvider';
import MyPostCards from './MyPostCards';
import { IoHome } from 'react-icons/io5'

const MyProfileMain = () => {

    const {user} = useContext(AuthContext)
    const {getuserinfo: userdata} = useContext(crudContext)
    const {full_name, username} = userdata

    const {data: posts = [], refetch, isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myposts?username=${username}`)
            const data = await res.json()
            return data
        },
    })

    if(isLoading){
        return <LoaderAnimation></LoaderAnimation>
    }

    function callRefetch ()  {
        refetch()
    }

    return (
        <div className=' bg-[#f6f6f6]  '>
            
            <div className='md:max-w-[1200px] mx-auto'>
            <div className='w-full max-h-[400px] flex items-center overflow-hidden'>
                <img className='w-full' src="http://res.cloudinary.com/dfxhlbsf2/image/upload/v1685680150/eq22obspufi919fkgevv.jpg" alt="" />
            </div>
            <div className='z-10 -mt-[100px] flex justify-center  overflow-hidden'>
                <img className='rounded-full w-[200px] border-4 border-white' src={userdata?.photoURL} alt="" />
            </div>

            <div className='flex justify-center mt-4'>
                <div>
                    <h2 className='text-3xl text-center font-bold text-black'>{full_name}</h2>
                    <p className='text-center mt-3'>120 friend's</p>
                    <div className='flex justify-center mt-5'>
                    <div className="avatar-group -space-x-6">
                        <div className="avatar border-2">
                          <div className="w-10">
                            <img alt='' src="https://i.pinimg.com/736x/35/05/45/3505452c97e4ceb824cc20885d58c844.jpg" />
                          </div>
                        </div>
                        <div className="avatar border-2">
                          <div className="w-10">
                            <img alt='' src="https://cdn-cidba.nitrocdn.com/rjnSqSQQxmgpqhnoaOHlgyMuPkngIOQQ/assets/images/optimized/rev-4e8d05d/wp-content/uploads/2021/06/What-Are-The-Best-Semi-Formal-Outfits-For-Teenage-Guys.jpg" />
                          </div>
                        </div>
                        <div className="avatar border-2">
                          <div className="w-10">
                            <img alt='' src="https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300925023EMERALDGREEN_2_1024x1024.jpg?v=1674638043" />
                          </div>
                        </div>
                        <div className="avatar border-2 placeholder">
                          <div className="w-10 bg-primary text-neutral-content">
                            <span>+99</span>
                          </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>

            {/* introduction  and posts */}
            <div className='flex lg:flex-row flex-col  gap-x-5 mt-20 md:p-5 p-2'>
                <div className='lg:w-[40%]'>
                    <div>
                        <b className='text-xl'>Introduction</b>
                        <p className='text-left mt-3 text-black whitespace-pre-line'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nesciunt blanditiis consequuntur aliquid.</p>
                        <button className='py-2 w-full bg-white rounded-md mt-3 text-black hover:bg-black hover:text-white duration-300'>Edit bio</button>
                    </div>
                    
                    <div className='mt-6 text-md'>
                        <h2 className='flex items-center gap-2'><IoHome className='text-xl'></IoHome> Lives in <span className='font-bold'>Panchagarh, Rājshāhi, Bangladesh</span></h2>
                        <button className='py-2 w-full bg-white rounded-md mt-2 text-black hover:bg-black hover:text-white duration-300'>Edit details</button>
                    </div>

                    <div className='mt-6 text-md'>
                        <div className='flex gap-3 items-center flex-wrap'>
                            <h2 className='p-2 rounded-full border-[1px] hover:bg-white cursor-pointer'>💻 Coding</h2>
                            <h2 className='p-2 rounded-full border-[1px] hover:bg-white cursor-pointer'>📸 Photography</h2>
                            <h2 className='p-2 rounded-full border-[1px] hover:bg-white cursor-pointer'>🎮 Video Games</h2>
                            <h2 className='p-2 rounded-full border-[1px] hover:bg-white cursor-pointer'>🎧 Listen to music</h2>
                        </div>
                        <button className='py-2 w-full bg-white rounded-md mt-2 text-black hover:bg-black hover:text-white duration-300'>Edit Hobbies</button>
                    </div>
                </div>

                <div className='lg:w-[60%] '>
                    <div className='mb-6'>
                        <CreatePostHome callRefetch={callRefetch}></CreatePostHome>
                        </div>
                        <div className='grid grid-cols-1 gap-5'>
                        {
                            posts.map(post => <MyPostCards
                                key={post._id}
                                post={post}
                                callRefetch={callRefetch}
                            ></MyPostCards>)
                        }

                        </div>
                    </div>
            </div>
            </div>
            
        </div>
    );
};

export default MyProfileMain;