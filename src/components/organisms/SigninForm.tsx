import { useState, useRef } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Text from "../atoms/Text";
import Box from "../layouts/Box";
import Flex from "../layouts/Flex";
import DateSelect from "../molecules/DateSelect";

export type SigninFormData = {
  username: string;
  password: string;
};
/**
 * 로그인폼
 */
const SigninForm = () => {
  const [user, setUser] = useState({
    email: "",
    passwd: "",
    username: "",
  });
  const [date, setDate] = useState({ year: "", month: "", day: "" });
  const [checked, setChecked] = useState(false);

  const [userValid, setUserValid] = useState({
    email: true,
    passwd: true,
  });

  const handleChange = (event: any) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();

    let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let passwdRegex = new RegExp("(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$");

    if (!emailRegex.test(user.email)) {
      setUserValid((prev) => {
        return { ...prev, email: false };
      });
    }
    if (!passwdRegex.test(user.passwd)) {
      setUserValid((prev) => {
        return { ...prev, passwd: false };
      });
    }

    if (!checked) {
      console.log("동의해주셈");
    }
    console.log(user, date);
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
          <Flex flexDirection="column" gap="4px">
            {userValid.email ? (
              <Label variant="medium" htmlFor="email">
                이메일
              </Label>
            ) : (
              <Label variant="medium" htmlFor="email" color="red">
                이미 사용 중인 이메일입니다.
              </Label>
            )}
            <Input
              id="email"
              name="email"
              type="text"
              variant="medium"
              placeholder="이메일을 입력해주세요."
              value={user.email}
              onChange={(e: any) => {
                handleChange(e);
                setUserValid({ ...userValid, email: true });
              }}
            />
          </Flex>
          <Box marginBottom="4px">
            <Button
              variant="primary"
              fontSize="small"
              width="66px"
              height="42px"
              type="submit"
            >
              인증받기
            </Button>
          </Box>
        </Flex>

        <Flex flexDirection="column" gap="4px">
          {userValid.passwd ? (
            <Label variant="medium" htmlFor="passwd">
              비밀번호
            </Label>
          ) : (
            <Label variant="medium" htmlFor="email" color="red">
              비밀번호가 틀렸습니다.
            </Label>
          )}
          <Input
            id="passwd"
            name="passwd"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={user.passwd}
            onChange={(e: any) => {
              handleChange(e);
              setUserValid({ ...userValid, passwd: true });
            }}
          />
        </Flex>

        <Flex flexDirection="column" gap="4px">
          <Label variant="medium" htmlFor="username">
            이름
          </Label>
          <Input
            id="username"
            name="username"
            placeholder="이름을 입력해주세요."
            value={user.username}
            onChange={(e: any) => {
              handleChange(e);
            }}
          />
        </Flex>

        <Flex gap="12px" alignItems="flex-end">
          <Flex flexDirection="column" gap="4px">
            <Label>생년월일</Label>
            <DateSelect setDate={setDate} date={date}></DateSelect>
          </Flex>
        </Flex>

        <Flex gap="6px" padding="0px 14px">
          <Input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
            variant="auto"
          />
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
        <Button variant="primary" type="submit">
          가입하기
        </Button>
      </Flex>
    </form>
  );
};

export default SigninForm;
