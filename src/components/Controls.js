import React, { useState } from 'react';

function Controls() {
  const [isModelRunning, setIsModelRunning] = useState(false);

  const handleStartClick = () => {
    // Simulate starting the AI model (replace this with actual logic)
    setIsModelRunning(true);
  };

  const handleStopClick = () => {
    // Simulate stopping the AI model (replace this with actual logic)
    setIsModelRunning(false);
  };

  return (
    <div className="p-4 mt-8">
      <h2 className="text-xl font-semibold">Controls</h2>
      <div className="bg-white p-4 rounded shadow-md mt-4">
        <button
          className={`${
            isModelRunning ? 'bg-gray-500' : 'bg-blue-500'
          } text-white px-4 py-2 rounded`}
          onClick={handleStartClick}
          disabled={isModelRunning}
        >
          {isModelRunning ? 'AI Model Running' : 'Start AI Model'}
        </button>
        <button
          className={`${
            isModelRunning ? 'bg-red-500' : 'bg-gray-500'
          } text-white px-4 py-2 rounded ml-2`}
          onClick={handleStopClick}
          disabled={!isModelRunning}
        >
          {isModelRunning ? 'Stop AI Model' : 'AI Model Stopped'}
        </button>
      </div>
    </div>
  );
}

export default Controls;
