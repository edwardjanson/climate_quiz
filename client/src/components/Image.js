import React from 'react';
import styled from 'styled-components';

import ContainerBox from './ContainerBox';
import Icon from './Icon';

const Image = ({question, onAnswer, questionTitle, answers, stage}) => {

  return (
    <ContainerBox>
         <Icon stage={stage}/>
        <Question>{questionTitle}</Question>
        <p>Select one</p>
        <ImageContainer>
          <ImageItem onClick={onAnswer} src={answers[0]} />
          <ImageItem onClick={onAnswer} src={answers[1]} />
        </ImageContainer>
    </ContainerBox>
  );
}

const Question = styled.p`
  margin: 0;
  padding-bottom: 1rem;
  font-size: 1.2rem;
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
  border: 1px solid rgba(0, 0, 0, 0.5);

  &:hover {
    cursor: pointer;
    border: 1px solid white;
  }
`

export default Image;