import React from 'react';
import styled from 'styled-components';


const Button = ({onClick, children}) => {

  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
}

const StyledButton = styled.button`
  font-size: 1rem;
  text-align: center;
  justify-items: center;
  color: white;
  padding: 0.5rem;
  background: transparent;
  border: 1px solid white;
  border-radius: 5px;
  min-width: 10rem;

  &:hover {
    background: white;
    color: black;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  &:active {
    background: white;
    color: black;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`

export default Button;