import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";

const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

const StyledModalWrap = styled.div`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;

  width: 50vw;
  height: 50vh;
  transform: translate(-50%, -50%);
  border-radius: 13px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.6);
`;

const StyledModalCloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const ModalOverlay = ({ closeModal, children }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const modalOutSideClick = (e: any) => {
    if (modalRef.current === e.target) {
      closeModal();
    }
  };

  return (
    <StyledModalContainer ref={modalRef} onClick={modalOutSideClick}>
      <StyledModalWrap>
        <StyledModalCloseButton onClick={closeModal}>X</StyledModalCloseButton>
        {children}
      </StyledModalWrap>
    </StyledModalContainer>
  );
};

export default ModalOverlay;
