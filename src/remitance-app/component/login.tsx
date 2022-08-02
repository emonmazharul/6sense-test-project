import React, {useState,useContext}  from "react";
import {Button,Input,Typography,Form,Alert} from 'antd'
import { useForm } from "antd/lib/form/Form";
import DataContext from "../context/context";
import { AlertType, contextInterface, LoginUser } from "../types/type";

const {Title} = Typography;


const Login:React.FC = () => {
  const [form] = useForm();
  const {loginHandler}:contextInterface= useContext(DataContext);
  const [loginResult,setLoginResult] = useState<{message:string;type:AlertType}>({message:'', type:undefined})
  const [shouldButtonSpin,setLoadingState] = useState<boolean>(false);

  const onFinish = async (values:LoginUser):Promise<void> => {
    setLoadingState(true);
    await loginHandler(values,setLoginResult);
    setLoadingState(false);
  }  

  return <>
    <Title level={1}> Login  </Title>
    <Form 
      form={form}
      onFinish={onFinish}
      layout="vertical"
      size="large"
      name="basic"
      labelCol={{span:8}}
      wrapperCol={{span:20}}
      initialValues={{remember:true}}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{required:true, message:'Please input you email'}]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{required:true, message:'Please provide your password'}]}
        
      >
        <Input.Password/>
      </Form.Item>
      {
        loginResult.message && ( <Form.Item>
          <Alert message={loginResult.message} type={loginResult.type} showIcon/>
        </Form.Item>
        )
      }
      <Form.Item
        // wrapperCol={{offset: 16, span:8}}
      >
        <Button type="primary" htmlType="submit" loading={shouldButtonSpin}>
          Login
        </Button>
      </Form.Item>
    </Form>
  </>
}

export default Login;