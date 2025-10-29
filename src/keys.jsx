// import React, { useState } from "react";
import "./App.css";
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

function Keys({ SpaceButton, DeleteButton, Clear, UpperCase }) {
  return (
    <div id="extrakeybord">
      <button onClick={DeleteButton}>Delete</button>
      <button onClick={SpaceButton}>Space</button>
      <button onClick={Clear}>Clear</button>
      <button onClick={UpperCase}>UpperCase</button>
    </div>
  );
}
export default Keys;
