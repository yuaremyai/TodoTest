import React from 'react'
import styled from "styled-components";
import { ChildrenProp } from '../types'

const StyledContainer = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: #d6eeff;
  border-radius: 5px;
  padding: 25px 15px 25px 25px;
  overflow-y: scroll;
`;

function Container(props: ChildrenProp) {
  return <StyledContainer {...props} />
}

export default Container