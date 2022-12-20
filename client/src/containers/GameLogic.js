import React, { useState, useEffect } from 'react';
import { getQuestions } from '../QuestionService';
import { getUsers } from '../UsersService';
import { ReactDOM } from 'react-dom';
import StartScreen from "../containers/StartScreen";
import EndScreen from './EndScreen';
import QuestionsScreen from './QuestionsScreen';


const GameLogic = ({updateBackground}) => {

  const [stage, changeStage] = useState("Start");
  const [allQuestions, setAllQuestions] = useState([]);
  const [stageQuestions, setStageQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false)
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    if (!loaded) {
      const getAllData = async () => {
        const gatheredQuestions = await getQuestions();
        const gatheredUsers = await getUsers();
        setAllQuestions(gatheredQuestions);
        setUsers(gatheredUsers);
        setLoaded(true);
      }

      getAllData();
    }
  }, [stage, loaded])

  const nextStage = (stage) => {
    setStageQuestions(allQuestions.filter(question => question.section === stage))
    changeStage(stage);
  }

  const toggleModal = () => {
    setOpen(!open)
  }

  const tryAgain = () => {
    changeStage("General")
  }


  return (
      <>
        {stage === "Start" ? 
        <StartScreen nextStage={nextStage} updateBackground={updateBackground} /> : ""}

        {(stage === "General" || stage === "Water" || stage === "Land" || stage === "Air" || stage === "Space") ?
        <QuestionsScreen nextStage={nextStage} questions={stageQuestions} stage={stage} updateBackground={updateBackground} /> : ""}
         
        {stage === "End" ? 
        <EndScreen nextStage={nextStage} open={open} toggleModal={toggleModal} tryAgain={tryAgain} updateBackground={updateBackground} /> : ""}

      </>
    );
    
};

export default GameLogic;