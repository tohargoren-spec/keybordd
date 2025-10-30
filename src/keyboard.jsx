import React, { useState } from "react";
import "./keyboard.css";
import { english, hebrew, korean } from "./keys";
import Keys from "./keys";



function AllKeyboard() {
  const [upperCase, setUpperCase] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [newcolor, setNewcolor] = useState("black");
  const [newlanguage, setNewlanguage] = useState("en");
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
  const AllUpperCase = () => {
    setInputValue((prev) => prev.toUpperCase());
  };
  const UpperCase = () => {
    setUpperCase((prev) => !prev);
  };
  const changeColor = (event) => {
    setNewcolor(event.target.value);
  };

  

  const changekeybord= (lang) =>{
      setNewlanguage(lang)
  }

  let currentKeys;
  if(newlanguage === "en"){
    currentKeys = english;
  }
  else if(newlanguage =="he"){
    currentKeys = hebrew;
  }else if(newlanguage =="ko"){
    currentKeys = korean;
  }
  else{
    currentKeys = english;
  }



  function Keyboard({ arr }) {
    return arr.map((item, index) => (
      <button key={index} value={item} onClick={handleChange}>
        {item}
      </button>
    ));
  }


  return (
    <div className="keybord">
      <p style={{ color: newcolor }}>
        {upperCase ? inputValue.toUpperCase() : inputValue}
      </p>
      <div id="letters">

        {/* <Keyboard arr={english}></Keyboard>
        <Keyboard arr={hebrew}></Keyboard> */}
        <Keyboard arr={currentKeys}></Keyboard>
      </div>
      <div className="specialdiv">
        <Keys
          SpaceButton={SpaceButton}
          DeleteButton={DeleteButton}
          Clear={Clear}
          AllUpperCase={AllUpperCase}
          changeColor={changeColor}
          changekeybord={changekeybord}
          UpperCase={UpperCase}
        />
      </div>
    </div>
  );
}
export default AllKeyboard;
