/**
 * component 설명 : 사이드시트 - 캘린더
 * 작업자 : 김연정
 * 수정일 : 2024/1/19
 */
import Text from "../../atoms/Text";
import fontSizes from "../../../themes/fontSizes";
import moment from "moment";
import { useState } from "react";
import styled from "styled-components";
import Icon from "../../atoms/Icon";
import Flex from "../../layouts/Flex";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;
export function Calender() {
  const [getMoment, setMoment] = useState(moment());
  const today: any = getMoment;

  const prev = () => {
    setMoment(getMoment.clone().subtract(1, "day"));
  };

  const next = () => {
    setMoment(getMoment.clone().add(1, "day"));
  };
  return (
    <>
      <Flex $gap="2%">
        <StyledButton className="prev" onClick={prev}>
          <Icon iconName="leftArrow" />
        </StyledButton>
        <Text fontSize={fontSizes.ll} fontWeight="700">
          {today.format("YYYY.MM.DD")}
        </Text>
        <StyledButton className="next" onClick={next}>
          <Icon iconName="rightArrow" />
        </StyledButton>
      </Flex>
    </>
  );
}
