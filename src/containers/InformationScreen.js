import React from 'react';
import styled from 'styled-components';

import Title from '../components/Title';
import TextBox from '../components/TextBox';


const InformationScreen = ({info_paragraphs, question_link}) => {

  const paragraphs = info_paragraphs.map((paragraph) => {
    return <p>{paragraph}</p>
  });

  return (
    <Container>
      <Title>Information</Title>
      <TextBox>{paragraphs}</TextBox>
      <Link href={question_link} target="_blank" rel="noopener noreferrer">Find out more</Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 90%;
  margin: auto;
  font-size: 1.3rem;
`

const Link = styled.a`
  color: white;
  text-align: center;
`

export default InformationScreen;