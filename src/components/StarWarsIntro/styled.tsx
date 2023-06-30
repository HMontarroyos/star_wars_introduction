import styled from "styled-components";

export const TextIntro = styled.h1`
  font-family: "News Cycle", sans-serif;
  color: #00bfff;
  font-weight: 400;
  letter-spacing: 0.1em;
  font-size: 36px;
  /*  opacity: 0; */
`;

export const ContainerParagraph = styled.section`
  position: absolute;
  left: 15%;
  width: 70%;
  z-index: 1;
  transform-origin: 50%;
  transform: perspective(300px) rotateX(20deg);
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
`;
