import React, {useState,useContext }  from "react";
import {Button,Input,Typography,Form,Alert} from 'antd'
import { AlertType, contextInterface, SignUpUser } from "../types/type";
import DataContext from "../context/context";

const {Title} = Typography;


const Signup:React.FC = () => {
  const [form] = Form.useForm();
  const {signUpHandler}:contextInterface = useContext(DataContext);
  const [signUpResult,setSignUpResult] = useState<{message:string;type:AlertType}>({message:'', type:undefined})
  const [shouldButtonSpin,setLoadingState] = useState<boolean>(false);
  
  const onFinishHandler = async (credentials:SignUpUser):Promise<void> => {
    setLoadingState(true);
    await signUpHandler(credentials,setSignUpResult);
    setLoadingState(false);
  }

  return <>
    <Title level={1}> Signup  </Title>
    <Form
      form={form}
      onFinish={onFinishHandler}  
      layout="vertical"
      size="large"
      name="basic"
      labelCol={{span:8}}
      wrapperCol={{span:20}}
      initialValues={{remember:true}}
      autoComplete="off"
    >
      <Form.Item
        label="Full Name"
        name="fullname"
        rules={[{required:true, message:'Please input your fullname'}]}
      >
        <Input/>
      </Form.Item>

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
        signUpResult.message && ( <Form.Item>
          <Alert message={signUpResult.message} type={signUpResult.type} showIcon/>
        </Form.Item>
        )
      }

      <Form.Item
      >
        <Button type="primary" htmlType="submit" loading={shouldButtonSpin}>
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  </>
}


export default Signup;