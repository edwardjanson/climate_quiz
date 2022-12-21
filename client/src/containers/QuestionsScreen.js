import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react';

import Question from '../components/Question';
import Answer from '../components/Answer';
import GeneralBackground from '../components/GeneralBackground';
import WaterBackground from '../components/WaterBackground';
import LandBackground from '../components/LandBackground';
import AirBackground from '../components/AirBackground';
import SpaceBackground from '../components/SpaceBackground';
import EndBackground from '../components/EndBackground';
import ContainerBox from '../components/ContainerBox';
import Icon from '../components/Icon';


const QuestionsScreen = ({addNewUser, questions, stage, nextStage, updateBackground, user, setUser}) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const increaseScore = () => {
   const userScore = {...user}
    userScore.score += 5
    setUser(userScore) 
  }

  const handleAnswerClick = (evt) => {
    if (evt.target.innerHTML) {
      if (evt.target.innerHTML === questions[currentQuestion].correct_answer) {
        increaseScore();
        setCorrectAnswer(true);
      } else {
        setCorrectAnswer(false);
      }
    } else {
      if (evt.target.src === questions[currentQuestion].correct_answer) {
        increaseScore();
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
          addNewUser();
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
        <Question question={questions[currentQuestion]} onAnswer={handleAnswerClick} stage={stage}/>
      :
        <Answer question={questions[currentQuestion]} onNextQuestion={nextQuestionClick} correctAnswer={correctAnswer} stage={stage}/>
      }
      <>
        {stage === "General" ?
        <GeneralBackground updateBackground={updateBackground} /> : ""}

        {stage === "Water" ?
        <WaterBackground updateBackground={updateBackground} /> : ""}

        {stage === "Land" ?
        <LandBackground updateBackground={updateBackground} /> : ""}

        {stage === "Air" ?
        <AirBackground updateBackground={updateBackground} /> : ""}

        {stage === "Space" ?
        <SpaceBackground updateBackground={updateBackground} /> : ""}

        {stage === "End" ?
        <EndBackground updateBackground={updateBackground} /> : ""}
      </>
    </Container>
  )
}

const Container = styled.div`
`

export default QuestionsScreen;