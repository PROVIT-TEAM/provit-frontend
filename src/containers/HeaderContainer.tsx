import React, { useState } from "react";
import Header from "../components/organisms/Header";
import LoginModalContainer from "./LoginModalContainer";
import SigninModalContainer from "./SigninModalContainer";

const HeaderContainer = () => {
  const [isOpenLoginModal, setIspenLoginModal] = useState(false);
  const [isOpenSigninModal, setIsOpenSigninModal] = useState(false);

  const openLoginModal = () => {
    setIspenLoginModal(true);
  };

  const closeLoginModal = () => {
    setIspenLoginModal(false);
  };

  const openSigninModal = () => {
    setIsOpenSigninModal(true);
  };

  const closeSigninModal = () => {
    setIsOpenSigninModal(false);
  };

  return (
    <Header>
      <div onClick={openLoginModal}>로그인</div>
      {isOpenLoginModal && <LoginModalContainer closeModal={closeLoginModal} />}
      <div onClick={openSigninModal}>회원가입</div>
      {isOpenSigninModal && (
        <SigninModalContainer closeModal={closeSigninModal} />
      )}
    </Header>
  );
};

export default HeaderContainer;
