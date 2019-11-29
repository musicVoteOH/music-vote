import React from "react";
import styled from "@emotion/styled";
import NavButton from "./NavButton";

const HeaderDiv = styled.header`
  height: 75px;
  width: 100%;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.textLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

function Header() {
  return (
    <HeaderDiv>
      <h1>MusicVote</h1>
      <NavButton />
    </HeaderDiv>
  );
}

export default Header;
