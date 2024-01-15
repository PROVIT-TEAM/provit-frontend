/**
 * component 설명 : 사이드시트 - 캘린더
 * 작업자 : 김연정
 * 수정일 : 2024/1/15
 */
import Text from "../../atoms/Text";
import fontSizes from "../../../themes/fontSizes";

export function Calender() {
  return (
    <Text fontSize={fontSizes.ll} fontWeight="700">
      &lt; &nbsp; 2023.12.01 &nbsp; &gt;
    </Text>
  );
}
