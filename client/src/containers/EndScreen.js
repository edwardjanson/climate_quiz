import React from 'react'
import styled from 'styled-components'
import { Modal } from 'react-responsive-modal';

import NavItem from "../components/NavItem"
import ContainerBox from '../components/ContainerBox';
import Button from '../components/Button';


const EndScreen = ({ toggleModal, open, tryAgain}) => {

  return (
    <ContainerBox>
      
      {open ?
      <Modal open={open} onClose={toggleModal}>
        <InfoText> LEADERBOARD <br/>Text messaging, or texting, is the typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network, or may also be sent via an Internet connection.
            The term originally referred to messages sent using the Short Message Service nemailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voicemail and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require the caller and recipient to both be free at the same moment; this permits communication even between busy individuals. Text messages can also be used to interact with automated systems, for example, to order products or services from e-commerce websites, or to participate in online contests. Advertisers and service providers use direct text marketing to send messages to mobile users about promotions, payment due dates, and other notifications instead of using postal mail, email, or voicemail.</InfoText>
    
      </Modal> : 
      <section>
        <Navigation>
          <NavItem><a href='/'>Home</a></NavItem>
        </Navigation>
        <EndCard>
          <p>You have finished</p> 
          <p>Your total score is 35!</p>
          <Button className='overlay' onClick={toggleModal}>Leaderboard</Button>
          <Button> <a href='/about'>About</a></Button>
          <Button onClick={tryAgain}>Try Again</Button>
        </EndCard>
      </section>}
        
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