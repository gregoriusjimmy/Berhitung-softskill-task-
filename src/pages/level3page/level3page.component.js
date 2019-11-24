import React from "react";
import "./level3page.styles.scss";
import Level3Soal1 from "../../components/level3/level3soal1/level3soal1.component";
import RightAnswer from "../../components/right-answer-popup/right-answer-popup.component";
import WrongAnswer from "../../components/wrong-answer-popup/wrong-answer-popup.component";
class Level3Page extends React.Component {
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
      <div className="level3-page">
        {this.state.hiddenLayer ? null : <div className="background-layer" />}

        <h1 className="title-soal">{`Soal ${this.state.soalke}`}</h1>
        {this.state.hiddenPopupRight ? null : (
          <RightAnswer levelUrl="3" handleClick={this.onRightAnswer} />
        )}
        {this.state.hiddenPopupWrong ? null : (
          <WrongAnswer handleClick={this.onWrongAnswer} />
        )}
        <Level3Soal1
          onRightAnswer={this.onRightAnswer}
          onWrongAnswer={this.onWrongAnswer}
        />
      </div>
    );
  }
}

export default Level3Page;
