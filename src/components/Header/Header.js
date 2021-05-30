import React, { useContext } from 'react';
import styled from 'styled-components';

// store
import { MdContext } from '../../store/MdStore';

// icon
import { FaListUl } from 'react-icons/fa';

// style
import Colors from '../../style/Colors';

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #bfbfbf;
  padding: 0 20px;
  margin-bottom: 50px;
`;

const IconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;
const IconItem = styled.div`
  height: 26px; // font-size랑 맞추기
  font-size: 26px;
  color: ${Colors.colorBlack};
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${Colors.colorBlue};
  }
`;

const Logo = styled.span`
  color: ${Colors.colorBlack};
  font-size: 14px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const EditButton = styled.button`
  color: ${Colors.colorBlack};
  font-size: 13px;
  width: 75px;
  height: 35px;
  padding: 6px 15px;
  background: transparent;
  border: 2px solid ${Colors.colorBlue};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;
  font-weight: bold; // bold or 500 뭐가 더 좋을지 모르겠다..
  &:hover {
    color: white;
    &:after {
      height: 100%;
    }
  }
  &:after {
    background: ${Colors.colorBlue};
    content: '';
    position: absolute;
    z-index: -1;
    height: 0;
    left: 0;
    top: 0;
    width: 100%;
    transition: 0.3s ease-in-out;
  }
`;

const Header = () => {
  return (
    <div>
      <HeaderWrap>
        <HeaderLogo>Napol style-document</HeaderLogo>
        {/* <MenuBtn>Edit</MenuBtn> */}
        <ListIcon />
      </HeaderWrap>
    </div>
  );
};

export const HeaderLogo = (props) => {
  return <Logo>{props.children}</Logo>;
};

export const MenuBtn = (props) => {
  return (
    <ButtonContainer>
      <EditButton>{props.children}</EditButton>
    </ButtonContainer>
  );
};

export const ListIcon = () => {
  const mdContext = useContext(MdContext);
  const { isOpenSideBar, setIsOpenSideBar } = mdContext;

  const handleToggle = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  return (
    <IconContainer>
      <IconItem onClick={handleToggle}>
        <FaListUl />
      </IconItem>
    </IconContainer>
  );
};

export default Header;
