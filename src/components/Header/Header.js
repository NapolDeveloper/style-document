import React from 'react';
import styled from 'styled-components';

const colorBlue = '#0080FD';
const colorBlack = '#222429';

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #bfbfbf;
  padding: 0 20px;
`;

const Logo = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const ShareButton = styled.button`
  color: ${colorBlack};
  padding: 6px 15px;
  background: transparent;
  border: 2px solid ${colorBlue};
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
    background: ${colorBlue};
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
        <Logo>Napol style-document</Logo>
        <ShareButton>Share</ShareButton>
      </HeaderWrap>
    </div>
  );
};

export default Header;
