import React, { useState, useEffect } from 'react';

import StartScreen from "../containers/StartScreen";
import WaterScreen from './WaterScreen';


const GameLogic = () => {

  const [stage, changeStage] = useState(1);

  useEffect(() => {
  }, [stage])

  return (
      <>
        {stage === 1 ? 
          <StartScreen changeStage={changeStage} /> : ""}

        {stage === 2 ?
          <WaterScreen /> : ""}
      </>
    );
    
};

export default GameLogic;