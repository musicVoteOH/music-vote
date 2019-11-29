import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const Button = styled(Link)`
  /* background: ${props => props.theme.secondary}; */
  color: ${props => props.theme.secondary};
  font-size: 1.4rem;
  text-align: center;
  padding: 10px 20px;
  border-radius: 100px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.secondary};
  text-decoration: none;
  flex-basis: 115px;  
  &:hover,
  &:active {
    background-color: rgba(255,255,255, 0.2);
    transition: 0.5s;
  }
`;

function NavButton() {
  const location = useLocation();
  return location.pathname === "/" ? (
    <Button to="/vote">Vote</Button>
  ) : (
    <Button to="/">Home</Button>
  );
}

export default NavButton;
