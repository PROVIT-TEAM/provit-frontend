import React, { useState } from "react";
import JoinModal from "../modals/JoinModal";
import LoginModal from "../modals/LoginModal";
const Header = () => {
  const [isOpenLoginModal, setIspenLoginModal] = useState(false);
  const [isOpenJoinModal, setIsOpenJoinModal] = useState(false);

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
      <button onClick={openLoginModal}>로그인</button>
      {isOpenLoginModal && <LoginModal closeModal={closeLoginModal} />}
      <button onClick={openJoinModal}>회원가입</button>
      {isOpenJoinModal && <JoinModal closeModal={closeJoinModal} />}
    </div>
  );
};

export default Header;
