import Box from "../../layouts/Box";
import SideSheetBox from "../../common/sidesheet/SidesheetBox";
import { CategoryStatusTitle } from "../../common";
import Text from "../../atoms/Text";
import fontSizes from "../../../themes/fontSizes";
import Icon from "../../atoms/Icon";
import styled from "styled-components";
import colors from "../../../themes/colors";
import Button from "../../atoms/Button";
import Flex from "../../layouts/Flex";

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

export function RecodeStudy() {
  return (
    <>
      <SideSheetBox>
        <Box>
          <Box $marginBottom="14px">
            <CategoryStatusTitle />
          </Box>
          <Box $marginBottom="10px">
            <Text fontSize={fontSizes.ml} fontWeight="700">
              백앤드 개발 서적 독서
            </Text>
          </Box>
          <Box $marginBottom="14px">
            <Text fontSize={fontSizes.xm} fontWeight="700">
              03:12:34
            </Text>
          </Box>
          <Box $marginBottom="-14px">
            <Flex $gap="4%">
              <Button
                variant="active"
                width="48%"
                height="48px"
                backgroundColor={colors.gray05}
                $hoverColor={colors.gray04}
              >
                일시정지
              </Button>
              <Button variant="active" width="48%" height="48px">
                완료하기
              </Button>
            </Flex>
          </Box>
        </Box>
      </SideSheetBox>
    </>
  );
}
