import React from "react";
import { useState } from "react";
import "./style.css";

function App() {
  const [currntVal, setCurrentVal] = useState();

  const HandleEvent = (e) => {
    setCurrentVal(e.target.value);
  };

  return (
    <>
      <div className="main">
        <h1>Colour Picker </h1>
        <p>{currntVal}</p>
        <div className="color-box" style={{ backgroundColor: currntVal }}>
          <p>{currntVal}</p>
        </div>
        <input type="color" name="Pick" onChange={HandleEvent} />
      </div>
    </>
  );
}

export default App;
