import React, { useEffect, useState } from "react";
import ModalOverlay from "./ModalOverlay";
import axios from "../../../api/axios";
import apis from "../../../api/apis";
import { authAtom } from "../../../recoil/auth";
import { useRecoilState } from "recoil";
import LoginForm from "../LoginForm";
import Text from "../../atoms/Text";
import Flex from "../../layouts/Flex";
import Box from "../../layouts/Box";
import Signin from "../Signin";

const SigninMainModal = ({ closeModal, changeModal }: any) => {
  return (
    <ModalOverlay closeModal={closeModal}>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Box marginTop="64px" marginBottom="64px">
          <Text variant="large">PROVIT</Text>
        </Box>

        <Signin changeModal={changeModal}></Signin>
      </Flex>
    </ModalOverlay>
  );
};

export default SigninMainModal;
