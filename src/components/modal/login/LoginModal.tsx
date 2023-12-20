/**
 * component 설명 : 로그인 버튼 클릭 시 열리는 모달
 * 작업자 : 김연정
 * 수정일 : 2023/12/15
 */

import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import kakaoIcon from "../../../assets/img/button/kakao_icon.png";
import naverIcon from "../../../assets/img/button/naver_icon.png";
import googleIcon from "../../../assets/img/button/google_icon.png";
import { useState } from "react";
import { JoinModal } from "./JoinModal";
import { FindPasswordModal } from "./FindPasswordModal";
import { CommonInputBox } from "../../commonInput/CommonInputBox";
import { ActiveButton } from "../../commonButton/ActiveButton";
import { useEffect } from "react";
import { InActiveButton } from "../../commonButton/InActiveButton";

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

const StyledLoginDiv = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 20px;
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

const StyledEasyLogin = styled.div`
  width: 98%;
  height: auto;
  margin: 100px auto;
`;

const StyledEasyText = styled.p`
  width: 22%;
  padding: 3%;
  text-align: center;
  color: #636366;
  position: relative;
  left: 35.5%;
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
  height: 50px;
  margin-top: -10px;
  float: left;
`;

const StyledLoginLogo = styled.div`
  width: 60%;
  height: 50px;
  margin: 0 auto;
  img {
    margin-right: 8%;
    cursor: pointer;
  }
  :first-of-type {
    margin-left: 7%;
  }
  @media (max-width: 1600px) {
    width: 64%;
  }
`;

interface props {
  setIsOpenLoginModal: Dispatch<SetStateAction<boolean>>;
}
export function LoginModal({ setIsOpenLoginModal }: props) {
  const [isOpenJoinModal, setIsOpenJoinModal] = useState<boolean>(false);
  const [isOpenFindPasswordModal, setIsOpenFindPasswordModal] =
    useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [checkEmail, setCheckEmail] = useState<string>("이메일");
  const [checkPassword, setCheckPassword] = useState<string>("비밀번호");
  const [checkEmailColor, setCheckEmailColor] = useState<string>("#8e8e93");
  const [checkPasswordColor, setCheckPasswordColor] =
    useState<string>("#8e8e93");
  const [loginBtnState, setLoginBtnState] = useState<boolean>(false);

  useEffect(() => {
    if (emailValue !== "" && passwordValue !== "") {
      setLoginBtnState(true);
    }
    if (passwordValue !== "") {
      setCheckPassword("비밀번호");
      setCheckPasswordColor("#8e8e93");
    } else {
      setLoginBtnState(false);
    }
  }, [emailValue, passwordValue]);

  const handlePassword = (event: any) => {
    setPasswordValue(event.target.value);
    // 영문, 숫자 조합 8자 이상인지 체크
    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(passwordValue);
    setIsValidPassword(isValidPassword);
  };

  const handleEmail = (event: any) => {
    setEmailValue(event.target.value);
  };

  /**
   * 모든 항목 잘 입력했는지 체크 함수
   */
  const isValidInput = () => {
    if (emailValue === "") {
      setCheckEmail("이메일을 입력해주세요");
      setCheckEmailColor("#FF2828");
    } else {
      setCheckEmail("이메일");
      setCheckEmailColor("#8e8e93");
    }
    if (passwordValue === "") {
      setCheckPassword("비밀번호를 입력해주세요");
      setCheckPasswordColor("#FF2828");
      setLoginBtnState(false);
    } else if (isValidPassword === false) {
      setCheckPassword("영문, 슛저 조합 8자 이상 입력해주세요.");
      setCheckPasswordColor("#FF2828");
      setPasswordValue("");
      setLoginBtnState(false);
    } else {
      setCheckPassword("비밀번호");
      setCheckPasswordColor("#8e8e93");
    }
  };

  /**
   * 로그인 버튼 클릭 시 실행되는 함수
   */
  const clickLoginButton = () => {
    isValidInput();
  };

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
          <StyledLoginDiv>
            <CommonInputBox
              text={checkEmail}
              color={checkEmailColor}
              type="text"
              placeholder="이메일을 입력해주세요."
              onChange={handleEmail}
            />
            <CommonInputBox
              text={checkPassword}
              color={checkPasswordColor}
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={handlePassword}
              value={passwordValue}
            />
            {loginBtnState ? (
              <ActiveButton
                text="로그인"
                onClick={clickLoginButton}
                $bgColor="#446FF6"
                color="#fff"
                $hoverColor="#4168e5"
              />
            ) : (
              <InActiveButton
                text="로그인"
                $bgColor="#636366"
                color="#8E8E93"
              />
            )}
          </StyledLoginDiv>
          <StyledOtherLogin>
            <StyledOther onClick={openJoinModal}>회원가입</StyledOther>
            <StyledOther onClick={openFindPasswordModal}>
              비밀번호 찾기
            </StyledOther>
          </StyledOtherLogin>
          <StyledEasyLogin>
            <StyledBar></StyledBar>
            <StyledEasyText>간편 로그인</StyledEasyText>
            <StyledLogoDiv>
              <StyledLoginLogo>
                <img src={kakaoIcon} />
                <img src={naverIcon} />
                <img src={googleIcon} />
              </StyledLoginLogo>
            </StyledLogoDiv>
          </StyledEasyLogin>
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
