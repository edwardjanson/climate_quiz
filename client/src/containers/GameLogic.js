import React, { useState, useEffect } from 'react';
import { getQuestions } from '../QuestionService';
import { getUsers } from '../UsersService';
import { ReactDOM } from 'react-dom';
import StartScreen from "../containers/StartScreen";
import EndScreen from './EndScreen';
import QuestionsScreen from './QuestionsScreen';
import Icon from '../components/Icon';


const GameLogic = ({updateBackground}) => {

  const [stage, changeStage] = useState("Start");
  const [allQuestions, setAllQuestions] = useState([]);
  const [stageQuestions, setStageQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false)
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({})
  
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

  const tryAgain = () => {
    const userToUpdate = {...user}
    userToUpdate.score = 0
    setUser(userToUpdate)
    nextStage("General")
  }

  const addNewUser = (data) => {
    const newUsers = [...users];
    newUsers.push(data)
    setUsers(newUsers)
  }


  return (
      <>
        {stage === "Start" ? 
        <StartScreen nextStage={nextStage} updateBackground={updateBackground} addNewUser={addNewUser} user={user} setUser={setUser} />  : ""}

        {(stage === "General" || stage === "Water" || stage === "Land" || stage === "Air" || stage === "Space") ? <>
    
        <QuestionsScreen nextStage={nextStage} questions={stageQuestions} stage={stage} updateBackground={updateBackground} user={user} setUser={setUser}/></>: ""}
         
        {stage === "End" ? 
        <EndScreen nextStage={nextStage} tryAgain={tryAgain} updateBackground={updateBackground} user={user}/> : ""}

      </>
    );
    
};

export default GameLogic;