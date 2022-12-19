import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

import Question from '../components/Question';
import Answer from '../components/Answer';

const QuestionsScreen = ({questions, stage}) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  const handleAnswerClick = (evt) => {
    console.log(evt)
    if (evt.target.innerHTML === questions[currentQuestion].correct_answer) {
      // setScore(user.score + 1);
    }
    setQuestionAnswered(true);
  }

  const nextQuestionClick = () => {
    setCurrentQuestion(currentQuestion + 1);
    setQuestionAnswered(false);
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