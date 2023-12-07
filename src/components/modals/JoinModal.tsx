import React, { useState } from "react";
import ModalOverlay from "./ModalOverlay";
import ModalInModalOverlay from "./ModalInModalOverlay";

const JoinModal = ({ closeModal }: any) => {
  const [isOpenModalInModal, setIsOpenModalInModal] = useState(false);
  const openModalInModal = () => {
    setIsOpenModalInModal(true);
  };

  const closeModalInModal = () => {
    setIsOpenModalInModal(false);
  };

  return (
    <ModalOverlay closeModal={closeModal}>
      <div>
        <div>
          <input placeholder="아이디" />
        </div>
        <div>
          <input placeholder="비밀번호" />
        </div>
        <div>
          <input placeholder="비밀번호 확인" />
        </div>
        <div>
          <input placeholder="이름" />
        </div>
        <div>
          <input placeholder="이메일" />
        </div>
        <div>
          <input id="terms" type="checkbox" />
          <label htmlFor="terms" onClick={openModalInModal}>
            약관
          </label>
          {isOpenModalInModal && (
            <ModalInModalOverlay
              closeModal={closeModalInModal}
            ></ModalInModalOverlay>
          )}
        </div>
      </div>
    </ModalOverlay>
  );
};

export default JoinModal;
