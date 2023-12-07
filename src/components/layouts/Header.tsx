import React, { useState } from "react";
import JoinModal from "../modals/JoinModal";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <h1>Header</h1>
      <button>로그인</button>
      <button onClick={openModal}>회원가입</button>
      {isOpenModal && <JoinModal closeModal={closeModal} />}
    </div>
  );
};

export default Header;
