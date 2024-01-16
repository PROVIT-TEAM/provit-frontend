import Box from "../../layouts/Box";
import SideSheetBox from "../../common/sidesheet/SidesheetBox";
import { CategoryStatusTitle } from "../../common";
import Text from "../../atoms/Text";
import fontSizes from "../../../themes/fontSizes";
import Icon from "../../atoms/Icon";
import styled from "styled-components";
import colors from "../../../themes/colors";

interface props {
  color?: string;
}
const Span = styled.span<props>`
  font-size: ${fontSizes.mm};
  position: relative;
  top: -4.5px;
  left: 2%;
  color: ${(props) => props.color || "#fff"};
  margin-right: 6%;
`;

const Date = styled.span<props>`
  font-size: ${fontSizes.mm};
  position: relative;
  top: 3px;
  color: ${(props) => props.color || "#fff"};
  float: right;
  text-align: right;
`;

export function Schedule() {
  return (
    <>
      <SideSheetBox>
        <Box>
          <Box $marginBottom="17.5px">
            <CategoryStatusTitle />
          </Box>
          <Box $marginBottom="24px">
            <Text fontSize={fontSizes.ml}>
              영화 감상 및 독후감 작성(일정 이름)
            </Text>
            <Text fontSize={fontSizes.mm} color="#8E8E93">
              센과 치히로의 행방불명(결과물 제목)
            </Text>
          </Box>
          <Box>
            <Icon iconName="clock" />
            <Span>3시간20분</Span>
            <Icon iconName="clip" />
            <Span>결과물 링크</Span>
            <Date color={colors.label}>2023.11.29</Date>
          </Box>
        </Box>
      </SideSheetBox>
    </>
  );
}
