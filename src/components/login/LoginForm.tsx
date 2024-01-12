import { Input } from "../atoms/Input";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import Flex from "../layouts/Flex";
import Box from "../layouts/Box";

interface props {
  handleSubmit: () => void;
  handleEmail: (event: any) => void;
  handlePassword: (event: any) => void;
  emailValue?: string;
  passwordValue?: string;
  loginBtnState?: boolean;
}

export function LoginForm({
  handleSubmit,
  handleEmail,
  handlePassword,
  emailValue,
  passwordValue,
  loginBtnState,
}: props) {
  return (
    <>
      <Box>
        <Flex $flexDirection="column">
          <Label>이메일</Label>
          <Input
            type="text"
            name="이메일"
            placeholder="이메일을 입력해주세요."
            onChange={handleEmail}
            value={emailValue}
          />
          <Label>비밀번호</Label>
          <Input
            type="password"
            name="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            onChange={handlePassword}
            value={passwordValue}
          />
          {loginBtnState ? (
            <Button width="100%" variant="active" onClick={handleSubmit}>
              로그인
            </Button>
          ) : (
            <Button width="100%" variant="inActive">
              로그인
            </Button>
          )}
        </Flex>
      </Box>
    </>
  );
}
