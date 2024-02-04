/**
 * component 설명 : 비빌번호 찾기 모달
 * 작업자 : 김연정
 * 수정일 : 2024/1/9
 */
import { Dispatch, SetStateAction } from "react";
import Button from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import Label from "../../atoms/Label";
import Text from "../../atoms/Text";
import Box from "../../layouts/Box";
import Flex from "../../layouts/Flex";
import { Modal } from "../Modal";

interface props {
  setIsOpenFindPasswordModal?: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  closeModal?: () => void;
  handleEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clickButton?: () => void;
  emailValue?: string;
  btnState?: boolean;
}

export function FindPwModal({
  closeModal,
  handleEmail,
  clickButton,
  emailValue,
  btnState,
}: props) {
  return (
    <>
      <Modal onClose={closeModal}>
        <Box $marginTop="2px" $marginBottom="127px" $marginLeft="4%">
          <Flex $flexDirection="column" $alignItems="center">
            <Text fontSize="1rem" fontWeight="700px">
              비밀번호 재설정
            </Text>
          </Flex>
        </Box>
        <Box>
          <Label>이메일</Label>
          <Input
            type="text"
            placeholder="이메일을 입력해주세요."
            onChange={handleEmail}
            value={emailValue}
          />
          {btnState ? (
            <Button variant="$active" onClick={clickButton} width="100%">
              인증코드 발송
            </Button>
          ) : (
            <Button variant="inActive" width="100%">
              인증코드 발송
            </Button>
          )}
        </Box>
      </Modal>
    </>
  );
}
