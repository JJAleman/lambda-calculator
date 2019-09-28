import React from "react";

const OperatorButton = props => {
  console.log("Props for OperatorButton", props)
  return (
    <button className="operator-buttons" onClick={() => props.OperatorButton }>

      <span>{props.operators.char}</span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;