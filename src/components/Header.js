import React, { useState, useEffect } from 'react';

function Header() {
  const colors = [
    'linear-gradient(to right, #3182CE, #5A67D8, #8558C0)',
    'linear-gradient(to right, #FDE68A, #A5B4FC)',
    'linear-gradient(to right, #FFD700, #FFA500)',
    // Add more colors as needed
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  const headerStyle = {
    background: colors[currentColorIndex],
    transition: 'background 0.5s ease-in-out', // Smooth transition effect
  };

  return (
    <header style={headerStyle} className="text-white p-4 flex items-center justify-center">
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h1 className="text-3xl font-semibold text-blue-900">AI Product Dashboard</h1>
        <p className="text-gray-800 mt-2">Welcome to the future of AI-powered products.</p>
      </div>
    </header>
  );
}

export default Header;
