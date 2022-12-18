import React from 'react';
import styled from 'styled-components';


const Image = ({question, onAnswer}) => {

  return (
    <>
        <p>{question.question}</p>
        <img onClick={onAnswer} src={question.correct_answer} />
        <img onClick={onAnswer} src={question.incorrect_answers[0]} />
    </>
  );
}


export default Image;