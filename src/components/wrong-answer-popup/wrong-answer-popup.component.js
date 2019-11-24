import React from "react";
import popupSalah from "../../assets/popup/popup_salah.png";
import "./wrong-answer-popup.styles.scss";

const WrongAnswer = props => {
  return (
    <div className="popup-salah">
      <img src={popupSalah} onClick={props.handleClick} />
    </div>
  );
};

export default WrongAnswer;
