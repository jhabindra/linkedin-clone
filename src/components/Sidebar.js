import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Sidebar.css";

function Sidebar() {

  const user=useSelector(selectUser)
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-06/twitter-banner-1500px.jpg?h=4f5b30f1&itok=IYdGFRGN"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>{user.email[0]}</Avatar>
        <h4>{user.displayName}</h4>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewd you</p>
          <p className="sidebar__statNumber">2,564</p>
        </div>
        <div className="sidebar__stat">
          <p>Viewdon post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("Programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
      
    </div>
  );
}

export default Sidebar;
