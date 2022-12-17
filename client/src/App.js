import { useEffect, useState } from "react";
import StartScreen from "./containers/StartScreen";


function App() {
  
  const [stage, changeStage] = useState(1)

  return (
    stage === 1 ? 
    <StartScreen /> : ""
  )
  
}

export default App;
