import React, { useState } from "react";
import ModalOverlay from "./ModalOverlay";
import Flex from "../../layouts/Flex";
import Box from "../../layouts/Box";
import SigninForm from "../SigninForm";
import Text from "../../atoms/Text";

const SigninModal = ({ closeModal, isValid }: any) => {
  return (
    <ModalOverlay closeModal={closeModal}>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Box marginTop="24px" marginBottom="48px">
          <Text variant="small">회원가입</Text>
        </Box>
        <SigninForm isValid={isValid}></SigninForm>
      </Flex>
    </ModalOverlay>
  );
};

export default SigninModal;
