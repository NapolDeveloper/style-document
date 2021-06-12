import React, { createContext } from 'react';

export const ToggleContext = createContext();

const ToggleStore = (props) => {
  return <ToggleContext.Provider>{props.children}</ToggleContext.Provider>;
};

export default ToggleStore;
