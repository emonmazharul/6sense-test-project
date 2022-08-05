import React from 'react'
import { NavigateFunction } from 'react-router-dom';
import { contextDataInterface, LoginUser, RemitanceHistoryInterface, AlertType, SignUpUser } from "../types/type"

const url:string = "https://api-remitance-app.herokuapp.com";


export function formDataMaker(new_remitance_data:RemitanceHistoryInterface):FormData {
  const formData:FormData = new FormData();
  formData.append('avatar', new_remitance_data.receiptImage[0].originFileObj);
  const keys:Array<string> = ['pinNumber','totalPound','totalTaka','payingAgent','sendingDate','exchangeRate','govtIncentive'];
  for(let i=0;i<keys.length;i++) {
    const key = keys[i] as keyof RemitanceHistoryInterface; 
    formData.append(`${keys[i]}`, new_remitance_data[key]);
  }
  return formData;
}


export function numberConverter(credentials:RemitanceHistoryInterface) {
  credentials.govtIncentive = credentials.govtIncentive ? Number(credentials.govtIncentive) : 0;
  type KeyType<T extends keyof RemitanceHistoryInterface> = T[] ;
  const keys:KeyType<'totalPound' | 'totalTaka' | 'exchangeRate'> = ['totalPound','totalTaka','exchangeRate'];
  keys.forEach(key=> {
    credentials[key] = Number(credentials[key]);
  });
}

export const loadUserData = async (setUserData:React.Dispatch<React.SetStateAction<contextDataInterface>>):Promise<void> => {
  try {
    const response = await fetch( url + '/user', {
      credentials:'include',
      headers : {
        'Accept': "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        'Access-Control-Allow-Origin' : 'https://api-remitance-app.herokuapp.com/',
        'Access-Control-Allow-Credentials': 'true'
      }
    })
    if(!response.ok) {
      console.log('user is not loged in');
      return;
    }
    const result:contextDataInterface = await response.json();
    setUserData(previousState => ({
      ...previousState,
      ...result,
    }))
    // navigate('/history')
  } catch (e) {
    console.log(e);
  }
}

export const loadRemitanceData = async (post_remitance_history:React.Dispatch<React.SetStateAction<RemitanceHistoryInterface[]>>):Promise<void> => {
  try {
    const response = await fetch( url + '/remitance/all_histories', {
      credentials:'include',
      headers : {
        'Accept': "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        'Access-Control-Allow-Origin' : 'https://api-remitance-app.herokuapp.com/',
        'Access-Control-Allow-Credentials': 'true'
      },
    })
    if(!response.ok) {
      const result:RemitanceHistoryInterface[] = await response.json();
      post_remitance_history(result);
      return;
    }
    const result:RemitanceHistoryInterface[] = await response.json();
    post_remitance_history(result);
    // navigate('/history')
  } catch (e) {
    console.log(e);
  }
}


export const loginHandler = async (
  credentials:LoginUser,
  setUserData:React.Dispatch<React.SetStateAction<contextDataInterface>>,
  setLoginResult:React.Dispatch<React.SetStateAction<{message:string;type:AlertType}>>,
  navigate:NavigateFunction

):Promise<void> => {
  try {
    const response = await fetch( url + '/user/login', {
      method:'POST',
      credentials:'include',
      redirect:'follow',
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        'Access-Control-Allow-Origin' : 'https://api-remitance-app.herokuapp.com/',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(credentials)
    });
    if(!response.ok) {
      setUserData({
        isAuthenticated:false,
        user:{
          fullname:undefined,
          email:undefined,
          role:undefined,
        }
      })
      const result:{message:string;type:AlertType}= await response.json();
      setLoginResult(loginResult => ({
        ...loginResult,
        ...result
      }))
      return;
    }
    const result:contextDataInterface = await response.json();
    setUserData(previousState => ({
      ...previousState,
      ...result,
    }) );
    navigate('/history');
  } catch (e) {
    console.log(e);
  }
}

// sign up handler function
export const signUpHandler = async (
    credentials:SignUpUser,
    setUserData:React.Dispatch<React.SetStateAction<contextDataInterface>>,
    setSignUpResult:React.Dispatch<React.SetStateAction<{message:string;type:AlertType}>>,
    navigate:NavigateFunction
  ):Promise<void> => {
  try {
    const response = await fetch( url + '/user/signup', {
      method:'POST',
      redirect:'follow',
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(credentials),
    });

    if(!response.ok) {
      const result:{message:string;type:AlertType}= await response.json();
      setSignUpResult(signUpResult => ({
        ...signUpResult,
        ...result
      }))
      return;
    }
    const result:contextDataInterface = await response.json();
    setUserData(previousState => ({
      ...previousState,
      ...result,
    }) );
    navigate('/history');
  } catch (e) {
    console.log(e);
  }
}

export const logoutHandler = async (
    setUserData:React.Dispatch<React.SetStateAction<contextDataInterface>>,
    post_remitance_history:React.Dispatch<React.SetStateAction<RemitanceHistoryInterface[]>>,
    navigate:NavigateFunction
):Promise<void> => {
  try {
    await fetch( url + '/user/logout', {
      method:'POST',
      redirect:'follow',
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      }
    });
    setUserData({
      isAuthenticated:false,
      user:{
        fullname:undefined,
        email:undefined,
        role:undefined,
      }
    });
    post_remitance_history([]);
    navigate('/');
  } catch (e) {
    console.log(e);
  }
}

export const remitance_history_handler = async (
    remitance_history:RemitanceHistoryInterface[],
    post_remitance_history:React.Dispatch<React.SetStateAction<RemitanceHistoryInterface[]>>,
    new_remitance_data:RemitanceHistoryInterface,
    setDataUploadError:React.Dispatch<React.SetStateAction<{message:string;type:AlertType}>>,
  ):Promise<void> => {
  try {
    const response = await fetch( url + '/remitance/history', {
      method:'POST',
      credentials:'include',
      body:formDataMaker(new_remitance_data)
    });
    if(!response.ok) {
      const errorResult:{message:string,type:AlertType} = await response.json();
      setDataUploadError(errorResult);
      return;
    }
    const result:RemitanceHistoryInterface = await response.json();
    post_remitance_history(remitance_history.concat({
      ...result,
      todayRate:0,
      todayAmount:0
    }));
    const successResult:{message:string,type:AlertType} = {message:'Successfully added new remitance history',type:'success'}
    setDataUploadError(successResult);
  } catch (e) {
    console.log(e);
    const errorResult:{message:string,type:AlertType} = {message:'Could not add new data. Pleae try again!',type:'error'}
    setDataUploadError(errorResult)
  }
}