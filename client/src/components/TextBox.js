import React from 'react';
import styled from 'styled-components';


const TextBox = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

const Text = styled.div`
`

export default TextBox;