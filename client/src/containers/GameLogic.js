import React, { useState, useEffect } from 'react';

import StartScreen from "../containers/StartScreen";
import WaterScreen from './WaterScreen';
import GeneralScreen from './GeneralScreen';
import SpaceScreen from './SpaceScreen';
import LandScreen from './LandScreen';
import AirScreen from './AirScreen';


const GameLogic = () => {

  const [stage, changeStage] = useState(1);

  useEffect(() => {
  }, [stage])

  return (
      <>
        {stage === 1 ? 
          <StartScreen changeStage={changeStage} /> : ""}

        {stage === 2 ?
          <GeneralScreen /> : ""}

        {stage === 3 ?
          <WaterScreen /> : ""}

        {stage === 4 ?
          <LandScreen /> : ""}

        {stage === 5 ?
          <AirScreen /> : ""}

        {stage === 6 ?
          <SpaceScreen /> : ""}
        
      </>
    );
    
};

export default GameLogic;