import React from "react";
import styled from "styled-components";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Flex from "../layouts/Flex";
import Box from "../layouts/Box";

type ValidInputProps = {
  useValid?: boolean;
  variant?: any;
  id?: string;
  label: string;
  error?: string;
  isValid?: boolean;
  placeholder?: string;
  type?: string;
  inputRef?: any;
  value?: any;
  onChange?: any;
};

const ValidLavelInput = (props: ValidInputProps) => {
  const {
    variant,
    id,
    label,
    isValid,
    error,
    useValid,
    placeholder,
    type,
    inputRef,
    value,
    onChange,
  } = props;

  if (useValid) {
    return (
      <Flex flexDirection="column" gap="4px">
        <Label variant={variant} htmlFor={id}>
          {isValid ? label : error}
        </Label>

        <Input
          id={id}
          type={type}
          variant={variant}
          placeholder={placeholder}
          ref={inputRef}
          value={value}
          onChange={onChange}
        ></Input>
      </Flex>
    );
  } else {
    return (
      <Flex flexDirection="column" gap="4px">
        <Label variant={variant} htmlFor={id}>
          {label}
        </Label>
        <Input
          id={id}
          type={type}
          variant={variant}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></Input>
      </Flex>
    );
  }
};

export default ValidLavelInput;
