import React from 'react';
import styled from 'styled-components';


const Title = ({children}) => {
  return (
    <Heading>{children}</Heading>
  )
}

const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
`


export default Title;