import React from 'react'
import styled from 'styled-components'
import { ChildrenProp } from '../../types'

const StyledGrid = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
margin-top: 10px;
`

function Grid(props: ChildrenProp) {
  return <StyledGrid {...props} />
}

export default Grid