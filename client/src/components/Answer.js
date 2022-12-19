import React from 'react';
import styled from 'styled-components';


const Answer = ({onNextQuestion}) => {
  
  return (
    <Container>
      <AnswerBox>This is the answer</AnswerBox>
      <StyledButton onClick="">Find Out More</StyledButton>
      <StyledButton onClick={onNextQuestion}>Next</StyledButton>
    </Container>
  )
}

const Container = styled.div`
`
const StyledButton = styled.button`
  font-size: inherit;
  width: 10rem;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  column-gap: 4rem;
  flex-wrap: wrap;
  margin: 0.25rem;
  padding: 0.25rem; 
`;

const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  column-gap: 4rem;
  flex-wrap: wrap;
  margin: 0.25rem;
  padding: 0.25rem; 
  background: rgb(104 185 255 / 50%);
  }
`;

export default Answer;