import React from "react"
export const Header:React.FC<{heading:string}> =  ({heading}) => {
  return <h1>{heading}</h1>
}

export const SubHeader:React.FC<{subheading:string}> = ({subheading}) => {
  return <h3>{subheading}</h3>
}
