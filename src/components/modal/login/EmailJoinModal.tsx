/**
 * component 설명 : 이메일 회원가입 모달
 * 작업자 : 김연정
 * 수정일 : 2024/1/12
 */

import { Dispatch, SetStateAction } from "react";
import { Modal } from "../Modal";
import Box from "../../layouts/Box";
import Text from "../../atoms/Text";
import Flex from "../../layouts/Flex";
import { JoinForm } from "../../organisms/login";

interface props {
  setIsOpenEmailLoginModal: Dispatch<SetStateAction<boolean>>;
  setIsOpenSignInpModal?: Dispatch<SetStateAction<boolean>>;
  closeEmailJoinModal?: () => void;
}
export function EmailJoinModal({
  setIsOpenEmailLoginModal,
  setIsOpenSignInpModal,
  closeEmailJoinModal,
}: props) {
  return (
    <>
      <Modal onClose={closeEmailJoinModal} height="auto" $minHeight="700px">
        <Box $marginLeft="4%" $marginBottom="40px">
          <Flex $flexDirection="column" $alignItems="center">
            <Text fontSize="1rem" fontWeight="700">
              회원가입
            </Text>
          </Flex>
        </Box>
        <Box>
          <JoinForm
            setIsOpenEmailLoginModal={setIsOpenEmailLoginModal}
            setIsOpenMembershipModal={setIsOpenSignInpModal}
          />
        </Box>
      </Modal>
    </>
  );
}
