import React, { useState } from "react";
import "./keyboard.css";
import { english, hebrew } from "./keys";
import Keys from "./keys";



function AllKeyboard() {
  const [inputValue, setInputValue] = useState("");
  const 
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
  const UpperCase = () => {
    setInputValue((prev) => prev.toUpperCase());
  };
  const changeColor = (event) => {
    setNewcolor(event.target.value);
    console.log(newcolor);
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
  }else{
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
      <p style={{ color: newcolor }}>{inputValue}</p>
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
          UpperCase={UpperCase}
          changeColor={changeColor}
          changekeybord={changekeybord}
        />
      </div>
    </div>
  );
}
export default AllKeyboard;
