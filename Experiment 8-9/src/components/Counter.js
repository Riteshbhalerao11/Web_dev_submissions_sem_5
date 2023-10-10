// Counter.js

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <div className="counter-header">
        <h2>Counter</h2>
      </div>
      <div className="counter-content">
        <p className="count">Count: {count}</p>
        <div className="button-container">
        <button className="counter-button reset-button" onClick={handleReset}>
            Reset
          </button>
        <button className="counter-button" onClick={handleDecrement}>
            Decrement
          </button>
          <button className="counter-button" onClick={handleIncrement}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
