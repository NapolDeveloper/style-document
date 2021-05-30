import React, { Fragment, useContext } from 'react';

import styled from 'styled-components';
import Colors from '../style/Colors';

// store
import { MdContext } from '../store/MdStore';

//

const ListBox = styled.div`
  font-size: 16px;
  overflow: hidden;
  padding: 10px;
  background-color: ${Colors.colorBlue};
  &:hover {
    background-color: ${Colors.colorHoverBlue};
    /* background-color: black; */
  }
`;
const ListTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer; // test
  color: white;
`;

// List 렌더링
const List = () => {
  return (
    <div>
      <ListItem />
    </div>
  );
};

export const ListItem = () => {
  const mdContext = useContext(MdContext);

  const { contentList, setMdValue, isMdOpen, setTitle } = mdContext;

  const handleClickList = (item) => {
    console.log(`id: ${item.id} || title: ${item.title} || data: ${item.data}`);
    // contentDispatch({ type: 'OPEN' });

    // [ 나중에 수정하기 기능으로 옮겨야함 ]
    if (isMdOpen) {
      setMdValue(item.data + ' ');
      setTitle(item.title);
    } else {
      console.log(`에디터가 열려있지 않습니다`);
    }
  };

  return (
    <Fragment>
      {contentList.map((item) => (
        <ListBox key={item.id}>
          <ListTitle onClick={() => handleClickList(item)}>{item.title}</ListTitle>
        </ListBox>
      ))}
    </Fragment>
  );
};

export default List;
