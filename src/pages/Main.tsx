/**
 * component 설명 : 메인페이지
 * 작업자 : 김연정
 * 수정일 : 2023/12/15
 */

import styled from "styled-components";
import HeaderContainer from "../containers/headerContainer/HeaderContainer";

const StyledMainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dddddd;
`;
export function Main() {
  return (
    <>
      <HeaderContainer />
      <StyledMainContainer></StyledMainContainer>
    </>
  );
}
