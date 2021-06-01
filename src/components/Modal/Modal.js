import React, { useContext } from 'react';

import styled from 'styled-components';

import Colors from '../../style/Colors';

// store
import { MdContext } from '../../store/MdStore';

// Modal
const ModalBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 200px;
  background-color: ${Colors.colorWhite};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 10px;
  left: 50%;
  top: 50%;
`;
const ModalDescription = styled.div`
  font-size: 20px;
  margin-bottom: 50px;
`;
const ModalButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  border-radius: 10px;
  background-color: ${Colors.colorWhite};
  border: 2px solid ${(props) => props.color};
  padding: 7px 25px;
  margin: 0 30px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.color};
    color: white;
  }
`;

const Modal = () => {
  return <div>{}</div>;
};

export const RemoveModal = (props) => {
  const mdContext = useContext(MdContext);
  const { isRemoveModal, setIsRemoveModal, contentDispatch, removeId } = mdContext;

  const onRemove = () => {
    console.log(removeId);
    contentDispatch({ type: 'REMOVE', id: removeId });
    setIsRemoveModal(!isRemoveModal);
  };

  const onCancel = () => {
    setIsRemoveModal(!isRemoveModal);
  };

  return (
    <div>
      {isRemoveModal ? (
        <ModalBox>
          <ModalDescription>文を削除しましょうか？</ModalDescription>
          <ModalButtonWrap>
            <ModalButton onClick={onRemove} color={Colors.colorRed}>
              削除
            </ModalButton>
            <ModalButton onClick={onCancel} color={Colors.colorBlue}>
              キャンセル
            </ModalButton>
          </ModalButtonWrap>
        </ModalBox>
      ) : null}
    </div>
  );
};

export default Modal;
