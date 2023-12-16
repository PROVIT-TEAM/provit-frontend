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

const LoginModal = ({ closeModal }: any) => {
  const [auth, setAuth] = useRecoilState(authAtom);

  useEffect(() => {
    if (auth) closeModal();
  }, [auth]);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: any) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const login = async () => {
    try {
      const response = await axios.get(apis.login);
      const jwtToken = response.data["token"];
      if (jwtToken !== null) {
        sessionStorage.setItem("jwt", jwtToken);
        setAuth(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ModalOverlay closeModal={closeModal}>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Box marginTop="64px" marginBottom="64px">
          <Text variant="large">PROVIT</Text>
        </Box>

        <LoginForm></LoginForm>
      </Flex>
    </ModalOverlay>
  );
};

export default LoginModal;
