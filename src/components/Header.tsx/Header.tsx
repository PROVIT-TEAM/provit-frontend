import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

const HeaderSection = styled.div`
  width: 100%;
  height: 70px;
  background-color: gray;
`;
const Nav = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  padding: 24px;
`;
const Logo = styled.p`
  font-size: 1.4rem;
  float: left;
  color: #fff;
  /* line-height: 70px; */
  cursor: pointer;
`;
const NavList = styled.p`
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
    <HeaderSection>
      <Nav>
        <Logo>PROVIT</Logo>
        <NavList onClick={handleLogin}>로그인</NavList>
        <NavList onClick={handlMember}>회원가입</NavList>
      </Nav>
    </HeaderSection>
  );
}
