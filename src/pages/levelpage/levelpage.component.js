import React from "react";
import "./levelpage.styles.scss";
import buttonLevel1 from "../../assets/buttons/button_level1.png";
import buttonLevel2 from "../../assets/buttons/button_level2.png";
import buttonLevel3 from "../../assets/buttons/button_level3.png";
import buttonLevel2Lock from "../../assets/buttons/button_level2_lock.png";
import buttonLevel3Lock from "../../assets/buttons/button_level3_lock.png";

const LevelPage = () => {
  return (
    <div className="level-page">
      <h1 className="pilih-level">Pilih Level</h1>
      <div className="container">
        <img className="able" src={buttonLevel1} alt="level1" />
        <img className="disabled" src={buttonLevel2Lock} alt="level2" />
        <img className="disabled" src={buttonLevel3Lock} alt="level3" />
      </div>
    </div>
  );
};

export default LevelPage;
