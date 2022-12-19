import React, { useState, useEffect } from 'react';
import { getQuestions } from '../QuestionService';
import { getUsers } from '../UsersService';

import StartScreen from "../containers/StartScreen";
import EndScreen from './EndScreen';
import QuestionsScreen from './QuestionsScreen';


const GameLogic = () => {

  const [stage, changeStage] = useState("Start");
  const [allQuestions, setAllQuestions] = useState([]);
  const [stageQuestions, setStageQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false)
  const [users, setUsers] = useState([]);
  
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

  return (
      <>
        {stage === "Start" ? 
          <StartScreen nextStage={nextStage} /> : ""}

        {stage !== "Start" || stage !== "End" ?
         <QuestionsScreen nextStage={nextStage} questions={stageQuestions} stage={stage}/> : ""}
         
        {stage === "End" ? 
        <EndScreen nextStage={nextStage} /> : ""}

      </>
    );
    
};

export default GameLogic;