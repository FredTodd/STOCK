// Point.js

import React from 'react';
import { Box } from '@chakra-ui/react'; // Import Chakra UI components

const Point = ({ id, color, top, left, label, onMouseEnter, onMouseLeave, isHovered }) => {
  return (
    <Box
      bg={color}
      w="30px"
      h="30px"
      borderRadius="50%"
      position="absolute"
      top={top}
      left={left}
      cursor="pointer"
      transition="transform 0.3s ease"
      _hover={{
        transform: 'scale(1.5)'
      }}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
      zIndex="10"
    >
      {isHovered && <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)' }}>{label}</div>}
    </Box>
  );
};

export default Point;
