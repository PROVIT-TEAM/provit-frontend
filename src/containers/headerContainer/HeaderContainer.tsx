/**
 * component 설명 : 헤더 컨테이너
 * 작업자 : 김연정
 * 수정일 : 2024/1/9
 */

import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ConfirmModal } from "../../components";
import { UserInfoAtom } from "../../recoil/UserInfoAtom";
import { useToasts } from "react-toast-notifications";
import { HeaderView } from "../../components/header";
import LoginModalContainer from "../loginContainer/LoginModalContainer";
import SigninModalContainer from "../loginContainer/SigninModalContainer";

const HeaderContainer = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState<boolean>(false);
  const [isOpenSignInModal, setIsOpenSignInModal] = useState<boolean>(false);
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

  const handleSignIn = () => {
    setIsOpenSignInModal(true);
  };

  return (
    <>
      <HeaderView
        onLogin={handleLogin}
        onLogout={handleLogout}
        onSignIn={handleSignIn}
        isLoggedIn={UserInfo.length > 0}
      ></HeaderView>
      {isOpenLoginModal && (
        <LoginModalContainer setIsOpenLoginModal={setIsOpenLoginModal} />
      )}
      {isOpenSignInModal && (
        <SigninModalContainer
          setIsOpenSignInpModal={setIsOpenSignInModal}
          setIsOpenLoginModal={setIsOpenLoginModal}
        />
      )}
      {showConfirmModal && (
        <ConfirmModal
          setShowConfirmModal={setShowConfirmModal}
          setLogoutState={setLogoutState}
        />
      )}
    </>
  );
};

export default HeaderContainer;
