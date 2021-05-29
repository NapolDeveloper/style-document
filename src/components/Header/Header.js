import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// icon
import { FaListUl, FaEdit } from 'react-icons/fa';

// style
import Colors from '../../style/Colors';

// store
import { MdContext } from '../../store/MdStore';

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #bfbfbf;
  padding: 0 20px;
  margin-bottom: 100px;
`;

const IconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  font-size: 26px;
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

const NewButton = styled.button`
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
        <Link to={'/'}>
          <Logo>Napol style-document</Logo>
        </Link>
        <ButtonContainer>
          <Link to={'/markdown'}>
            <NewButton>Edit</NewButton>
          </Link>
        </ButtonContainer>
        <IconContainer>
          <FaListUl />
        </IconContainer>
      </HeaderWrap>
    </div>
  );
};

export default Header;
