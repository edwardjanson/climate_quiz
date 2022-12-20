import React, { useState, useEffect } from 'react';
import { getQuestions } from '../QuestionService';
import { getUsers } from '../UsersService';
import { ReactDOM } from 'react-dom';

import { postUser, deleteUser } from "../UsersService";
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

  const addNewUser = () => {
    postUser(user)
    .then(data => {
      const newUsers = [...users];
      newUsers.push(data);
      setUsers(newUsers);
      setUser(data);
    });
  }

  const removeUser = () => {
    const newUsers = [...users];
    const userIndex = newUsers.findIndex(searched_user => searched_user._id === user._id);
    if (userIndex > -1) {
      console.log("found");
      newUsers.splice(userIndex, 1);
      setUsers(newUsers);
    }

    const userReset = {nickname: user.nickname, score: 0};
    setUser(userReset);
    deleteUser(user._id);
  };

  return (
      <>
        {stage === "Start" ? 
        <StartScreen users={users} nextStage={nextStage} updateBackground={updateBackground} user={user} setUser={setUser} />  : ""}

        {(stage === "General" || stage === "Water" || stage === "Land" || stage === "Air" || stage === "Space") ?

        <QuestionsScreen addNewUser={addNewUser} nextStage={nextStage} questions={stageQuestions} stage={stage} updateBackground={updateBackground} user={user} setUser={setUser}/> : ""}
         
        {stage === "End" ? 
        <EndScreen removeUser={removeUser} users={users} user={user} nextStage={nextStage} tryAgain={tryAgain} updateBackground={updateBackground} /> : ""}
      </>
    );
    
};

export default GameLogic;