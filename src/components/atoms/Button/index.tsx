import React from "react";
import styled, { css } from "styled-components";

export type ButtonVariant = "small" | "medium" | "large";
export type ButtonKinds = "primary" | "success";

const kinds = {
  primary: {
    color: "#8E8E93",
    backgroundColor: "#636366",
  },
  success: {
    color: "#ffffff",
    backgroundColor: "#446FF6",
  },
} as const;

const variants = {
  small: {
    height: "32px",
    fontSize: "14px",
  },
  medium: {
    height: "40px",
    fontSize: "14px",
  },
  large: {
    height: "56px",
    fontSize: "16x",
  },
} as const;

type ButtonProps = {
  variant: ButtonVariant;
  kind: ButtonKinds;
  color?: string;
  backgroundColor?: string;
  width?: string;
};

const Button = styled.button<ButtonProps>`
  ${({ variant }) => {
    const style = { ...variants[variant] };

    return css`
      font-size: ${style.fontSize};
      height: ${style.height};
    `;
  }}
  color: ${(props) => props.color || kinds[props.kind].color};
  background-color: ${(props) =>
    props.backgroundColor || kinds[props.kind].backgroundColor};
  width: ${(props) => props.width || "312px"};
  box-sizing: border-box;
  border-radius: 8px;
  line-height: 150%;
  font-weight: 500;
  border: none;
`;

Button.defaultProps = {
  variant: "large",
  kind: "primary",
};

export default Button;
