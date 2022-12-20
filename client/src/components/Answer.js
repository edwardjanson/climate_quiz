import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';

import TextBox from './TextBox';
import Button from './Button';
import ContainerBox from './ContainerBox';
import InformationScreen from '../containers/InformationScreen';


const Answer = ({question, onNextQuestion, correctAnswer}) => {

  const [open, setOpen] = useState(false);

  return (
    <ContainerBox>
      <TextBox>{question.question_type !== "Images" ? 
                  correctAnswer ?
                  "You are correct!"
                  :
                  <>
                    Incorrect answer. The correct answer was: <br/><br/>
                    {question.correct_answer}
                  </>
                :
                  correctAnswer ?
                  "You are correct"
                  :
                  <>
                    Incorrect answer. The correct answer was: <br/><br/>
                    <ImageItem src={question.correct_answer} />
                  </>
                }
      </TextBox>
      <Buttons>
        <Button onClick={() => setOpen(true)}>Find Out More</Button>
        <Button onClick={onNextQuestion}>Next</Button>
      </Buttons>
      <Modal open={open} onClose={() => setOpen(false)}>
        <InformationScreen info_paragraphs={question.more_info} question_link={question.more_info_link}/>
      </Modal> 
    </ContainerBox>
  )
}

const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const ImageItem = styled.img`
  width: 18rem;
  height: 13rem;
`

export default Answer;