import React from 'react';
import styled from 'styled-components';


const MultipleChoice = ({question}) => {

  return (
    <>
        <p>{question.question}</p>
        <p>{question.correct_answer}</p>
        <p>{question.incorrect_answers[0]}</p>
        <p>{question.incorrect_answers[1]}</p>
        <p>{question.incorrect_answers[2]}</p>
    </>
  );
}


export default MultipleChoice;