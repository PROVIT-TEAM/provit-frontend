import React, { useState } from "react";
import SigninModal from "../components/organisms/modals/SigninModal";
import SigninMainModal from "../components/organisms/modals/SigninMainModal";

const SigninModalContainer = (props: any) => {
  const [changeModal, setChangeModal] = useState(false);

  const onChangeModal = () => {
    setChangeModal(true);
  };

  return (
    <>
      {!changeModal && (
        <SigninMainModal changeModal={onChangeModal}></SigninMainModal>
      )}
      {changeModal && <SigninModal changeModal={setChangeModal}></SigninModal>}
    </>
  );
};

export default SigninModalContainer;
