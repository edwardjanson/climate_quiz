import React, { useState, useEffect } from 'react';

import StartScreen from "../containers/StartScreen";
import WaterScreen from './WaterScreen';
import GeneralScreen from './GeneralScreen';
import SpaceScreen from './SpaceScreen';
import LandScreen from './LandScreen';
import AirScreen from './AirScreen';
import { getQuestions } from '../QuestionService';
import { getUsers } from '../UsersService';


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
      
    } else {
      setStageQuestions(allQuestions.filter(question => question.section === stage))
    }

  }, [stage, loaded])

  const nextStage = (stage) => {
    changeStage(stage);
  }

  return (
      <>
        {stage === "Start" ? 
          <StartScreen nextStage={nextStage} /> : ""}

        {stage === "General" ?
         <GeneralScreen nextStage={nextStage} questions={stageQuestions}/> : ""}

        {stage === "Water" ?
          <WaterScreen /> : ""}

        {stage === "Land" ?
          <LandScreen /> : ""}

        {stage === "Air" ?
          <AirScreen /> : ""}

        {stage === "Space" ?
          <SpaceScreen /> : ""}
        
      </>
    );
    
};

export default GameLogic;