import React, { useState } from "react";
import JoinModal from "../modals/JoinModal";
import LoginModal from "../modals/LoginModal";

import { authAtom } from "../../recoil/auth";
import { useRecoilState } from "recoil";

const Header = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const [isOpenLoginModal, setIspenLoginModal] = useState(false);
  const [isOpenJoinModal, setIsOpenJoinModal] = useState(false);

  const logout = () => {
    sessionStorage.removeItem("jwt");
    setAuth(false);
  };

  const openLoginModal = () => {
    setIspenLoginModal(true);
  };

  const closeLoginModal = () => {
    setIspenLoginModal(false);
  };

  const openJoinModal = () => {
    setIsOpenJoinModal(true);
  };

  const closeJoinModal = () => {
    setIsOpenJoinModal(false);
  };

  return (
    <div>
      <h1>Header</h1>
      {auth && (
        <div>
          <button onClick={logout}>로그아웃</button>
        </div>
      )}
      {!auth && (
        <div>
          <button onClick={openLoginModal}>로그인</button>
          {isOpenLoginModal && <LoginModal closeModal={closeLoginModal} />}
          <button onClick={openJoinModal}>회원가입</button>
          {isOpenJoinModal && <JoinModal closeModal={closeJoinModal} />}
        </div>
      )}
    </div>
  );
};

export default Header;
