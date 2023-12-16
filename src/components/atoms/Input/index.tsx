import styled, { css } from "styled-components";

export type InputVariant = "small" | "medium" | "large" | "auto";

export type InputProps = {
  variant?: InputVariant;
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
  ${({ variant }) => {
    if (variant && variants[variant]) {
      const style = variants[variant];
      return css`
        width: ${style.width};
        height: ${style.height};
      `;
    }
  }}

  box-sizing: border-box;
  outline: none;
  border: 1px solid;
  border-radius: 8px 8px;
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
  background: #3a3a3c;
  padding: 0px 16px;
  color: #ffffff;
  border: none;

  &::placeholder {
    color: #636366;
  }
`;

Input.defaultProps = {
  variant: "large",
};

export default Input;
