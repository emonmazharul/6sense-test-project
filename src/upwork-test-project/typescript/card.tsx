import React from 'react';

interface Props {
  backgroundColor:string;
  children:React.ReactNode
}
const Card:React.FC<Props> = ({backgroundColor,children}) => {
  return <div style={{backgroundColor}}>
    {children}
  </div>
}

export default Card;