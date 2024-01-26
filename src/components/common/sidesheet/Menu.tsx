/**
 * component 설명 : 사이드시트 - 일정 메뉴 ...
 * 작업자 : 김연정
 * 수정일 : 2024/1/26
 */

import styled from "styled-components";
import colors from "../../../themes/colors";
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import Flex from "../../layouts/Flex";

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
`;

const StyledList = styled.div`
  padding: 4px;
  :first {
    margin-bottom: 4px;
  }
`;

export function Menu() {
  return (
    <StyledMenuContainer>
      <StyledList>
        <Flex $gap="8px">
          <Icon iconName="editIcon" />
          <Text variant="small" color={colors.gray02} cursor="pointer">
            수정
          </Text>
        </Flex>
      </StyledList>
      <StyledList>
        <Flex $gap="8px">
          <Icon iconName="deleteIcon" />
          <Text variant="small" color={colors.gray02} cursor="pointer">
            삭제
          </Text>
        </Flex>
      </StyledList>
    </StyledMenuContainer>
  );
}
