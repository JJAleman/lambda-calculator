import React from "react";

export default function NumberButton(props) {
  return (
    <button value = {props.nums} onClick={props.displayNum}
      >
      {props.nums}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
