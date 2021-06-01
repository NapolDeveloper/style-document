import React, { useContext, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

/* markdown rendering example
import ReactMarkdown from 'react-markdown';
const markdown = `
# 헤딩
**bold**
`;

const MarkDownStyle = styled.div`
  font-size: 1rem;
`;
*/

const MdWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  padding: 0 30px;
  position: relative;
`;

const TitleBox = styled.input`
  margin-bottom: 20px;
  height: 40px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 24px;
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

const Content = () => {
  const mdContext = useContext(MdContext);

  const { isMdOpen, mdValue } = mdContext;

  const handleNew = () => {
    if (mdValue) {
      console.log('값이 존재합니다');
      return;
    }
    mdContext.setIsMdOpen(!isMdOpen);
  };
  return (
    <Fragment>
      <div onClick={handleNew}>글 작성하기</div>
      {isMdOpen ? <MdEditorBox /> : null}
    </Fragment>
  );
};

const MdEditorBox = () => {
  const mdContext = useContext(MdContext);
  const { mdValue, setMdValue, contentDispatch, title, setTitle, setIsMdOpen, isMdOpen } = mdContext;

  const handleEditorChange = ({ html, text }) => {
    const newValue = text.replace(/\d/g, '');
    setMdValue(newValue);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSave = () => {
    // const newList = initialList.concat({ id: uuidv4(), title, data: value });
    if (!title || !mdValue) {
      console.log('값이 비어있습니다');
      return;
    }
    // 날짜 값 생성
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    const newList = { id: uuidv4(), title, data: mdValue, date: `${year}년 ${month + 1}월 ${day}일` };
    console.log(newList);
    setTitle('');
    setMdValue('');
    setIsMdOpen(!isMdOpen);
    contentDispatch({ type: 'SAVE', list: newList });
  };

  return (
    <MdWrap>
      <MdTitleBox value={title} onChange={handleTitleChange} />
      <MdEditor style={{ height: '500px' }} value={mdValue} renderHTML={(text) => mdParser.render(text)} onChange={handleEditorChange} />
      <SaveButton onSave={handleSave}>save</SaveButton>
    </MdWrap>
  );
};

const MdTitleBox = (props) => {
  return <TitleBox type='text' placeholder='タイトルを入力してください' value={props.value} onChange={props.onChange} />;
};

const SaveButton = (props) => {
  return <SaveButtonStyle onClick={props.onSave}>{props.children}</SaveButtonStyle>;
};

export default Content;
