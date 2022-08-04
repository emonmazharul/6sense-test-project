import React from "react";
import {Routes, Route, } from 'react-router-dom';
import ContextParent from "../context/contextParent";
import HomePage from "./home";
import DataModel from "./dataModel";
import AddRmitanceHistory from "./addRemitanceHistory";
import InvalidRoute from "./invalidRoute";

const RouteContainer:React.FC = () => {
  return <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/history" element={<DataModel/>}/>
      <Route path="/add_remitance" element={<AddRmitanceHistory/>}/>
      <Route path="*" element={<InvalidRoute/>}/>
    </Routes>
  </>
}

const MainComponent:React.FC = () => {
  return <ContextParent>
    <RouteContainer/>
  </ContextParent>
}


export default MainComponent;