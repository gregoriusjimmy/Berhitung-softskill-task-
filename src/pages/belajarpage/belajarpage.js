import React from "react";
import NumbersDirectory from "../../components/numbers-directory/numbers-directory";
import ButtonHover from "../../components/button-hover/button-hover";
import home_button from "./home_button.png";
import "./belajarpage.scss";
import { Link } from "react-router-dom";
const Belajar = () => {
  return (
    <div className="belajarpage">
      <div className="button">
        <Link to="/">
          <ButtonHover src={home_button} width={100} />
        </Link>
      </div>
      <NumbersDirectory />
    </div>
  );
};

export default Belajar;
