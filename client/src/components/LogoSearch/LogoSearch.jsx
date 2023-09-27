import React from "react";
import Logo from "./LogoName.png";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
const LogoSearch = () => {
  return (
    <div>
      <div>
      <img className="Logo" src={Logo} alt="" />
    </div>
    <div className="LogoSearch">
      <div className="Search">
          <input type="text" placeholder="#Explore"/>
          <div className="s-icon">
                <UilSearch/>
          </div>
      </div>
    </div>
    </div>
  );
};

export default LogoSearch;
