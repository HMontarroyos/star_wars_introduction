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
  margin: 10px;
  border: 3px dotted #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 22px;
  font-weight: bold;
  color: #666;
  transition: all 0.3s ease;

  &:hover {
    background: #f9f9f9;
    color: #000;
  }
`;