import { SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { CommonInputBox } from "../commonInput/CommonInputBox";
import { useToasts } from "react-toast-notifications";
import { useEffect } from "react";
import { UserInfoAtom } from "../../recoil/UserInfoAtom";
import successCheckImg from "../../assets/img/button/success_check.png";
import { Dispatch } from "react";
import { CommonSelectBox } from "../commonInput/CommonSelectBox";
import { ActiveButton, InActiveButton } from "../commonButton";

const StyledInputTitle = styled.p`
  color: ${(props) => props.color};
  margin-bottom: 5px;
`;

const StyledSuccessCheck = styled.img`
  margin-left: -48px;
  margin-right: 9.5%;
`;

const StyledSelectBoxDiv = styled.div`
  :nth-of-type(2) {
    margin: 0 3.5%;
  }
`;

const StyledRadiobox = styled.input`
  margin-right: 3%;
  margin-top: 13px;
  display: inline-block;
  /* height: 40px; */
`;

const StyledCheckText = styled.span`
  color: #fff;
  line-height: 10px;
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
  const currentYear = new Date().getFullYear();
  const [yearOption, setYearOption] = useState<number[]>([]);
  const [monthOption, setMonthOption] = useState<number[]>([]);
  const [dayOption, setDayOption] = useState<number[]>([]);
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
  const [selectYearValue, setSelectYearValue] = useState<string>("년");
  const [selectMonthValue, setSelectMonthValue] = useState<string>("월");
  const [selectDayValue, setSelectDayValue] = useState<string>("일");
  const [selectRadioValue, setSelectRadioValue] = useState<string>("");
  const [signBtnState, setSignBtnState] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);
  const [isValid, setIsValid] = useState<boolean>(false);
  const { addToast } = useToasts();

  useEffect(() => {
    getYear();
    getMonth();
    getDate();
  }, []);

  useEffect(() => {
    if (
      emailValue !== "" &&
      passwordValue !== "" &&
      nameValue !== "" &&
      selectYearValue !== "년" &&
      selectMonthValue !== "월" &&
      selectDayValue !== "일"
    ) {
      isValidInput();
    }
  }, [
    emailValue,
    passwordValue,
    nameValue,
    selectYearValue,
    selectMonthValue,
    selectDayValue,
    certificationText,
    isValidPassword,
    selectRadioValue,
  ]);

  useEffect(() => {
    if (isValid) {
      setSignBtnState(true);
    }
  }, [isValid]);

  useEffect(() => {
    if (isSuccessCheck) {
      setCheckEmail("이메일");
      setCheckEmailColor("#8e8e93");
    }
  }, [isSuccessCheck]);

  const getYear = () => {
    let year = [];
    for (let i = 1900; i <= currentYear; i++) {
      year.push(i);
    }
    setYearOption(year);
  };

  const getMonth = () => {
    let month = [];
    for (let i = 1; i <= 12; i++) {
      month.push(i);
    }
    setMonthOption(month);
  };

  const getDate = () => {
    let day = [];
    for (let i = 1; i <= 31; i++) {
      day.push(i);
    }
    setDayOption(day);
  };

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
    if (selectRadioValue === "") {
      addToast("서비스 이용 약관에 동의해주세요", { appearance: "warning" });
    } else {
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

  const handleYear = (event: any) => {
    setSelectYearValue(event.target.value);
  };

  const handleMonth = (event: any) => {
    setSelectMonthValue(event.target.value);
  };

  const handleDay = (event: any) => {
    setSelectDayValue(event.target.value);
  };

  const handleRadioChange = (event: any) => {
    setSelectRadioValue(event.target.value);
  };

  return (
    <>
      <CommonInputBox
        text={checkEmail}
        color={checkEmailColor}
        type="text"
        placeholder="이메일을 입력해주세요."
        onChange={handleEmail}
        $width="65.5%"
        value={emailValue}
      />
      {isSuccessCheck && <StyledSuccessCheck src={successCheckImg} />}
      <ActiveButton
        $width="24%"
        $height="47px"
        $bgColor="#446ff6"
        color="#fff"
        $marginLeft="5%"
        text={certificationText}
        onClick={handleCertification}
      />
      <CommonInputBox
        text={checkPassword}
        color={checkPasswordColor}
        type="password"
        placeholder="비밀번호를 입력해주세요."
        onChange={handlePassword}
        value={passwordValue}
      />
      <CommonInputBox
        text="이름"
        color="#8e8e93"
        type="text"
        placeholder="홍길동"
        onChange={handleName}
        value={nameValue}
      />
      <StyledInputTitle color="#8e8e93">생년월일</StyledInputTitle>
      <StyledSelectBoxDiv>
        <CommonSelectBox onChange={handleYear} text="년" data={yearOption} />
        <CommonSelectBox onChange={handleMonth} text="월" data={monthOption} />
        <CommonSelectBox onChange={handleDay} text="일" data={dayOption} />
      </StyledSelectBoxDiv>
      <StyledRadiobox type="radio" onChange={handleRadioChange} value="1" />
      <StyledCheckText>
        프루빗의 <span>서비스 이용 약관</span>과<span>개인정보 보호 정책</span>
        을 읽었으며 동의합니다.
      </StyledCheckText>
      {signBtnState ? (
        <ActiveButton
          text="가입하기"
          onClick={handleJoinButton}
          $bgColor="#446FF6"
          color="#fff"
          $hoverColor="#4168e5"
          $marginTop="45px"
        />
      ) : (
        <InActiveButton
          text="가입하기"
          $bgColor="#636366"
          color="#8E8E93"
          $marginTop="45px"
        />
      )}
    </>
  );
}
