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
  const [contentList, contentDispatch] = useReducer(contentReducer, initialList);
  const [isMdOpen, setIsMdOpen] = useState(false); // editor on/off 여부
  const [mdValue, setMdValue] = useState(''); // editor content value
  const [title, setTitle] = useState(''); // editor title value

  function contentReducer(state, action) {
    switch (action.type) {
      case 'CONSOLE':
        return console.log('reducer test');
      case 'SAVE':
        return state.concat(action.list);
      default:
        return;
    }
  }
  const mdManager = {
    isOpen: isMdOpen,
    setIsMdOpen, // useState 전달
    contentList,
    title,
    setTitle,
    mdValue,
    setMdValue,
    contentDispatch,
    initialList
  };
  return <MdContext.Provider value={mdManager}>{props.children}</MdContext.Provider>;
};

export default MdStore;
