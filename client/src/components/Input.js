import React from 'react';
import styled from 'styled-components';


const Input = ({nickname, onChange}) => {

  return (
    <Nickname type="text" value={nickname} onChange={onChange}></Nickname>
  );
}

const Nickname = styled.input`
`

export default Input;