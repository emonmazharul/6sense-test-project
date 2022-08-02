import React,{useState} from 'react'
import {Button,Modal,Image} from 'antd'



const  ModalOpener:React.FC<{receiptImage:any,id:string}> = ({id}) => {

  const [isModalVisible,setIsModalVisible] = useState<boolean>(false);

  const showModal = (e:React.MouseEvent<HTMLButtonElement>):void => {
    setIsModalVisible(true);
  }

  const handleOk = ():void => {
    setIsModalVisible(false);
  }

  const handleCancel = ():void => {
    setIsModalVisible(false);
  }

  return <>
    <Button type="primary" onClick={showModal}>View receipt</Button>
    <Modal title="Receipt Image" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Image 
        src={`remitance/receipt_image/${id}`}
        alt="receipt image"
      />
    </Modal>
  </>
} 


export default ModalOpener