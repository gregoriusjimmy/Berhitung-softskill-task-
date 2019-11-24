import React from "react";
import "./levelpage.styles.scss";
import { Link } from "react-router-dom";
import buttonLevel1 from "../../assets/buttons/button_level1.png";
import buttonLevel2 from "../../assets/buttons/button_level2.png";
import buttonLevel3 from "../../assets/buttons/button_level3.png";
import buttonLevel2Lock from "../../assets/buttons/button_level2_lock.png";
import buttonLevel3Lock from "../../assets/buttons/button_level3_lock.png";
import starImage from "../../assets/icon/bintang.png";
import home_button from "../../assets/buttons/home_button.png";
import ButtonHover from "../../components/button-hover/button-hover.component";
class LevelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levelRightNow: 1
    };
  }
  renderButtonLevel2 = () => {
    if (this.props.match.params.level > 1) {
      return (
        <Link to="/menu/level2">
          <img className="able" src={buttonLevel2} alt="level2" />
        </Link>
      );
    } else {
      return <img className="disabled" src={buttonLevel2Lock} alt="level2" />;
    }
  };
  renderButtonLevel3 = () => {
    if (this.props.match.params.level > 2) {
      return (
        <Link to="/menu/level3">
          <img className="able" src={buttonLevel3} alt="level3" />
        </Link>
      );
    } else {
      return <img className="disabled" src={buttonLevel3Lock} alt="level2" />;
    }
  };
  render() {
    return (
      <div className="level-page">
        <div className="container">
          <h1 className="pilih-level">Pilih Level</h1>
          <div>
            <Link to="/menu/level1" onClick={this.changeLevel}>
              <img className="able" src={buttonLevel1} alt="level1" />
            </Link>
            <img src={starImage} style={{ width: 100 }} alt="star" />
          </div>
          <div style={{ marginLeft: 100 }}>
            {this.renderButtonLevel2()}
            <img src={starImage} style={{ width: 100 }} alt="star" />
            <img src={starImage} style={{ width: 100 }} alt="star" />
          </div>
          <div style={{ marginLeft: 200 }}>
            {this.renderButtonLevel3()}
            <img src={starImage} style={{ width: 100 }} alt="star" />
            <img src={starImage} style={{ width: 100 }} alt="star" />
            <img src={starImage} style={{ width: 100 }} alt="star" />
          </div>
        </div>
        <div className="home-button">
          <Link to="/">
            <ButtonHover
              className="home-button"
              src={home_button}
              width={100}
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default LevelPage;
