import React from 'react'
import styled from 'styled-components'
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';

import NavItem from "../components/NavItem"
import ContainerBox from '../components/ContainerBox';
import Button from '../components/Button';
import LeaderboardScreen from './LeaderboardScreen';
import Title from '../components/Title';


const EndScreen = ({removeUser, users, user, tryAgain}) => {

  const [open, setOpen] = useState(false);
  const [scoreRemoved, setScoreRemoved] = useState(false);

  return (
    <ContainerBox>
      <Modal open={open} onClose={() => setOpen(false)}>
        <LeaderboardScreen users={users} />
      </Modal> 
      <Navigation>
        <NavItem><Link href='/'>Home</Link></NavItem>
      </Navigation>
      <EndCard>
        <Title>{!scoreRemoved ? `Your score: ${user.score}` : "Your score was removed."}</Title>
        <Button className='overlay' onClick={() => setOpen(true)}>Leaderboard</Button>
        <Button onClick={() => {
            removeUser();
            setScoreRemoved(true);
            }
        }>
          {!scoreRemoved ? "Remove Your Score" : "Score Removed"}
        </Button>
        <ButtonLink href='/about'><Button>About</Button></ButtonLink>
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
  padding: 2rem;
`

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: right;
  padding: 1rem;
`

const Link = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
      font-weight: bold;
      cursor: pointer;
  }
`

const ButtonLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
      color: black;
      cursor: pointer;
  }

  &:active {
    background: white;
    color: black;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`

export default EndScreen;