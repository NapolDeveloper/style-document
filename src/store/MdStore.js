import React, { createContext, useReducer, useState } from 'react';

export const MdContext = createContext();

const MdStore = (props) => {
  const initialList = [
    {
      id: 1,
      title: 'React Hooks 배워보기',
      data: 'index 1',
      date: '2021년 5월 30일'
    },
    {
      id: 2,
      title: 'Svelte는 언제배우지...',
      data: 'index 2',
      date: '2021년 6월 1일'
    }
  ];
  const [contentList, contentDispatch] = useReducer(contentReducer, initialList);
  // const [sideBar, sideBarDispatch] = useReducer(sideBarReducer, false);
  const [isMdOpen, setIsMdOpen] = useState(false); // editor on/off 여부
  const [mdValue, setMdValue] = useState(''); // editor content value
  const [title, setTitle] = useState(''); // editor title value
  const [isOpenSideBar, setIsOpenSideBar] = useState(false); // content list on/off 여부

  // ref
  // const mdInputRef = useRef();

  function contentReducer(state, action) {
    switch (action.type) {
      case 'CONSOLE':
        return console.log('reducer test');
      case 'SAVE':
        return state.concat(action.list);

      case 'OPEN': {
        // console.log('test');
        return;
      }
      case 'REMOVE': {
        // return console.log(`remove ${action.id}`);
        return state.filter((list) => list.id !== action.id);
        // return;
      }
      default:
        return;
    }
  }
  const mdManager = {
    isMdOpen, // md on/off
    setIsMdOpen, // useState 전달
    contentList, //
    title, // md title
    setTitle,
    mdValue, // md value(data)
    setMdValue,
    contentDispatch, // content dispatch
    initialList,
    isOpenSideBar,
    setIsOpenSideBar
  };
  return <MdContext.Provider value={mdManager}>{props.children}</MdContext.Provider>;
};

export default MdStore;
