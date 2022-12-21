import React from 'react'
import styled, { keyframes } from 'styled-components'


const AirBackground = ({updateBackground}) => {

  const images = {
    left: ["https://www.pngmart.com/files/7/Air-Balloon-PNG-Picture.png",
            "https://www.pngarts.com/files/5/Airplane-Transparent-Image.png",
            "https://www.pngarts.com/files/5/Airplane-Transparent-Image.png",
            "https://www.pngarts.com/files/10/Flock-of-Birds-PNG-Background-Image.png"],
    right: ["https://www.pngarts.com/files/1/Qantas-Plane-Transparent-Background-PNG.png",
            "https://www.pngarts.com/files/3/Red-Helicopter-PNG-Image.png",
            "https://www.pngmart.com/files/7/Air-Balloon-PNG-Picture.png",
            "https://www.pngarts.com/files/5/Drone-PNG-Picture.png"],

  }

  updateBackground("https://www.pixelstalk.net/wp-content/uploads/2016/05/Desktop-Sky-Backgrounds.jpg")
  
  return (
    <Container>
      <div className="animations left">
        <div><img src={images["left"][0]} width="175px"></img></div>
        <div><img src={images["left"][1]} width="150px"></img></div>
        <div><img src={images["left"][2]} width="250px" ></img></div>
        <div><img src={images["left"][3]} width="100px"></img></div>       
      </div>
     
      <div className="animations right">
        <div><img src={images["right"][0]} width="225px"></img></div>
        <div><img src={images["right"][1]} width="100px"></img></div>
        <div><img src={images["right"][2]} width="160px" ></img></div>
        <div><img src={images["right"][3]} width="100px"></img></div>         
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
    overflow: hidden;
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

export default AirBackground;