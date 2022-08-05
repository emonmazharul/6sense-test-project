import React from "react";

export interface User {
  fullname:string | undefined;
  email:string | undefined
  role:string | undefined
}

export interface contextDataInterface {
  isAuthenticated:boolean;
  user:User;
}

export interface LoginUser {
  email:string;
  password:string;
}

export interface SignUpUser extends LoginUser {
  fullname:string;
}

export interface RemitanceHistoryInterface {
  key?:string;
  pinNumber?:string;
  totalPound:number;
  totalTaka:number;
  exchangeRate:number;
  sendingDate:string;
  payingAgent:string;
  receiptImage?:any;
  govtIncentive?:number;
  todayAmount?:number;
  todayRate?:number;
}

export interface contextInterface {
  isAuthenticated:boolean;
  totalAmount:TotalAmount;
  user:User;
  remitance_history: RemitanceHistoryInterface[];
  loginHandler: (credentials:LoginUser,setLoginResult: React.Dispatch<React.SetStateAction<{message:string;type:AlertType}> >) => Promise<void>;
  signUpHandler: (credentials:SignUpUser,setLoginResult: React.Dispatch<React.SetStateAction<{message:string;type:AlertType}> >) => Promise<void>;
  logoutHandler: () => Promise<void>
  add_remitance_history:(new_remitance_data:RemitanceHistoryInterface,setDataUploadError:React.Dispatch<React.SetStateAction<{message:string;type:AlertType}>> ) => Promise<void>;
}

export type AlertType = 'success' | 'error' | 'info' | 'warning' | undefined;

export type TotalAmount = {originalAmount:number,currentAmount:number};
// const tryr:contextInterface = {
//   isAuthenticated:false,
//   user: {
//     fullname:'',email:'',role:'',
//   },
//   loginHandler: () => {
//     return Promise.resolve();
//   }
// }
