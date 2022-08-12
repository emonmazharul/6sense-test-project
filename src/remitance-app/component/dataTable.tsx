import React,{useContext} from 'react';
import {Row,Col,Table,Typography} from 'antd'
import {columns} from './dataModel'
import DataContext from '../context/context';
import { contextInterface } from '../types/type';
import Navbar from './navigation';

const Title = Typography.Title;

const DataTable:React.FC = () => {
  const {remitance_history,totalAmount:{originalAmount,currentAmount}}:contextInterface = useContext(DataContext);
  return <>
    <Navbar/>
    <div className="total_values">
      <Title level={1}>
        Total amount is = {originalAmount} & current value would be = {currentAmount} 
      </Title>
    </div>
    <Row style={{marginTop:'25px'}} justify="center">
      <Col span={24}>
        <Table 
          bordered={true} 
          pagination={false} 
          dataSource={remitance_history} 
          columns={columns} 
          size="large" 
        />;
      </Col>
    </Row>
  </>
}


export default DataTable;