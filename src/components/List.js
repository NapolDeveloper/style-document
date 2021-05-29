import React, { Fragment, useContext } from 'react';

import styled from 'styled-components';

// store
import { MdContext } from '../store/MdStore';

const ListContainer = styled.div`
  width: 200px;
  height: 100%;
  background-color: #efef;
`;

const ListTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer; // test
`;

const ListContent = styled.div`
  font-size: 16px;
  overflow: hidden;
`;

// List 렌더링
const List = () => {
  return (
    <div>
      <ListContainer>
        <ListItem />
      </ListContainer>
    </div>
  );
};

export const ListItem = () => {
  const mdContext = useContext(MdContext);

  const { contentList, mdValue, setMdValue, isOpen, setTitle, contentDispatch } = mdContext;

  const handleClickList = (item) => {
    console.log(`id: ${item.id} || title: ${item.title} || data: ${item.data}`);
    // contentDispatch({ type: 'OPEN' });

    // [ 나중에 수정하기 기능으로 옮겨야함 ]
    if (isOpen) {
      setMdValue(item.data + ' ');
      setTitle(item.title);
    } else {
      console.log(`에디터가 열려있지 않습니다`);
    }
  };

  return (
    <Fragment>
      {contentList.map((item) => (
        <ListTitle key={item.id} onClick={() => handleClickList(item)}>
          {item.title}
        </ListTitle>
      ))}
    </Fragment>
  );
};

export default List;
