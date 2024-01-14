import { Dispatch } from "react";
import { SetStateAction } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Box from "../layouts/Box";
import Flex from "../layouts/Flex";
import { Modal } from "./Modal";

interface props {
  setShowConfirmModal?: Dispatch<SetStateAction<boolean>>;
  setLogoutState?: Dispatch<SetStateAction<boolean>>;
}
export function ConfirmModal({ setShowConfirmModal, setLogoutState }: props) {
  const handleLogOutButton = () => {
    if (setLogoutState) setLogoutState(true);
  };
  const handleCancelButton = () => {
    if (setShowConfirmModal) setShowConfirmModal(false);
  };
  return (
    <Modal
      width="20%"
      height="250px"
      $left="40%"
      $minHeight="250px"
      onClose={handleCancelButton}
    >
      <Box $marginTop="64px" $marginBottom="63px">
        <Flex $flexDirection="column" $alignItems="center">
          <Text variant="medium">로그아웃하시겠습니까?</Text>
        </Flex>
      </Box>
      <Box>
        <Flex $alignItems="center" $gap="5%">
          <Button
            variant="active"
            width="50%"
            height="40px"
            onClick={handleLogOutButton}
          >
            확인
          </Button>
          <Button
            variant="inActive"
            width="50%"
            height="40px"
            onClick={handleCancelButton}
          >
            취소
          </Button>
        </Flex>
      </Box>
    </Modal>
  );
}
