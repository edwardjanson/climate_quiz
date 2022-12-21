import { useEffect, useState, useRef } from "react";
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GameLogic from "./containers/GameLogic";
import AboutScreen from "./containers/AboutScreen";


function App() {

  const [background, setBackground] = useState("");

  const updateBackground = (background) => {
    setBackground(background);
  }

  return (
    <Main>
      <GlobalStyle background={background} />
      <Router>
        <Routes>
          <Route path="/" element={< GameLogic updateBackground={updateBackground} />} />
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
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    .react-responsive-modal-modal {
      width: 100%;
      height: 100%;
      margin: auto;
      padding: 0;
      background: rgba(0, 0, 0, 0.9);
      color: white;
    }

    .react-responsive-modal-closeButton svg {
      fill: white;
    }

    .react-responsive-modal-overlay,
    .react-responsive-modal-container,
    .react-responsive-modal-modal {
      animation-fill-mode: forwards !important;
    }
  }
`

const Main = styled.div`
`

export default App;
