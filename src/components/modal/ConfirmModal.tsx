/**
 * component 설명 : 확인모달
 * 작업자 : 김연정
 * 수정일 : 2024/1/27
 */

import { Dispatch } from "react";
import { SetStateAction } from "react";
import styled from "styled-components";
import colors from "../../themes/colors";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Box from "../layouts/Box";
import Flex from "../layouts/Flex";
import { Modal } from "./Modal";

interface props {
  setShowConfirmModal?: Dispatch<SetStateAction<boolean>>;
  setLogoutState?: Dispatch<SetStateAction<boolean>>;
  title?: string;
  contnet?: string;
  buttonTxt1?: string;
  buttonTxt2?: string;
  handleAction?: () => void;
}
export function ConfirmModal({
  setShowConfirmModal,
  setLogoutState,
  title,
  contnet,
  buttonTxt1,
  buttonTxt2,
  handleAction,
}: props) {
  // const handleLogOutButton = () => {
  //   if (setLogoutState) setLogoutState(true);
  // };

  const handleCancelButton = () => {
    if (setShowConfirmModal) setShowConfirmModal(false);
  };

  const handleActionButton = () => {
    if (handleAction) handleAction();
  };

  return (
    <Modal
      width="22.916%"
      $minWidth="27.5%"
      $minHeight="auto"
      onClose={handleCancelButton}
      $padding="24px"
      $radius="8px"
      height="294px"
    >
      <Box $marginTop="64px" $marginBottom="72px">
        <Flex $flexDirection="column" $alignItems="center">
          {title && (
            <Text fontSize="20px" fontWeight="700">
              {title}
            </Text>
          )}
          {contnet && (
            <Text
              fontSize="16px"
              fontWeight="500"
              color={colors.gray02}
              $marginTop="16px"
            >
              {contnet}
            </Text>
          )}
        </Flex>
      </Box>
      <Box>
        <Flex $alignItems="center" $gap="5%">
          <Button
            variant="active"
            width="50%"
            height="56px"
            fontWeight="500"
            $marginBottom="0px"
            onClick={handleCancelButton}
            backgroundColor={colors.gray05}
            $hoverColor={colors.gray04}
            cursor="pointer"
          >
            {buttonTxt1}
          </Button>
          <Button
            variant="active"
            width="50%"
            height="56px"
            fontWeight="500"
            $marginBottom="0px"
            onClick={handleActionButton}
          >
            {buttonTxt2}
          </Button>
        </Flex>
      </Box>
    </Modal>
  );
}
