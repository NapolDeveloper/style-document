import React, { createContext, useState, useReducer } from 'react';

export const ColorBoxContext = createContext();

const ColorBoxStore = (props) => {
  const initialList = [
    {
      color: '#00ead3',
      id: 1
    },
    {
      color: '#fff5b7',
      id: 2
    },
    {
      color: '#ff449f',
      id: 3
    }
  ];
  // const initialList = ['#00ead3', '#fff5b7', '#ff449f', '#005f99'];
  const colorBoxReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return state.concat(action.list);
      default:
        return;
    }
  };
  const [colorBox, colorBoxDispatch] = useReducer(colorBoxReducer, initialList);

  const ColorBoxManager = {
    colorBox,
    colorBoxDispatch
  };
  return <ColorBoxContext.Provider value={ColorBoxManager}>{props.children}</ColorBoxContext.Provider>;
};

export default ColorBoxStore;
