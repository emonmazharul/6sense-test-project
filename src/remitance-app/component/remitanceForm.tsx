import React,{useContext,useState} from 'react'
import { Form,Input, Upload,Button,Alert} from 'antd'
import {InboxOutlined } from '@ant-design/icons'
import DataContext from '../context/context'
import { contextInterface,RemitanceHistoryInterface,AlertType } from '../types/type'
import { numberConverter } from '../utils/utils'


const normFile:any = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e.fileList ? e.fileList : '';
};

const  RemitanceForm:React.FC = () => {
  const [form] = Form.useForm();
  const {add_remitance_history}:contextInterface = useContext(DataContext); 
  const [dataUploadError,setDataUploadError] = useState<{message:string,type:AlertType}>({message:'', type:undefined});
  const [shouldButtonSpin,setLoadingState] = useState<boolean>(false);
  
  const onFinishHandler = async (credentials:RemitanceHistoryInterface):Promise<void> => {
    numberConverter(credentials);
    setLoadingState(true);
    await add_remitance_history(credentials,setDataUploadError);
    setLoadingState(false);
    form.setFieldsValue({
      receiptImage: [],
      totalTaka:'',
      pinNumber:'',
      totalPound:'',
      exchangeRate:'',
      govtIncentive:'',
    })
  }

  return <Form
    className='remitance_form'
    form={form}
    layout="vertical"
    name="basic"
    wrapperCol={{lg:{span:16}, xs:{span:10}}}
    initialValues={{remember:true}}
    autoComplete="off"
    onFinish={onFinishHandler}
  >
    <Form.Item 
      label="Pin Number" 
      name="pinNumber" 
      rules={[{required:true,message:'You have to provide the pin number with a length of >= 5',min:5}]}
    > 
      <Input type='number'/>
    </Form.Item>

    <Form.Item 
      label="Total Pound" 
      name="totalPound" 
      rules={[{required:true,message:'Pleae set a total pound'}]}
    > 
      <Input type='number'/>
    </Form.Item>

    <Form.Item 
      label="Total Taka" 
      name="totalTaka" 
      rules={[{required:true,message:'Pleae set a total taka'}]}
    > 
      <Input type='number'/>
    </Form.Item>

    <Form.Item 
      label="Exchange Rate" 
      name="exchangeRate" 
      rules={[{required:true,message:'There must be an exchange rate'}]}
    > 
      <Input type='number'/>
    </Form.Item>

    <Form.Item
      label="Sending date"
      name="sendingDate"
      rules={[
        {required:true, message:'Please set the valid sending date'},
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
    rules={[{required:true,message:'The should be an paying agent'}]}
  > 
    <Input/>
  </Form.Item>

  <Form.Item 
    label="Govt Incentive" 
    name="govtIncentive" 
  > 
    <Input type="number"/>
  </Form.Item>


  <Form.Item label="Dragger">
    <Form.Item 
      name="receiptImage" 
      valuePropName="fileList" 
      getValueFromEvent={normFile} 
      noStyle
      rules={[{required:true,message:'please select the receipt image'}]}
    >
      <Upload.Dragger 
        name="files" 
        multiple={false}
        showUploadList={false}
        customRequest={() => {
          // pass
        }}
        accept=".png,.jpg,.jpeg"
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
        </Upload.Dragger>
      </Form.Item>
    </Form.Item>

  {dataUploadError.message && <Form.Item>
      <Alert message={dataUploadError.message} type={dataUploadError.type} showIcon/>
    </Form.Item> 
  }
  
  <Form.Item
  >
    <Button type="primary" htmlType="submit" loading={shouldButtonSpin}>
      Add Remitance
    </Button>
  </Form.Item>
</Form>
}


export default RemitanceForm;