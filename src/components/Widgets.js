import React from "react";

import "./Widgets.css";

import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subTitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subTitle}</p>
        </div>
      
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("jhabindr is back with react","Top News")}
      {newsArticle("jhabindr is back with react","Top News")}
      {newsArticle("jhabindr is back with react","Top News")}
      {newsArticle("jhabindr is back with react","Top News")}
      {newsArticle("jhabindr is back with react","Top News")}
      {newsArticle("jhabindr is back with react","Top News")}
      {newsArticle("jhabindr is back with react","Top News")}
    </div>
  );
}

export default Widgets;