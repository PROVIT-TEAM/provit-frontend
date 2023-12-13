import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "../Modal";
import kakaoIcon from "../../../assets/img/button/kakao_icon.png";
import naverIcon from "../../../assets/img/button/naver_icon.png";
import googleIcon from "../../../assets/img/button/google_icon.png";

const Title = styled.p`
  text-align: center;
  font-size: 3rem;
  margin-top: 60px;
  margin-bottom: 70px;
  color: #fff;
  @media (max-width: 1600px) {
    margin-top: 60px;
    margin-bottom: 55px;
  }
`;

const LoginContainer = styled.div`
  width: 100%;
  height: auto;
`;
const CheckMessage = styled.p`
  /* text-align: center; */
  font-size: 1.1rem;
  margin-bottom: 15px;
  margin-left: 5.3%;
`;
const GoLogin = styled(Link)`
  color: blue;
`;
const LoginDiv = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 20px;
`;
const InputTitle = styled.p`
  color: #8e8e93;
  margin-bottom: 5px;
`;
const LoginInput = styled.input`
  height: 48px;
  width: 95%;
  font-size: 0.9rem;
  margin-bottom: 25px;
  border-radius: 8px;
  border: 1px solid #666;
  background-color: #3a3a3c;
  padding-left: 5%;
  border: none;
  color: #fff;
  ::placeholder {
    color: #3a3a3c;
  }
`;
const LoginBtn = styled.button`
  width: 100%;
  height: 56px;
  background-color: #4529fc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    transition: all 0.3s;
    background-color: #3221a3;
  }
`;

const OtherLogin = styled.div`
  width: 50%;
  margin: 0 auto;
  @media (max-width: 1600px) {
    width: 54%;
  }
`;

const Other = styled.p`
  float: left;
  color: #8e8e93;
  margin: 10px 9px;
  cursor: pointer;
`;

const EasyLogin = styled.div`
  width: 98%;
  height: auto;
  margin: 100px auto;
`;

const EasyText = styled.p`
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

const Bar = styled.span`
  width: 100%;
  height: 1px;
  display: block;
  background-color: #636366;
`;

const LogoDiv = styled.div`
  width: 100%;
  height: 50px;
  margin-top: -10px;
  float: left;
`;

const LoginLogo = styled.div`
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
  const closeModal = () => {
    setIsOpenLoginModal(false);
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
        // setIsOpenLoginModal={setIsOpenLoginModal}
        onClose={closeModal}
      >
        <Title>PROVIT</Title>
        <LoginContainer>
          <LoginDiv>
            <InputTitle>이메일</InputTitle>
            <LoginInput
              type="text"
              placeholder="이메일을 입력해주세요."
            ></LoginInput>
            <InputTitle>비밀번호</InputTitle>
            <LoginInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
            ></LoginInput>
            <LoginBtn>로그인</LoginBtn>
          </LoginDiv>
          <OtherLogin>
            <Other>회원가입</Other>
            <Other>비밀번호 찾기</Other>
          </OtherLogin>
          <EasyLogin>
            <Bar></Bar>
            <EasyText>간편 로그인</EasyText>
            <LogoDiv>
              <LoginLogo>
                <img src={kakaoIcon} />
                <img src={naverIcon} />
                <img src={googleIcon} />
              </LoginLogo>
            </LogoDiv>
          </EasyLogin>
        </LoginContainer>
      </Modal>
    </>
  );
}
