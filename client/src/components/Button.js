import React from 'react';
import styled from 'styled-components';


const Button = ({onClick, children}) => {

  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
}

const StyledButton = styled.button`
`

export default Button;