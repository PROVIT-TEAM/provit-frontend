import { useState } from "react";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import Text from "../atoms/Text";
import Flex from "../layouts/Flex";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import { Link } from "react-router-dom";

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
const LoginForm = ({ handleSubmit, handleChange }: any) => {
  // React Hook Form 사용

  const onSubmit = (e: any) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <form onSubmit={onSubmit}>
      <Flex flexDirection="column" gap="24px 0">
        <Flex flexDirection="column" gap="4px">
          <Label>이메일</Label>
          <Input
            name="username"
            type="text"
            placeholder="이메일을 입력해주세요."
            onChange={handleChange}
          />
        </Flex>
        <Flex flexDirection="column" gap="4px">
          <Label>비밀번호</Label>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={handleChange}
          />
        </Flex>

        <Button variant="primary" type="submit">
          로그인
        </Button>
        <Flex justifyContent="center" gap="24px">
          <Text variant="small" color="#8E8E93">
            <Link to="/signin">회원가입</Link>
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
