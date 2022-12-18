import React from 'react';
import styled from 'styled-components';


const Answer = ({onNextQuestion}) => {
  return (
    <Container>
      <button onClick={onNextQuestion}>Next</button>
    </Container>
  )
}

const Container = styled.div`
`

export default Answer;