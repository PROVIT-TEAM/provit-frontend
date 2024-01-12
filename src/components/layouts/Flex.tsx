import styled from "styled-components";
import Box, { BoxProps } from "./Box";

export type FlexProps = BoxProps & {
  $alignItems?: string;
  $alignContent?: string;
  $justifyContent?: string;
  $justifyItems?: string;
  $flexDirection?: string;
  $gap?: string;
};

const Flex = styled(Box)<FlexProps>`
  align-items: ${(props) => props.$alignItems || undefined};
  align-content: ${(props) => props.$alignContent || undefined};
  justify-content: ${(props) => props.$justifyContent || undefined};
  justify-items: ${(props) => props.$justifyItems || undefined};
  flex-direction: ${(props) => props.$flexDirection || undefined};
  gap: ${(props) => props.$gap || undefined};
`;

Flex.defaultProps = {
  display: "flex",
};

export default Flex;
