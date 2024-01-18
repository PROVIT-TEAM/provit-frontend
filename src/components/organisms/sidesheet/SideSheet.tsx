/**
 * component 설명 : 사이드시트
 * 작업자 : 김연정
 * 수정일 : 2024/1/15
 */

import Box from "../../layouts/Box";
import colors from "../../../themes/colors";
import { Calender } from "./Calender";
import { AchievementRate } from "./AchievementRate";
import { RecodeStudy } from "./RecodeStudy";
import Tabs from "./Tabs";
import styled from "styled-components";

const StyledSideSheetContainer = styled.div`
  width: 22.916%;
  height: 88vh;
  max-height: 88vh;
  background-color: ${colors.gray07};
  padding: 24px;
  overflow-y: scroll;
`;

export function SideSheet() {
  return (
    <>
      <StyledSideSheetContainer>
        <Box $marginBottom="16px">
          <Calender />
        </Box>
        <Box $marginBottom="16px">
          <AchievementRate />
        </Box>
        <Box $marginBottom="20px">
          <RecodeStudy />
        </Box>
        <Box>
          <Tabs />
        </Box>
      </StyledSideSheetContainer>
    </>
  );
}
