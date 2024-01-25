/**
 * component 설명 : 메인페이지
 * 작업자 : 김연정
 * 수정일 : 2023/12/15
 */

import styled from "styled-components";
import { SideSheet } from "../components/organisms/sidesheet/SideSheet";
import HeaderContainer from "../containers/headerContainer/HeaderContainer";
import { Outlet } from "react-router-dom";

const StyledMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #efefef;
`;
export function Main() {
  return (
    <>
      <StyledMainContainer>
        <HeaderContainer />
        <Outlet />
        <SideSheet />
      </StyledMainContainer>
    </>
  );
}
