import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import Text from "../atoms/Text";
import Flex from "../layouts/Flex";

const Signin = ({ changeModal }: any) => {
  return (
    <Flex flexDirection="column" gap="24px 0" margin={"6px"}>
      <Button variant="large" kind="primary" backgroundColor="#FEE500">
        <Flex alignItems="center" justifyContent="center" gap="8px">
          <Icon iconName="kakao" />
          카카오로 시작하기
        </Flex>
      </Button>

      <Button variant="large" kind="primary" onClick={changeModal}>
        이메일로 가입하기
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
          또는
        </Text>
      </Flex>
      <Flex justifyContent="center" gap="16px">
        <Icon iconName="naver" />
        <Icon iconName="google" />
      </Flex>
    </Flex>
  );
};

export default Signin;
