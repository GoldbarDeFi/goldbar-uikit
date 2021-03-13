import React from "react";
// import Svg from "../../../components/Svg/Svg";
import styled from "styled-components";
import Logos from "../../../assets/logo.png";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const StyledImage = styled.img`
  height: 30px;
`;

const Logo: React.FC<LogoProps> = () => <StyledImage src={Logos} alt="" />;

export default Logo;
