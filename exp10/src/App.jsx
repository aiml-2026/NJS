import React, { useState } from 'react';

const App = () => {
  // State to manage the counter
  const [count, setCount] = useState(0);

  // Handler functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={increment} style={buttonStyle}>
          Increment
        </button>
        <button onClick={decrement} style={buttonStyle}>
          Decrement
        </button>
        <button onClick={reset} style={buttonStyle}>
          Reset
        </button>
      </div>
    </div>
  );
};

// Styling for buttons (optional)
const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default App;
