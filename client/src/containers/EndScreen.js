import React from 'react'
import styled from 'styled-components'
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';

import NavItem from "../components/NavItem"
import ContainerBox from '../components/ContainerBox';
import Button from '../components/Button';
import LeaderboardScreen from './LeaderboardScreen';


const EndScreen = ({tryAgain}) => {

  const [open, setOpen] = useState(false);

  return (
    <ContainerBox>
      <Modal open={open} onClose={() => setOpen(false)}>
        <LeaderboardScreen/>
      </Modal> 
      <Navigation>
        <NavItem><a href='/'>Home</a></NavItem>
      </Navigation>
      <EndCard>
        <p>You have finished</p> 
        <p>Your total score is 35!</p>
        <Button className='overlay' onClick={() => setOpen(true)}>Leaderboard</Button>
        <Button> <a href='/about'>About</a></Button>
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