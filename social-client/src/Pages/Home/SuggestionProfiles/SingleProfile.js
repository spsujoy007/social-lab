import React from "react";
import FollowButton from "../../../Components/FollowButton";
import {SlUserFollow } from "react-icons/sl";

const SingleProfile = ({ profile }) => {
  const { username, email, photoURL } = profile;

  return (
    <div className="mb-5 flex items-center gap-x-4">

      <div className="avatar">
        <div className="w-12 rounded-full bg-white p-1">
            <img className="avatar rounded-full" src={photoURL} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <div>
            <h5 className="text-lg text-black font-[400] ">
                {username.length < 12 ? `${username}` : `${username.slice(0,12)}...`}
                {/* {userName} */}
            </h5>
            <h6 className="my-0 text-xs">{email}</h6>
        </div>

        <div className="text-sm">
            <FollowButton>Follow <SlUserFollow></SlUserFollow> </FollowButton>
        </div>
        
      </div>

    </div>
  );
};

export default SingleProfile;
