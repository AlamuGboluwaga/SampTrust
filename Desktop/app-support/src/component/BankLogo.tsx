import React from 'react'
import suntrustLogo from "../images/sun.png";
const BankLogo:React.FC = () => {
  return (
      <div className="flex flex-row justify-center items-center space-x-6">
           <img src={suntrustLogo} alt="" className="h-10" />
           <h1 className="header ">App-support portal</h1>
         </div>
  )
}

export default BankLogo
