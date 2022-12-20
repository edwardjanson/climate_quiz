import React from 'react'

const Icon = ({stage}) => {
    
    return (
    <>
    {stage === "General" ? 
    <img src={require("../Images/general_image.png")} width="75px"/>
    :
    stage === "Land" ?
    <img src={require("../Images/land_image.png")} width="75px"/>
    :
    stage === "Water" ? 
    <img src={require("../Images/water_image.png")} width="75px"/>
    :
    stage === "Air" ?
    <img src={require("../Images/wind_image.png")} width="75px"/>
    :
    stage === "Space" ? 
    <img src={require("../Images/space_image.png")} width="75px"/>
    : ""}
    </>
  )
}

export default Icon;