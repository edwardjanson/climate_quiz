import React from 'react';
import styled from 'styled-components';


const Button = ({onClick, children}) => {

  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
}

const StyledButton = styled.button`
  width: 10rem;
  text-align: center;
  margin: 0.25rem;
  padding: 0.25rem; 
`

export default Button;