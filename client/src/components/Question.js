import React from 'react';
import styled from 'styled-components';

import MultipleChoice from './MultipleChoice';
import Boolean from './Boolean';
import Image from './Image';


const Question = ({question, onAnswer}) => {
  
  return (
    <>
      {question.question_type === "Multiple Choice" ? 
            <MultipleChoice question={question} onAnswer={onAnswer} /> : ""}

      {question.question_type === "Bool" ? 
            <Boolean question={question} onAnswer={onAnswer} /> : ""}

      {question.question_type === "Images" ? 
            <Image question={question} onAnswer={onAnswer} /> : ""}
    </>
  )
}

const Container = styled.div`
`

export default Question;