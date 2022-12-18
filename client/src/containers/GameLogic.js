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
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false)
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    if (!loaded) {
      const getAllData = async () => {
        const gatheredQuestions = await getQuestions();
        const gatheredUsers = await getUsers();
        setUsers(gatheredUsers)
        setQuestions(gatheredQuestions)
        setLoaded(true)
      } 
    getAllData();
  }}, [stage, loaded])
  return (
      <>
        {stage === "Start" ? 
          <StartScreen changeStage={changeStage} questions={questions}/> : ""}

        {stage === "General" ?
         <GeneralScreen changeStage={changeStage} questions={questions}/> : ""}

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