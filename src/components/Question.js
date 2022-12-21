import React from 'react';
import styled from 'styled-components';

import MultipleChoice from './MultipleChoice';
import Boolean from './Boolean';
import Image from './Image';


const Question = ({question, onAnswer, stage, progress}) => {

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
            <MultipleChoice questionTitle={question.question} answers={answers} onAnswer={onAnswer} stage={stage} progress={progress}/> : ""}

      {question.question_type === "Bool" ? 
            <Boolean questionTitle={question.question} answers={answers} onAnswer={onAnswer} stage={stage} progress={progress}/> : ""}

      {question.question_type === "Images" ? 
            <Image questionTitle={question.question} answers={answers} onAnswer={onAnswer} stage={stage} progress={progress}/> : ""}
    </>
  )
}

const Container = styled.div`
`

export default Question;