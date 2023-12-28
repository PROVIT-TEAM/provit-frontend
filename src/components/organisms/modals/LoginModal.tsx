import ModalOverlay from "./ModalOverlay";
import LoginForm from "../LoginForm";
import Text from "../../atoms/Text";
import Flex from "../../layouts/Flex";
import Box from "../../layouts/Box";

const LoginModal = ({ clickToggleModal, handleSubmit, handleChange }: any) => {
  return (
    <ModalOverlay>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Box marginTop="64px" marginBottom="64px">
          <Text variant="large">PROVIT</Text>
        </Box>

        <LoginForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        ></LoginForm>
      </Flex>
    </ModalOverlay>
  );
};

export default LoginModal;
