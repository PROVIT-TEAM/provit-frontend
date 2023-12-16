import { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Text from "../atoms/Text";
import Box from "../layouts/Flex";

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
const RePwForm = ({ onSignin }: SigninFormProps) => {
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
      <Box>
        {/* 로그인 사용자명 입력 */}
        <Input name="username" type="text" placeholder="사용자명" />
        {errors.username && (
          <Text color="danger" variant="small">
            사용자명은 필수입니다
          </Text>
        )}
      </Box>
      <Box>
        {/* 로그인 비밀번호 입력 */}
        <Input name="password" type="password" placeholder="비밀번호" />
        {errors.password && (
          <Text color="danger" variant="small">
            비밀번호는 필수입니다
          </Text>
        )}
      </Box>
      <Button variant="large" kind="primary" type="submit">
        로그인
      </Button>
    </form>
  );
};

export default RePwForm;
