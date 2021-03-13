import React from "react";
import styled from "styled-components";
import Logos from "../../assets/logo.png";
import { SvgProps } from "../Svg/types";

const StyledImage = styled.img`
  height: 100px;
`;

const StyledDiv = styled.div`
  display: flex;
  height: 32px;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 400px;
  }
`;

const Icon: React.FC<SvgProps> = () => (
  <StyledDiv>
    <StyledImage src={Logos} alt="" />
  </StyledDiv>
);

export default Icon;
