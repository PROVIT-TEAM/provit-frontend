import React from "react";
import styled from "styled-components";

const StyledInputTitle = styled.p`
  color: ${(props) => props.color};
  margin-bottom: 5px;
`;

const StyledInput = styled.input<props>`
  height: 48px;
  width: ${(props) => props.$width};
  font-size: 0.9rem;
  margin-bottom: 25px;
  border-radius: 8px;
  border: 1px solid #666;
  background-color: #3a3a3c;
  padding-left: 5%;
  border: none;
  color: #fff;
  ::placeholder {
    color: #3a3a3c;
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
}
export function CommonInputBox({
  text,
  color,
  type,
  onChange,
  placeholder,
  value,
  $width = "95%",
}: props) {
  const handleInputValue = (event: any) => {
    onChange(event);
  };
  return (
    <React.Fragment>
      {text !== "" && <StyledInputTitle color={color}>{text}</StyledInputTitle>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={handleInputValue}
        value={value}
        $width={$width}
      ></StyledInput>
    </React.Fragment>
  );
}
