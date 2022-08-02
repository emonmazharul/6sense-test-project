import React from 'react'
import { Button, Result } from 'antd';
import {Link} from 'react-router-dom';

const InvalidRoute:React.FC = () => {
  return <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to="/">Back Home</Link>}
  />
}


export default InvalidRoute;