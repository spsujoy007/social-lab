import React from 'react';
import PostCard from './PostCard';
import CreatePostHome from '../CreatePost/CreatePostHome';

const PostsShowCasing = () => {

    const posts = [
        {
            _id: "1",
            profileImg: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
            postImage: "https://iso.500px.com/wp-content/uploads/2021/08/Hobby-photographer-waiting-for-beautiful-sunset-By-Jarom%C3%ADr-Chalabala-2.jpg",
            title: "Lorem ipsum dolor sit amet consectetur.",
            post_date: '10-5-2023',
            post_time: '10: 20',
            userName: "Asadullah al Galib",
            email: "galib@gmail.com"
        },
        {
            _id: "2",
            profileImg: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
            postImage: "https://images.squarespace-cdn.com/content/v1/5c52750e8f513001c63a48f1/1667949743884-ZQN3I867OIM3J73XOKJZ/Post+surf+mood+Lola+Photography-3.jpg",
            title: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non accusamus, quia veritatis ipsam atque odit necessitatibus in quas quae voluptatem illum facere, tenetur nobis esse corrupti explicabo? Unde, cumque.",
            post_date: '10-5-2023',
            post_time: '10: 20',
            userName: "Asadullah al Galib",
            email: "galib@gmail.com"
        },
        {
            _id: "3",
            profileImg: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
            postImage: "https://images.pexels.com/photos/1214566/pexels-photo-1214566.jpeg?cs=srgb&dl=pexels-hassan-ouajbir-1214566.jpg&fm=jpg",
            title: "Lorem ipsum dolor sit amet consectetur.",
            post_date: '10-5-2023',
            post_time: '10: 20',
            userName: "Sujoy Paul",
            email: "sujoy@gmail.com"
        },
    ]

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