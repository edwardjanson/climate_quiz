import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useState } from 'react'

import Question from '../components/Question';
import Answer from '../components/Answer';
import GeneralBackground from '../components/GeneralBackground';
import WaterBackground from '../components/WaterBackground';
import LandBackground from '../components/LandBackground';
import AirBackground from '../components/AirBackground';
import SpaceBackground from '../components/SpaceBackground';
import EndBackground from '../components/EndBackground';


const QuestionsScreen = ({questions, stage, nextStage}) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const handleAnswerClick = (evt) => {
    if (evt.target.innerHTML) {
      if (evt.target.innerHTML === questions[currentQuestion].correct_answer) {
        // setScore(user.score + 1);
        setCorrectAnswer(true);
      } else {
        setCorrectAnswer(false);
      }
    } else {
      if (evt.target.src === questions[currentQuestion].correct_answer) {
          // setScore(user.score + 1);
        setCorrectAnswer(true);
      } else {
        setCorrectAnswer(false);
      }
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
        <Answer question={questions[currentQuestion]} onNextQuestion={nextQuestionClick} correctAnswer={correctAnswer} />
      }
      <>
        {stage === "General" ?
        <GeneralBackground/> : ""}

        {stage === "Water" ?
        <WaterBackground/> : ""}

        {stage === "Land" ?
        <LandBackground/> : ""}

        {stage === "Air" ?
        <AirBackground/> : ""}

        {stage === "Space" ?
        <SpaceBackground/> : ""}

        {stage === "End" ?
        <EndBackground/> : ""}
      </>
    </Container>
  )
}

const Container = styled.div`
`

export default QuestionsScreen;