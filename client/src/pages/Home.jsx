import React from "react";
import PostSide from "../components/PostSide/PostSide";
import ProfileSide from "../components/profileSide/ProfileSide";
import RightSide from "../components/RightSide/RightSide";
import LogoSearch from '../components';
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="Navbar">
        <LogoSearch/>
      </div>
      <div className="Home">
        <ProfileSide/>
        <PostSide />
        <RightSide />
      </div>
    </div>
    
  );
};

export default Home;
