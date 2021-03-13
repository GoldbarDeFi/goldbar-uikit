import React from "react";
import styled, { keyframes } from "styled-components";
import Icon from "./GoldIcon";
import { SpinnerProps } from "./types";

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(12px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const GoldIcon = styled(Icon)`
  animation: ${float} 0.4s infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = () => (
  <Container>
    <GoldIcon />
  </Container>
);

export default Spinner;
