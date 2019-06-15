import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  display: ${props => props.show ? 'block' : 'none'}
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`
const ModalWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fe;`

const ModalBox = styled.div`
  
  grid-row: 2;
  position:fixed;
  width: 100%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`

const Button = styled.button`
  grid-row: 1;
  padding: 30px;
  background: palevioletred;
  color: white;
`

const Modal = ({ handleClose, show, children }) => {
  return (
    <Overlay show={show}>
      <ModalWrapper>
        <ModalBox>{children}</ModalBox>
        <Button onClick={handleClose}>X</Button>
      </ModalWrapper>
    </Overlay>
  )
}

export default Modal;