/**
 * component 설명 : 이메일 회원가입 폼
 * 작업자 : 김연정
 * 수정일 : 2024/1/14
 */

import { SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { useToasts } from "react-toast-notifications";
import { useEffect } from "react";
import successCheckImg from "../../../assets/img/button/success_check.png";
import { BirthSelect } from "./BirthSelect";
import { UserInfoAtom } from "../../../recoil/UserInfoAtom";
import colors from "../../../themes/colors";
import Label from "../../atoms/Label";
import { Input } from "../../atoms/Input";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import Box from "../../layouts/Box";
import { AgreeCheckBox } from "./AgreeCheckBox";
import {
  emailService,
  signupService,
  usernameVerifyService,
} from "../../../api/services/signupService";
import { useNavigate } from "react-router-dom";

const StyledSuccessCheck = styled.img`
  margin-left: -30px;
`;

interface userFormData {
  email: string;
  username: string;
  password: string;
  re_password: string;
  name: string;
}

enum EmailStatus {
  Send = "인증받기",
  Sent = "발송완료",
  Resend = "재발송",
  Fin = "인증완료",
}

enum ValidStatus {
  None,
  Valid,
  Fin,
}

interface msgData {
  text: string;
  color: string;
}

interface msgFormData {
  email: msgData;
  username: msgData;
  password: msgData;
  re_password: msgData;
}
export function SignUpEmailForm() {
  const [userFormData, setUserFormData] = useState<userFormData>({
    email: "",
    username: "",
    password: "",
    re_password: "",
    name: "",
  });

  const [msgFormData, setMsgFormData] = useState<msgFormData>({
    email: {
      text: "이메일",
      color: colors.label,
    },
    username: {
      text: "아이디",
      color: colors.label,
    },
    password: {
      text: "비밀번호",
      color: colors.label,
    },
    re_password: {
      text: "비밀번호 확인",
      color: colors.label,
    },
  });

  const [isValid, setIsValid] = useState<ValidStatus>(ValidStatus.None);

  const [emailCertify, setEmailCertify] = useState<EmailStatus>(
    EmailStatus.Send
  );

  const [usernameCertify, setUsernameCertify] = useState<ValidStatus>(
    ValidStatus.None
  );

  const [isSuccessCheck, setIsSuccessCheck] = useState<boolean>(false);

  const [selectRadioValue, setSelectRadioValue] = useState<string[]>([]);
  const [signBtnState, setSignBtnState] = useState<boolean>(false);
  const { addToast } = useToasts();
  const [birth, setBirth] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (
      userFormData.email.length > 1 &&
      userFormData.username.length > 1 &&
      userFormData.password.length > 1 &&
      userFormData.re_password.length > 1 &&
      selectRadioValue.length === 3
    ) {
      setSignBtnState(true);
    } else {
      setSignBtnState(false);
    }
  }, [userFormData, selectRadioValue]);

  useEffect(() => {
    if (isValid === ValidStatus.Valid) {
      handleValid();
    }
  }, [isValid, userFormData]);

  /**
   * 인증 버튼 텍스트 변경 & 인증 성공 체크 이미지 상태 변경 함수
   */
  const handleEmailCertification = async () => {
    let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    if (emailCertify === EmailStatus.Send) {
      if (!emailRegex.test(userFormData.email)) {
        setMsgFormData({
          ...msgFormData,
          email: {
            text: "이메일 - 올바른 이메일을 입력해주세요.",
            color: colors.error,
          },
        });
      } else {
        try {
          const response = await emailService({
            email: userFormData.email,
          });
          if (response.status === 200) {
            setEmailCertify(EmailStatus.Fin);
            setIsSuccessCheck(true);
          }
        } catch (error) {
          setEmailCertify(EmailStatus.Resend);
        }
      }
    }
  };

  const handleUsernameCertification = async () => {
    if (usernameCertify !== ValidStatus.Fin) {
      try {
        const response = await usernameVerifyService({
          username: userFormData.username,
        });
        if (response.status === 200) {
          setUsernameCertify(ValidStatus.Fin);
        }
      } catch (error) {}
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleValid = () => {
    let valid = true;
    const newMsg = {
      email: {
        text: "이메일",
        color: colors.label,
      },
      username: {
        text: "아이디",
        color: colors.label,
      },
      password: {
        text: "비밀번호",
        color: colors.label,
      },
      re_password: {
        text: "비밀번호 확인",
        color: colors.label,
      },
    };

    handleUsernameCertification();

    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d).{7,}$/.test(
      userFormData.password
    );

    if (emailCertify !== EmailStatus.Fin) {
      valid = false;
      newMsg.email.text = "이메일 - 이메일 인증을 완료해주세요.";
      newMsg.email.color = colors.error;
    }
    if (usernameCertify !== ValidStatus.Fin) {
      valid = false;
      newMsg.username.text = "아이디 - 이미 사용중인 아이디 입니다.";
      newMsg.username.color = colors.error;
    }
    if (!isValidPassword) {
      valid = false;
      newMsg.password.text =
        "비밀번호 - 영문, 숫자 조합 8자 이상 입력해주세요.";
      newMsg.password.color = colors.error;
    }
    if (userFormData.password !== userFormData.re_password) {
      valid = false;
      newMsg.re_password.text =
        "비밀번호 확인 - 비밀번호와 비밀번호 확인이 일치하지 않습니다.";
      newMsg.re_password.color = colors.error;
    }

    if (valid) {
      setIsValid(ValidStatus.Fin);
    } else {
      setIsValid(ValidStatus.Valid);
      setMsgFormData({ ...msgFormData, ...newMsg });
    }
  };

  const handleSignUp = async () => {
    handleValid();

    if (isValid === ValidStatus.Fin) {
      try {
        const response = await signupService({
          email: userFormData.email,
          username: userFormData.username,
          password: userFormData.password,
          name: userFormData.name,
        });
        if (response.status === 200) {
          addToast("회원가입되었습니다.", { appearance: "success" });
          navigate("/");
        }
      } catch (error) {}
    }
  };

  return (
    <>
      <Label color={msgFormData.email.color}>{msgFormData.email.text}</Label>
      <br></br>

      <Input
        type="text"
        placeholder="이메일을 입력해주세요."
        $width={isSuccessCheck ? "95%" : "65.5%"}
        name="email"
        onChange={handleChange}
        value={userFormData.email}
      />
      {isSuccessCheck ? (
        <StyledSuccessCheck src={successCheckImg} />
      ) : (
        <Button
          variant="$active"
          width="24%"
          height="47px"
          $marginLeft="5%"
          onClick={handleEmailCertification}
        >
          {emailCertify}
        </Button>
      )}

      <Label color={msgFormData.username.color}>
        {msgFormData.username.text}
      </Label>
      <Input
        type="text"
        placeholder="아이디를 입력해주세요."
        name="username"
        onChange={handleChange}
        value={userFormData.username}
      />

      <Label color={msgFormData.password.color}>
        {msgFormData.password.text}
      </Label>
      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요."
        name="password"
        onChange={handleChange}
        value={userFormData.password}
      />
      <Label color={msgFormData.re_password.color}>
        {msgFormData.re_password.text}
      </Label>
      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요."
        name="re_password"
        onChange={handleChange}
        value={userFormData.re_password}
      />
      <Label>이름</Label>
      <Input
        text="이름"
        type="text"
        placeholder="홍길동"
        name="name"
        onChange={handleChange}
        value={userFormData.name}
      />
      <Text variant="small" color={colors.gray02}>
        생년월일
      </Text>
      <Box $marginTop="5px">
        <BirthSelect setBirth={setBirth} />
      </Box>
      <AgreeCheckBox setSelectRadioValue={setSelectRadioValue} />
      {signBtnState ? (
        <Button
          variant="$active"
          onClick={handleSignUp}
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
