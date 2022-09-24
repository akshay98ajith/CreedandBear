import React from "react";
import { NavLink } from "react-router-dom";
import usersIcon from "./../Assets/usersIcon.svg";

const SideNav = () => {
  return (
    <div className="sideNav">
      <ul>
        <NavLink activeclassname="active" to="/users">
          <li>
            <div>
              <img className="icons img-fluid" src={usersIcon} alt="" />
              <span>Users</span>
            </div>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideNav;
