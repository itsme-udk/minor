import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import "./Profile.css";
const Profile = () => {
  return (
    
      <div className="Profile-center">
        <div className="pro">
      <ProfileCard/>
      </div>
        <ProfileLeft />
        
      </div>
     
    
  );
};

export default Profile;
