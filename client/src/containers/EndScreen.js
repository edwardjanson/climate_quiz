import React from 'react'
import styled from 'styled-components'
import { Modal } from 'react-responsive-modal';
import { useState } from 'react'


const EndScreen = ({ toggleModal, open, nextStage, tryAgain}) => {

  return (
    <Container>
      
      {open ? 
      <Modal open={open} onClose={toggleModal}>
        <p>Info testing 1, 2, 3 ...</p>
        <p>Why doesn't this work?!</p>
        <p>Text messaging, or texting, is the typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network, or may also be sent via an Internet connection.
            The term originally referred to messages sent using the Short Message Service nemailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voicemail and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require the caller and recipient to both be free at the same moment; this permits communication even between busy individuals. Text messages can also be used to interact with automated systems, for example, to order products or services from e-commerce websites, or to participate in online contests. Advertisers and service providers use direct text marketing to send messages to mobile users about promotions, payment due dates, and other notifications instead of using postal mail, email, or voicemail.</p>
    
      </Modal> : 
      <div> 
      <p>You have finished</p> 
      <p>Your total score is 35!</p>
      <button className='overlay' onClick={toggleModal}>Find out more!</button>
      <button onClick={tryAgain}>Try Again</button>
      </div>}
        
    </Container>
  )
}

const Container = styled.div`
`

export default EndScreen;