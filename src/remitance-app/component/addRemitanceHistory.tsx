import React from 'react'
import { Row,Col,Typography} from 'antd'
import Navbar from './navigation'
import RemitanceForm from './remitanceForm'

const {Title} = Typography;


const AddRmitanceHistory:React.FC = () => {

  return <>
    <Navbar/>
    <Row className='remtitance_container' justify="space-between" align='middle' wrap>
      <Col lg={{span:12}} >
        <div className="remitance_image">
          <img
            src={'/picture.jpg'}
            alt="type the data"
          />
        </div>
        <div className='header_parent'>
          <Title level={1} style={{letterSpacing:'1'}}>
            ADD AN REMITANCE
          </Title>
        </div>
      </Col>
      <Col 
        xs={{span:24}}
        lg={{span:12}}
      >
        <RemitanceForm/>
      </Col>
    </Row>
  </>
}

export default AddRmitanceHistory;