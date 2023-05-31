import React from 'react';
import { BsFillChatSquareTextFill, BsHeart } from 'react-icons/bs'
import { TbShare3 } from 'react-icons/tb'

const PostCard = ({post}) => {

    const {_id, profileImg, postImage, caption, name, email, post_time} = post

    // button icons design css 
    const iconButtonDesign = `text-3xl hover:text-primary duration-300`

    return (
        <div className='rounded-xl overflow-hidden bg-white commonShadow p-5'>
            {
                postImage && <div className='w-full rounded-xl md:min-h-[200px] md:max-h-[400px] min-h-[200px] flex items-center  justify-center overflow-hidden'>
                <figure><img className='rounded-xl' src={postImage} alt="" /></figure>
            </div>
            }
            {
                postImage === "" ?
                <>
                <h3 className={`${caption.length < 100 && 'text-xl'} ${caption.length > 100 && 'text-lg'} 'text-left pl-3 text-black py-2`}>{caption}</h3>
                </>
                :
                <>
                {
                    caption.length > 300 ?
                    <>
                        <h3 className={`${caption.length < 100 && 'text-xl'} ${caption.length > 100 && 'text-lg'} ${caption.length < 50 ? 'text-center' : 'text-left pl-3'} text-black py-2`}>{caption.length > 300 ? `${caption.slice(0, 300)}...`: `${caption}`}</h3>
                    </>
                    :
                    <>
                        <h3 className={`${caption.length < 100 && 'text-xl'} ${caption.length > 100 && 'text-lg'} ${caption.length < 50 ? 'text-center' : 'text-left pl-3'} text-black py-2`}>{caption}</h3>
                    </>
                }
                </>
            }

            {/* user info and other oparations */}
            <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        {/* ########################################################## */}
                        <img className="avatar" src={profileImg} alt="" />
                    </div>
                </div>
                <div>
                    <h5 className="text-lg text-black font-[400] ">
                        {name}
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