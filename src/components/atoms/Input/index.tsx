import styled, { css } from "styled-components";

export type InputVariant = "small" | "medium" | "large" | "auto";

export type InputProps = {
  variant?: InputVariant;
  fontSize?: string;
  width?: string;
  height?: string;
  color?: string;
  placeholderColor?: string;
  backgroundColor?: string;
  lineHeight?: string;
  fontWeight?: string;
  pseudoClass?: {
    hover?: {
      color?: string;
      backgroundColor?: string;
    };
    disabled?: {
      color?: string;
      backgroundColor?: string;
    };
  };
};

const variants = {
  small: {
    width: "96px",
    height: "48px",
  },
  medium: {
    width: "238px",
    height: "48px",
  },
  large: {
    width: "312px",
    height: "48px",
  },
  auto: {
    width: "auto",
    height: "auto",
  },
};

const Input = styled.input<InputProps>`
  ${({ variant, width, height }) => {
    if (variant && variants[variant]) {
      width = !width ? variants[variant].width : width;
      height = !height ? variants[variant].height : height;

      return css`
        width: ${width};
        height: ${height};
      `;
    }
  }}

  box-sizing: border-box;
  outline: none;

  border: 1px solid transparent;
  border-radius: 8px / 8px;
  ${(props) => props.backgroundColor || props.theme.colors.primary};
  font-size: ${(props) => props.fontSize || props.theme.fontSizes.medium};
  line-height: ${(props) => props.lineHeight || "150%"};
  font-weight: ${(props) => props.fontWeight || "700"};
  background: ${(props) =>
    props.backgroundColor || props.theme.colors.secondary};
  color: ${(props) => props.color || props.theme.colors.white};
  padding: 0px 16px;

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.secondaryActive};
  }

  &::placeholder {
    color: ${(props) =>
      props.placeholderColor || props.theme.colors.secondaryHolder};
  }
`;

Input.defaultProps = {
  variant: "large",
};

export default Input;
