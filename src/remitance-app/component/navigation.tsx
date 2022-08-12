import React,{useContext} from 'react'
import { Row,Col,Button,Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/context';
import { contextInterface } from '../types/type';

const Navbar:React.FC = () =>  {
  
  const navigate = useNavigate();
  const {user,logoutHandler}:contextInterface = useContext(DataContext); 
  const username = user.fullname ? user.fullname : 'John Doe';
  const btnTexts:{btnOneText:string;btnTwoText:string} = user.fullname ? {btnOneText:'Logout', btnTwoText:'Add Remitance'} : {btnOneText:'Login',btnTwoText:'Home'};

  const buttonOnclickHandler = () => {
    if(user.fullname) {
      logoutHandler();
      return;
    }
    navigate('/');
  }

  return <>  
      <div className='first_flex'>
        <div>
          <Button 
            id='nav_headline'
            type='text' 
            style={{color:'#fff'}} 
            onClick={() => navigate(user.fullname ? '/history' : '/')}
          >
            Welcome {username}
          </Button>
        </div>
        <div>
            <Button type='primary' size='large'  onClick={buttonOnclickHandler}>{btnTexts.btnOneText}</Button>
            <div style={{display:'inline-block',marginRight:'12px'}}></div>
            <Button 
              type='primary'
              size='large'
              onClick={() => navigate(user.fullname ? '/add_remitance' : '/')}
            >
              {btnTexts.btnTwoText}
            </Button>
        </div>
      </div>
      <Row justify='center'>
        <Col sm={{span:8}} lg={{span:0}} md={{span:0}} style={{padding:'20px 0'}}>
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
  </>
}

export default Navbar;