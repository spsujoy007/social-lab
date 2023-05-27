import React from 'react';
import { BsFillChatSquareTextFill, BsHeart } from 'react-icons/bs'
import { TbShare3 } from 'react-icons/tb'

const PostCard = ({post}) => {

    const {_id, profileImg, postImage, title, userName, email, post_time} = post
    console.log(title.length)

    // button icons design css 
    const iconButtonDesign = `text-3xl hover:text-primary duration-300`

    return (
        <div className='rounded-xl overflow-hidden bg-white commonShadow p-5'>
            <div className='w-full rounded-xl md:h-[400px] min-h-[200px] flex items-center overflow-hidden'>
                <figure><img className='rounded-xl' src={postImage} alt="" /></figure>
            </div>
            <h3 className={`text-xl ${title.length < 50 ? 'text-center' : 'text-left pl-3'} text-black py-2`}>{title}</h3>

            {/* user info and other oparations */}
            <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img className="avatar" src={profileImg} alt="" />
                    </div>
                </div>
                <div>
                    <h5 className="text-lg text-black font-[400] ">
                        {userName}
                    </h5>
                    <h6 className="my-0 text-sm">{post_time} AM</h6>
                </div>
            </div>

            <div className='flex items-center gap-x-6'>
                <button className={`${iconButtonDesign}`}><BsHeart></BsHeart></button>
                <button className={`${iconButtonDesign}`}><BsFillChatSquareTextFill></BsFillChatSquareTextFill></button>
                <button className={`${iconButtonDesign}`}><TbShare3></TbShare3></button>
            </div>
            </div>
        </div>
    );
};

export default PostCard;