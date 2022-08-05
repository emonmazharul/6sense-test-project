import React, {useState,useContext, useEffect }  from "react";
import {Button,Typography,Col,Row} from 'antd';
import { useNavigate } from "react-router-dom";
import DataContext from "../context/context";
import Signup from "./signup";
import Login from './login'
import { contextInterface } from "../types/type";

const {Title} = Typography;

const HomePage:React.FC = () => {
  const navigate = useNavigate();
  const lastSelectedComponent:string = localStorage.getItem('view') || 'Sign Up';
  const [elemName,changeElemName] = useState<string>(lastSelectedComponent);
  const {isAuthenticated}:contextInterface =  useContext(DataContext);

  useEffect(() => {
    if(isAuthenticated) navigate('/history');
  }, [isAuthenticated])

  const clickHandler = () => {
    const new_selected_elem:string = elemName === 'Sign Up' ? 'Login' : 'Sign Up';
    localStorage.setItem('view', new_selected_elem);
    changeElemName(new_selected_elem);
  }
  return <Row align="middle" justify="space-around" style={{height:'80vh'}}>
    <Col span={6} style={{margin:'0 auto'}}>
      <Title level={1}>WELCOME TO THE REMITANCE TRACKER</Title>
      <Button type="primary" onClick={clickHandler}>
        {/* things goes down reverse thats whyt showLoginPage false show login text in login */}
        {elemName === 'Sign Up' ? 'Login' : 'Sign Up'}
      </Button>
    </Col>
    <Col span={8} style={{margin:'0 auto'}}>
    {elemName === 'Sign Up' ? <Signup/> : <Login/>}
    </Col>
    <br/>
  </Row>
}


export default HomePage;