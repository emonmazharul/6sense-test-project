import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./remitance-app/component/main";

const App:React.FC = () => {
 
 return <BrowserRouter>
    <MainComponent/>
  </BrowserRouter>
}

export default App;