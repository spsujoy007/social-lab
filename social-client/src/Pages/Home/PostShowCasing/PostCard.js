import moment from 'moment';
import React, { useState } from 'react';
import { BsFillChatSquareTextFill, BsHeart, BsHeartFill } from 'react-icons/bs'
import { TbShare3 } from 'react-icons/tb'
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import UseUserData from '../../../Hooks/userData';

const PostCard = ({post}) => {
    const userData = UseUserData() //logged in user data
    const {_id, profileImg, postImage, caption, name, username, post_time} = post
    const postTime = moment(post_time).startOf('minute').fromNow();
    const [showFullText, setShowFullText] = useState(false)
    const [liked, setLiked] = useState(false)

    // button icons design css 


    const handleClickToLike = () => {
        const getLikeTime = new Date()

        if(userData.email.length){
            const likeInformation = {
                postId: _id,
                liker_email: userData?.email,
                PosterUsername: username,
                likeTime: getLikeTime
            }
    
            fetch(`http://localhost:5000/likepost?id=${_id}`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(likeInformation)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLiked(true)
            })
        }
    }


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
                    {
                        showFullText ?
                        <h3 className={`${caption.length < 100 && 'text-xl'} ${caption.length > 100 && 'text-lg'} 'text-left pl-3 text-black py-2 whitespace-pre-line duration-300`}>{caption}</h3>
                        :
                        <h3 className={`${caption.length < 100 && 'text-xl'} ${caption.length > 100 && 'text-lg'} 'text-left pl-3 text-black py-2 whitespace-pre-line`}>{caption.length > 600 ? <>{caption.slice(0, 600)}... <button 
                            onClick={() => setShowFullText(true)}
                            className='text-primary'
                        >see more</button> </> : `${caption}`}</h3>
                    }
                </>
                :
                <>
                {
                    caption.length > 300 ?
                    <>
                        <h3 className={`${caption.length < 100 && 'text-xl'} ${caption.length > 100 && 'text-lg'} ${caption.length < 50 ? 'text-center' : 'text-left pl-3'} text-black py-2 whitespace-pre-line`}>{caption.length > 300 ? `${caption.slice(0, 300)}...`: `${caption}`}</h3>
                    </>
                    :
                    <>
                        <h3 className={`${caption.length < 100 && 'text-xl'} ${caption.length > 100 && 'text-lg'} ${caption.length < 50 ? 'text-center' : 'text-left pl-3 '} text-black py-2 whitespace-pre-line`}>{caption}</h3>
                    </>
                }
                </>
            }

            {/* user info and other oparations */}
            <div className={`mt-4 flex items-center justify-between ${!postImage && 'border-t-[1px] pt-3'}`}>
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
                    <h6 className="my-0 text-sm">{postTime}</h6>
                </div>
            </div>

            <div className='flex items-center gap-x-6'>
                {/* ############################# */}
                {
                    liked ?
                    <button 
                        
                        className={`text-3xl text-primary hover:text-black duration-300`}><BsHeartFill></BsHeartFill>
                    </button>
                    :
                    <button 
                        onClick={handleClickToLike}
                        className={`text-3xl hover:text-primary duration-300`}><BsHeart></BsHeart>
                    </button>
                }
                <button className={`text-3xl hover:text-primary duration-300`}><BsFillChatSquareTextFill></BsFillChatSquareTextFill></button>
                <div className="dropdown dropdown-top dropdown-end">
                    <label tabIndex={0} className="">
                        <button className={`text-3xl hover:text-primary'} duration-300`}><TbShare3></TbShare3></button>
                    </label>
                    <div tabIndex={0} className="dropdown-content menu p-5 shadow-xl mb-4 bg-gray-100 rounded-box w-52">
                        <h2 className='text-lg text-black mb-2'>Share with:</h2>
                        <div className='flex gap-2 justify-between'>
                            {/* facebook share  */}
                            <FacebookShareButton
                                url={`http://localhost:3000/${_id}`}
                                quote={caption}
                            ><FacebookIcon className='rounded-full w-10 h-10'></FacebookIcon></FacebookShareButton>
                            
                            {/* messanger share  */}
                            <FacebookMessengerShareButton
                                url={`http://localhost:3000/${_id}`}
                            ><FacebookMessengerIcon className='rounded-full w-10 h-10'></FacebookMessengerIcon></FacebookMessengerShareButton>

                            {/* email share  */}
                            <EmailShareButton
                                url={`http://localhost:3000/${_id}`}
                            ><EmailIcon className='rounded-full w-10 h-10'></EmailIcon></EmailShareButton>

                            {/* email share  */}
                            <TwitterShareButton
                                url={`http://localhost:3000/${_id}`}
                            ><TwitterIcon className='rounded-full w-10 h-10'></TwitterIcon></TwitterShareButton>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default PostCard;