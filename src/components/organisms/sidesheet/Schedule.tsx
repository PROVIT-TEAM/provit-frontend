/**
 * component 설명 : 사이드시트 - 스케줄 일정
 * 작업자 : 김연정
 * 수정일 : 2024/1/19
 */

import Box from "../../layouts/Box";
import SideSheetBox from "../../common/sidesheet/SidesheetBox";
import { CategoryStatusTitle } from "../../common";
import Text from "../../atoms/Text";
import fontSizes from "../../../themes/fontSizes";
import Icon from "../../atoms/Icon";
import styled from "styled-components";
import colors from "../../../themes/colors";

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

interface props {
  color?: string;
}

interface dataProps {
  data?: any;
}

export function Schedule({ data }: dataProps) {
  return (
    <>
      {data?.map((item: any) => (
        <Box $marginBottom="8px">
          <SideSheetBox>
            <Box>
              <Box $marginBottom="17.5px">
                <CategoryStatusTitle
                  state={item.state}
                  category={item.category}
                  title={item.studyName}
                />
              </Box>
              <Box $marginBottom="24px">
                <Text fontSize={fontSizes.ml}>{item?.title}</Text>
                <Text fontSize={fontSizes.mm} color="#8E8E93">
                  {item?.content}
                </Text>
              </Box>
              <Box>
                <Icon iconName="clock" />
                <Span>{item?.time}</Span>
                <Icon iconName="clip" />
                <Span>{item?.link}</Span>
                <Date color={colors.label}>{item?.date}</Date>
              </Box>
            </Box>
          </SideSheetBox>
        </Box>
      ))}
    </>
  );
}
