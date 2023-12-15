import { Dispatch, ReactNode, SetStateAction } from "react";
import styled from "styled-components";
import closeModalBtn from "../../assets/img/button/closeBtn.png";

const StyledModalContainer = styled.div<styleProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 99;
  background-color: #2c2c2e;
  border-radius: 20px;
  padding: 30px;
  @media (max-width: 1600px) {
    width: ${(props) => props.minwidth};
    height: ${(props) => props.minheight};
    left: ${(props) => props.minleft};
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
  minwidth?: string;
  height?: string;
  top?: string;
  left?: string;
  minleft?: string;
  minheight?: string;
}

interface props {
  setIsOpenLoginModal?: Dispatch<SetStateAction<boolean>>;
  setIsOpenMembershipModal?: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  children?: ReactNode;
}

export function Modal({
  width = "40%",
  minwidth = "28%",
  height = "600px",
  top = "20%",
  left = "30%",
  minleft = "33%",
  minheight = "600px",
  onClose,
  children,
}: styleProps & props) {
  const closeModal = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <StyledModalContainer
      width={width}
      height={height}
      top={top}
      left={left}
      minwidth={minwidth}
      minleft={minleft}
      minheight={minheight}
    >
      <StyledCloseBtn onClick={closeModal}>
        <img src={closeModalBtn} />
      </StyledCloseBtn>
      {children}
    </StyledModalContainer>
  );
}
