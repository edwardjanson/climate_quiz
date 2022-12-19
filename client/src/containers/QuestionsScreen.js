import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

import Question from '../components/Question';
import Answer from '../components/Answer';

const QuestionsScreen = ({questions, stage, nextStage}) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  const handleAnswerClick = (evt) => {
    if (evt.target.innerHTML === questions[currentQuestion].correct_answer) {
      // setScore(user.score + 1);
    }
    setQuestionAnswered(true);
  }

  const nextQuestionClick = () => {
    if (currentQuestion + 1 === questions.length){
      setCurrentQuestion(0);
      setQuestionAnswered(false);
      switch(stage) {
        case "General":
          nextStage("Water");
          break;
        case "Water":
          nextStage("Land");
          break;
        case "Land":
          nextStage("Air");
          break;
        case "Air":
          nextStage("Space");
          break;
        case "Space":
          nextStage("End");
          break;
        case "End":
          nextStage("Start");
          break;
      } 
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setQuestionAnswered(false);
    }
  }

  return (
    <Container>
      {!questionAnswered ?
        <Question question={questions[currentQuestion]} onAnswer={handleAnswerClick} />
      :
        <Answer question={questions[currentQuestion]} onNextQuestion={nextQuestionClick} />
      }
    </Container>
  )
}

const Container = styled.div`
`

export default QuestionsScreen;