import React from 'react'
import styled from 'styled-components'
import { Modal } from 'react-responsive-modal';
import { useState, useEffect } from 'react';

import NavItem from "../components/NavItem"
import ContainerBox from '../components/ContainerBox';
import Button from '../components/Button';
import LeaderboardScreen from './LeaderboardScreen';


const EndScreen = ({removeUser, users, user, tryAgain}) => {

  const [open, setOpen] = useState(false);
  const [scoreRemoved, setScoreRemoved] = useState(false);

  return (
    <ContainerBox>
      <Modal open={open} onClose={() => setOpen(false)}>
        <LeaderboardScreen users={users} />
      </Modal> 
      <Navigation>
        <NavItem><a href='/'>Home</a></NavItem>
      </Navigation>
      <EndCard>
        <p>You have finished</p> 
        <p>{!scoreRemoved ? `Your score: ${user.score}` : "Your score was removed."}</p>
        <Button className='overlay' onClick={() => setOpen(true)}>Leaderboard</Button>
        <Button onClick={() => {
            removeUser();
            setScoreRemoved(true);
            }
        }>
          {!scoreRemoved ? "Remove Your Score" : "Score Removed"}
        </Button>
        <Button><a href='/about'>About</a></Button>
        <Button onClick={tryAgain}>Try Again</Button>
      </EndCard>
    </ContainerBox>
  )
}

const EndCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
`

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: right;
  padding: 1rem;
`

const InfoText = styled.p`
  text-align: center;
`

export default EndScreen;