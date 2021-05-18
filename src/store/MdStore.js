import React, { createContext, useReducer, useState } from 'react';

export const MdContext = createContext();

const MdStore = (props) => {
  const [isMd, setIsMd] = useState(false);
  const [currentMdValue, setCurrentMdValue] = useState();

  // data
  const [data, setData] = useState({
    data: ''
  });

  const mdManager = {
    isOpen: isMd,
    setIsMd, // useState 전달
    currentMdValue,
    setCurrentMdValue,
    data,
    setData
  };
  return <MdContext.Provider value={mdManager}>{props.children}</MdContext.Provider>;
};

export default MdStore;
