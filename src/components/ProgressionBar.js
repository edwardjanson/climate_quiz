import React from 'react'
import styled from 'styled-components'


const ProgressionBar = (progress) => {

  return (
    <ProgressBar>
      <progress value={progress.progress.questionNumber} max={progress.progress.questionLength}/>
    </ProgressBar>
  )
}

const ProgressBar = styled.div`
    margin-bottom: 2rem;
`

export default ProgressionBar;
