import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import Icon from "../../atoms/Icon";

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

  width: 360px;
  height: 640px;
  border-radius: 8px 8px;
  transform: translate(-50%, -50%);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  background-color: #2c2c2e;
`;

const StyledModalCloseButton = styled.div`
  position: absolute;
  left: 312px;
  top: 24px;
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
        <StyledModalCloseButton onClick={closeModal}>
          <Icon iconName="close" />
        </StyledModalCloseButton>
        {children}
      </StyledModalWrap>
    </StyledModalContainer>
  );
};

export default ModalOverlay;
