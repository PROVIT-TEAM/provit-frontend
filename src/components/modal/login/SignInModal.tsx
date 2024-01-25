/**
 * component 설명 : 로그인 모달
 * 작업자 : 김연정
 * 수정일 : 2024/1/9
 */

import styled from "styled-components";
import { Modal } from "../Modal";
import Text from "../../atoms/Text";
import Box from "../../layouts/Box";
import Flex from "../../layouts/Flex";
import Icon from "../../atoms/Icon";
import { LoginForm } from "../../organisms/login";
import KakaoLoginComponent from "../../organisms/login/KakaoLoginComponent";
import { useNavigate } from "react-router-dom";

const StyledEasyText = styled.p`
  width: 30%;
  padding: 3%;
  text-align: center;
  color: #636366;
  position: relative;
  left: 31.5%;
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

interface SignInModalProps {
  onClose: () => void;
  handleSubmit: () => void;
  handleEmail: (event: any) => void;
  handlePassword: (event: any) => void;
  emailValue?: string;
  passwordValue?: string;
  loginBtnState?: boolean;
}

export function SignInModal({
  onClose,
  handleSubmit,
  handleEmail,
  handlePassword,
  emailValue,
  passwordValue,
  loginBtnState,
}: SignInModalProps) {
  const navigate = useNavigate();
  return (
    <>
      <Modal onClose={onClose}>
        <Box $marginTop="64px" $marginBottom="63px">
          <Flex $flexDirection="column" $alignItems="center">
            <Text variant="large">PROVIT</Text>
          </Flex>
        </Box>
        <Box $marginTop="24px">
          <LoginForm
            handleSubmit={handleSubmit}
            handleEmail={handleEmail}
            handlePassword={handlePassword}
            emailValue={emailValue}
            passwordValue={passwordValue}
            loginBtnState={loginBtnState}
          />
        </Box>
        <Box $marginBottom="40px">
          <Flex $alignItems="center" $justifyContent="center">
            <StyledOther onClick={() => navigate("/signup")}>
              회원가입
            </StyledOther>
            <StyledOther onClick={() => navigate("/find-password")}>
              비밀번호 찾기
            </StyledOther>
          </Flex>
        </Box>
        <StyledBar></StyledBar>
        <StyledEasyText>간편로그인</StyledEasyText>
        <Flex $justifyContent="center" $gap="16px">
          <KakaoLoginComponent type={false} />
          <Icon iconName="naver" />
          <Icon iconName="google" />
        </Flex>
      </Modal>
    </>
  );
}
