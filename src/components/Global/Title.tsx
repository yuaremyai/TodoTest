import React from "react";
import styled from "styled-components";
import { ChildrenProp } from "../../types";

const StyledTitle = styled.p`
  text-align: center;
  font-size: 30px;
`;

function Title({ children }: ChildrenProp) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default Title;
