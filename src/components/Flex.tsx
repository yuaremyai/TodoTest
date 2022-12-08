import React from 'react'
import styled from 'styled-components'
import { FlexStyles } from 'styled-components'

interface Props{
    children?: React.ReactNode
    align: string
    justify: string
}

const StyledFlex = styled.div<FlexStyles>`
display: flex;
align-items: ${props => props.align || 'iniatial'};
justify-content: ${props => props.justify || 'iniatial'};
`

function Flex(props: Props) {
  return <StyledFlex {...props}/>
}

export default Flex