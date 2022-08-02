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
  const [showLoginPage,changeView] = useState<boolean>(false);
  const {isAuthenticated}:contextInterface =  useContext(DataContext);

  useEffect(() => {
    if(isAuthenticated) navigate('/history');
  }, [isAuthenticated])

  const clickHandler = () => {
    changeView(!showLoginPage);
  }
  return <Row align="middle" justify="space-around" style={{height:'80vh'}}>
    <Col span={6} style={{margin:'0 auto'}}>
      <Title level={1}>WELCOME TO THE REMITANCE TRACKER</Title>
      <Button type="primary" onClick={clickHandler}>
        {/* things goes down reverse thats whyt showLoginPage false show login text in login */}
        {showLoginPage === false ? 'Login' : 'Sign Up'}
      </Button>
    </Col>
    <Col span={8} style={{margin:'0 auto'}}>
    {showLoginPage === true ? <Login/> : <Signup/>}
    </Col>
    <br/>
  </Row>
}


export default HomePage;