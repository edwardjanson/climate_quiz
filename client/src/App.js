import { useEffect, useState } from "react";
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GameLogic from "./containers/GameLogic";
import AboutScreen from "./containers/AboutScreen";


function App() {

  return (
    <Main>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/" element={< GameLogic />} />
          <Route path="/about" element={< AboutScreen />} />
        </Routes>
      </Router>
    </Main>
  )
  
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    color: black;
  }
`

const Main = styled.div`
`

export default App;
