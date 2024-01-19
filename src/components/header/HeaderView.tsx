/**
 * component 설명 : 헤더 뷰
 * 작업자 : 김연정
 * 수정일 : 2024/1/9
 */

import { Link, Outlet } from "react-router-dom";
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
  cursor: pointer;
`;
const StyledNavList = styled.p`
  float: right;
  font-size: 1.2rem;
  color: #fff;
  & + & {
    margin-right: 3%;
  }
  cursor: pointer;
`;

interface HeaderProps {
  onLogin: () => void;
  onLogout: () => void;
  onSignIn: () => void;
  isLoggedIn: boolean;
}

export function HeaderView({
  onLogin,
  onLogout,
  onSignIn,
  isLoggedIn,
}: HeaderProps) {
  return (
    <StyledHeaderSection>
      <StyledNav>
        <StyledLogo>PROVIT</StyledLogo>
        {isLoggedIn ? (
          <StyledNavList onClick={onLogout}>로그아웃</StyledNavList>
        ) : (
          <>
            <StyledNavList onClick={onLogin}>로그인</StyledNavList>
            <StyledNavList onClick={onSignIn}>회원가입</StyledNavList>
          </>
        )}
      </StyledNav>
    </StyledHeaderSection>
  );
}
