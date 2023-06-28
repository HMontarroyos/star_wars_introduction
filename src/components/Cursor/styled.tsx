import styled from 'styled-components';
import {cursor} from "../../assets/images"

export const Cursor = styled.div`
  position: fixed;
  pointer-events: none;
  width: 80px;
  height: 80px;
  background-image: url(${cursor});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.1s linear;
  z-index: 9999;
  transform: translate(-80%, -80%) rotate(-30deg);
  cursor: none;

  &:hover {
    /* Estilo de hover, se desejar */
  }
`;