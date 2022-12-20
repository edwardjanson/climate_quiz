import React from 'react';
import styled from 'styled-components';


const ContainerBox = ({children}) => {
  return (
    <Container>
        <Box>
            {children}
        </Box>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.8);
  width: 85%;
  min-height: 20rem;
  border-radius: 5px;
  min-height: 20rem;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`

export default ContainerBox;