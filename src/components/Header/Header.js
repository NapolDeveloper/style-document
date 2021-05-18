import React, { useContext } from 'react';
import styled from 'styled-components';

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

const ShareButton = styled.button`
  color: ${Colors.colorBlack};
  width: 75px;
  height: 35px;
  padding: 6px 15px;
  background: transparent;
  border: 2px solid ${Colors.colorBlue};
  border-radius: 5px;
  margin-left: auto;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  position: relative;
  font-weight: 500;
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
  const mdContext = useContext(MdContext);
  return (
    <div>
      <HeaderWrap>
        <Logo>Napol style-document</Logo>
        <ShareButton onClick={() => mdContext.setIsMd(!mdContext.isOpen)}>new</ShareButton>
      </HeaderWrap>
    </div>
  );
};

export default Header;
