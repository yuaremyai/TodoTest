import React from "react";
import styled from "styled-components";
import { ChildrenProp } from "../types";

const StyledText = styled.p`
  grid-column: span 9;
  font-size: 20px;
  word-break: break-word;
`;

function Text(props:ChildrenProp) {
  return <StyledText {...props}/>;
}

export default Text;
