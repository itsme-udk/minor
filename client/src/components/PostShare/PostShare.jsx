import React, { useState, useRef, useEffect} from "react";
import "./PostShare.css";
import FollowersCard from "../FollowersCard/FollowersCard";


const PostShare = () => {

  return (
    <div className="PostShare">
      <FollowersCard/>
    </div>
  );
};

export default PostShare;
