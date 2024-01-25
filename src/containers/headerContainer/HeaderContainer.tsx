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
import { useNavigate } from "react-router-dom";

const HeaderContainer = () => {
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [logoutState, setLogoutState] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);
  const UserInfo = useRecoilValue(UserInfoAtom);
  const { addToast } = useToasts();
  const navigate = useNavigate();

  useEffect(() => {
    if (logoutState) {
      setUserInfo([]);
      setShowConfirmModal(false);
      addToast("로그아웃되었습니다.", { appearance: "success" });
      setLogoutState(false);
    }
  }, [logoutState]);

  const handleLogout = () => {
    setShowConfirmModal(true);
  };

  return (
    <>
      <HeaderView
        onLogin={() => {
          navigate("/signin");
        }}
        onLogout={handleLogout}
        onSignIn={() => {
          navigate("/signup");
        }}
        isLoggedIn={UserInfo.length > 0}
      ></HeaderView>
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
