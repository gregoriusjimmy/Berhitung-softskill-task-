import React from "react";
import popupBenar from "../../assets/popup/popup_benar.png";
import { Link } from "react-router-dom";
import "./right-answer-popup.styles.scss";

const RightAnswer = props => {
  return (
    <div className="popup-benar">
      <Link to={`/menu${props.levelUrl}`}>
        <img
          src={popupBenar}
          style={{ maxWidth: `${95}%` }}
          onClick={props.handleClick}
        />
      </Link>
    </div>
  );
};

export default RightAnswer;
