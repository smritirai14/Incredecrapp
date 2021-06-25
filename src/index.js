import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum (num +1);
  };

  const decNum = () => {
    setNum(num -2);
  };

  const addNum = () => {
    setNum(num +5);
  };

  const resetNum = () => {
    setNum(0);
  };

  return (
    <>
      <div className="main_div">
      <div className ="center_div">
      <h1> {num} </h1>
      <div className="btn_div">
         <button onClick={incNum} > Increment By 1 </button>
         <button onClick={decNum} > Decrement By 2</button> 
         <button onClick={addNum} > Increment By 5 </button>
         <button onClick={resetNum} > Reset </button>
    </div>
    </div>
    </div>
</>

  );
}
export default App;