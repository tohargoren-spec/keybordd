// import React, { useState } from "react";
import "./keyboard.css";
// import { DeleteButton, SpaceButton } from "./keybord";

export const english = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
export const hebrew = [
  "א",
  "ב",
  "ג",
  "ד",
  "ה",
  "ו",
  "ז",
  "ח",
  "ט",
  "י",
  "כ",
  "ל",
  "מ",
  "נ",
  "ס",
  "ע",
  "פ",
  "צ",
  "ק",
  "ר",
  "ש",
  "ת",
];
export const korean = [
  
  "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",
  "ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ",
];
function Keys({ SpaceButton, DeleteButton, Clear, UpperCase, changeColor, changekeybord }) {
  return (
    <div id="extrakeybord">
      <button className="special" onClick={DeleteButton}>
        Delete
      </button>
      <button className="special" onClick={SpaceButton}>
        Space
      </button>
      <button className="special" onClick={Clear}>
        Clear
      </button>
      <button className="special" onClick={UpperCase}>
        UpperCase
      </button>
      <button onClick={changeColor} value="red">
        red
      </button>
      <button onClick={changeColor} value="blue">
        blue
      </button>
      <button onClick={changeColor} value="green">
        green
      </button>

      <button className="special" onClick={()=> {changekeybord("en")}}>
        english 
      </button>
      <button className="special" onClick={()=> {changekeybord("he")}}>
        hebrew 
      </button>
      <button className="special" onClick={()=> {changekeybord("ko")}}>
        korean 
      </button>
    </div>
  );
}
export default Keys;
