import React, { useState, useContext, Fragment, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

// style
import Colors from '../../style/Colors';

// store
import { MdContext } from '../../store/MdStore';

// markdown
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import ReactMarkdown from 'react-markdown';

// import style manually
import 'react-markdown-editor-lite/lib/index.css';

const MdWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  padding: 0 30px;
  position: relative;
`;

const TitleBox = styled.input``;

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

const Content = () => {
  const mdContext = useContext(MdContext);
  const { list, isOpen } = mdContext;

  return (
    <Fragment>
      {isOpen ? <MdEditorBox /> : null}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </Fragment>
  );
};

const MdEditorBox = () => {
  const mdContext = useContext(MdContext);
  const { list, setList } = mdContext;

  // MdEditorBox에서 사용할 title 변수
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('Hello'); // Editor 내의 text

  const handleEditorChange = ({ html, text }) => {
    const newValue = text.replace(/\d/g, '');
    // setCurrentMdValue(newValue);
    setValue(newValue);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSave = () => {
    const newList = list.concat({ id: uuidv4(), title, data: value });
    setList(newList);
    setTitle('');
    console.log(list);
  };

  return (
    <MdWrap>
      <MdTitleBox value={title} onChange={handleTitleChange} />
      <MdEditor style={{ height: '500px' }} value={value} renderHTML={(text) => mdParser.render(text)} onChange={handleEditorChange} />
      <SaveButton onSave={handleSave}>save</SaveButton>
    </MdWrap>
  );
};

const MdTitleBox = (props) => {
  return <TitleBox type='text' value={props.value} onChange={props.onChange} />;
};

const SaveButton = (props) => {
  return <SaveButtonStyle onClick={props.onSave}>{props.children}</SaveButtonStyle>;
};

export default Content;
