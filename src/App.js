import React, { useState, useEffect } from "react";
const App = () => {
  const [waterLevel, setWaterLevel] = useState(0);
  const [actionType, setActionType] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      if (actionType === "increase" && waterLevel < 100) {
        setWaterLevel((prevWaterLevel) => prevWaterLevel + 20);
      }
      if (actionType === "decrease" && waterLevel > 0) {
        setWaterLevel((prevWaterLevel) => prevWaterLevel - 20);
      }
    }, 2000);
    return () => {clearInterval(interval)};
  }, [actionType, waterLevel]);
  
  
  return (
    <div className="container">
      
      <p style={{ height: `${waterLevel}px` , width : "100px",background:"blue" }}></p>
      
      <div id="buttons">
        <button
          onClick={() => {
            setActionType("increase");
          }}
        >
          increaseWaterLevel
        </button>
        <button
          onClick={() => {
            setActionType("decrease");
          }}
        >
          decreaseWaterLevel
        </button>
      </div>
      <div >
       water count = {waterLevel}
      </div>
    </div>
  );
};
export default App;