import React, { createContext, useReducer, useState } from 'react';

export const MdContext = createContext();

const MdStore = (props) => {
  const [isMd, setIsMd] = useState(false);

  const mdOpen = {
    isOpen: isMd,
    setIsMd // useState 전달
  };
  return <MdContext.Provider value={mdOpen}>{props.children}</MdContext.Provider>;
};

export default MdStore;
