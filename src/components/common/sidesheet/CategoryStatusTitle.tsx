/**
 * component 설명 : 사이드시트 - 카테고리, 상태 타이틀
 * 작업자 : 김연정
 * 수정일 : 2024/1/24
 */

import styled from "styled-components";
import colors from "../../../themes/colors";
import fontSizes from "../../../themes/fontSizes";
import Text from "../../atoms/Text";

interface props {
  $color?: string;
  $bgcolor?: string;
  $radius?: string;
  state?: string;
  finish?: string;
  continue?: string;
}

const StyledCategory = styled.span<props>`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgcolor};
  border-radius: ${(props) => props.$radius};
  padding: 3px 8px;
  font-size: ${fontSizes.sl};
  font-weight: 700;
  line-height: 150%;
  margin-right: 8px;
`;

const StyledSpan = styled.span<props>`
  color: ${(props) =>
    props.state === "진행중" ? props.finish : props.continue};
  margin-left: 8px;
`;

interface dataProps {
  state?: string;
  category?: string;
  title?: string;
}

export function CategoryStatusTitle({ state, category, title }: dataProps) {
  return (
    <>
      <Text variant="small" color={colors.gray02}>
        <StyledCategory
          $color={colors.mainColor}
          $bgcolor="rgba(68, 111, 246, 0.20)"
          $radius="4px"
        >
          {category}
        </StyledCategory>
        {title}
        <StyledSpan state={state} finish="#446FF6" continue="#ED662C">
          {state}
        </StyledSpan>
      </Text>
    </>
  );
}
