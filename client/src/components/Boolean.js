import React from 'react';
import styled from 'styled-components';
// import Button from './Button';


const Boolean = ({questionTitle, onAnswer, answers}) => {

  return (
    <Container>
        <p>Icon</p>
        <QuestionSection>
          <Question>{questionTitle}</Question>
            <Questions>
              <Button onClick={onAnswer}>{answers[0]}</Button>
              <Button onClick={onAnswer}>{answers[1]}</Button>
            </Questions>
        </QuestionSection>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

const QuestionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  width: 85%;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`

const Question = styled.p`
  margin: 0;
  padding-bottom: 1rem;
  font-size: 1.5rem;
`

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
`

const Button = styled.button`
  font-size: 1rem;
  text-align: center;
  color: white;
  padding: 1rem;
  background: transparent;
  border: 1px solid white;
  border-radius: 5px;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`

export default Boolean;