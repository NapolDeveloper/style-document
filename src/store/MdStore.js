import React, { createContext, useReducer, useState } from 'react';

export const MdContext = createContext();

const MdStore = (props) => {
  const initialList = [
    {
      id: 1,
      title: 'title 1',
      data: 'index 1'
    },
    {
      id: 2,
      title: 'title 2',
      data: 'index 2'
    }
  ];

  const [isMd, setIsMd] = useState(false);
  // const [currentMdValue, setCurrentMdValue] = useState();
  const [list, setList] = useState(initialList);
  const [title, setTitle] = useState('');

  const mdManager = {
    isOpen: isMd,
    setIsMd, // useState 전달
    // currentMdValue,
    // setCurrentMdValue,
    list,
    setList,
    title,
    setTitle
  };
  return <MdContext.Provider value={mdManager}>{props.children}</MdContext.Provider>;
};

export default MdStore;
