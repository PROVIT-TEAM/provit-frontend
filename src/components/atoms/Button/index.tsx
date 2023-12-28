import React from "react";
import styled, { css } from "styled-components";

export type ButtonVariant = "primary";

const variants = {
  primary: {
    color: "thirdText",
    backgroundColor: "third",
    pseudoClass: {
      hover: {
        color: "white",
        backgroundColor: "thirdActive",
      },
      disabled: {
        color: "thirdText",
        backgroundColor: "third",
      },
    },
  },
} as const;

type ButtonProps = {
  variant?: ButtonVariant;
  fontSize?: string;
  width?: string;
  height?: string;
  color?: string;
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

const Button = styled.button<ButtonProps>`
  ${({ variant, color, backgroundColor, pseudoClass, theme }) => {
    if (variant && variants[variant]) {
      color = !color ? theme.colors[variants[variant].color] : color;
      backgroundColor = !backgroundColor
        ? theme.colors[variants[variant].backgroundColor]
        : backgroundColor;

      let pc_hover = !pseudoClass
        ? theme.colors[variants[variant].pseudoClass.hover.color]
        : pseudoClass?.hover?.color;

      let pb_hover = !pseudoClass
        ? theme.colors[variants[variant].pseudoClass.hover.backgroundColor]
        : pseudoClass?.hover?.backgroundColor;

      let pc_disabled = !pseudoClass
        ? theme.colors[variants[variant].pseudoClass.disabled.color]
        : pseudoClass?.disabled?.color;

      let pb_disalbed = !pseudoClass
        ? theme.colors[variants[variant].pseudoClass.disabled.backgroundColor]
        : pseudoClass?.disabled?.backgroundColor;

      return css`
        color: ${color};
        background-color: ${backgroundColor};

        &:hover {
          color: ${pc_hover};
          background-color: ${pb_hover};
        }

        &:disabled {
          color: ${pc_disabled};
          background-color: ${pb_disalbed};
        }
      `;
    }
  }}

  font-size: ${(props) => props.fontSize || props.theme.fontSizes.medium};
  width: ${(props) => props.width || "312px"};
  height: ${(props) => props.height || "56px"};
  line-height: ${(props) => props.lineHeight || "150%"};
  font-weight: ${(props) => props.fontWeight || "700"};

  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: 0;
`;

Button.defaultProps = {
  variant: "primary",
};

export default Button;
