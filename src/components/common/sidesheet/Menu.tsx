/**
 * component 설명 : 사이드시트 - 일정 메뉴 ...
 * 작업자 : 김연정
 * 수정일 : 2024/1/26
 */

import { useState } from "react";
import styled from "styled-components";
import colors from "../../../themes/colors";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import { ConfirmModal } from "../../modal";

const StyledMenuContainer = styled.div`
  width: 28%;
  background-color: ${colors.gray04};
  height: auto;
  padding: 8px;
  /* margin-top: -120px; */
  position: absolute;
  top: 20px;
  left: 68%;
  z-index: 999;
  display: inline;
  border-radius: 8px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
  @media (max-width: 1600px) {
    width: 35%;
    left: 61%;
  }
`;

const StyledList = styled.div`
  padding: 4px;
  :first {
    margin-bottom: 4px;
  }
`;

interface props {
  itemState?: string;
}

export function Menu({ itemState }: props) {
  const [isOpenDeleteConfirmModal, setIsOpenDeleteConfirmModal] =
    useState<boolean>(false);
  const handleDeleteConfirmModal = () => {
    setIsOpenDeleteConfirmModal(true);
  };

  /**
   * 삭제하기 버튼 클릭 액션
   */
  const handleDelete = () => {
    setIsOpenDeleteConfirmModal(false);
  };

  return (
    <>
      <StyledMenuContainer>
        <StyledList>
          <Button
            color={colors.white}
            cursor="pointer"
            height="auto"
            width="auto"
            $padding="4px 44px 4px 8px"
            $backgroundColor={colors.gray04}
            $hoverColor={colors.gray03}
            $marginBottom="0px"
          >
            <Icon iconName="editIcon" />
            &nbsp; 수정
          </Button>
        </StyledList>
        <StyledList>
          <Button
            color={colors.white}
            cursor="pointer"
            height="auto"
            width="auto"
            $padding="4px 44px 4px 8px"
            $backgroundColor={colors.gray04}
            $hoverColor={colors.gray03}
            $marginBottom="0px"
            onClick={handleDeleteConfirmModal}
          >
            <Icon iconName="deleteIcon" />
            &nbsp; 삭제
          </Button>
        </StyledList>
      </StyledMenuContainer>
      {isOpenDeleteConfirmModal &&
        (itemState !== "완료" ? (
          <ConfirmModal
            title1="해당 일정을 삭제하시겠습니까?"
            contnet="일정을 삭제하시면, 일정 시트에서 사라집니다."
            buttonTxt1="취소"
            buttonTxt2="삭제하기"
            setShowConfirmModal={setIsOpenDeleteConfirmModal}
            handleAction={handleDelete}
          />
        ) : (
          <ConfirmModal
            title1="완료된 일정입니다."
            title2="해당 일정을 삭제하시겠습니까?"
            contnet="일정을 삭제하시면, 기록도 함께 사라집니다."
            buttonTxt1="취소"
            buttonTxt2="삭제하기"
            setShowConfirmModal={setIsOpenDeleteConfirmModal}
            handleAction={handleDelete}
          />
        ))}
    </>
  );
}
