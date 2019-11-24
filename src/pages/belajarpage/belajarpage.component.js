import React from "react";
import NumbersDirectory from "../../components/numbers-directory/numbers-directory.component";
import ButtonHover from "../../components/button-hover/button-hover.component";
import home_button from "../../assets/buttons/home_button.png";
import "./belajarpage.styles.scss";
import { Link } from "react-router-dom";
const Belajar = () => {
  return (
    <div className="belajarpage">
      <div className="button">
        <Link to="/">
          <ButtonHover src={home_button} width={100} />
        </Link>
      </div>
      <div className="container">
        <h1 className="title-page">Pengenalan Angka</h1>
        <NumbersDirectory />
      </div>
    </div>
  );
};

export default Belajar;
