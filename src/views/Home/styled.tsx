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

export const Text = styled.h1`
  color: white;
`;

export const LinkRedirect = styled(Link)`
  text-decoration: none;
`;
