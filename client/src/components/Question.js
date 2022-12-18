import React from 'react';
import styled from 'styled-components';

import MultipleChoice from './MultipleChoice';
import Boolean from './Boolean';
import Image from './Image';


const Question = ({question}) => {
  
  return (
    <>
      {question.question_type === "Multiple Choice" ? 
            <MultipleChoice question={question} /> : ""}

      {question.question_type === "Bool" ? 
            <Boolean question={question} /> : ""}

      {question.question_type === "Images" ? 
            <Image question={question} /> : ""}
    </>
  )
}

const Container = styled.div`
`

export default Question;