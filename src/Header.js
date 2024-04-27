// Header.js

import React, { useState } from 'react';
import { Flex, Heading, Image, useColorMode, IconButton } from '@chakra-ui/react'; // Import Chakra UI components
import { MoonIcon, SunIcon } from '@chakra-ui/icons'; // Import Chakra UI icons
import Point from './Point'; // Import the Point component
import './Header.css';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // Use color mode hook to toggle theme
  const [hoveredPoint, setHoveredPoint] = useState(null); // State to track hovered point

  const points = [
    { id: 'pointA', top: '25%', left: '10%', color: 'red', label: 'Ingredient A' },
    { id: 'pointB', top: '70%', left: '20%', color: 'blue', label: 'Ingredient B' },
    { id: 'pointC', top: '40%', left: '90%', color: 'green', label: 'Ingredient C' },
    { id: 'pointD', top: '20%', left: '80%', color: 'purple', label: 'Ingredient D' },
    { id: 'pointE', top: '65%', left: '75%', color: 'yellow', label: 'Ingredient E' },
  ];

  const handleMouseEnter = (pointId) => {
    setHoveredPoint(pointId);
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  return (
    <Flex justifyContent="flex-start" alignItems="flex-start" flexDirection="column" p={4} position="relative" bg="#FEFAE0">
      <div className="title-container">
        <Heading as="h1" size="2xl">
          STOCK
        </Heading>
      </div>
      <Image src="/dinner.png" alt="Dinner" w="80%" maxW="700px" />
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        mt={4}
      />
      {points.map(({ id, ...point }) => (
        <Point
          key={id}
          id={id}
          {...point}
          onMouseEnter={() => handleMouseEnter(id)}
          onMouseLeave={handleMouseLeave}
          isHovered={hoveredPoint === id}
        />
      ))}
      {/* Render SVG path if a point is hovered */}
      {hoveredPoint && (
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
          <line
            x1={points.find(point => point.id === hoveredPoint).left}
            y1={points.find(point => point.id === hoveredPoint).top}
            x2="50%"
            y2="50%"
            style={{ stroke: 'black', strokeWidth: 8 }} // Increase strokeWidth here
          />
        </svg>
      )}
    </Flex>
  );
};

export default Header;
