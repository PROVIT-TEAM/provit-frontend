/**
 * component 설명 : 로그인 버튼 클릭 시 열리는 모달
 * 작업자 : 김연정
 * 수정일 : 2023/12/15
 */

import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import { useState } from "react";
import { JoinModal } from "./JoinModal";
import { FindPasswordModal } from "./FindPasswordModal";
import { LoginForm } from "../../login/LoginForm";
import { SocialLogin } from "../../login/SocialLogin";

const StyledTitle = styled.p`
  text-align: center;
  font-size: 2rem;
  margin-top: 60px;
  margin-bottom: 70px;
  color: #fff;
  @media (max-width: 1600px) {
    margin-top: 60px;
    margin-bottom: 55px;
  }
`;

const StyledLoginContainer = styled.div`
  width: 100%;
  height: auto;
`;

const StyledOtherLogin = styled.div`
  width: 50%;
  margin: 0 auto;
  @media (max-width: 1600px) {
    width: 54%;
  }
`;

const StyledOther = styled.p`
  float: left;
  color: #8e8e93;
  margin: 10px 9px;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    color: #707077;
  }
`;

interface props {
  setIsOpenLoginModal: Dispatch<SetStateAction<boolean>>;
}

export function LoginModal({ setIsOpenLoginModal }: props) {
  const [isOpenJoinModal, setIsOpenJoinModal] = useState<boolean>(false);
  const [isOpenFindPasswordModal, setIsOpenFindPasswordModal] =
    useState<boolean>(false);

  const closeModal = () => {
    setIsOpenLoginModal(false);
  };

  const openJoinModal = () => {
    setIsOpenJoinModal(true);
  };

  const openFindPasswordModal = () => {
    setIsOpenFindPasswordModal(true);
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
        <StyledTitle>PROVIT</StyledTitle>
        <StyledLoginContainer>
          <LoginForm setIsOpenLoginModal={setIsOpenLoginModal} />
          <StyledOtherLogin>
            <StyledOther onClick={openJoinModal}>회원가입</StyledOther>
            <StyledOther onClick={openFindPasswordModal}>
              비밀번호 찾기
            </StyledOther>
          </StyledOtherLogin>
          <SocialLogin />
        </StyledLoginContainer>
      </Modal>
      {isOpenJoinModal && <JoinModal setIsOpenJoinModal={setIsOpenJoinModal} />}
      {isOpenFindPasswordModal && (
        <FindPasswordModal
          setIsOpenFindPasswordModal={setIsOpenFindPasswordModal}
        />
      )}
    </>
  );
}
