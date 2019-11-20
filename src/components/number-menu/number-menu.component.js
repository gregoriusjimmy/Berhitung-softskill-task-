import React from "react";
import "./number-menu.styles.scss";
const NumberMenu = ({ number, linkUrl, handleClick }) => {
  return (
    <div className="number-menu" onClick={handleClick}>
      <h1>{number}</h1>
    </div>
  );
};

export default NumberMenu;
