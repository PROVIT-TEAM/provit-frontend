/**
 * component 설명 : 사이드시트 - 오늘의 목표
 * 작업자 : 김연정
 * 수정일 : 2024/1/15
 */
import colors from "../../../themes/colors";
import Text from "../../atoms/Text";
import SideSheetBox from "./SidesheetBox";
import fontSizes from "../../../themes/fontSizes";
import styled from "styled-components";
import Box from "../../layouts/Box";
import { LineProgressBar } from "@frogress/line";

const Span = styled.span`
  color: ${(props) => props.color};
  float: right;
`;

const Percent = styled.p`
  color: #fff;
  float: left;
  position: relative;
  top: 4px;
  left: 45%;
  z-index: 999;
  font-size: ${fontSizes.ml};
  font-weight: 700;
`;

const CustomLabelComponent: React.FC<{ percent: number }> = ({ percent }) => {
  return <Percent>{percent}%</Percent>;
};

export function AchievementRate() {
  return (
    <>
      <SideSheetBox>
        <Box $marginBottom="12px">
          <Text variant="small" color={colors.gray02}>
            오늘의 목표
          </Text>
        </Box>
        <Box $marginBottom="12px">
          <Text fontSize={fontSizes.lm} fontWeight="700">
            5시간6분째 여행중..🪐
            <Span color={colors.mainColor}>
              8<Span color={colors.gray02}>/15</Span>
            </Span>
          </Text>
        </Box>
        <LineProgressBar
          percent={65}
          rounded={36}
          height={24}
          progressColor={colors.mainColor}
          containerColor={colors.gray05}
          label={(value: number) => <CustomLabelComponent percent={65} />}
        />
      </SideSheetBox>
    </>
  );
}
