import styled, { css } from "styled-components";

export type LabelVariant = "medium" | "extraSmall";

export type LabelProps = {
  variant?: LabelVariant;
  color?: string;
};

const variants = {
  extraSmall: {
    fontSize: "12px",
    fontWeight: 500,
  },
  medium: {
    fontSize: "14px",
    fontWeight: 700,
  },
} as const;

const Label = styled.label<LabelProps>`
  ${({ variant }) => {
    if (variant && variants[variant]) {
      const style = variants[variant];
      return css`
        font-size: ${style.fontSize};
        font-weight: ${style.fontWeight};
      `;
    }
  }}
  display:inline-block;
  margin-bottom: 5px;
  color: ${(props) => props.color};
  font-style: normal;
  line-height: 150%;
`;

Label.defaultProps = {
  variant: "medium",
  color: "#8E8E93",
};

export default Label;
