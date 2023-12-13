import { Dispatch, SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "../Modal";
import kakaoLogin from "../../../assets/img/button/kakao_login.png";
import naverIcon from "../../../assets/img/button/naver_icon.png";
import googleIcon from "../../../assets/img/button/google_icon.png";
import { useState } from "react";
import { EmailLoginModal } from "./EmailLoginModal";

const Title = styled.p`
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

const LoginContainer = styled.div`
  width: 100%;
  height: auto;
`;

const EasyText = styled.p`
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

const Bar = styled.span`
  width: 100%;
  height: 1px;
  display: block;
  background-color: #636366;
`;

const LogoDiv = styled.div`
  width: 100%;
  height: auto;
  margin-top: -10px;
  float: left;
`;

const LoginLogo = styled.div`
  padding-bottom: 50px;
`;

const LoginIcon = styled.div`
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

const KakaoBtn = styled.button`
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
const EmailBtn = styled.button`
  width: 100%;
  height: 56px;
  font-size: 1.1rem;
  line-height: 56px;
  background-color: #446ff6;
  color: #fff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const CheckText = styled.p`
  color: #fff;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 60px;
  @media (max-width: 1600px) {
    margin-top: 50px;
  }
`;

const GotoLogin = styled.span`
  margin-left: 2%;
  color: #446ff6;
  cursor: pointer;
`;

interface props {
  setIsOpenMembershipModal: Dispatch<SetStateAction<boolean>>;
  setIsOpenLoginModal: Dispatch<SetStateAction<boolean>>;
}
export function MembershipModal({
  setIsOpenMembershipModal,
  setIsOpenLoginModal,
}: props) {
  const [isOpenEmailLoginModal, setIsOpenEmailLoginModal] =
    useState<boolean>(false);

  const closeModal = () => {
    setIsOpenMembershipModal(false);
  };

  const goToLogin = () => {
    setIsOpenMembershipModal(false);
    setIsOpenLoginModal(true);
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
        <Title>PROVIT</Title>
        <LoginContainer>
          <LogoDiv>
            <LoginLogo>
              <KakaoBtn>
                <img src={kakaoLogin} /> 카카오로 시작하기
              </KakaoBtn>
              <EmailBtn onClick={gotoEmail}>이메일로 가입하기</EmailBtn>
            </LoginLogo>
            <Bar></Bar>
            <EasyText>또는</EasyText>
          </LogoDiv>
          <LoginIcon>
            <img src={naverIcon} />
            <img src={googleIcon} />
          </LoginIcon>
          <CheckText>
            이미 회원이신가요?
            <GotoLogin onClick={goToLogin}>로그인하기</GotoLogin>
          </CheckText>
        </LoginContainer>
      </Modal>
      {isOpenEmailLoginModal && (
        <EmailLoginModal setIsOpenEmailLoginModal={setIsOpenEmailLoginModal} />
      )}
    </>
  );
}
