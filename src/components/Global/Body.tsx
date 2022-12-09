import React from "react";
import styled from "styled-components";
import { ChildrenProp } from "../../types";

const StyledBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(0, 62, 138);
  background: linear-gradient(
    90deg,
    rgba(0, 62, 138, 1) 0%,
    rgba(166, 49, 238, 1) 100%
  );
`;

function Body(props: ChildrenProp) {
  return <StyledBody {...props} />;
}

export default Body;
