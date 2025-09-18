import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const PosterContainer = styled.div`
  width: 300px;
  height: 450px;
  min-width: 300px;
  min-height: 450px;
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 10px;
  flex-shrink: 0;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const OverlayImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  width: 100%;
  height: 100%;
  object-fit: contain;
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);

  ${PosterContainer}:hover & {
    opacity: 1;
  }
`;
