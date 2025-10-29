import React, { useState } from "react";
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

    </div>
  );

}
export default Keybord