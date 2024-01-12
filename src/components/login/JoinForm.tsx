/**
 * component 설명 : 이메일 회원가입 폼
 * 작업자 : 김연정
 * 수정일 : 2024/1/12
 */

import { SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { useToasts } from "react-toast-notifications";
import { useEffect } from "react";
import { UserInfoAtom } from "../../recoil/UserInfoAtom";
import successCheckImg from "../../assets/img/button/success_check.png";
import { Dispatch } from "react";
import { Input } from "../atoms/Input";
import Label from "../atoms/Label";
import colors from "../../themes/colors";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Box from "../layouts/Box";
import { BirthSelect } from "../../hooks/BirthSelect";

const StyledSuccessCheck = styled.img`
  margin-left: -30px;
  margin-right: 4%;
`;

const StyledRadiobox = styled.input`
  margin-right: 3%;
  margin-top: 13px;
  /* height: 40px; */
`;

const StyledCheckText = styled.span`
  color: #fff;
  line-height: 150%;
  font-weight: lighter;
  span {
    color: #446ff6;
  }
`;

interface props {
  setIsOpenEmailLoginModal: Dispatch<SetStateAction<boolean>>;
  setIsOpenMembershipModal?: Dispatch<SetStateAction<boolean>>;
}
export function JoinForm({
  setIsOpenEmailLoginModal,
  setIsOpenMembershipModal,
}: props) {
  const [certificationText, setCertificationText] =
    useState<string>("인증받기");
  const [isSuccessCheck, setIsSuccessCheck] = useState<boolean>(false);
  const [checkEmail, setCheckEmail] = useState<string>("이메일");
  const [checkPassword, setCheckPassword] = useState<string>("비밀번호");
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [checkEmailColor, setCheckEmailColor] = useState<string>("#8e8e93");
  const [checkPasswordColor, setCheckPasswordColor] =
    useState<string>("#8e8e93");
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [selectRadioValue, setSelectRadioValue] = useState<string[]>([]);
  const [signBtnState, setSignBtnState] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);
  const [isValid, setIsValid] = useState<boolean>(false);
  const { addToast } = useToasts();
  const [birth, setBirth] = useState<string>("");

  useEffect(() => {
    if (
      emailValue !== "" &&
      passwordValue !== "" &&
      nameValue !== "" &&
      birth !== "" &&
      selectRadioValue.length === 3
    ) {
      isValidInput();
    }
  }, [
    emailValue,
    passwordValue,
    nameValue,
    birth,
    certificationText,
    isValidPassword,
    selectRadioValue,
  ]);

  useEffect(() => {
    if (isValid && selectRadioValue.length === 3) {
      setSignBtnState(true);
    } else {
      setSignBtnState(false);
    }
  }, [isValid, selectRadioValue]);

  useEffect(() => {
    if (isSuccessCheck) {
      setCheckEmail("이메일");
      setCheckEmailColor("#8e8e93");
    }
  }, [isSuccessCheck]);

  /**
   * 인증 버튼 텍스트 변경 & 인증 성공 체크 이미지 상태 변경 함수
   */
  const handleCertification = () => {
    setCertificationText("재발송");
    if (certificationText === "인증받기") {
      if (emailValue === "") {
        setCheckEmail("이메일을 입력해주세요");
        setCheckEmailColor("#FF2828");
        setCertificationText("인증받기");
      } else {
        setIsSuccessCheck(true);
      }
    }
  };

  /**
   * 모든 항목 잘 입력했는지 체크 함수
   */
  const isValidInput = () => {
    let isValid = true;

    if (certificationText === "인증받기") {
      setCheckEmail("이메일 인증을 완료해주세요");
      setCheckEmailColor("#FF2828");
      isValid = false;
    } else {
      setCheckEmail("이메일");
      setCheckEmailColor("#8e8e93");
    }

    if (isValidPassword === false) {
      setCheckPassword("영문, 슛저 조합 8자 이상 입력해주세요.");
      setCheckPasswordColor("#FF2828");
      isValid = false;
    } else {
      setCheckPassword("비밀번호");
      setCheckPasswordColor("#8e8e93");
    }

    setIsValid(isValid);
  };

  /**
   * 가입하기 버튼 클릭 시 실행되는 함수
   */
  const handleJoinButton = () => {
    if (isValid) {
      const data = {
        email: emailValue,
        password: passwordValue,
        name: nameValue,
      };
      setUserInfo([data]);
      setIsOpenEmailLoginModal(false);
      if (setIsOpenMembershipModal) setIsOpenMembershipModal(false);
      addToast("회원가입되었습니다.", { appearance: "success" });
    }
  };

  const handleEmail = (event: any) => {
    setEmailValue(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPasswordValue(event.target.value);
    // 영문, 숫자 조합 8자 이상인지 체크
    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d).{7,}$/.test(passwordValue);
    setIsValidPassword(isValidPassword);
  };

  const handleName = (event: any) => {
    setNameValue(event.target.value);
  };

  const handleRadioChange = (value: string) => {
    setSelectRadioValue((prevValues) =>
      prevValues.includes(value)
        ? prevValues.filter((val) => val !== value)
        : [...prevValues, value]
    );
  };

  return (
    <>
      <Label color={checkEmailColor}>{checkEmail}</Label>
      <br></br>
      <Input
        type="text"
        placeholder="이메일을 입력해주세요."
        onChange={handleEmail}
        $width="65.5%"
        value={emailValue}
      />
      {isSuccessCheck && <StyledSuccessCheck src={successCheckImg} />}
      <Button
        variant="active"
        width="24%"
        height="47px"
        $marginLeft="5%"
        onClick={handleCertification}
      >
        {certificationText}
      </Button>
      <Label color={checkPasswordColor}>{checkPassword}</Label>
      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요."
        onChange={handlePassword}
        value={passwordValue}
      />
      <Label>이름</Label>
      <Input
        text="이름"
        type="text"
        placeholder="홍길동"
        onChange={handleName}
        value={nameValue}
      />
      <Text variant="small" color={colors.gray02}>
        생년월일
      </Text>
      <Box $marginTop="5px">
        <BirthSelect setBirth={setBirth} />
      </Box>
      <StyledRadiobox
        type="checkbox"
        onChange={() => handleRadioChange("1")}
        value="1"
      />
      <StyledCheckText>
        프루빗의 <span>서비스 이용 약관</span>에 동의합니다.
      </StyledCheckText>
      <br></br>
      <StyledRadiobox
        type="checkbox"
        onChange={() => handleRadioChange("2")}
        value="2"
      />
      <StyledCheckText>
        프루빗의 <span>개인정보 보호 정책</span>에 동의합니다.
      </StyledCheckText>
      <br></br>
      <StyledRadiobox
        type="checkbox"
        onChange={() => handleRadioChange("3")}
        value="3"
      />
      <StyledCheckText>
        프루빗의 <span>마케팅 수신 동의</span>에 동의합니다.
      </StyledCheckText>
      {signBtnState ? (
        <Button
          variant="active"
          onClick={handleJoinButton}
          width="100%"
          $marginTop="45px"
        >
          가입하기
        </Button>
      ) : (
        <Button variant="inActive" width="100%" $marginTop="45px">
          가입하기
        </Button>
      )}
    </>
  );
}
