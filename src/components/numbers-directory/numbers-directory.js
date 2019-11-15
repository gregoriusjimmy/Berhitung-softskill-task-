import React from "react";
import NumberMenu from "../number-menu/number-menu";
import "./numbers-directory.scss";
import { Link } from "react-router-dom";
class NumbersDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: [
        {
          number: "0",
          id: 0,
          linkUrl: "belajar/0"
        },
        {
          number: "1",
          id: 1,
          linkUrl: "belajar/1"
        },
        {
          number: "2",
          id: 2,
          linkUrl: "belajar/2"
        },
        {
          number: "3",
          id: 3,
          linkUrl: "belajar/3"
        },
        {
          number: "4",
          id: 4,
          linkUrl: "belajar/4"
        },
        {
          number: "5",
          id: 5,
          linkUrl: "belajar/5"
        },
        {
          number: "6",
          id: 6,
          linkUrl: "belajar/6"
        },
        {
          number: "7",
          id: 7,
          linkUrl: "belajar/7"
        },
        {
          number: "8",
          id: 8,
          linkUrl: "belajar/8"
        },
        {
          number: "9",
          id: 9,
          linkUrl: "belajar/9"
        }
      ]
    };
  }
  handleClick = () => {};
  render() {
    return (
      <div className="numbers-directory">
        {this.state.numbers.map(({ number, id, linkUrl }) => {
          return (
            <Link
              key={id}
              to={`/belajar/${id}`}
              style={{ textDecoration: "none" }}
            >
              <NumberMenu key={id} number={number} linkUrl={linkUrl} />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default NumbersDirectory;
