import React from 'react';
import styled from 'styled-components';


const Image = ({question}) => {

  return (
    <>
        <p>{question.question}</p>
        <img src={question.correct_answer} />
        <img src={question.incorrect_answers[0]} />
    </>
  );
}


export default Image;