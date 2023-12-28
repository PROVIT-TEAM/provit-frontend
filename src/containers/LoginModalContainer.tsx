import React, { useState } from "react";
import LoginModal from "../components/organisms/modals/LoginModal";
import { useSetRecoilState } from "recoil";
import { authAtom, userAtom } from "../recoil/auth";
import login from "../api/services/login";

const LoginModalContainer = (props: any) => {
  const setAuth = useSetRecoilState(authAtom);
  const setUser = useSetRecoilState(userAtom);
  const [user, setUsers] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    setUsers({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: any) => {
    try {
      const { email } = await login(user);
      setUser({ email: email });
      setAuth({ auth: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoginModal
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      ></LoginModal>
    </>
  );
};

export default LoginModalContainer;
