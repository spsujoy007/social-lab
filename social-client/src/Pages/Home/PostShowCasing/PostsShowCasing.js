import React, { useContext } from 'react';
import PostCard from './PostCard';
import CreatePostHome from '../CreatePost/CreatePostHome';
import { useQuery } from 'react-query';
import { InfinitySpin } from 'react-loader-spinner';

const PostsShowCasing = () => {


    const {data: posts = [], refetch, isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allposts`)
            const data = await res.json()
            return data
        },
    })

    if(isLoading){
        return <div className='flex h-[100vh] justify-center items-center w-full'>
            <InfinitySpin 
                width='200'
                color="#08B3CC"
            />
        </div>
    }



    return (
        <div className=' '>
            <div className='mb-6'>
                <CreatePostHome></CreatePostHome>
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
    );
};

export default PostsShowCasing;