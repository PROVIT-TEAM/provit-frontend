import React from "react";
import { useNavigate } from "react-router-dom";
import { SignUpEmailModal } from "../../components/modal";

const SignUpEmailModalContainer = () => {
  const navigate = useNavigate();

  const signUpEmailClose = () => {
    navigate("/");
  };

  return (
    <>
      <SignUpEmailModal signUpEmailClose={signUpEmailClose}></SignUpEmailModal>
    </>
  );
};
export default SignUpEmailModalContainer;
