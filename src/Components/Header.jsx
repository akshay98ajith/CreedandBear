import React from "react";
import logOut from "./../Assets/logOut.svg";

const Header = () => {
  const logOutHandler = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  const username = sessionStorage.getItem("username");
  return (
    <div className="Header">
      <div className="logo">Header Logo</div>
      <div>
        <span className="m-5">Hi, {username}</span>
        <button onClick={logOutHandler}>
          <img src={logOut} className="img-fluid logout" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
