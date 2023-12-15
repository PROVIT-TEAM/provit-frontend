/**
 * component 설명 : 회원가입 버튼 클릭 시 열리는 모달
 * 작업자 : 김연정
 * 수정일 : 2023/12/15
 */

import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import kakaoLogin from "../../../assets/img/button/kakao_login.png";
import naverIcon from "../../../assets/img/button/naver_icon.png";
import googleIcon from "../../../assets/img/button/google_icon.png";
import { useState } from "react";
import { EmailLoginModal } from "./EmailLoginModal";

const StyledTitle = styled.p`
  text-align: center;
  font-size: 3rem;
  margin-top: 90px;
  margin-bottom: 140px;
  color: #fff;
  @media (max-width: 1600px) {
    margin-top: 80px;
    margin-bottom: 150px;
  }
`;

const StyledLoginContainer = styled.div`
  width: 100%;
  height: auto;
`;

const StyledEasyText = styled.p`
  width: 10%;
  padding: 3%;
  text-align: center;
  color: #636366;
  position: relative;
  left: 41.5%;
  top: -20px;
  background-color: #2c2c2e;
  @media (max-width: 1600px) {
    width: 24%;
    left: 34.5%;
  }
`;

const StyledBar = styled.span`
  width: 100%;
  height: 1px;
  display: block;
  background-color: #636366;
`;

const StyledLogoDiv = styled.div`
  width: 100%;
  height: auto;
  margin-top: -10px;
  float: left;
`;

const StyledLoginLogo = styled.div`
  padding-bottom: 50px;
`;

const StyledLoginIcon = styled.div`
  width: 33%;
  margin: 0 auto;
  :last-child {
    margin-left: 15%;
  }
  @media (max-width: 1600px) {
    width: 35%;
  }
  img {
    cursor: pointer;
  }
`;

const StyledKakaoBtn = styled.button`
  width: 100%;
  height: 56px;
  margin-bottom: 15px;
  background-color: #fee500;
  border-radius: 10px;
  font-size: 1.1rem;
  line-height: 56px;
  border: none;
  cursor: pointer;
  img {
    position: relative;
    top: 5px;
    left: 0%;
  }
`;

const StyledEmailBtn = styled.button`
  width: 100%;
  height: 56px;
  font-size: 1.1rem;
  line-height: 56px;
  background-color: #446ff6;
  color: #fff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    background-color: #3d62db;
  }
`;

const StyledCheckText = styled.p`
  color: #fff;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 60px;
  @media (max-width: 1600px) {
    margin-top: 50px;
  }
`;

const StyledGotoLogin = styled.span`
  margin-left: 2%;
  color: #446ff6;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    color: #4168e5;
  }
`;

interface props {
  setIsOpenMembershipModal?: Dispatch<SetStateAction<boolean>>;
  setIsOpenLoginModal?: Dispatch<SetStateAction<boolean>>;
  setIsOpenJoinModal?: Dispatch<SetStateAction<boolean>>;
}
export function JoinModal({
  setIsOpenMembershipModal,
  setIsOpenLoginModal,
  setIsOpenJoinModal,
}: props) {
  const [isOpenEmailLoginModal, setIsOpenEmailLoginModal] =
    useState<boolean>(false);

  const closeModal = () => {
    if (setIsOpenMembershipModal) setIsOpenMembershipModal(false);
    if (setIsOpenJoinModal) setIsOpenJoinModal(false);
  };

  const goToLogin = () => {
    if (setIsOpenMembershipModal) setIsOpenMembershipModal(false);
    if (setIsOpenLoginModal) setIsOpenLoginModal(true);
  };

  const gotoEmail = () => {
    setIsOpenEmailLoginModal(true);
  };

  return (
    <>
      <Modal
        width="18.75%"
        minwidth="22.5%"
        height="640px"
        minheight="620px"
        top="13%"
        left="39%"
        minleft="36%"
        onClose={closeModal}
      >
        <StyledTitle>PROVIT</StyledTitle>
        <StyledLoginContainer>
          <StyledLogoDiv>
            <StyledLoginLogo>
              <StyledKakaoBtn>
                <img src={kakaoLogin} /> 카카오로 시작하기
              </StyledKakaoBtn>
              <StyledEmailBtn onClick={gotoEmail}>
                이메일로 가입하기
              </StyledEmailBtn>
            </StyledLoginLogo>
            <StyledBar></StyledBar>
            <StyledEasyText>또는</StyledEasyText>
          </StyledLogoDiv>
          <StyledLoginIcon>
            <img src={naverIcon} />
            <img src={googleIcon} />
          </StyledLoginIcon>
          <StyledCheckText>
            이미 회원이신가요?
            <StyledGotoLogin onClick={goToLogin}>로그인하기</StyledGotoLogin>
          </StyledCheckText>
        </StyledLoginContainer>
      </Modal>
      {isOpenEmailLoginModal && (
        <EmailLoginModal setIsOpenEmailLoginModal={setIsOpenEmailLoginModal} />
      )}
    </>
  );
}