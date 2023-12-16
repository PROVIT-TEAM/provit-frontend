import { useState, useRef } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Text from "../atoms/Text";
import Box from "../layouts/Box";
import Flex from "../layouts/Flex";
import ValidLavelInput from "../molecules/ValidLavelInput";

export type SigninFormData = {
  username: string;
  password: string;
};

interface SigninFormProps {
  isValid?: boolean;
  onSignin?: (username: string, password: string) => void;
  onSubmit?: any;
}

/**
 * 로그인폼
 */
const SigninForm = ({ onSignin }: SigninFormProps) => {
  // React Hook Form 사용
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const [passwd, setPasswd] = useState("");
  const [passwdValid, setPasswdValid] = useState(true);

  const [isValid, setValid] = useState(true);

  const onSubmit = (event: any) => {
    event.preventDefault();

    let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let passwdRegex = new RegExp("(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$");

    if (!emailRegex.test(email)) {
      setValid(false);
      setEmailValid(false);
    }
    if (!passwdRegex.test(passwd)) {
      setValid(false);
      setPasswdValid(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="24px 0"
        margin={"6px"}
      >
        <Flex alignItems="flex-end" gap="0 8px">
          <ValidLavelInput
            id="email"
            label="이메일"
            type="text"
            variant="medium"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
              setEmailValid(true);
            }}
            useValid={true}
            isValid={emailValid}
            error="이미 사용 중인 이메일입니다."
          />

          <Box marginBottom="4px">
            <Button variant="medium" width="66px" kind="primary" type="submit">
              인증받기
            </Button>
          </Box>
        </Flex>
        <ValidLavelInput
          id="passwd"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          useValid={true}
          isValid={passwdValid}
          error="비밀번호가 틀렸습니다."
          onChange={(e: any) => {
            setPasswd(e.target.value);
            setPasswdValid(true);
          }}
        />

        <ValidLavelInput label="이름" type="text" placeholder="홍길동" />

        <Flex gap="12px" alignItems="flex-end">
          <ValidLavelInput
            variant="small"
            label="생년월일"
            type="text"
            placeholder="년"
          />
          <Input variant="small" type="text" placeholder="월" />
          <Input variant="small" type="text" placeholder="일" />
        </Flex>

        <Flex gap="6px" padding="0px 14px">
          <Input type="checkbox" variant="auto" />
          <Label variant="extraSmall" htmlFor="">
            프루빗의 서비스{" "}
            <Text variant="extraSmall" color="#446FF6">
              이용약관
            </Text>
            과
            <Text variant="extraSmall" color="#446FF6">
              개인정보 보호 정책
            </Text>
            을 읽었으며 동의합니다.
          </Label>
        </Flex>
        <Button variant="large" kind="primary" type="submit">
          가입하기
        </Button>
      </Flex>
    </form>
  );
};

export default SigninForm;
