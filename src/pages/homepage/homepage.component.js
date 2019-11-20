import React from "react";
import ButtonHover from "../../components/button-hover/button-hover.component";
import "./homepage.styles.scss";
import belajarImage from "../../assets/buttons/button_belajar.png";
import playImage from "../../assets/buttons/button_play.png";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="container">
        <div>
          <h1 className="title">Belajar dan Bermain</h1>
        </div>
        <div className="buttons">
          <ButtonHover src={belajarImage} linkUrl={"belajar"} width={200} />
          <ButtonHover src={playImage} linkUrl={"menu"} width={200} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
