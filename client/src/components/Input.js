import React from 'react';
import styled from 'styled-components';


const Input = ({nickname, onChange}) => {

  return (
    <Nickname type="text" value={nickname} onChange={onChange}></Nickname>
  );
}

const Nickname = styled.input`
  width: 9rem;
  text-align: center;
  margin: 0.25rem;
  padding: 0.25rem; 
`

export default Input;