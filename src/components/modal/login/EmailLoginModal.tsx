/**
 * component 설명 : 회원가입 모달에서 이메일로 가입하기 버튼 클릭 시 열리는 모달
 * 작업자 : 김연정
 * 수정일 : 2023/12/15
 */

import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import { JoinForm } from "../../login/JoinForm";

const StyledTitle = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-left: 5%;
  margin-top: 5px;
  margin-bottom: 40px;
  color: #fff;
  @media (max-width: 1600px) {
    margin-top: 10px;
    margin-bottom: 40px;
  }
`;

const StyledLoginContainer = styled.div`
  width: 100%;
  height: auto;
`;

const StyledLoginDiv = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 20px;
`;

interface props {
  setIsOpenEmailLoginModal: Dispatch<SetStateAction<boolean>>;
  setIsOpenMembershipModal?: Dispatch<SetStateAction<boolean>>;
}
export function EmailLoginModal({
  setIsOpenEmailLoginModal,
  setIsOpenMembershipModal,
}: props) {
  const closeModal = () => {
    setIsOpenEmailLoginModal(false);
  };
  return (
    <>
      <Modal
        width="18.75%"
        $minWidth="22.5%"
        height="640px"
        $minHeight="620px"
        $top="13%"
        $left="39%"
        $minLeft="36%"
        onClose={closeModal}
      >
        <StyledTitle>회원가입</StyledTitle>
        <StyledLoginContainer>
          <StyledLoginDiv>
            <JoinForm
              setIsOpenEmailLoginModal={setIsOpenEmailLoginModal}
              setIsOpenMembershipModal={setIsOpenMembershipModal}
            />
          </StyledLoginDiv>
        </StyledLoginContainer>
      </Modal>
    </>
  );
}
