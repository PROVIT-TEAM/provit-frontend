import React from "react";
import styled from "styled-components";
import colors from "../../../themes/colors";
import fontSizes from "../../../themes/fontSizes";

const StyledInput = styled.input<props>`
  height: 48px;
  width: ${(props) => props.$width};
  font-size: ${fontSizes.ml};
  font-weight: 400;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #666;
  background-color: #3a3a3c;
  padding-left: 5%;
  border: none;
  color: ${colors.white};
  ::placeholder {
    color: ${colors.disabled};
  }
`;

interface props {
  text?: string;
  color?: string;
  type?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  $width?: string;
  name?: string;
}
export function Input({
  text,
  color,
  type,
  onChange,
  placeholder,
  value,
  $width = "95%",
  name,
}: props) {
  const handleInputValue = (event: any) => {
    onChange(event);
  };
  return (
    <React.Fragment>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={handleInputValue}
        value={value}
        $width={$width}
        name={name}
      ></StyledInput>
    </React.Fragment>
  );
}
