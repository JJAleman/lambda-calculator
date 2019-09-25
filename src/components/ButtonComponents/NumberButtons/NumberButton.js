import React from "react";

export default function NumberButton({ nums }) {
  return (
    <button>
      {nums}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
