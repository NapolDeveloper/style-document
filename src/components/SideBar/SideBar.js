import React, { Fragment, useContext } from 'react';

// store
import { MdContext } from '../../store/MdStore';

// style
import styled from 'styled-components';
import Colors from '../../style/Colors';
import { FaRegWindowClose, FaHome, FaListAlt, FaPen } from 'react-icons/fa';

// sidebar
const SideBarArea = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;
const SideBarStyle = styled.div`
  width: 250px;
  height: 100%;
  background-color: ${Colors.colorBlue};
  border-radius: 5px 0 0 5px;
  padding: 15px;
  position: absolute;
  z-index: 4;
  right: 0;
  top: 0;
  transition: 0.3s ease-in-out;
`;
const NavDescription = styled.div`
  position: relative;
  margin-bottom: 20px;
  color: white;
  font-weight: bold;
  &:before {
    position: absolute;
    content: '';
    width: 100%;
    bottom: -5px;
    border: 1px solid white;
  }
`;

// NoSide Area
const NoneSideArea = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.2;
  background-color: ${Colors.colorBlack};
`;

// close button
const CloseButton = styled.div`
  z-index: 3;
  font-size: 28px;
  position: relative;
  right: 0;
  cursor: pointer;
  margin-bottom: 50px;
  color: white;
  transition: 0.3s ease-in-out;
  &:hover {
    color: ${Colors.colorHoverGrey};
  }
`;

// menu
const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${Colors.colorHoverBlue};
  }
`;
const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 40px;
  height: 40px;
  font-size: 20px;
  width: 30px;
`;
const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: right;
`;

// 최종 렌더링
const SideBar = () => {
  const mdContext = useContext(MdContext);
  const { isOpenSideBar } = mdContext;
  return (
    <SideBarArea isOpen={isOpenSideBar}>
      <NoneSideAreaC />
      <SideBarStyle>
        <CloseBtn />
        <NavMenu icon={<FaHome />}>Home</NavMenu>
        <NavMenu icon={<FaPen />}>Make New</NavMenu>
        <NavMenu icon={<FaListAlt />}>List</NavMenu>
      </SideBarStyle>
    </SideBarArea>
  );
};

export const NoneSideAreaC = () => {
  const mdContext = useContext(MdContext);
  const { setIsOpenSideBar } = mdContext;
  const handleOffSide = () => {
    setIsOpenSideBar(false);
  };
  return <NoneSideArea onClick={handleOffSide} />;
};

export const NavDes = (props) => {
  return <NavDescription>{props.children}</NavDescription>;
};

export const NavMenu = (props) => {
  return (
    <MenuBox>
      <MenuIcon>{props.icon}</MenuIcon>
      <MenuTitle>{props.children}</MenuTitle>
    </MenuBox>
  );
};

export const CloseBtn = () => {
  const mdContext = useContext(MdContext);
  const { setIsOpenSideBar } = mdContext;

  const handleToggle = () => {
    setIsOpenSideBar(false); // !isOpenList로 해도 될듯?
  };
  return (
    <CloseButton onClick={handleToggle}>
      <FaRegWindowClose />
    </CloseButton>
  );
};
export default SideBar;
