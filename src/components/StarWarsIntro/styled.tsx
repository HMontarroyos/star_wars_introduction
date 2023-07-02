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

export const ContainerParagraph = styled.section<{ fade: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  left: 15%;
  width: 70%;
  z-index: 1;
  transform-origin: 50%;
  transform: perspective(300px) rotateX(20deg);
  opacity: ${(props) => (props.fade ? 0 : 1)};
  transition: opacity 1s ease;
`;

export const Paragraph = styled.p`
  font-family: "News Cycle", sans-serif;
  font-weight: 700;
  color: #ffd700;
  text-align: justify;
  letter-spacing: 0.1em;
  line-height: 1.1em;
  width: 70%;
  font-size: 36.35px;
  opacity: 0;
  animation: fade-in 1s forwards;
  animation-delay: 0s;
  animation-timing-function: ease-in;

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
