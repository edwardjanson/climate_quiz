import React, { useState, useEffect } from 'react';

import StartScreen from "../containers/StartScreen";
import EndScreen from './EndScreen';
import QuestionsScreen from './QuestionsScreen';
import { questionData } from './QuestionData';
import { userData } from './UserData';


const GameLogic = ({updateBackground}) => {

  const [stage, changeStage] = useState("Start");
  const [allQuestions, setAllQuestions] = useState([]);
  const [stageQuestions, setStageQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false)
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [progress, updateProgress] = useState({});

  useEffect(() => {
    if (!loaded) {
        setAllQuestions(questionData);
        setUsers(userData);
        updateProgress({questionNumber: 0, questionLength: questionData.length});
        setLoaded(true);
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

    const newQuestionNumber = {...progress};
    newQuestionNumber["questionNumber"] = 0;
    updateProgress(newQuestionNumber) 
  }

  const addNewUser = () => {
    const newUsers = [...users];
    newUsers.push(user);
    setUsers(newUsers);
  }

  const updateQuestionNumber = () => {
    const newQuestionNumber = {...progress};
    newQuestionNumber["questionNumber"] += 1;
    updateProgress(newQuestionNumber) 
  }

  const removeUser = () => {
    const newUsers = [...users];
    const userIndex = newUsers.findIndex(searched_user => searched_user._id === user._id);
    if (userIndex > -1) {
      newUsers.splice(userIndex, 1);
      setUsers(newUsers);
    }

    const userReset = {nickname: user.nickname, score: 0, _id: 1};
    setUser(userReset);
  };

  return (
      <>
        {stage === "Start" ? 
        <StartScreen users={users} nextStage={nextStage} updateBackground={updateBackground} user={user} setUser={setUser} />  : ""}

        {(stage === "General" || stage === "Water" || stage === "Land" || stage === "Air" || stage === "Space") ?

        <QuestionsScreen addNewUser={addNewUser} nextStage={nextStage} questions={stageQuestions} stage={stage} updateBackground={updateBackground} user={user} setUser={setUser} updateQuestionNumber={updateQuestionNumber} progress={progress}/> : ""}
         
        {stage === "End" ? 
        <EndScreen removeUser={removeUser} users={users} user={user} nextStage={nextStage} tryAgain={tryAgain} updateBackground={updateBackground} /> : ""}
      </>
    );
    
};

export default GameLogic;