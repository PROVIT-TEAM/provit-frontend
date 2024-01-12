/**
 * component 설명 : 회원가입 모달
 * 작업자 : 김연정
 * 수정일 : 2024/1/10
 */
import styled from "styled-components";
import { Modal } from "../Modal";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import Box from "../../layouts/Box";
import Flex from "../../layouts/Flex";
import { EmailJoinModal } from "./EmailJoinModal";

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
  closeModal: () => void;
  goToLogin: () => void;
  gotoEmail: () => void;
  setIsOpenEmailLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenEmailLoginModal?: boolean;
  closeEmailJoinModal?: () => void;
}
export function SignInModal({
  closeModal,
  goToLogin,
  gotoEmail,
  setIsOpenEmailLoginModal,
  isOpenEmailLoginModal,
  closeEmailJoinModal,
}: props) {
  return (
    <>
      <Modal onClose={closeModal}>
        <Box $marginTop="112px" $marginBottom="134px">
          <Flex $flexDirection="column" $alignItems="center">
            <Text variant="large">PROVIT</Text>
          </Flex>
        </Box>
        <Box $marginBottom="40px">
          <Button variant="kakao" width="100%">
            <Flex $alignItems="center" $justifyContent="center" $gap="-10px">
              <Icon iconName="kakao" />
              카카오톡으로 시작하기
            </Flex>
          </Button>
          <Button variant="active" onClick={gotoEmail} width="100%">
            이메일로 가입하기
          </Button>
        </Box>
        <Box>
          <StyledBar></StyledBar>
          <StyledEasyText>또는</StyledEasyText>
          <Flex $justifyContent="center" $gap="16px">
            <Icon iconName="naver" />
            <Icon iconName="google" />
          </Flex>
        </Box>
        <Box $marginTop="40px">
          <Flex $alignItems="center" $justifyContent="center">
            <Text fontSize="16px" fontWeight="400">
              이미 회원이신가요?
            </Text>
            <StyledGotoLogin onClick={goToLogin}>로그인하기</StyledGotoLogin>
          </Flex>
        </Box>
      </Modal>
      {isOpenEmailLoginModal && (
        <EmailJoinModal
          setIsOpenEmailLoginModal={setIsOpenEmailLoginModal}
          closeEmailJoinModal={closeEmailJoinModal}
          // setIsOpenSignInpModal={setIsOpenSignInpModal}
        />
      )}
    </>
  );
}
