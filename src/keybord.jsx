import React, { useState } from "react";
// import './App.css'
function Keybord(){
    const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="keybord">
      <input type="text" onChange={handleChange} value={inputValue} />
    </div>
  );

}
export default Keybord