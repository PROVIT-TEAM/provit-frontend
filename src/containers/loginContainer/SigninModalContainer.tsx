/**
 * component 설명 : 회원가입 컨테이너
 * 작업자 : 김연정
 * 수정일 : 2024/1/10
 */
import React, { Dispatch, useState } from "react";
import { SignInModal } from "../../components";

interface props {
  setIsOpenSignInpModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const SigninModalContainer = ({
  setIsOpenSignInpModal,
  setIsOpenLoginModal,
}: props) => {
  const [isOpenEmailLoginModal, setIsOpenEmailLoginModal] =
    useState<boolean>(false);

  const closeModal = () => {
    if (setIsOpenSignInpModal) setIsOpenSignInpModal(false);
  };

  const closeEmailJoinModal = () => {
    setIsOpenEmailLoginModal(false);
  };

  const goToLogin = () => {
    if (setIsOpenSignInpModal) setIsOpenSignInpModal(false);
    if (setIsOpenLoginModal) setIsOpenLoginModal(true);
  };

  const gotoEmail = () => {
    setIsOpenEmailLoginModal(true);
  };

  return (
    <>
      <SignInModal
        closeModal={closeModal}
        goToLogin={goToLogin}
        gotoEmail={gotoEmail}
        setIsOpenEmailLoginModal={setIsOpenEmailLoginModal}
        isOpenEmailLoginModal={isOpenEmailLoginModal}
        closeEmailJoinModal={closeEmailJoinModal}
      ></SignInModal>
    </>
  );
};

export default SigninModalContainer;
