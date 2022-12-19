import React from 'react';
import styled from 'styled-components';
// import Button from './Button';


const Boolean = ({question, onAnswer}) => {

  return (
    <Container>
        <p>{question.question}</p>
        <ButtonsContainer>
        <Button onClick={onAnswer}>{question.correct_answer}</Button>
        <Button onClick={onAnswer}>{question.incorrect_answers[0]}</Button>
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

export default Boolean;