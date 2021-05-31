import React, { useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { v4 as uuidv4 } from 'uuid';

//
import styled from 'styled-components';
import Colors from '../../style/Colors';

import { ColorBoxContext } from '../../store/ColorBoxStore';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  color: ${Colors.colorBlack};
`;
const SubTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 100px;
  text-align: center;
  position: relative;
  color: ${Colors.colorBlack};
`;

const ColorBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1000px;
  /* background-color: ${Colors.colorLightGrey}; */
`;

const ColorBoxHex = styled.div`
  align-items: center; // hover시 flex적용했을 때 사용할 값
  justify-content: center; // hover시 flex적용했을 때 사용할 값
  position: relative;
  height: 100%;
  z-index: 2;
  color: white;
  font-size: 16px;
  font-weight: bold;
  display: none;
  cursor: pointer;
`;

const ColorBoxStyle = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.color};
  margin: 0 10px;
  border-radius: 10px;
  margin-bottom: 10px;
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
    border-radius: 10px;
    background-color: ${Colors.colorBlack};
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const ColorBoxInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const ColorBoxInput = styled.input`
  width: 500px;
  height: 35px;
  font-size: 16px;
  outline: none;
  border: 2px solid ${Colors.colorGrey};
  border-radius: 5px;
  padding: 10px 15px;
`;

const ColorBoxSave = styled.button`
  color: ${Colors.colorBlack};
  font-size: 13px;
  width: 75px;
  height: 35px;
  padding: 6px 15px;
  margin-left: 10px;
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

const Home = () => {
  const colorBoxContext = useContext(ColorBoxContext);
  const { colorBox } = colorBoxContext;
  return (
    <Container>
      <Title>Make your's Style-Guide!</Title>
      {/* <Title>STYLE-GUIDEを作ってください！</Title> */}
      <SubTitle>With Markdown Editor!</SubTitle>
      <ColorBoxContainer>
        {colorBox.map((item) => (
          <ColorBox color={item.color} key={item.id} />
        ))}
      </ColorBoxContainer>
      <ColorInput />
    </Container>
  );
};

export const ColorBox = (props) => {
  const [showMessage, setShowMessage] = useState('Copy hex code');

  const handleCopy = () => {
    setShowMessage('Copied!');
    setTimeout(resetCopyMessage, 1500);
  };

  const resetCopyMessage = () => {
    setShowMessage('Copy hex code');
  };

  return (
    <ColorBoxStyle color={props.color}>
      <CopyToClipboard text={props.color}>
        <ColorBoxHex onClick={handleCopy}>{showMessage}</ColorBoxHex>
      </CopyToClipboard>
    </ColorBoxStyle>
  );
};

export const ColorInput = () => {
  const [inputValue, setInputValue] = useState('');
  const colorBoxContext = useContext(ColorBoxContext);
  const { colorBoxDispatch } = colorBoxContext;

  const handleAddColor = () => {
    if (inputValue === '') {
      return;
    }
    let hex = inputValue.replace(/^\s+|\s+$/g, ''); // 앞, 뒤 공백제거
    hex = hex.replace(/(^ *)|( *$)/g, '').replace(/ +/g, ' '); // trim 추가
    const newArr = hex.split(' ');
    for (let i = 0; i < newArr.length; i++) {
      // foreach 또는 더 좋은 방법으로 변경
      const newList = { id: uuidv4(), color: newArr[i] };
      colorBoxDispatch({ type: 'ADD', list: newList });
    }
    setInputValue('');
  };

  const changeValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <ColorBoxInputContainer>
      <ColorBoxInput type='text' onChange={changeValue} value={inputValue} placeholder={`ex) #000 #ff449f #005f99`}></ColorBoxInput>
      <ColorBoxSave onClick={handleAddColor}>Save</ColorBoxSave>
    </ColorBoxInputContainer>
  );
};

export default Home;
