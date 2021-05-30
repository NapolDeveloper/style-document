import React, { useContext } from 'react';

import styled from 'styled-components';
import Colors from '../../style/Colors';

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
  transition: 0.3s ease-in-out;
  margin-bottom: 10px;
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
`;
const ListDate = styled.div`
  margin-top: 30px;
`;

const DocumentList = () => {
  return (
    <DocumentListContainer>
      <ListItem />
    </DocumentListContainer>
  );
};

const ListItem = () => {
  const mdContext = useContext(MdContext);
  const { contentList } = mdContext;

  return (
    <div>
      {contentList.map((item) => (
        <ListBox key={item.id}>
          <ListTitle>{item.title}</ListTitle>
          <ListDate>{item.date}</ListDate>
          <ListItemIcon id={item.id} />
        </ListBox>
      ))}
    </div>
  );
};

export const ListItemIcon = (props) => {
  const mdContext = useContext(MdContext);
  const { contentDispatch } = mdContext;

  const onRemove = (id) => {
    contentDispatch({ type: 'REMOVE', id });
  };
  return (
    <IconBox>
      <IconItem>
        <FaEdit />
      </IconItem>
      <IconItem>
        <FaTrashAlt onClick={() => onRemove(props.id)} />
      </IconItem>
    </IconBox>
  );
};

export default DocumentList;