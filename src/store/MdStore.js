import React, { createContext, useReducer, useState } from 'react';

import useToggle from '../hooks/useToggle';

export const MdContext = createContext();

const MdStore = (props) => {
  const [isOpen, handleToggle] = useToggle();

  const initialList = [
    {
      id: 1,
      title: 'React - useReducer',
      data: `Just a link: https://reactjs.com. A paragraph with *emphasis* and **strong importance**.

      > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
      
      * Lists
      * [ ] todo
      * [x] done
      
      A table:
      
      | a | b |
      | - | - |`,
      date: '2021년 5월 30일'
    },
    {
      id: 2,
      title: 'Svelte는 언제배우지...',
      data: `Here is some JavaScript code:

      ~~~js
      console.log('It works!')
      ~~~
      `,
      date: '2021년 6월 1일'
    }
  ];
  const [contentList, contentDispatch] = useReducer(contentReducer, initialList);
  const [isMdOpen, setIsMdOpen] = useState(false); // editor on/off 여부
  const [mdValue, setMdValue] = useState(''); // editor content value
  const [title, setTitle] = useState(''); // editor title value
  const [isOpenSideBar, setIsOpenSideBar] = useState(false); // content list on/off 여부
  const [isRemoveModal, setIsRemoveModal] = useState(false);

  // List 클릭시 렌더링 되는 데이터 -> 후에 따로 store 만들어주기
  const [renderingMd, setRenderingMd] = useState(``);
  const [renderingTitle, setRenderingTitle] = useState('');

  const [removeId, setRemoveId] = useState();

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
    isOpenSideBar, // sidebar
    setIsOpenSideBar,
    isRemoveModal, // remove modal
    setIsRemoveModal,
    removeId,
    setRemoveId,
    // toggle
    isOpen,
    handleToggle,
    // rendering markdown data
    renderingMd,
    setRenderingMd,
    renderingTitle,
    setRenderingTitle
  };
  return <MdContext.Provider value={mdManager}>{props.children}</MdContext.Provider>;
};

export default MdStore;
