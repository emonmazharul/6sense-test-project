import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "./context";
import {LoginUser,contextDataInterface, AlertType,SignUpUser,RemitanceHistoryInterface,TotalAmount} from "../types/type";
import {loadRemitanceData,loginHandler,loadUserData,logoutHandler,remitance_history_handler,signUpHandler } from "../utils/utils";

const ContextParent:React.FC<{children:React.ReactNode}> = ({children}) => {
 
  const navigate = useNavigate();
 
  const [userData,setUserData] = useState<contextDataInterface>({
    isAuthenticated:false,
    user:{
      fullname:undefined,
      email:undefined,
      role:undefined,
    }
  });

  const [remitance_history,post_remitance_history] = useState<RemitanceHistoryInterface[]>([]);
  const [totalAmount,setAmount] = useState<TotalAmount>({originalAmount:0,currentAmount:0});
  

  useEffect(() => {
    // loadUserDataWraper();
    loadUserData(setUserData)
    if(userData.isAuthenticated) {
      loadRemitanceData(post_remitance_history);
    }
  }, [userData.isAuthenticated]);

  useEffect(() => {
    const result:TotalAmount = {originalAmount:0,currentAmount:0};
    remitance_history.forEach(item => {
      result.originalAmount+= item.totalTaka;
      result.currentAmount += item.todayAmount || 0;
    })
    setAmount(previousState => ({
      ...previousState,
      ...result,
    }));
  }, [remitance_history])

  //login handler function
  const loginHandlerWraper = async (credentials:LoginUser,setLoginResult:React.Dispatch<React.SetStateAction<{message:string;type:AlertType}>>):Promise<void> => {
    await loginHandler(credentials,setUserData,setLoginResult,navigate);
  }

  // sign up handler function
  const signUpHandlerWraper = async (credentials:SignUpUser,setSignUpResult:React.Dispatch<React.SetStateAction<{message:string;type:AlertType}>>):Promise<void> => {
    await signUpHandler(credentials,setUserData,setSignUpResult,navigate);
  }
  //logout handler function
  const logoutHandlerWraper = async ():Promise<void> => {
    await logoutHandler(setUserData,post_remitance_history,navigate);
  }
  //add remiance history
  const remitance_history_handlerWraper = async (new_remitance_data:RemitanceHistoryInterface,setDataUploadError:React.Dispatch<React.SetStateAction<{message:string;type:AlertType}>>):Promise<void> => {
    await remitance_history_handler(remitance_history,post_remitance_history,new_remitance_data,setDataUploadError);
  }

  return <DataContext.Provider value={{
    ...userData,
    totalAmount,
    remitance_history,
    loginHandler:loginHandlerWraper,
    signUpHandler:signUpHandlerWraper,
    logoutHandler:logoutHandlerWraper, 
    add_remitance_history:remitance_history_handlerWraper
    }}>
      {children}
  </DataContext.Provider>
}

export default  ContextParent;