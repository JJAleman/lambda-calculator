import React, { useState } from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers.js";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators.js";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials.js";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";

function App() {

const [display, setDisplay] = useState('0');

const displayNum = (num) => {
  let digit = num.target.value;
  if ( display === '0') {
    setDisplay(digit);
  } else {
    setDisplay(display + digit);
  }
}

function operatorDisplay(op) {
  let operator = op.target.value;
  if(operator === '=') {
    let formula = display;
    let newFormula = formula.replace('x', '*');
    let solution = eval(newFormula);
    setDisplay(solution);
  } else {
    setDisplay(display + operator)
  }
}

 

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display display={display} />
        <Specials />
        <Numbers displayNum={displayNum} />
        {/* <Operators display={displayOps} setDisplayOps={setDisplayOps} /> */}
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
      <div>
      <Operators operatorDisplay={operatorDisplay} />
      </div>
    </div>
  );
}

export default App;
