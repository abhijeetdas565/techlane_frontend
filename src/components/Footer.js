import React from 'react';

function Footer() {
  const footerStyle = {
    background: 'linear-gradient(to right, #FFD700, #FFA500)',
    color: 'white', // Adjust the text color to white
  };

  return (
    <footer className="p-4 text-center" style={footerStyle}>
      <p>&copy; 2023 AI Product Dashboard. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
