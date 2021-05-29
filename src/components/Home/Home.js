import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

//
import styled from 'styled-components';
import Colors from '../../style/Colors';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 36px;
  margin-bottom: 150px;
`;
const ColorBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ColorBoxHex = styled.div`
  align-items: center; // hover시 flex적용했을 때 사용할 값
  justify-content: center; // hover시 flex적용했을 때 사용할 값
  position: relative;
  height: 100%;
  z-index: 999;
  color: white;
  font-size: 18px;
  font-weight: bold;
  display: none;
  cursor: pointer;
`;

const ColorBoxStyle = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.color};
  margin: 0 10px;
  position: relative;
  &:hover {
    &:after {
      height: 100%;
    }
  }
  &:hover ${ColorBoxHex} {
    display: flex;
    z-index: 33;
  }

  &:after {
    position: absolute;
    z-index: 1;
    content: '';
    width: 100%;
    height: 0;
    opacity: 0.8;
    left: 0;
    top: 0;
    background-color: ${Colors.colorBlack};
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const Home = () => {
  return (
    <Container>
      <Title>당신만의 스타일 가이드를 작성하세요!</Title>
      <ColorBoxContainer>
        <ColorBox color='#00ead3' />
        <ColorBox color='#fff5b7' />
        <ColorBox color='#ff449f' />
        <ColorBox color='#005f99' />
      </ColorBoxContainer>
    </Container>
  );
};

const ColorBox = (props) => {
  return (
    <ColorBoxStyle color={props.color}>
      <CopyToClipboard text={props.color}>
        <ColorBoxHex>{props.color}</ColorBoxHex>
      </CopyToClipboard>
    </ColorBoxStyle>
  );
};

export default Home;
