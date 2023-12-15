/**
 * component 설명 : 헤더
 * 작업자 : 김연정
 * 수정일 : 2023/12/15
 */

import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

const StyledHeaderSection = styled.div`
  width: 100%;
  height: 70px;
  background-color: gray;
`;
const StyledNav = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  padding: 24px;
`;
const StyledLogo = styled.p`
  font-size: 1.4rem;
  float: left;
  color: #fff;
  /* line-height: 70px; */
  cursor: pointer;
`;
const StyledNavList = styled.p`
  float: right;
  font-size: 1.2rem;
  color: #fff;
  /* line-height: 70px; */
  & + & {
    margin-right: 3%;
  }
  cursor: pointer;
`;

interface props {
  setIsOpenLoginModal: Dispatch<SetStateAction<boolean>>;
  setIsOpenMembershipModal: Dispatch<SetStateAction<boolean>>;
}

export function Header({
  setIsOpenLoginModal,
  setIsOpenMembershipModal,
}: props) {
  const handleLogin = () => {
    setIsOpenLoginModal(true);
  };

  const handlMember = () => {
    setIsOpenMembershipModal(true);
  };
  return (
    <StyledHeaderSection>
      <StyledNav>
        <StyledLogo>PROVIT</StyledLogo>
        <StyledNavList onClick={handleLogin}>로그인</StyledNavList>
        <StyledNavList onClick={handlMember}>회원가입</StyledNavList>
      </StyledNav>
    </StyledHeaderSection>
  );
}
