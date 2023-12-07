import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";

const StyledModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.51);
  border-radius: 13px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;

const StyledModalCloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const ModalInModalOverlay = ({ closeModal, children }: any) => {
  return (
    <StyledModalContainer>
      <StyledModalCloseButton onClick={closeModal}>X</StyledModalCloseButton>
      {children}
    </StyledModalContainer>
  );
};

export default ModalInModalOverlay;
