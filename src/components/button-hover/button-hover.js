import React from "react";
import { withRouter } from "react-router-dom";
import "./button-hover.scss";

const ButtonHover = ({ src, linkUrl, match, history, width }) => {
  return (
    <div
      className="button-hover"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <img alt="button" src={src} style={{ width: `${width}px` }}></img>
    </div>
  );
};

export default withRouter(ButtonHover);
