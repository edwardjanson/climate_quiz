import React from 'react';
import styled from 'styled-components';


const TextBox = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  column-gap: 4rem;
  flex-wrap: wrap;
  margin: 0.25rem;
  padding: 0.25rem;
  font-size: 1.1rem;
`

export default TextBox;