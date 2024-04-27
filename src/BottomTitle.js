// BottomTitle.js

import React from 'react';
import { Text } from '@chakra-ui/react'; // Import Chakra UI components

const BottomTitle = ({ style }) => {
  return (
    <Text fontSize="xl" fontWeight="bold" color="gray.700" style={style}>
      Dish Name
    </Text>
  );
};

export default BottomTitle;
