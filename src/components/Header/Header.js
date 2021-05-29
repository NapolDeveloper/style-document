import React, { useContext } from 'react';
import styled from 'styled-components';

// icon
import { FaListUl } from 'react-icons/fa';

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

const Logo = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const NewButton = styled.button`
  color: ${Colors.colorBlack};
  width: 75px;
  height: 35px;
  padding: 6px 15px;
  background: transparent;
  border: 2px solid ${Colors.colorBlue};
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
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

const ListButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.colorBlack};
  margin-left: 25px;
  font-size: 24px;
  position: relative;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    color: ${Colors.colorBlue};
  }
`;

const Header = () => {
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
    <div>
      <HeaderWrap>
        <Logo>Napol style-document</Logo>
        <ButtonContainer>
          <NewButton onClick={handleNew}>new</NewButton>
          <ListButton>
            <FaListUl />
          </ListButton>
        </ButtonContainer>
      </HeaderWrap>
    </div>
  );
};

export default Header;
