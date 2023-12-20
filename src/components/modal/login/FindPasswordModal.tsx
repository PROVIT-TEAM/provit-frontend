/**
 * component 설명 : 비빌번호 찾기 모달
 * 작업자 : 김연정
 * 수정일 : 2023/12/15
 */

import { useState } from "react";
import { useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { ActiveButton } from "../../commonButton/ActiveButton";
import { InActiveButton } from "../../commonButton/InActiveButton";
import { CommonInputBox } from "../../commonInput/CommonInputBox";
import { Modal } from "../Modal";

const StyledTitle = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-top: 5px;
  margin-left: 5%;
  margin-bottom: 150px;
  color: #fff;
  @media (max-width: 1600px) {
    margin-top: 6px;
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
  setIsOpenFindPasswordModal?: Dispatch<SetStateAction<boolean>>;
}
export function FindPasswordModal({ setIsOpenFindPasswordModal }: props) {
  const [emailValue, setEmailValue] = useState<string>("");
  const [btnState, setBtnState] = useState<boolean>(false);

  useEffect(() => {
    if (emailValue !== "") {
      setBtnState(true);
    } else {
      setBtnState(false);
    }
  }, [emailValue]);

  const closeModal = () => {
    if (setIsOpenFindPasswordModal) setIsOpenFindPasswordModal(false);
  };

  const handleEmail = (event: any) => {
    setEmailValue(event.target.value);
  };

  const clickButton = () => {
    alert("인증코드 발송");
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
        <StyledTitle>비밀번호 재설정</StyledTitle>
        <StyledLoginContainer>
          <StyledLoginDiv>
            <CommonInputBox
              text="이메일"
              color="#8e8e93"
              type="text"
              placeholder="이메일을 입력해주세요."
              onChange={handleEmail}
              value={emailValue}
            />
            {btnState ? (
              <ActiveButton
                text="인증코드 발송"
                onClick={clickButton}
                $bgColor="#446FF6"
                color="#fff"
                $hoverColor="#4168e5"
              />
            ) : (
              <InActiveButton
                text="인증코드 발송"
                $bgColor="#636366"
                color="#8E8E93"
              />
            )}
          </StyledLoginDiv>
        </StyledLoginContainer>
      </Modal>
    </>
  );
}
