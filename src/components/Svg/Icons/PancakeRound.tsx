import React from "react";
import styled from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const IconImg = styled.img`
  margin-right: 8px;
`;

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <IconImg width="24px" height="24px" src="/images/price-token.png"/>
  );
};

export default Icon;
