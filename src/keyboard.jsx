import React, { useState } from "react";
import "./App.css";
import { english, hebrew } from "./keys";
import Keys from "./keys";

function AllKeyboard() {
  const [inputValue, setInputValue] = useState("");
  const DeleteButton = () => {
    setInputValue(inputValue.slice(0, -1));
  };
  const SpaceButton = () => {
    setInputValue((prev) => prev + " ");
  };
  const handleChange = (event) => {
    setInputValue((prev) => prev + event.target.value);
  };
  const Clear = () => {
    setInputValue(" ");
  };
  const UpperCase = () => {
    setInputValue((prev) => prev.toUpperCase());
  };
  function Keyboard({ arr }) {
    return arr.map((item, index) => (
      <button key={index} value={item} onClick={handleChange}>
        {item}
      </button>
    ));
  }

  return (
    <div className="keybord">
      <p>{inputValue}</p>
      <div id="letters">
        <Keyboard arr={english}></Keyboard>
        <Keyboard arr={hebrew}></Keyboard>
      </div>
      <Keys
        SpaceButton={SpaceButton}
        DeleteButton={DeleteButton}
        Clear={Clear}
        UpperCase={UpperCase}
      />
    </div>
  );
}
export default AllKeyboard;
