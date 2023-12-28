import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import Text from "../atoms/Text";
import Box from "../layouts/Box";
import Flex from "../layouts/Flex";

const Signin = ({ changeModal }: any) => {
  return (
    <>
      <Flex flexDirection="column" gap="16px 0">
        <Button variant="primary" height="56px" backgroundColor="#FEE500">
          <Flex alignItems="center" justifyContent="center" gap="8px">
            <Icon iconName="kakao" />
            카카오로 시작하기
          </Flex>
        </Button>

        <Button variant="primary" height="56px" onClick={changeModal}>
          이메일로 가입하기
        </Button>
      </Flex>

      <Box marginTop="48px">
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="16px 0"
        >
          <Text variant="small" color="#8E8E93">
            또는
          </Text>
          <Flex gap="16px">
            <Icon iconName="naver" />
            <Icon iconName="google" />
          </Flex>
        </Flex>
      </Box>

      <Box marginTop="36px">
        <Flex justifyContent="center" gap="12px">
          <Text variant="small" color="#8E8E93">
            이미 회원이신가요?
          </Text>
          <Text variant="small" color="#8E8E93">
            로그인하기
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Signin;
