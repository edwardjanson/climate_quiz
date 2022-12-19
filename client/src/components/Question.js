import React from 'react';
import styled from 'styled-components';

import MultipleChoice from './MultipleChoice';
import Boolean from './Boolean';
import Image from './Image';


const Question = ({question, onAnswer}) => {

  const answers = [question.correct_answer, question.incorrect_answers].flat(1);

  const randomiseQuestions = (answers) => {
    // using the Fisher Yates Shuffle https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    for (let i = answers.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[randomIndex]] = [answers[randomIndex], answers[i]];
    }
  }

  randomiseQuestions(answers);
  
  return (
    <>
      {question.question_type === "Multiple Choice" ? 
            <MultipleChoice questionTitle={question.question} answers={answers} onAnswer={onAnswer} /> : ""}

      {question.question_type === "Bool" ? 
            <Boolean questionTitle={question.question} answers={answers} onAnswer={onAnswer} /> : ""}

      {question.question_type === "Images" ? 
            <Image questionTitle={question.question} answers={answers} onAnswer={onAnswer} /> : ""}
    </>
  )
}

const Container = styled.div`
`

export default Question;