import styled, { keyframes } from "styled-components";

export const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const TextIntro = styled.h1`
  font-family: "News Cycle", sans-serif;
  color: #00bfff;
  font-weight: 400;
  letter-spacing: 0.1em;
  font-size: 36px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${fadeAnimation} 5s linear;
  opacity: 0;
`;
