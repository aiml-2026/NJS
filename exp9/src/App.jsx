import React, { useState } from 'react';

const App = () => {
  // State to track the visibility of the message
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  // Handler to toggle the state
  const toggleMessage = () => {
    setIsMessageVisible((prev) => !prev);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Conditional Rendering Example</h1>
      {/* Conditionally render the message */}
      {isMessageVisible ? (
        <p>The message is now visible!</p>
      ) : (
        <p>Click the button to see the message.</p>
      )}
      {/* Button to toggle the message */}
      <button onClick={toggleMessage}>
        {isMessageVisible ? 'Hide Message' : 'Show Message'}
      </button>
    </div>
  );
};

export default App;
