import React from "react";

const OperatorButton = props => {
  console.log("Props for OperatorButton", props)
  return (
    <button>

      {props.operators.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;