import React from "react";
import { Link } from "react-router-dom";
import "./numberpage.styles.scss";
import buttonBack from "../../assets/buttons/button_back.png";
import ButtonHover from "../../components/button-hover/button-hover.component";
class NumberPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dict: {
        "1": "Satu",
        "2": "Dua",
        "3": "Tiga",
        "4": "Empat",
        "5": "Lima",
        "6": "Enam",
        "7": "Tujuh",
        "8": "Delapan",
        "9": "Sembilan",
        "10": "Sepuluh"
      }
    };
  }
  render() {
    return (
      <div className="number-page">
        <Link to="/belajar">
          <div className="back-button">
            <ButtonHover src={buttonBack} width={80} />
          </div>
        </Link>
        <div className="number-container">
          <button className="button-num">
            <div className="orange-circle">
              <h1 className="num-title">{this.props.match.params.numberId}</h1>
            </div>
          </button>
          <div>
            <h2 className="num-text">
              {this.state.dict[this.props.match.params.numberId]}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default NumberPage;
