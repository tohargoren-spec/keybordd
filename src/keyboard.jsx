import React, { useState } from "react";
import "./keyboard.css";
import { english, hebrew, korean } from "./keys";
import Keys from "./keys";



function AllKeyboard() {
  const [nextCase, setNextCase] = useState('lower');
  const [inputValue, setInputValue] = useState([]);//this will make it an array of objacts so i can add stayle
  const [newcolor, setNewcolor] = useState("black");
  const [newSize, setNewSize] = useState("40px");
  const [newlanguage, setNewlanguage] = useState("en");

  const DeleteButton = () => {
    setInputValue(inputValue.slice(0, -1));
  };
  const SpaceButton = () => {
    setInputValue((prev) => [...prev, {char: " ", color: newcolor, size: newSize}]);
  };
  const handleChange = (event) => {
    let char = event.target.value;
    if(nextCase === "upper"){
      char = char.toUpperCase();
    }
    setInputValue((prev) => [...prev, {char: char, color: newcolor, size: newSize}]);
  };
  const Clear = () => {
    setInputValue([]);
  };
  const AllUpperCase = () => {
    setInputValue((prev) => prev.toUpperCase());
  };
  const UpperCase = () => {
    setNextCase((prev) => (prev ==='lower'? 'upper' : 'lower' ));
  };
  const changeColor = (event) => {
    setNewcolor(event.target.value);
  };
  const changeSize = (event) => {
    setNewSize(event.target.value);
  };
  // let currentSize;
  // if(newSize === "small"){
  //   currentSize = small;
  // }else if(newSize === "middle"){
  //   currentSize = ;
  // }else if (newSize === "big"){
  //   currentSize = ;

  // }else{
  //   currentSize = ;

  // }


  

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
        {inputValue.map((item , index)=> (
          <span key={index} style={{ color: item.color, fontSize: item.size}}>
            {item.char}
          </span>
        ))}
       
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
          changeSize={changeSize}
        />
      </div>
    </div>
  );
}
export default AllKeyboard;
