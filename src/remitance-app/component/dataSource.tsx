import {Button} from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import ModalOpener from './modal'
import {RemitanceHistoryInterface} from '../types/type'

interface mydatatype {
  key:string | number;
  totalPound:number;
  totalTaka:number;
  sending_date:Date | string;
  exchange_rate:number;
  receipt_image:string;
  paying_agent:string;
  govt_reward?:number
}

export const columnsTwoInterface:ColumnsType<RemitanceHistoryInterface>= [
  {
    title:'TOTAL POUND',
    dataIndex:'totalPound',
    key:'TOTAL POUND'
  },
  {
    title:'TOTAL TAKA',
    dataIndex:'totalTaka',
    key:'TOTAL TAKA'
  },
  {
    title:'EXCHANGE RATE',
    dataIndex:'exchangeRate',
    key:'EXCHANGE RATE'
  },
  {
    title:'SENDING DATE',
    dataIndex:'sendingDate',
    key:'SENDING DATA'
  },
  {
    title:'CURRENT VALUE',
    dataIndex:'todayAmount',
    key:'CURRENT TOTAL TAKA'
  },
  {
    title:'CURRENT RATE',
    dataIndex:'todayRate',
    key:'CURRENT RATE'
  },
  {
    title:'PAYING AGENT',
    dataIndex:'payingAgent',
    key:'PAYING AGENT'
  },
  {
    title:'GOVT REWARD',
    dataIndex:'govtIncentive',
    key:'GOVT REWARD'
  },
  {
    title:'RECEIPT IMAGE',
    dataIndex:'receiptImage',
    key:'RECIPT IMAGE',
    render: (_, {receiptImage,key:id}) => {
      id = typeof id === 'string' ? id : '';
      return <ModalOpener id={id} receiptImage={receiptImage}/>
    }
  }
]


export const data:mydatatype[] = [
  {
    key:1,
    totalPound : 693.07,
    totalTaka:82891,
    sending_date:new Date('2022-06-30').toDateString(),
    exchange_rate:119.6000,
    receipt_image:'image_1',
    paying_agent:'Any bank',
    govt_reward: 2000,
  },
  {
    key:2,
    totalPound : 320.07,
    totalTaka:56076,
    sending_date:new Date('2022-05-30').toDateString(),
    exchange_rate:116.6000,
    receipt_image:'image_2',
    paying_agent:'Any bank',
    govt_reward: 1000,
  },
  {
    key:3,
    totalPound : 520.07,
    totalTaka:66076,
    sending_date:new Date('2022-04-30').toDateString(),
    exchange_rate:115.6000,
    receipt_image:'image_3',
    paying_agent:'Any bank',
    govt_reward: 1500,
  },
  {
    key:4,
    totalPound : 400.07,
    totalTaka:44076,
    sending_date:new Date('2022-04-30').toDateString(),
    exchange_rate:114.6000,
    receipt_image:'image_4',
    paying_agent:'Any bank',
    govt_reward: 1200,
  }
];