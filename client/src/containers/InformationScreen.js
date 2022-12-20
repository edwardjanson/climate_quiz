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
      <Link href={question_link}>Find out more</Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Link = styled.a`
  color: white;
  text-align: center;
`

export default InformationScreen;