import styled from "styled-components";
import colors from "../../../themes/colors";
import Box from "../../layouts/Box";
import Flex from "../../layouts/Flex";

const StyledMenuContainer = styled.div`
  width: 30%;
  background-color: ${colors.gray04};
  border: 1px solid red;
  height: 50px;
  padding: 8px;
  float: right;
  /* margin-top: -120px; */
  position: relative;
  top: 0;
  left: 0;
  z-index: 999;
  display: inline;
`;
export function Menu() {
  return <StyledMenuContainer></StyledMenuContainer>;
}
