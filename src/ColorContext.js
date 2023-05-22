import React, { createContext, useState } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('white');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorProvider, ColorContext };