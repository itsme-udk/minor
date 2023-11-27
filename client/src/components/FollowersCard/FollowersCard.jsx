import React, { useEffect, useState } from "react";
import "./FollowersCard.css";
import { getAllUser } from "../../api/UserRequests";
import User from "../User/User";
import { useSelector } from "react-redux";
const FollowersCard = ({ location }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className="FollowersCard">
      <div className="searchbar">
        <input className='Search' type="Text" placeholder="Search People"></input>
      </div>
      <h3 className="Sugg-head">People you may know</h3>
      <div className="Suggestions">
      {persons.map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      })}
      </div>
    </div>
  );
};

export default FollowersCard;
