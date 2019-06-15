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
  position: relative;
`

const ModalBox = styled.div`
  position:fixed;
  width: 100%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`

const Button = styled.button`
  position:absolute;
  top:25%;
  left:70%;
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