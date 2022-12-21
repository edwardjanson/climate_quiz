import React from 'react'
import styled, { keyframes } from 'styled-components'


const LandBackground = ({updateBackground}) => {

  const images = {
    left: ["https://www.pngarts.com/files/1/Clouds-PNG-Image.png",
            "https://www.pngarts.com/files/1/Clouds-PNG-Image.png",
            "https://www.pngarts.com/files/1/Clouds-PNG-Image.png"],
    right: ["https://www.pngarts.com/files/1/Clouds-PNG-Image.png",
            "https://www.pngarts.com/files/1/Clouds-PNG-Image.png",
            "https://www.pngarts.com/files/1/Clouds-PNG-Image.png"]
  }

  updateBackground("https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg")
  
  return (
    <Container>
      <div className="animations left">
        <div><img src={images["left"][0]} width="800px"></img></div>
        <div><img src={images["left"][1]} width="600"></img></div>
        <div><img src={images["left"][2]} width="500px" ></img></div>   
      </div>
     
      <div className="animations right">
        <div><img src={images["right"][0]} width="900px"></img></div>
        <div><img src={images["right"][1]} width="700px"></img></div>
        <div><img src={images["right"][2]} width="400px" ></img></div>       
      </div>
    </Container>
  )
}

// used animation logic from: https://codepen.io/incrediblecast/pen/yLBmVXQ

const left = keyframes`
  0% {
    opacity: 0;
    left: -10%;
  }
  100% {
    opacity: 1;
    left: 110%;
  }
`

const right = keyframes`
  0% {
    opacity: 0;
    right: -10%;
  }
  100% {
    opacity: 1;
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
    bottom: 80%; 
    animation: ${left} 7s linear infinite;
    animation-delay: -2s;
  }

  .left div:nth-child(2) {
    bottom: 70%; 
    animation: ${left} 10s linear infinite;
    animation-delay: -4s;
  }

  .left div:nth-child(3) {
    bottom: 70%; 
    animation: ${left} 15s linear infinite;
    animation-delay: -4s;
  }

  // right animations
  .right div:nth-child(1) {
    bottom: 70%; 
    animation: ${right} 6s linear infinite;
    animation-delay: -2s;
  }

  .right div:nth-child(2) {
    bottom: 55%; 
    animation: ${right} 9s linear infinite;
    animation-delay: -4s;
  }

  .right div:nth-child(3) {
    bottom: 65%; 
    animation: ${right} 14s linear infinite;
    animation-delay: -7s;
  }
`

export default LandBackground;