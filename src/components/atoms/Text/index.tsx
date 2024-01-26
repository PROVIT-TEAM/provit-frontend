import styled, { css } from "styled-components";
import fontSizes from "../../../themes/fontSizes";

const variants = {
  extraSmall: {
    fontSize: fontSizes.sl,
    fontWeight: 500,
  },
  small: {
    fontSize: fontSizes.mm,
    fontWeight: 700,
  },
  medium: {
    fontSize: fontSizes.ll,
    fontWeight: 500,
  },
  large: {
    fontSize: fontSizes.xm,
    fontWeight: 700,
  },
};

export type TextVariant = "extraSmall" | "small" | "medium" | "large";

export type TextProps = {
  variant?: TextVariant;
  fontSize?: string;
  fontWeight?: string;
  cursor?: string;
};

const Text = styled.p<TextProps>`
  ${({ variant, fontSize, fontWeight }) => {
    if (variant && variants[variant]) {
      const style = variants[variant];
      return css`
        font-size: ${fontSize || style.fontSize};
        font-weight: ${fontWeight || style.fontWeight};
      `;
    }
  }}
  cursor: ${(props) => props.cursor};
  color: ${(props) => props.color || "#FFFFFF"};
  line-height: 150%;
`;

Text.defaultProps = {
  variant: "medium",
};

export default Text;
