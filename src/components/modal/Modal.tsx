import { Dispatch, ReactNode, SetStateAction } from "react";
import styled from "styled-components";
import closeModalBtn from "../../assets/img/button/closeBtn.png";

const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
`;

const StyledModalWrap = styled.div<styleProps>`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #2c2c2e;
  border-radius: 20px;
  padding: 30px;
  @media (max-width: 1600px) {
    width: ${(props) => props.$minWidth};
    height: ${(props) => props.$minHeight};
  }
`;

const StyledCloseBtn = styled.button`
  float: right;
  font-size: 1.2rem;
  border: none;
  background-color: transparent;
  img {
    cursor: pointer;
  }
`;

interface styleProps {
  width?: string;
  $minWidth?: string;
  height?: string;
  $top?: string;
  $left?: string;
  $minLeft?: string;
  $minHeight?: string;
}

interface props {
  onClose?: () => void;
  children?: ReactNode;
}

export function Modal({
  width = "18.75%",
  $minWidth = "22.5%",
  height = "640px",
  $minHeight = "640px",
  onClose,
  children,
}: styleProps & props) {
  const closeModal = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <StyledModalContainer>
      <StyledModalWrap
        width={width}
        height={height}
        $minWidth={$minWidth}
        $minHeight={$minHeight}
      >
        <StyledCloseBtn onClick={closeModal}>
          <img src={closeModalBtn} />
        </StyledCloseBtn>
        {children}
      </StyledModalWrap>
    </StyledModalContainer>
  );
}
