import React from 'react';
import styled from 'styled-components'

const Icon = ({stage}) => {
    
    return (
    <IconBox>
      {stage === "General" ? 
      <img src={require("../Images/general_image.png")} width="50px"/>
      :
      stage === "Land" ?
      <img src={require("../Images/land_image.png")} width="50px"/>
      :
      stage === "Water" ? 
      <img src={require("../Images/water_image.png")} width="50px"/>
      :
      stage === "Air" ?
      <img src={require("../Images/wind_image.png")} width="50px"/>
      :
      stage === "Space" ? 
      <img src={require("../Images/space_image.png")} width="50px"/>
      : ""}
    </IconBox>
  )
}

const IconBox = styled.div`
  margin: 2rem;
`

export default Icon;