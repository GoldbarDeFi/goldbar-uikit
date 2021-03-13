import React from "react";
// import Svg from "../../../components/Svg/Svg";
import styled from "styled-components";
import Logos from "../../../assets/logo.png";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const StyledImage = styled.img`
  height: 50px;
`;

const StyledDiv = styled.div`
  display: flex;
  height: 32px;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 400px;
  }
`;

const StyledSpan = styled.span`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.textSubtle};
`;

const Logo: React.FC<LogoProps> = () => (
  <StyledDiv>
    <StyledImage src={Logos} alt="" />
    <StyledSpan>GoldBarSwap</StyledSpan>
  </StyledDiv>
);

export default Logo;
