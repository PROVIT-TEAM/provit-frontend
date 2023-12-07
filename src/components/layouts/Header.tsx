import React, { useState } from "react";
import ModalOverlay from "../modals/ModalOverlay";

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
      <button onClick={openModal}>로그인</button>
      {isOpenModal && <ModalOverlay closeModal={closeModal} />}
    </div>
  );
};

export default Header;
