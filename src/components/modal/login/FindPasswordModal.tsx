/**
 * component 설명 : 비빌번호 찾기 모달
 * 작업자 : 김연정
 * 수정일 : 2023/12/15
 */

import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Modal } from "../Modal";

const StyledTitle = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-top: 0px;
  margin-bottom: 70px;
  color: #fff;
  @media (max-width: 1600px) {
    margin-top: 6px;
    margin-bottom: 150px;
    margin-left: 5%;
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

const StyledInputTitle = styled.p`
  color: #8e8e93;
  margin-bottom: 5px;
`;

const StyledLoginInput = styled.input`
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

const StyledLoginBtn = styled.button`
  width: 100%;
  height: 56px;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #446ff6;
  &:hover {
    transition: all 0.3s;
    background-color: #4168e5;
  }
`;

interface props {
  setIsOpenFindPasswordModal?: Dispatch<SetStateAction<boolean>>;
}
export function FindPasswordModal({ setIsOpenFindPasswordModal }: props) {
  const closeModal = () => {
    if (setIsOpenFindPasswordModal) setIsOpenFindPasswordModal(false);
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
        <StyledTitle>비밀번호 재설정</StyledTitle>
        <StyledLoginContainer>
          <StyledLoginDiv>
            <StyledInputTitle>이메일</StyledInputTitle>
            <StyledLoginInput
              type="text"
              placeholder="이메일을 입력해주세요."
            ></StyledLoginInput>
            <StyledLoginBtn>인증코드 발송</StyledLoginBtn>
          </StyledLoginDiv>
        </StyledLoginContainer>
      </Modal>
    </>
  );
}
