import React from 'react'
import styled, { keyframes } from 'styled-components'


const EndBackground = ({updateBackground}) => {

  const images = {
    left: ["https://www.pngmart.com/files/3/School-of-Fish-Transparent-Background.png",
            "https://www.pngmart.com/files/3/Real-Fish-PNG-Picture.png",
            "https://www.pngmart.com/files/4/Blue-Whale-PNG-Transparent.png",
            "https://www.pngmart.com/files/3/Real-Fish-PNG-Picture.png"],
    right: ["https://www.pngmart.com/files/3/Ocean-Fish-PNG-Photos.png",
            "https://www.pngmart.com/files/1/Fish-Meat.png",
            "https://www.pngmart.com/files/1/Fish-Meat.png",
            "https://www.pngmart.com/files/1/Fish-Meat.png"]
  }

  updateBackground("https://images.theconversation.com/files/223729/original/file-20180619-126566-1jxjod2.jpg")
  
  return (
    <Container>
      <div class="animations left">
        <div><img src={images["left"][0]} width="250px"></img></div>
        <div><img src={images["left"][1]} width="150px"></img></div>
        <div><img src={images["left"][2]} width="300px" ></img></div>
        <div><img src={images["left"][3]} width="100px"></img></div>       
      </div>
     
      <div class="animations right">
        <div><img src={images["right"][0]} width="225px"></img></div>
        <div><img src={images["right"][1]} width="100px"></img></div>
        <div><img src={images["right"][2]} width="200px" ></img></div>
        <div><img src={images["right"][3]} width="150px"></img></div>         
      </div>
    </Container>
  )
}

// used animation logic from: https://codepen.io/incrediblecast/pen/yLBmVXQ

const left = keyframes`
  0% {
    left: -10%;
  }
  100% {
    left: 110%;
  }
`

const right = keyframes`
  0% {
    right: -10%;
  }
  100% {
    right: 110%;
  }
`

const Container = styled.div`
  .animations {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .animations div {
    position: absolute;
    display: block;
  }

  .animations img {
    object-fit: contain;
  }

  // left animations
  .left div:nth-child(1) {
    bottom: 20%; 
    animation: ${left} 15s linear infinite;
    animation-delay: -2s;
  }

  .left div:nth-child(2) {
    bottom: 70%; 
    animation: ${left} 15s linear infinite;
    animation-delay: -4s;
  }

  .left div:nth-child(3) {
    bottom: 10%; 
    animation: ${left} 20s linear infinite;
    animation-delay: -7s;
  }

  .left div:nth-child(4) {
    bottom: 50%; 
    animation: ${left} 18s linear infinite; 
    animation-delay: -5s;
  }

  // right animations
  .right div:nth-child(1) {
    bottom: 60%; 
    animation: ${right} 15s linear infinite;
    animation-delay: -2s;
  }

  .right div:nth-child(2) {
    bottom: 40%; 
    animation: ${right} 15s linear infinite;
    animation-delay: -4s;
  }

  .right div:nth-child(3) {
    bottom: 80%; 
    animation: ${right} 20s linear infinite;
    animation-delay: -7s;
  }

  .right div:nth-child(4) {
    bottom: 30%; 
    animation: ${right} 18s linear infinite; 
    animation-delay: -5s;
  }
`

export default EndBackground;