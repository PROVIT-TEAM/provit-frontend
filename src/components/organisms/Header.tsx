import React from "react";

import { authAtom } from "../../recoil/auth";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import logout from "../../api/services/logout";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #d9d9d9;
`;

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10 10;
`;

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

const Header = ({ children }: any) => {
  const { auth } = useRecoilValue(authAtom);
  const setAuth = useSetRecoilState(authAtom);

  const handleLogout = () => {
    logout();
    setAuth({ auth: false });
  };
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogo>Provit</StyledLogo>
        {auth && (
          <div>
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        )}
        {!auth && <StyledNavWrapper>{children}</StyledNavWrapper>}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
