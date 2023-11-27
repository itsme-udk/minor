import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { setSelectedUser } from "../../actions/Action";
const User = ({ person }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Dispatch action to store selected user in Redux store
    dispatch(setSelectedUser(person));

    // Redirect to the Chat page
    navigate("/chat");
  };
  console.log(person)
  return (
    <div className="follower" >
      <div>
        <img
          src=
          {
            person.profilePicture
            ? publicFolder + person.profilePicture
            : publicFolder + "defaultProfile.png"
          }
         
          alt="profile"
          className="followerImage"
        />
        <div className="name">
          <span>{person.firstname}</span>
          <span>@{person.username}</span>
        </div>
      </div>
        <button className="button fc-button" onClick={handleButtonClick}>Start Chat</button>
    </div>
  );
};

export default User;
