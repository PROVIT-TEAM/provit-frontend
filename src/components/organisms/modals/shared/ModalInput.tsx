import React from "react";
import { styled } from "styled-components";

const StyledInputGroup = styled.div``;
const StyledInput = styled.input.attrs((props) => ({
  type: props.type ? props.type : "text",
  name: props.name,
}))`
  width: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 2px solid hsl(230, 25%, 80%);
  background-color: hsl(230, 100%, 97%);
  border: 0 solid black;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const StyleText = styled.p``;

const ModalInput = ({ type, name }: any) => {
  return (
    <StyledInputGroup>
      <StyledInput type={type} name={name}></StyledInput>
      <StyleText>에러 메시지</StyleText>
    </StyledInputGroup>
  );
};

export default ModalInput;
