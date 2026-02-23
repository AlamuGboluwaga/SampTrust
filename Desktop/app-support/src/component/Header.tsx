import React from "react";

type Headertype = {
  headerName: string;
  message: string;
};

const Header: React.FC<Headertype> = ({ headerName, message }) => {
  return (
    <div className="mt-[10%]  h-15 w-full flex flex-col justify-center items-center space-y-2">
      <h1 className=" flex  font-bold text-xl  ">{headerName}</h1>
      <p className=" text-xs   text-gray-300 ">{message}</p>
    </div>
  );
};

export default Header;
