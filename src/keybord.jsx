import React, { useState } from "react";
<<<<<<< HEAD
import './App.css'
import alphabet from "./keys";



function Keybord(){

  const [words, setWords]= useState('')
function addToString(letter){
  setWords(prevWords => { return prevWords +letter})
}
  return (
    <div className="App">
      <h1>{words}</h1>

        {alphabet.map((item, index) => (
          <button onClick={() => addToString(index)} key={index} />
          
        ))}

      <button onClick={()=>addToString('a')}>a</button>
     <button onClick={()=>addToString('b')}>b</button>
      <button onClick={()=>addToString('c')}>c</button>
      <button onClick={()=>addToString('d')}>d</button>
      <button onClick={()=>addToString('e')}>e</button>

=======

function Keybord(){
  const [inputValue, setInputValue] = useState("");
  const letters=["a","b","c","d","e","f","g","h","i","j","k","l","m", "n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
  const hebrewLetters = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י",
  "כ","ל","מ","נ","ס","ע","פ","צ","ק","ר","ש","ת"," "];


  const handleChange = (event) => {
    setInputValue(prev=> prev+event.target.value);
  };

  
  function CreateKeybord(arr){
    return arr.map((item, index)=>(
      <button key={index} value={item} onClick={handleChange}>{item}</button>
    ));
    }
      
  
  return (
    <div className="keybord">
      <p>{inputValue}</p>
      <div id="keybord">
        {CreateKeybord(letters)}
      </div>
      {CreateKeybord(hebrewLetters)}
>>>>>>> 1e6d4af5814ee4d7215738c00699454a72d2b68b
    </div>
  );

}
export default Keybord