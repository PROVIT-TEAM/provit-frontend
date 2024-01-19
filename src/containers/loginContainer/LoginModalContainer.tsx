/**
 * component 설명 : 로그인 모달 컨테이너
 * 작업자 : 김연정
 * 수정일 : 2023/1/9
 */

import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useRecoilState } from "recoil";
import { LoginModal } from "../../components";
import { UserInfoAtom } from "../../recoil/UserInfoAtom";
import FindPwModalContainer from "./FindPwModalContainer";
import SigninModalContainer from "./SigninModalContainer";

interface props {
  setIsOpenLoginModal?: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginModalContainer = ({ setIsOpenLoginModal }: props) => {
  const [isOpenSignInModal, setIsOpenSignInModal] = useState<boolean>(false);
  const [isOpenFindPasswordModal, setIsOpenFindPasswordModal] =
    useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [loginBtnState, setLoginBtnState] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);
  const { addToast } = useToasts();

  const mockUserData = [
    { email: "user1", password: "asdf1234", name: "홍길동1" },
    { email: "user2", password: "asdf1234", name: "홍길동2" },
  ];

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
  const handleSubmit = () => {
    const user = mockUserData.find(
      (user) => user.email === emailValue && user.password === passwordValue
    );
    if (user) {
      const data = {
        email: user.email,
        password: user.password,
        name: user.name,
      };
      setUserInfo([data]);
      if (setIsOpenLoginModal) setIsOpenLoginModal(false);
      addToast("로그인되었습니다.", { appearance: "success" });
    } else {
      addToast("이메일 또는 비밀번호가 틀렸습니다.", {
        appearance: "warning",
      });
    }
  };

  const onCloseModal = () => {
    if (setIsOpenLoginModal) setIsOpenLoginModal(false);
  };

  const onSignInModal = () => {
    setIsOpenSignInModal(true);
  };

  const onFindPwdModal = () => {
    setIsOpenFindPasswordModal(true);
  };

  const handleEmail = (event: any) => {
    setEmailValue(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPasswordValue(event.target.value);
  };

  return (
    <>
      <LoginModal
        onClose={onCloseModal}
        onSignInModal={onSignInModal}
        onFindPwdModal={onFindPwdModal}
        handleSubmit={handleSubmit}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        emailValue={emailValue}
        passwordValue={passwordValue}
        loginBtnState={loginBtnState}
      ></LoginModal>
      {isOpenSignInModal && (
        <SigninModalContainer
          setIsOpenSignInpModal={setIsOpenSignInModal}
          setIsOpenLoginModal={setIsOpenLoginModal}
        />
      )}
      {isOpenFindPasswordModal && (
        <FindPwModalContainer
          setIsOpenFindPasswordModal={setIsOpenFindPasswordModal}
        />
      )}
    </>
  );
};

export default LoginModalContainer;
