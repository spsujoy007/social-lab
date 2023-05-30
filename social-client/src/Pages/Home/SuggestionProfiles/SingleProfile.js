import React from "react";
import FollowButton from "../../../Components/FollowButton";
import {SlUserFollow } from "react-icons/sl";

const SingleProfile = ({ profile }) => {
  const { _id, userName, email, profileImg } = profile;

  return (
    <div className="mb-5 flex items-center gap-x-4">

      <div className="avatar">
        <div className="w-10 rounded-full">
            <img className="avatar" src={profileImg} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <div>
            <h5 className="text-lg text-black font-[400] ">
                {userName.length < 12 ? `${userName}` : `${userName.slice(0,12)}...`}
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
