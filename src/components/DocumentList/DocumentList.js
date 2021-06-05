import React, { useContext } from 'react';

import styled from 'styled-components';
import Colors from '../../style/Colors';
import { Link } from 'react-router-dom';

// icon
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

// store
import { MdContext } from '../../store/MdStore';

const DocumentListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 30px;
`;

// Icon
const IconBox = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  right: 10px;
`;
const IconItem = styled.div`
  transition: 0.1s ease-in-out;
  margin-bottom: 10px;
  /* color: ${Colors.colorBlack}; */
  &:hover {
    color: ${Colors.colorBlue};
  }
`;

// content list
const ListBox = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: 0.2s ease-in-out;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${Colors.colorBlack};
  }
  &:hover {
    background-color: ${Colors.colorLightGrey};
  }
  &:hover ${IconBox} {
    display: flex;
  }
`;
const ListTitle = styled.div`
  font-size: 24px;
  color: ${Colors.colorBlack};
  transition: 0.1s ease-in-out;
  &:hover {
    color: ${Colors.colorHoverBlue};
  }
`;
const ListDate = styled.div`
  margin-top: 30px;
`;

// 삭제, 수정 작업시 리렌더링 방지
const DocumentList = () => {
  return (
    <DocumentListContainer>
      <ListItem />
    </DocumentListContainer>
  );
};

const ListItem = () => {
  const mdContext = useContext(MdContext);
  const { contentList, setRenderingMd, setRenderingTitle } = mdContext;

  const handleSetData = (item) => {
    setRenderingMd(item.data);
    setRenderingTitle(item.title);
    console.log(item.data);
  };

  return (
    <div>
      {contentList.map((item) => (
        <ListBox key={item.id}>
          <Link to='/content-view'>
            <ListTitle onClick={() => handleSetData(item)}>{item.title}</ListTitle>
          </Link>
          <ListDate>{item.date}</ListDate>
          <ListItemIcon item={item} />
        </ListBox>
      ))}
    </div>
  );
};

export const ListItemIcon = (props) => {
  const mdContext = useContext(MdContext);
  const { setRemoveId, isRemoveModal, isOpen, handleToggle, setMdValue, setTitle, setIsMdOpen, onEdit, setOnEdit, setRenderingId } = mdContext;

  const onRemove = (id) => {
    handleToggle(isRemoveModal);
    console.log(`isOpen : ${isOpen}`);
    // setIsRemoveModal(!isRemoveModal);
    setRemoveId(props.id);
  };

  const handleEdit = (item) => {
    setOnEdit(true);
    setIsMdOpen(true);
    setMdValue(item.data);
    setTitle(item.title);
    setRenderingId(item.id);
  };
  return (
    <IconBox>
      <IconItem>
        <Link to='/edit'>
          <FaEdit onClick={() => handleEdit(props.item)} />
        </Link>
      </IconItem>
      <IconItem>
        <FaTrashAlt onClick={() => onRemove(props.item.id)} />
      </IconItem>
    </IconBox>
  );
};

export default DocumentList;
