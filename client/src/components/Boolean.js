import React from 'react';
import styled from 'styled-components';


const Boolean = ({question}) => {

  return (
    <>
        <p>{question.question}</p>
        <p>{question.correct_answer}</p>
        <p>{question.incorrect_answers[0]}</p>
    </>
  );
}


export default Boolean;