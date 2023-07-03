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

const fadeout = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
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

export const ContainerLogo = styled.div`
margin-top: 100px;
display:flex;
justify-content: center;
`

export const Logo = styled.img`
  animation-name: ${fadeout};
  animation-duration: 20s;
  animation-fill-mode: forwards;
`;