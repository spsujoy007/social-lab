import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { crudContext } from '../../../Context/DataProvider';
import { useQuery } from 'react-query';
import LoaderAnimation from '../../../Components/LoaderAnimation';
import CreatePostHome from '../CreatePost/CreatePostHome';
import PostCard from '../PostShowCasing/PostCard';
import { AuthContext } from '../../../Context/AuthProvider';

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

    const callRefetch = () => {
        refetch()
    }

    return (
        <div className=' bg-[#f0f0f0aa] md:max-w-[1200px] mx-auto'>
            <div className='w-full h-[400px] flex items-center overflow-hidden'>
                <img className='w-full' src="http://res.cloudinary.com/dfxhlbsf2/image/upload/v1685680150/eq22obspufi919fkgevv.jpg" alt="" />
            </div>
            <div className='z-10 -mt-[100px] flex justify-center  overflow-hidden'>
                <img className='rounded-full w-[200px] border-4 border-white' src={userdata?.photoURL} alt="" />
            </div>

            <div className='flex justify-center mt-4'>
                <div>
                    <h2 className='text-3xl text-center font-bold text-black'>{full_name}</h2>
                    <p className='text-center mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nesciunt blanditiis consequuntur aliquid.</p>
                </div>
            </div>

            {/* introduction  and posts */}
            <div className='flex gap-x-3 mt-20'>
                <div className='w-[40%]'>
                    introduction
                </div>

                <div className='w-[60%] '>
                    <div className='mb-6'>
                        <CreatePostHome callRefetch={callRefetch}></CreatePostHome>
                        </div>
                        <div className='grid grid-cols-1 gap-5'>
                        {
                            posts.map(post => <PostCard
                                key={post._id}
                                post={post}
                            ></PostCard>)
                        }

                        </div>
                    </div>
            </div>
            
        </div>
    );
};

export default MyProfileMain;