import React, { useContext } from 'react';
import PostCard from './PostCard';
import CreatePostHome from '../CreatePost/CreatePostHome';
import { useQuery } from 'react-query';
import { InfinitySpin } from 'react-loader-spinner';
import LoaderAnimation from '../../../Components/LoaderAnimation';

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
        return <LoaderAnimation></LoaderAnimation>
    }

    const callRefetch = () => {
        refetch()
    }



    return (
        <div className=' '>
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
    );
};

export default PostsShowCasing;