import React from "react";
import "./level1page.styles.scss";
import Level1Soal1 from "../../components/level1/level1soal1/level1soal1.component";
import RightAnswer from "../../components/right-answer-popup/right-answer-popup.component";
import WrongAnswer from "../../components/wrong-answer-popup/wrong-answer-popup.component";
import { Redirect } from "react-router-dom";
class Level1Page extends React.Component {
  constructor() {
    super();
    this.state = {
      soalke: 1,
      hiddenPopupRight: true,
      hiddenPopupWrong: true,
      hiddenLayer: true
    };
  }

  onRightAnswer = () => {
    this.setState(prevState => ({
      hiddenPopupRight: !prevState.hiddenPopupRight,
      hiddenLayer: !prevState.hiddenLayer
    }));
  };
  onWrongAnswer = () => {
    this.setState(prevState => ({
      hiddenPopupWrong: !prevState.hiddenPopupWrong,
      hiddenLayer: !prevState.hiddenLayer
    }));
  };

  render() {
    return (
      <div className="level1-page">
        {this.state.hiddenLayer ? null : <div className="background-layer" />}

        <h1 className="title-soal">{`Soal ${this.state.soalke}`}</h1>
        {this.state.hiddenPopupRight ? null : (
          <RightAnswer levelUrl="2" handleClick={this.onRightAnswer} />
        )}
        {this.state.hiddenPopupWrong ? null : (
          <WrongAnswer handleClick={this.onWrongAnswer} />
        )}
        {this.state.hiddenLayer ? null : <div className="background-layer" />}
        <Level1Soal1
          onRightAnswer={this.onRightAnswer}
          onWrongAnswer={this.onWrongAnswer}
        />
      </div>
    );
  }
}

export default Level1Page;
