import React, { useState, useContext, Fragment } from 'react';
import styled from 'styled-components';

// style
import Colors from '../../style/Colors';

// store
import { MdContext } from '../../store/MdStore';

// markdown
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';

// import style manually
import 'react-markdown-editor-lite/lib/index.css';

const MdWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 550px;
  padding: 0 30px;
  position: relative;
`;

const SaveButtonStyle = styled.button`
  position: absolute;
  right: 30px;
  bottom: 0;
  color: white;
  padding: 6px 15px;
  background: ${Colors.colorBlue};
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  width: 75px;
  height: 35px;
  &:hover {
    background-color: #0067cc;
  }
`;

const mdParser = new MarkdownIt();

function handleEditorChange({ html, text }) {
  console.log('handleEditorChange', html, text);
}

const Content = () => {
  const mdContext = useContext(MdContext);
  return <Fragment>{mdContext.isOpen ? <MdEditorBox /> : null}</Fragment>;
};

const MdEditorBox = () => {
  return (
    <MdWrap>
      <MdEditor style={{ height: '500px' }} renderHTML={(text) => mdParser.render(text)} onChange={handleEditorChange} />
      <SaveButton>save</SaveButton>
    </MdWrap>
  );
};

const SaveButton = (props) => {
  return <SaveButtonStyle>{props.children}</SaveButtonStyle>;
};

export default Content;
