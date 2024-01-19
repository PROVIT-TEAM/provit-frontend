/**
 * component 설명 : 회원가입 모달에서 이메일로 가입하기 버튼 클릭 시 열리는 모달
 * 작업자 : 김연정
 * 수정일 : 2023/12/15
 */

import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "../Modal";
import successCheckImg from "../../../assets/img/button/success_check.png";
import { useEffect } from "react";
import { CommonInputBox } from "../../commonInput/CommonInputBox";
import { ActiveButton } from "../../commonButton/ActiveButton";
import { InActiveButton } from "../../commonButton/InActiveButton";
import signupService from "../../../api/services/signupService";

const StyledTitle = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-left: 5%;
  margin-top: 5px;
  margin-bottom: 40px;
  color: #fff;
  @media (max-width: 1600px) {
    margin-top: 10px;
    margin-bottom: 40px;
  }
`;

const StyledLoginContainer = styled.p`
  width: 100%;
  height: auto;
`;

const StyledLoginDiv = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 20px;
`;
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
const StyledSelect = styled.select`
  width: 31%;
  height: 45px;
  margin: 0 auto;
  display: inline-block;
  border-radius: 8px;
  border: none;
  background-color: #3a3a3c;
  color: #8e8e93;
  margin-bottom: 20px;
  padding-left: 4%;
  /* margin-right: 3%; */
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
}
export function EmailLoginModal({ setIsOpenEmailLoginModal }: props) {
  const currentYear = new Date().getFullYear();
  const [yearOption, setYearOption] = useState<number[]>([]);
  const [monthOption, setMonthOption] = useState<number[]>([]);
  const [dayOption, setDayOption] = useState<number[]>([]);
  const [certificationText, setCertificationText] =
    useState<string>("인증받기");
  const [isSuccessCheck, setIsSuccessCheck] = useState<boolean>(false);
  const [checkEmail, setCheckEmail] = useState<string>("이메일");
  const [checkPassword, setCheckPassword] = useState<string>("비밀번호");
  const [checkName, setCheckName] = useState<string>("이름");
  const [checkBirth, setCheckBirth] = useState<string>("생년월일");
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [checkEmailColor, setCheckEmailColor] = useState<string>("#8e8e93");
  const [checkPasswordColor, setCheckPasswordColor] =
    useState<string>("#8e8e93");
  const [checkNameColor, setCheckNameColor] = useState<string>("#8e8e93");
  const [checkBirthColor, setCheckBirthColor] = useState<string>("#8e8e93");
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [selectYearValue, setSelectYearValue] = useState<string>("년");
  const [selectMonthValue, setSelectMonthValue] = useState<string>("월");
  const [selectDayValue, setSelectDayValue] = useState<string>("일");
  const [signBtnState, setSignBtnState] = useState<boolean>(false);

  useEffect(() => {
    if (
      emailValue !== "" &&
      passwordValue !== "" &&
      nameValue !== "" &&
      selectYearValue !== "년" &&
      selectMonthValue !== "월" &&
      selectDayValue !== "일"
    ) {
      setSignBtnState(true);
    } else {
      setSignBtnState(false);
    }
  }, [
    emailValue,
    passwordValue,
    nameValue,
    selectYearValue,
    selectMonthValue,
    selectDayValue,
  ]);

  useEffect(() => {
    getYear();
    getMonth();
    getDate();
  }, []);

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
    if (emailValue === "") {
      setCheckEmail("이메일을 입력해주세요");
      setCheckEmailColor("#FF2828");
    } else if (certificationText === "인증받기") {
      setCheckEmail("이메일 인증을 완료해주세요");
      setCheckEmailColor("#FF2828");
    } else {
      setCheckEmail("이메일");
      setCheckEmailColor("#8e8e93");
    }
    if (passwordValue === "") {
      setCheckPassword("비밀번호를 입력해주세요");
      setCheckPasswordColor("#FF2828");
    } else if (isValidPassword === false) {
      setCheckPassword("영문, 슛저 조합 8자 이상 입력해주세요.");
      setCheckPasswordColor("#FF2828");
    } else {
      setCheckPassword("비밀번호");
      setCheckPasswordColor("#8e8e93");
    }
    if (nameValue === "") {
      setCheckName("이름을 입력해주세요");
      setCheckNameColor("#FF2828");
    } else {
      setCheckName("이름");
      setCheckNameColor("#8e8e93");
    }
    if (
      selectYearValue === "년" ||
      selectMonthValue === "월" ||
      selectDayValue === "일"
    ) {
      setCheckBirth("생년월일을 선택해주세요");
      setCheckBirthColor("#FF2828");
    } else {
      setCheckBirth("생년월일");
      setCheckBirthColor("#8e8e93");
    }
  };

  /**
   * 가입하기 버튼 클릭 시 실행되는 함수
   */
  const handleJoinButton = async () => {
    isValidInput();
    try {
      const response = await signupService({
        username: emailValue,
        password: passwordValue,
        name: nameValue,
      });

      if (response.status === 200) {
        setIsOpenEmailLoginModal(false);
      }
    } catch (error) {}
  };

  const handleEmail = (event: any) => {
    setEmailValue(event.target.value);
    // console.log(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPasswordValue(event.target.value);
    // console.log(event.target.value);

    // 영문, 숫자 조합 8자 이상인지 체크
    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(passwordValue);
    setIsValidPassword(isValidPassword);
  };

  const handleName = (event: any) => {
    setNameValue(event.target.value);
    // console.log(event.target.value);
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

  const closeModal = () => {
    setIsOpenEmailLoginModal(false);
  };

  return (
    <>
      <Modal
        width="18.75%"
        $minWidth="22.5%"
        height="640px"
        $minHeight="620px"
        $top="13%"
        $left="39%"
        $minLeft="36%"
        onClose={closeModal}
      >
        <StyledTitle>회원가입</StyledTitle>
        <StyledLoginContainer>
          <StyledLoginDiv>
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
              text={checkName}
              color={checkNameColor}
              type="text"
              placeholder="홍길동"
              onChange={handleName}
              value={nameValue}
            />
            <StyledInputTitle color={checkBirthColor}>
              {checkBirth}
            </StyledInputTitle>
            <StyledSelectBoxDiv>
              <StyledSelect onChange={handleYear} value={selectYearValue}>
                <option value="년">년</option>
                {yearOption.map((item: number) => (
                  <option key={item} value={item.toString()}>
                    {item}
                  </option>
                ))}
              </StyledSelect>
              <StyledSelect onChange={handleMonth}>
                <option value="월">월</option>
                {monthOption.map((item: number) => (
                  <option key={item} value={item.toString()}>
                    {item}
                  </option>
                ))}
              </StyledSelect>
              <StyledSelect onChange={handleDay}>
                <option value="일">일</option>
                {dayOption.map((item: number) => (
                  <option key={item} value={item.toString()}>
                    {item}
                  </option>
                ))}
              </StyledSelect>
            </StyledSelectBoxDiv>
            <StyledRadiobox type="radio" />
            <StyledCheckText>
              프루빗의 <span>서비스 이용 약관</span>과
              <span>개인정보 보호 정책</span>을 읽었으며 동의합니다.
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
          </StyledLoginDiv>
        </StyledLoginContainer>
      </Modal>
    </>
  );
}
