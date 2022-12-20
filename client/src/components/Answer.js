import React from 'react';
import styled from 'styled-components';

import TextBox from './TextBox';
import Button from './Button';
import ContainerBox from './ContainerBox';


const Answer = ({question, onNextQuestion, correctAnswer}) => {

  const openInformation = () => {
    return;
  }

  return (
    <ContainerBox>
      <TextBox>{question.question_type !== "Images" ? 
                  correctAnswer ?
                  "You are correct"
                  :
                  <>
                    Incorrect answer. The correct answer was: <br/>
                    {question.correct_answer}
                  </>
                :
                  correctAnswer ?
                  "You are correct"
                  :
                  <>
                    Incorrect answer. The correct answer was: <br/>
                    <ImageItem src={question.correct_answer} />
                  </>
                }
                </TextBox>
      <Buttons>
        <Button onClick={openInformation}>Find Out More</Button>
        <Button onClick={onNextQuestion}>Next</Button>
      </Buttons>
    </ContainerBox>
  )
}

const AnswerBox = styled.div`
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

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageItem = styled.img`
  width: 18rem;
  height: 13rem;
`

export default Answer;