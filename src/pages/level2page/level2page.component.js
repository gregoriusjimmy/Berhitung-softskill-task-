import React from "react";
import "./level2page.styles.scss";
import Level2Soal1 from "../../components/level2/level2soal1/level2soal1.component";
import RightAnswer from "../../components/right-answer-popup/right-answer-popup.component";
import WrongAnswer from "../../components/wrong-answer-popup/wrong-answer-popup.component";
class Level2Page extends React.Component {
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
      <div className="level2-page">
        {this.state.hiddenLayer ? null : <div className="background-layer" />}

        <h1 className="title-soal">{`Soal ${this.state.soalke}`}</h1>
        {this.state.hiddenPopupRight ? null : (
          <RightAnswer levelUrl="3" handleClick={this.onRightAnswer} />
        )}
        {this.state.hiddenPopupWrong ? null : (
          <WrongAnswer handleClick={this.onWrongAnswer} />
        )}
        <Level2Soal1
          onRightAnswer={this.onRightAnswer}
          onWrongAnswer={this.onWrongAnswer}
        />
      </div>
    );
  }
}

export default Level2Page;
