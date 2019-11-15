import React from "react";
import ButtonHover from "../../components/button-hover/button-hover";
import "./homepage.styles.scss";
import belajarImage from "./button_belajar.png";
import playImage from "./button_play.png";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="buttons">
        <ButtonHover src={belajarImage} linkUrl={"belajar"} width={200} />
        <ButtonHover src={playImage} linkUrl={"play"} width={200} />
      </div>
    </div>
  );
};

export default HomePage;
