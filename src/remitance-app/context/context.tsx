import React from 'react';
import {contextInterface} from '../types/type';

const DataContext = React.createContext<contextInterface>({
  isAuthenticated:false,
  totalAmount: {originalAmount:0,currentAmount:0},
  user:{
    fullname:undefined,
    email:undefined,
    role:undefined,
  },
  remitance_history:[],
  loginHandler:() =>  { 
    return Promise.resolve();
  },
  signUpHandler:() => {
    return Promise.resolve();
  },
  logoutHandler:() => Promise.resolve(),
  add_remitance_history:() => Promise.resolve()
});

export default DataContext; 