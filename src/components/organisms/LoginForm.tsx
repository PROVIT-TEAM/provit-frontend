import { useState } from "react";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import Text from "../atoms/Text";
import Flex from "../layouts/Flex";
import ValidLavelInput from "../molecules/ValidLavelInput";

export type SigninFormData = {
  username: string;
  password: string;
};

interface SigninFormProps {
  /**
   * 로그인 버튼을 클릭했을 때의 이벤트 핸들러
   */
  onSignin?: (username: string, password: string) => void;
}

/**
 * 로그인폼
 */
const LoginForm = ({ onSignin }: SigninFormProps) => {
  // React Hook Form 사용
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const onSubmit = (data: SigninFormData) => {
    const { username, password } = data;

    onSignin && onSignin(username, password);
  };

  return (
    <form>
      <Flex flexDirection="column" gap="24px 0" margin={"6px"}>
        <ValidLavelInput
          label="이메일"
          type="text"
          placeholder="이메일을 입력해주세요."
        />

        <ValidLavelInput
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />

        <Button variant="large" kind="primary" type="submit">
          로그인
        </Button>
        <Flex justifyContent="center" gap="24px">
          <Text variant="small" color="#8E8E93">
            회원가입
          </Text>
          <Text variant="small" color="#8E8E93">
            비밀번호 찾기
          </Text>
        </Flex>
        <Flex justifyContent="center" marginTop="8px">
          <Text variant="extraSmall" color="#8E8E93">
            간편 로그인
          </Text>
        </Flex>
        <Flex justifyContent="center" gap="16px">
          <Icon iconName="kakao" />
          <Icon iconName="naver" />
          <Icon iconName="google" />
        </Flex>
      </Flex>
    </form>
  );
};

export default LoginForm;
