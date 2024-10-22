import React, { forwardRef } from "react";
import { Container, Wrapper, Icon } from "./style";

export const Input = forwardRef(
  (
    {
      icon,
      type,
      onChange,
      name,
      value,
      defaultValue,
      width,
      height,
      placeholder,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          $icon={icon}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          type={type}
          width={width}
          height={height}
          placeholder={placeholder}
        />
      </Wrapper>
    );
  }
);
export default Input;
