import React from "react";
import styled, { css } from "styled-components";
import colors from "../../../themes/colors";

export type ButtonVariant = "$active" | "inActive" | "kakao";

const variants = {
  $active: {
    color: colors.white,
    backgroundColor: colors.mainColor,
    cursor: "pointer",
    pseudoClass: {
      hover: {
        color: colors.white,
        backgroundColor: colors.hoverMainColor,
      },
      disabled: {
        color: colors.gray02,
        backgroundColor: colors.gray03,
      },
    },
  },
  inActive: {
    color: colors.gray02,
    backgroundColor: colors.gray03,
    cursor: "default",
    pseudoClass: {
      hover: {
        color: colors.gray02,
        backgroundColor: colors.gray03,
      },
      disabled: {
        color: colors.gray02,
        backgroundColor: colors.gray03,
      },
    },
  },
  kakao: {
    color: "#000",
    backgroundColor: "#fee500",
    cursor: "pointer",
    pseudoClass: {
      hover: {
        color: "#000",
        backgroundColor: "#fee500",
      },
      disabled: {
        color: "#000",
        backgroundColor: "#fee500",
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
  cursor?: string;
  $backgroundColor?: string;
  lineHeight?: string;
  fontWeight?: string;
  $marginLeft?: string;
  $marginTop?: string;
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
  $hoverColor?: string;
  $marginBottom?: string;
  $padding?: string;
};

const Button = styled.button<ButtonProps>`
  ${({ variant }) => {
    if (variant && variants[variant]) {
      return css`
        color: ${variants[variant].color};
        background-color: ${variants[variant].backgroundColor};
        cursor: ${variants[variant].cursor};
        &:hover {
          color: ${variants[variant].pseudoClass.hover.color};
          background-color: ${variants[variant].pseudoClass.hover
            .backgroundColor};
          transition: all 0.3s;
        }

        &:disabled {
          color: ${variants[variant].pseudoClass.disabled.color};
          background-color: ${variants[variant].pseudoClass.disabled
            .backgroundColor};
        }
      `;
    }
  }}

  font-size: ${(props) => props.fontSize || props.theme.fontSizes.ml};
  width: ${(props) => props.width || "312px"};
  height: ${(props) => props.height || "56px"};
  line-height: ${(props) => props.lineHeight || "150%"};
  font-weight: ${(props) => props.fontWeight || "700"};
  margin-left: ${(props) => props.$marginLeft};
  margin-top: ${(props) => props.$marginTop};
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  outline: 0;
  margin-bottom: ${(props) => props.$marginBottom || "16px"};
  padding: ${(props) => props.$padding};
  background-color: ${(props) => props.$backgroundColor};
  &:hover {
    background-color: ${(props) => props.$hoverColor};
  }
  white-space: nowrap;
`;

Button.defaultProps = {
  variant: "$active",
};

export default Button;
