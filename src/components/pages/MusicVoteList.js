import React from "react";
import Card from "../Card";
import styled from "@emotion/styled";

const MusicVoteListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function MusicVoteList() {
  return (
    <MusicVoteListContainer>
      <Card />
      <Card />
    </MusicVoteListContainer>
  );
}

export default MusicVoteList;
