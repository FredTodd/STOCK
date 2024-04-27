// Point.js

import React, { useState } from 'react';

const Point = ({ color, top, left, label, onMouseEnter, onMouseLeave, onClick }) => {
  const [showLabel, setShowLabel] = useState(false);

  const pointStyle = {
    top,
    left,
    backgroundColor: color // Apply color inline
  };

  return (
    <div
      className="point"
      style={pointStyle}
      onMouseEnter={() => {
        onMouseEnter();
        setShowLabel(true); // Show label on hover
      }}
      onMouseLeave={() => {
        onMouseLeave();
        setShowLabel(false); // Hide label when mouse leaves
      }}
      onClick={onClick} // Pass onClick handler
    >
      {showLabel && !label.startsWith('Toggle Dark Mode') && <div className="point-label">{label}</div>} {/* Render label if showLabel is true and not for the dark mode button */}
    </div>
  );
};

export default Point;
