/**
 * component 설명 : 사이드시트 - 오늘의 박스
 * 작업자 : 김연정
 * 수정일 : 2024/1/15
 */

import styled from "styled-components";
import colors from "../../../themes/colors";

interface props {
  height?: string;
}

const SideSheetBox = styled.div<props>`
  width: 89.09%;
  height: ${(props) => props.height};
  padding: 1rem;
  background-color: ${colors.gray06};
  border-radius: 8px;
`;

export default SideSheetBox;
