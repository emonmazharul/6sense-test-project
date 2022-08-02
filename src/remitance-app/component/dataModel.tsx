import React,{useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {Row,Col,Table,Typography,Statistic,Button,Space} from 'antd'
import {columnsTwoInterface,data} from './dataSource'
import DataContext from '../context/context';
import { contextInterface } from '../types/type';
import Navbar from './navigation';
import { fontSize } from '@mui/system';

const Title = Typography.Title;

const DataModel:React.FC = () => {
  const navigate = useNavigate();
  const {remitance_history,totalAmount:{originalAmount,currentAmount}}:contextInterface = useContext(DataContext);
  return <>
    <Navbar/>
    <Title level={1} style={{textAlign:'center',fontSize:'2.5rem'}}>
      Total amount is = {originalAmount} & current value would be = {currentAmount} 
    </Title>
    <Row style={{width:'100%', marginTop:'25px'}} justify="center">
      <Col span={24}>
        <Table bordered={true} pagination={false} key='hello' dataSource={remitance_history} columns={columnsTwoInterface} size="large" />;
      </Col>
    </Row>
  </>
}


export default DataModel;