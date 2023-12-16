import React from "react";
import LoginModal from "../components/organisms/modals/LoginModal";

const LoginModalContainer = (props: any) => {
  const { closeModal } = props;
  return <LoginModal closeModal={closeModal}></LoginModal>;
};

export default LoginModalContainer;
