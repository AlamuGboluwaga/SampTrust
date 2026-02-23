import React from 'react'
import { ImSpinner2 } from "react-icons/im";

type LoaderProps = {
  size?: number;
};

const Loader: React.FC<LoaderProps> = ({size}) => {
  return <ImSpinner2 size={size} className=" animate-spin text-grey-50" />;
};

export default Loader
