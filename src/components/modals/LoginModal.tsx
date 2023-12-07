import React, { useState } from "react";
import ModalOverlay from "./ModalOverlay";
import axios from "../../api/axios";
import apis from "../../api/apis";

const LoginModal = ({ closeModal }: any) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleChange = (event: any) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const login = async () => {
    try {
      const response = await axios.get(apis.login);
      const jwtToken = response.data["token"];
      if (jwtToken !== null) {
        sessionStorage.setItem("jwt", jwtToken);
        setAuthenticated(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ModalOverlay closeModal={closeModal}>
      <div>
        <div>
          <input name="username" placeholder="아이디" onChange={handleChange} />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={login}>로그인</button>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default LoginModal;
