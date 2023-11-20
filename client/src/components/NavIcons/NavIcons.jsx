import React from "react";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { logout } from "../../actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";

const NavIcons = () => {
  const dispatch = useDispatch()
  const handleLogOut = ()=> {
    dispatch(logout())
  }

  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>
      <Link to="../chat">
        <img src={Comment} alt="" />
      </Link>
      <button className="logout-button" onClick={handleLogOut}>L</button>
    </div>
  );
};

export default NavIcons;
