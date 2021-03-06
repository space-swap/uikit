import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img width="50px" height="50px" src="/images/mobile-logo.png"/>
  );
};

export default Icon;
