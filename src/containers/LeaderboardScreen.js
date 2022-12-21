import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';

const LeaderboardScreen = ({users}) => {

  const sortedRankings = users.sort((a,b) => (a.score < b.score ? 1 : -1)).slice(0, 20);;

  const rankingItems = sortedRankings.map((user, index) => {
    return <span>{index + 1}. {user.nickname} scored {user.score}</span>
  });

  return (
    <Container>
      <Title>Leaderboard</Title>
      <Rankings>
        {rankingItems}
      </Rankings>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.3rem;
`

const Rankings = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.5rem;
`

export default LeaderboardScreen;