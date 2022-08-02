import React,{useContext,useState} from 'react'
import { Form,Row,Col,Typography,Input, Upload,Button,Alert,Image} from 'antd'
import {UploadOutlined } from '@ant-design/icons'
import DataContext from '../context/context'
import { contextInterface,RemitanceHistoryInterface,AlertType } from '../types/type'
import { numberConverter } from '../utils/utils'
import Navbar from './navigation'

const {Title} = Typography;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AddRmitanceHistory:React.FC = () => {
  const [form] = Form.useForm();
  const {add_remitance_history}:contextInterface = useContext(DataContext); 
  const [dataUploadError,setDataUploadError] = useState<{message:string,type:AlertType}>({message:'', type:undefined});
  const [shouldButtonSpin,setLoadingState] = useState<boolean>(false);
  
  const onFinishHandler = async (credentials:RemitanceHistoryInterface):Promise<void> => {
    numberConverter(credentials);
    setLoadingState(true);
    await add_remitance_history(credentials,setDataUploadError);
    setLoadingState(false);
  }

  return <>
    <Navbar/>
    <Row style={{height:'100vh'}} justify="space-between" align='middle'>
      <Col span={12}>
        <div style={{width:'50%', margin:'0 auto 15px auto'}}>
          <img
            src={'/picture.jpg'}
            alt="background picture"
            style={{display:'block',width:'100%',height:'400px'}}
          />
        </div>
        <div>
          <Title level={1} style={{textAlign:'center',letterSpacing:'1.3px'}}>
            ADD AN REMITANCE
          </Title>
        </div>
      </Col>
      <Col 
        span={12} 
        style={{margin:'0 auto'}}
      >
        <Form
          form={form}
          layout="vertical"
          size="middle"
          name="basic"
          labelCol={{span:8}}
          wrapperCol={{span:20}}
          initialValues={{remember:true}}
          autoComplete="off"
          onFinish={onFinishHandler}
        >
          <Form.Item 
            label="Total Pound" 
            name="totalPound" 
            rules={[{required:true,message:'This field is mandatory'}]}
          > 
            <Input type='number'/>
          </Form.Item>

          <Form.Item 
            label="Total Taka" 
            name="totalTaka" 
            rules={[{required:true,message:'This field is mandatory'}]}
          > 
            <Input type='number'/>
          </Form.Item>

          <Form.Item 
            label="Exchange Rate" 
            name="exchangeRate" 
            rules={[{required:true,message:'This field is mandatory'}]}
          > 
            <Input type='number'/>
          </Form.Item>

          <Form.Item
            label="Sending date"
            name="sendingDate"
            rules={[
              {required:true, message:'Please give a proper sending date'},
              () => ({
                validator(_, value) {
                  if (!value || value.match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/) !== null) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Please provide a date with YYYY-MM-DD format'));
                },
              })
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item 
            label="Paying Agent" 
            name="payingAgent" 
            rules={[{required:true,message:'This field is mandatory'}]}
          > 
            <Input/>
          </Form.Item>

          <Form.Item 
            label="Govt Incentive" 
            name="govtIncentive" 
          > 
            <Input/>
          </Form.Item>

          <Form.Item
            name="receiptImage"
            label="Upload receipt image"
            valuePropName="fileList"
            rules={[{required:true,message:'please select the receipt image'}]}
            getValueFromEvent={normFile}
            extra="upload an jpg or png file"
            
          >
            <Upload 
              name="logo" 
              // listType="picture"
              customRequest={() => {
                // console.log('do this');
              }} 
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          {dataUploadError.message && <Form.Item>
              <Alert message={dataUploadError.message} type={dataUploadError.type} showIcon/>
            </Form.Item> 
          }
          
          <Form.Item
            // wrapperCol={{offset: 16, span:8}}
          >
            <Button type="primary" htmlType="submit" loading={shouldButtonSpin}>
              Add Remitance
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </>
}

export default AddRmitanceHistory;