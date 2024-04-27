// Header.js

import React, { useState } from 'react';
import './Header.css'; // Import the corresponding CSS file
import Point from './Point'; // Import the Point component
import BottomTitle from './BottomTitle'; // Import the BottomTitle component
import { useTheme } from './Theme'; // Import the useTheme hook

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Use the theme context

  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [blackPointColor, setBlackPointColor] = useState(isDarkMode ? 'white' : 'black'); // Initial color based on the current theme
  const titleColor = isDarkMode ? 'white' : 'black'; // Color for the title
  const bottomTitleColor = isDarkMode ? 'white' : 'black'; // Color for the bottom title

  const handleMouseEnter = (pointKey, color) => {
    setHoveredPoint({ pointKey, color });
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  const handleBlackPointClick = () => {
    toggleTheme(); // Toggle theme
    setBlackPointColor(prevColor => (prevColor === 'black' ? 'white' : 'black')); // Toggle the color of the black point
  };

  const points = {
    pointA: { top: '25%', left: '10%', color: 'red', label: 'Ingredient A' },
    pointB: { top: '70%', left: '20%', color: 'blue', label: 'Ingredient B' },
    pointC: { top: '40%', left: '90%', color: 'green', label: 'Ingredient C' },
    pointD: { top: '20%', left: '80%', color: 'purple', label: 'Ingredient D' },
    pointE: { top: '65%', left: '75%', color: 'yellow', label: 'Ingredient E' },
    pointF: { top: '10%', left: '90%', color: blackPointColor, label: 'Toggle Dark Mode' }, // Use blackPointColor state
  };

  const vw = window.innerWidth; // Get viewport width
  const vh = window.innerHeight; // Get viewport height
  const centerX = vw / 2; // Calculate center X coordinate
  const centerY = vh / 2; // Calculate center Y coordinate

  const SvgPath = ({ startPoint, endPoint, color, strokeWidth }) => {
    return (
      <svg className="svg-path" width={vw} height={vh}>
        <line
          x1={startPoint.x}
          y1={startPoint.y}
          x2={endPoint.x}
          y2={endPoint.y}
          className="line"
          style={{ stroke: color, strokeWidth: 5 }} // Set the stroke width
        />
      </svg>
    );
  };
  
  return (
    <div className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <h1 className="stock-title" style={{ color: titleColor }}>STOCK</h1>
      <BottomTitle style={{ color: bottomTitleColor }} /> {/* Pass the style prop to BottomTitle */}
      <img src="/dinner.png" alt="Dinner" className="dinner-image" />

      <div className="point-container">
        {Object.keys(points).map((pointKey, index) => (
          <Point
            key={index}
            color={points[pointKey].color}
            top={points[pointKey].top}
            left={points[pointKey].left}
            label={points[pointKey].label} // Add label prop
            onMouseEnter={() => handleMouseEnter(pointKey, points[pointKey].color)}
            onMouseLeave={handleMouseLeave}
            onClick={pointKey === 'pointF' ? handleBlackPointClick : null} // Toggle theme on click
          />
        ))}

        {/* Render lines only for ingredient points */}
        {hoveredPoint && !hoveredPoint.pointKey.startsWith('pointF') && (
          <SvgPath
            startPoint={{ x: points[hoveredPoint.pointKey].left, y: points[hoveredPoint.pointKey].top }}
            endPoint={{ x: centerX, y: centerY }}
            color={hoveredPoint.color}
          />
        )}
      </div>
    </div>
  );
};

export default Header;