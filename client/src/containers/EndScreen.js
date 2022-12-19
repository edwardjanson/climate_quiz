import React from 'react'
import styled from 'styled-components'
import { Modal } from 'react-responsive-modal';
import { useState } from 'react'
import NavItem from "../components/NavItem"

const EndScreen = ({ toggleModal, open, goHome, tryAgain}) => {

  return (
    <Container>
      
      {open ? 
      <Modal open={open} onClose={toggleModal}>
        <p>Info testing 1, 2, 3 ...</p>
        <p>Why doesn't this work?!</p>
        <p>Text messaging, or texting, is the typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network, or may also be sent via an Internet connection.
            The term originally referred to messages sent using the Short Message Service nemailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voicemail and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require the caller and recipient to both be free at the same moment; this permits communication even between busy individuals. Text messages can also be used to interact with automated systems, for example, to order products or services from e-commerce websites, or to participate in online contests. Advertisers and service providers use direct text marketing to send messages to mobile users about promotions, payment due dates, and other notifications instead of using postal mail, email, or voicemail.</p>
    
      </Modal> : 
      <section>
        <NavItem> <a href='/'>Home</a></NavItem>
        <EndCard>
          <p>You have finished</p> 
          <p>Your total score is 35!</p>
          <Button className='overlay' onClick={toggleModal}>Find out more!</Button>
          <Button onClick={tryAgain}>Try Again</Button>
        </EndCard>
      </section>}
        
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


const EndCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  width: 85%;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 60%;
}

@media (min-width: 1200px) {
  width: 40%;
}
`
const Button = styled.button`
  padding: 1rem;
  width: 40%;
`


export default EndScreen;