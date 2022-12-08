import React from "react";
import styled from "styled-components";
import { ButtonProps } from "../../types";

const StyledButton = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 5px;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  background-color: ${(props) => props.bgColor};
  ${(props) =>
    props.shadowed &&
    `
    box-shadow: 1px 1px 5px gray;
    `}
`;

const ButtonImage = styled.img`
  width: 75%;
`;

function CustomButton(props: ButtonProps) {
  return (
    <StyledButton {...props}>
      <ButtonImage src={props.src} alt="" />
    </StyledButton>
  );
}

export default CustomButton;
