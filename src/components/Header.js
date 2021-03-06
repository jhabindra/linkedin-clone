import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/HomeSharp";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HeaderOptions from "./HeaderOptions";
import logo from "../images/LI-In-Bug.png"

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src={logo}
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>                                                             
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={WorkIcon} title="Job" />
        <HeaderOptions Icon={MessageIcon} title="Messeging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions Avatar={AccountCircleIcon} title="Me" />
      </div>
    </div>
  );
}

export default Header;
