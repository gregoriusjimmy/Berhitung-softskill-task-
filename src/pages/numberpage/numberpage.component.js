import React from "react";
import "./numberpage.styles.scss";

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
        <div className="orange-circle">
          <h1 className="num-title">{this.props.match.params.numberId}</h1>
        </div>
        <div>
          <h2 className="num-text">
            {this.state.dict[this.props.match.params.numberId]}
          </h2>
        </div>
      </div>
    );
  }
}

export default NumberPage;
