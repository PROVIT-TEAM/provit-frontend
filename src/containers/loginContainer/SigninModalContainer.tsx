/**
 * component 설명 : 로그인 모달 컨테이너
 * 작업자 : 김연정
 * 수정일 : 2023/1/9
 */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useRecoilState } from "recoil";
import loginService from "../../api/services/loginService";
import { SignInModal } from "../../components";
import { UserInfoAtom } from "../../recoil/UserInfoAtom";

const SignInModalContainer = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [loginBtnState, setLoginBtnState] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);
  const { addToast } = useToasts();
  const navigate = useNavigate();

  useEffect(() => {
    if (emailValue !== "" && passwordValue !== "") {
      setLoginBtnState(true);
    } else {
      setLoginBtnState(false);
    }
  }, [emailValue, passwordValue]);

  /**
   * 로그인 버튼 클릭 시 실행되는 함수
   */
  const handleSubmit = async () => {
    try {
      const response = await loginService({
        email: emailValue,
        password: passwordValue,
      });
      if (response.status === 200) {
        const data = {
          email: emailValue,
          name: "",
        };
        setUserInfo([data]);
        addToast("로그인되었습니다.", { appearance: "success" });
        navigate("/");
      }
    } catch (error) {
      addToast("이메일 또는 비밀번호가 틀렸습니다.", {
        appearance: "warning",
      });
    }
  };

  const onCloseModal = () => {
    navigate("/");
  };

  const handleEmail = (event: any) => {
    setEmailValue(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPasswordValue(event.target.value);
  };

  return (
    <>
      <SignInModal
        onClose={onCloseModal}
        handleSubmit={handleSubmit}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        emailValue={emailValue}
        passwordValue={passwordValue}
        loginBtnState={loginBtnState}
      ></SignInModal>
    </>
  );
};

export default SignInModalContainer;
