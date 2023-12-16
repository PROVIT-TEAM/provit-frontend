import React, { useState } from "react";
import SigninModal from "../components/organisms/modals/SigninModal";
import SigninMainModal from "../components/organisms/modals/SigninMainModal";

const SigninModalContainer = (props: any) => {
  const [changeModal, setChangeModal] = useState(false);

  const { closeModal } = props;
  const onChangeModal = () => {
    setChangeModal(true);
  };
  return (
    <>
      {!changeModal && (
        <SigninMainModal
          closeModal={closeModal}
          changeModal={onChangeModal}
        ></SigninMainModal>
      )}
      {changeModal && <SigninModal closeModal={closeModal}></SigninModal>}
    </>
  );
};

export default SigninModalContainer;
