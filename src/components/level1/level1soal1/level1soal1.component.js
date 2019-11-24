import React from "react";
import soalDonat1 from "../../../assets/soal-level1/soal1/donat1.png";
import jawabDonat1 from "../../../assets/soal-level1/soal1/jawabdonat1.png";
import jawabDonat2 from "../../../assets/soal-level1/soal1/jawabdonat2.png";
import jawabDonat3 from "../../../assets/soal-level1/soal1/jawabdonat3.png";
import papan from "../../../assets/soal-level1/soal1/papan.png";
import samadengan from "../../../assets/soal-level1/soal1/samadengan.png";
import tambah from "../../../assets/soal-level1/soal1/tambah.png";
import "./level1soal1.styles.scss";

const Level1Soal1 = ({ onRightAnswer, onWrongAnswer }) => {
  return (
    <div className="level1-soal1">
      <div className="soal">
        <img src={soalDonat1} alt="soaldonat1" />
        <img className="operator" src={tambah} alt="tambah" />
        <img src={soalDonat1} alt="soaldonat1" />
        <img className="operator" src={samadengan} alt="samadengan" />
        <img src={papan} alt="papan" />
      </div>
      <div className="jawab">
        <img src={jawabDonat2} onClick={onRightAnswer} alt="jawabDonat2" />
        <img src={jawabDonat3} onClick={onWrongAnswer} alt="jawabDonat3" />
        <img src={jawabDonat1} onClick={onWrongAnswer} alt="jawabDonat1" />
      </div>
    </div>
  );
};

export default Level1Soal1;
