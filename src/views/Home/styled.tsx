import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerPosters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;
  padding: 20px;
  justify-content: center;
`;

export const LinkRedirect = styled(Link)`
  text-decoration: none;
`;

export const NewCard = styled.div`
  width: 300px;
  height: 450px;
  min-width: 300px;
  min-height: 450px;
  margin: 10px;
  border: 3px dotted #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-family: ${(props) => props.theme.fonts.display};
  color: #666;
  transition: all 0.3s ease;
  box-sizing: border-box;
  flex-shrink: 0;

  &:hover {
    background: #f9f9f9;
    color: #000;
  }
`;
