import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  onChange,
  name,
  value,
  defaultValue,
  width,
  height,
  placeholder,
}) => {
  return (
    <Container
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      type={type}
      width={width}
      height={height}
      placeholder={placeholder}
    />
  );
};

export default Input;
