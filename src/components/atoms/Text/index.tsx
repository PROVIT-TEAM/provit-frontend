import styled, { css } from "styled-components";

const variants = {
  extraSmall: {
    fontSize: "12px",
    fontWeight: 500,
  },
  small: {
    fontSize: "14px",
    fontWeight: 500,
  },
  medium: {
    fontSize: "24px",
    fontWeight: 500,
  },
  large: {
    fontSize: "32px",
    fontWeight: 700,
  },
};

export type TextVariant = "extraSmall" | "small" | "medium" | "large";

export type TextProps = {
  variant: TextVariant;
};

const Text = styled.span<TextProps>`
  ${({ variant }) => {
    const style = variants[variant];
    return css`
      font-size: ${style.fontSize};
      font-weight: ${style.fontWeight};
    `;
  }}

  color: ${(props) => props.color || "#FFFFFF"};
  line-height: 150%;
`;

Text.defaultProps = {
  variant: "medium",
};

export default Text;
