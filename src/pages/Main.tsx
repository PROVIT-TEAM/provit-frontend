/**
 * component 설명 : 메인페이지
 * 작업자 : 김연정
 * 수정일 : 2023/12/15
 */

import { useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header.tsx";
import { LoginModal, JoinModal } from "../components/modal";

const StyledMainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dddddd;
`;
export function Main() {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState<boolean>(false);
  const [isOpenMembershipModal, setIsOpenMembershipModal] =
    useState<boolean>(false);

  return (
    <>
      <Header
        setIsOpenLoginModal={setIsOpenLoginModal}
        setIsOpenMembershipModal={setIsOpenMembershipModal}
      />
      <StyledMainContainer></StyledMainContainer>
      {isOpenLoginModal && (
        <LoginModal setIsOpenLoginModal={setIsOpenLoginModal} />
      )}
      {isOpenMembershipModal && (
        <JoinModal
          setIsOpenMembershipModal={setIsOpenMembershipModal}
          setIsOpenLoginModal={setIsOpenLoginModal}
        />
      )}
    </>
  );
}
