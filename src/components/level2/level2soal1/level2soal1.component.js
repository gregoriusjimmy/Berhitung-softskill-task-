import React from "react";
import soalBola3 from "../../../assets/soal-level2/soal1/soalbola3.png";
import soalBola1 from "../../../assets/soal-level2/soal1/soalbola1.png";
import jawabBola4 from "../../../assets/soal-level2/soal1/jawabbola4.png";
import jawabBola3 from "../../../assets/soal-level2/soal1/jawabbola3.png";
import jawabBola5 from "../../../assets/soal-level2/soal1/jawabbola5.png";

import papan from "../../../assets/soal-level1/soal1/papan.png";
import samadengan from "../../../assets/soal-level1/soal1/samadengan.png";
import tambah from "../../../assets/soal-level1/soal1/tambah.png";
import "./level2soal1.styles.scss";
const Level1Soal1 = ({ onRightAnswer, onWrongAnswer }) => {
  return (
    <div className="level2-soal1">
      <div className="soal">
        <img src={soalBola3} alt="soalBola3" />
        <img className="operator" src={tambah} alt="tambah" />
        <img src={soalBola1} alt="soalBola1" />
        <img className="operator" src={samadengan} alt="samadengan" />
        <img src={papan} alt="papan" />
      </div>
      <div className="jawab">
        <img src={jawabBola4} onClick={onRightAnswer} alt="jawabBola4" />
        <img src={jawabBola3} onClick={onWrongAnswer} alt="jawabBola3" />
        <img src={jawabBola5} onClick={onWrongAnswer} alt="jawabBola5" />
      </div>
    </div>
  );
};

export default Level1Soal1;
