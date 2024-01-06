import { SetStateAction, useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { UserInfoAtom } from "../../recoil/UserInfoAtom";
import { ActiveButton } from "../commonButton/ActiveButton";
import { InActiveButton } from "../commonButton/InActiveButton";
import { CommonInputBox } from "../commonInput/CommonInputBox";
import { useToasts } from "react-toast-notifications";
import { Dispatch } from "react";
import styled from "styled-components";

const StyledLoginDiv = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 20px;
`;

interface props {
  setIsOpenLoginModal: Dispatch<SetStateAction<boolean>>;
}

export function LoginForm({ setIsOpenLoginModal }: props) {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [checkEmail, setCheckEmail] = useState<string>("이메일");
  const [checkPassword, setCheckPassword] = useState<string>("비밀번호");
  const [checkEmailColor, setCheckEmailColor] = useState<string>("#8e8e93");
  const [checkPasswordColor, setCheckPasswordColor] =
    useState<string>("#8e8e93");
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
    }
    if (passwordValue !== "") {
      setCheckPassword("비밀번호");
      setCheckPasswordColor("#8e8e93");
    } else {
      setLoginBtnState(false);
    }
  }, [emailValue, passwordValue]);

  const handleEmail = (event: any) => {
    setEmailValue(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPasswordValue(event.target.value);
    // 영문, 숫자 조합 8자 이상인지 체크
    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d).{7,}$/.test(passwordValue);
    setIsValidPassword(isValidPassword);
  };

  /**
   * 모든 항목 잘 입력했는지 체크 함수
   */
  const isValidInput = () => {
    if (emailValue === "") {
      setCheckEmail("이메일을 입력해주세요");
      setCheckEmailColor("#FF2828");
    } else if (passwordValue === "") {
      setCheckPassword("비밀번호를 입력해주세요");
      setCheckPasswordColor("#FF2828");
      setLoginBtnState(false);
    } else if (isValidPassword === false) {
      setCheckPassword("영문, 슛저 조합 8자 이상 입력해주세요.");
      setCheckPasswordColor("#FF2828");
      setPasswordValue("");
      setLoginBtnState(false);
    } else {
      setCheckEmail("이메일");
      setCheckEmailColor("#8e8e93");
      setCheckPassword("비밀번호");
      setCheckPasswordColor("#8e8e93");
      return true;
    }
  };

  /**
   * 로그인 버튼 클릭 시 실행되는 함수
   */
  const clickLoginButton = () => {
    if (isValidInput()) {
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
        setIsOpenLoginModal(false);
        addToast("로그인되었습니다.", { appearance: "success" });
      } else {
        addToast("이메일 또는 비밀번호가 틀렸습니다.", {
          appearance: "warning",
        });
      }
    }
  };

  return (
    <>
      <StyledLoginDiv>
        <CommonInputBox
          text={checkEmail}
          color={checkEmailColor}
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={handleEmail}
        />
        <CommonInputBox
          text={checkPassword}
          color={checkPasswordColor}
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={handlePassword}
          value={passwordValue}
        />
        {loginBtnState ? (
          <ActiveButton
            text="로그인"
            onClick={clickLoginButton}
            $bgColor="#446FF6"
            color="#fff"
            $hoverColor="#4168e5"
          />
        ) : (
          <InActiveButton text="로그인" $bgColor="#636366" color="#8E8E93" />
        )}
      </StyledLoginDiv>
    </>
  );
}
