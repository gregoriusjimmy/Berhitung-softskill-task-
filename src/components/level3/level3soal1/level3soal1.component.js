import React from "react";
import soalApel4 from "../../../assets/soal-level3/soal1/soalapel4.png";
import soalApel3 from "../../../assets/soal-level3/soal1/soalapel3.png";
import jawabApel7 from "../../../assets/soal-level3/soal1/jawabapel7.png";
import jawabApel8 from "../../../assets/soal-level3/soal1/jawabapel8.png";
import jawabApel6 from "../../../assets/soal-level3/soal1/jawabapel6.png";

import papan from "../../../assets/soal-level1/soal1/papan.png";
import samadengan from "../../../assets/soal-level1/soal1/samadengan.png";
import tambah from "../../../assets/soal-level1/soal1/tambah.png";
import "./level3soal1.styles.scss";
const Level3Soal1 = ({ onRightAnswer, onWrongAnswer }) => {
  return (
    <div className="level3-soal1">
      <div className="soal">
        <img src={soalApel4} alt="soalApel4" />
        <img className="operator" src={tambah} alt="tambah" />
        <img src={soalApel3} alt="soalApel3" />
        <img className="operator" src={samadengan} alt="samadengan" />
        <img src={papan} alt="papan" />
      </div>
      <div className="jawab">
        <img src={jawabApel6} onClick={onWrongAnswer} alt="jawabApel6" />
        <img src={jawabApel8} onClick={onWrongAnswer} alt="jawabApel8" />
        <img src={jawabApel7} onClick={onRightAnswer} alt="jawabApel7" />
      </div>
    </div>
  );
};

export default Level3Soal1;
