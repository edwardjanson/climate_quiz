import React from 'react';
import styled from 'styled-components';


const Image = ({question, onAnswer, questionTitle, answers}) => {

  return (
    <Container>
        <Question>{questionTitle}</Question>
        <p>Select one</p>
        <ImageContainer>
          <ImageItem onClick={onAnswer} src={answers[0]} />
          <ImageItem onClick={onAnswer} src={answers[1]} />
        </ImageContainer>
    </Container>
  );
}

const Container = styled.span`
  text-align: center;

`
const ImageContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
`

const ImageItem = styled.img`
  width: 18rem;
  height: 13rem;
`

const Question = styled.p`

`
export default Image;