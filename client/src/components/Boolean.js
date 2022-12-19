import React from 'react';
import styled from 'styled-components';
// import Button from './Button';


const Boolean = ({questionTitle, onAnswer, answers}) => {

  return (
    <Container>
        <p>Icon</p>
        <Question>{questionTitle}</Question>
        <ButtonsContainer>
        <Button onClick={onAnswer}>{answers[0]}</Button>
        <Button onClick={onAnswer}>{answers[1]}</Button>
        </ButtonsContainer>
    </Container>
  );
}

const Container = styled.div`
text-align: center;
`
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Button = styled.button`
  padding: 1rem;
  width: 30%;
`

const Question = styled.p`

`

export default Boolean;