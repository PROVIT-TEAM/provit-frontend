import { Dispatch } from "react";
import { SetStateAction } from "react";
import styled from "styled-components";
import { ActiveButton } from "../commonButton/ActiveButton";
import { InActiveButton } from "../commonButton/InActiveButton";
import { Modal } from "./Modal";

const StyledTitle = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-top: 75px;
  margin-bottom: 65px;
  color: #fff;
`;

const ButtonDiv = styled.div`
  width: 50%;
  margin: 0 auto;
`;

interface props {
  setShowConfirmModal?: Dispatch<SetStateAction<boolean>>;
  setLogoutState?: Dispatch<SetStateAction<boolean>>;
}
export function ConfirmModal({ setShowConfirmModal, setLogoutState }: props) {
  const handleLogOutButton = () => {
    if (setLogoutState) setLogoutState(true);
  };
  const handleCancelButton = () => {
    if (setShowConfirmModal) setShowConfirmModal(false);
  };
  return (
    <Modal
      width="20%"
      height="250px"
      $left="40%"
      $minHeight="250px"
      onClose={handleCancelButton}
    >
      <StyledTitle>로그아웃하시겠습니까?</StyledTitle>
      <ButtonDiv>
        <ActiveButton
          text="확인"
          $width="48%"
          $height="40px"
          onClick={handleLogOutButton}
          $bgColor="#446FF6"
          color="#fff"
          $hoverColor="#4168e5"
          $marginRight="4%"
        />
        <InActiveButton
          text="취소"
          $width="48%"
          $height="40px"
          $bgColor="#636366"
          color="#fff"
          $hoverColor="#5b5b5e"
          cursor="pointer"
          onClick={handleCancelButton}
        />
      </ButtonDiv>
    </Modal>
  );
}
