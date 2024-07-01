import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(1);
  

  const addNumber = () => {
    if (counter <= 19) {
      setCounter(counter + 1);
    }
  };

  // counter <= 19 ? setCounter(counter + 1) : null;

  const removeNumber = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  const getName = () => {
    return "pratiksha";
  };

  // const getName = () => "pratiksha";

  return (
    <div>
      <h1>Counter Number {counter}</h1>
      <button onClick={() => addNumber()}>Add Number</button>
      <button
        onClick={() => {
          removeNumber();
        }}
      >
        Remove Number
      </button>

      <p>{getName()}</p>
    </div>
  );
}
