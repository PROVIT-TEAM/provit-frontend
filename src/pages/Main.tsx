import { useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header.tsx";
import { LoginModal, MembershipModal } from "../components/modal";

const MainContainer = styled.div`
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
      <MainContainer></MainContainer>
      {isOpenLoginModal && (
        <LoginModal setIsOpenLoginModal={setIsOpenLoginModal} />
      )}
      {isOpenMembershipModal && (
        <MembershipModal
          setIsOpenMembershipModal={setIsOpenMembershipModal}
          setIsOpenLoginModal={setIsOpenLoginModal}
        />
      )}
    </>
  );
}
