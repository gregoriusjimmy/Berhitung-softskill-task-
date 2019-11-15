import React from "react";

const NumberPage = ({ match }) => {
  return (
    <div>
      <h1>{match.params.numberId}</h1>
    </div>
  );
};

export default NumberPage;
