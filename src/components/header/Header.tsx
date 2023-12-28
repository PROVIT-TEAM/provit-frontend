/**
 * component 설명 : 헤더
 * 작업자 : 김연정
 * 수정일 : 2023/12/15
 */

import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserInfoAtom } from "../../recoil/UserInfoAtom";
import { useToasts } from "react-toast-notifications";
import { ConfirmModal } from "../modal/ConfirmModal";
import { useEffect } from "react";

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
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [logoutState, setLogoutState] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);
  const UserInfo = useRecoilValue(UserInfoAtom);
  const { addToast } = useToasts();

  useEffect(() => {
    if (logoutState) {
      setUserInfo([]);
      setShowConfirmModal(false);
      addToast("로그아웃되었습니다.", { appearance: "success" });
      setLogoutState(false);
    }
  }, [logoutState]);

  const handleLogin = () => {
    setIsOpenLoginModal(true);
  };

  const handleLogout = () => {
    setShowConfirmModal(true);
  };

  const handlMember = () => {
    setIsOpenMembershipModal(true);
  };
  return (
    <StyledHeaderSection>
      <StyledNav>
        <StyledLogo>PROVIT</StyledLogo>
        {UserInfo.length > 0 ? (
          <StyledNavList onClick={handleLogout}>로그아웃</StyledNavList>
        ) : (
          <StyledNavList onClick={handleLogin}>로그인</StyledNavList>
        )}
        {UserInfo.length === 0 && (
          <StyledNavList onClick={handlMember}>회원가입</StyledNavList>
        )}
      </StyledNav>
      {showConfirmModal && (
        <ConfirmModal
          setShowConfirmModal={setShowConfirmModal}
          setLogoutState={setLogoutState}
        />
      )}
    </StyledHeaderSection>
  );
}
