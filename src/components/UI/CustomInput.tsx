import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: #afb4ff;
  grid-column: span 11;
  height: 40px;
  font-size: 20px;
  border-radius: 10px;
  width: 100%;
  border: none;
  outline: none;
  padding: 0px 10px;
  box-shadow: 1px 1px 5px gray;
`;

interface Props {
  value: string;
  placeholder?: string;
  onKeyUp?: (e: React.KeyboardEvent<Element>) => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  autofocus?: boolean
}

function CustomInput(props: Props) {
  return <StyledInput {...props} />;
}

export default CustomInput;
