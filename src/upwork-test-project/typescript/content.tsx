import React from 'react';

interface Props {
  name:string;
  surename:string;
  email:string;
  age:number;
  gender:string;
  subscribe:boolean;
  favouriteColor:string;
}

const Content:React.FC<Props> = ({name,surename,email,age,gender,subscribe,favouriteColor}) =>  {
  // here subsribe mean notification alert
  const girl_or_body = gender === 'Male' ? 'Guy' : 'Girl';
  let subscribe_msg = subscribe ? 'on' : 'off';
  return <div>
    <h2>My name is {name+' ' + surename}</h2>
    <p>I am a {age} years old {girl_or_body}.My favourite color is {favouriteColor} </p>
    <i>You can mail me at {email} and my notification alert is {subscribe_msg}</i>
  </div>
}


export default Content