/**
 * component 설명 : 사이드시트
 * 작업자 : 김연정
 * 수정일 : 2024/1/15
 */

import Box from "../../layouts/Box";
import colors from "../../../themes/colors";
import { Calender } from "./Calender";
import { AchievementRate } from "./AchievementRate";

export function SideSheet() {
  return (
    <>
      <Box
        width="22.916%"
        height="100vh"
        $bgColor={colors.gray07}
        padding="24px"
      >
        <Box $marginBottom="16px">
          <Calender />
        </Box>
        <Box $marginBottom="16px">
          <AchievementRate />
        </Box>
      </Box>
    </>
  );
}
