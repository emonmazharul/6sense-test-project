import React,{useContext} from 'react'
import { Row,Col,Button,Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/context';
import { contextInterface } from '../types/type';

const Navbar:React.FC = () =>  {
  
  const navigate = useNavigate();
  const {user,logoutHandler}:contextInterface = useContext(DataContext); 
  
  // const homeRoute:string = user.fullname ? '/history' : '/';
  const username = user.fullname ? user.fullname : 'John Doe';
  const btnTexts:{btnOneText:string;btnTwoText:string} = user.fullname ? {btnOneText:'Logout', btnTwoText:'Add Remitance'} : {btnOneText:'Login',btnTwoText:'Home'};

  const buttonOnclickHandler = () => {
    if(user.fullname) {
      logoutHandler();
      return;
    }
    navigate('/');
  }

  return  <Row style={{width:'100%',backgroundColor:'black', marginBottom:'15px'}}>
    <Col span={20} style={{padding:'5px 0 5px 20px'}}>
      <Button 
        type='text' 
        style={{color:'#fff',fontSize:'2rem'}} 
        onClick={() => navigate(user.fullname ? '/history' : '/')}
      >
        Welcome {username}
      </Button>
    </Col>
    <Col span={4} style={{padding:'20px 0'}}>
        <Space>
          <Button type='primary' onClick={buttonOnclickHandler}>{btnTexts.btnOneText}</Button>
          <Button 
            type='primary'
            onClick={() => navigate(user.fullname ? '/add_remitance' : '/')}
          >
            {btnTexts.btnTwoText}
          </Button>
        </Space>
      </Col>
  </Row>
}

export default Navbar;