import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Label = styled.label`
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  margin-left: 25px;
  width: 200px;
`;

function AddMusicVote() {
  return (
    <Form>
      <Label>
        Song
        <Input type="text" autoFocus />
      </Label>
      <Label>
        Artist
        <Input type="text" />
      </Label>
      <Label>
        Comment
        <Input type="textarea" row="30" col="30" />
      </Label>
      <Label>
        Vote
        <Input type="number" />
      </Label>
    </Form>
    // <div>AddMusicVote</div>
  );
}

export default AddMusicVote;
