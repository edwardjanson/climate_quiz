import React from 'react';
import styled from 'styled-components';


const Input = ({nickname, onChange}) => {

  return (
    <Nickname placeholder="Enter your nickname" type="text" value={nickname} onChange={onChange}></Nickname>
  );
}

const Nickname = styled.input`
  color: white;
  background: rgba(0, 0, 0, 0.2);
  height: 1.2rem;
  min-width: 9rem;
  padding: 0.5rem;
  text-align: center;
  margin: 1rem;
  border-radius: 5px;
  border: 1px solid white;
`

export default Input;