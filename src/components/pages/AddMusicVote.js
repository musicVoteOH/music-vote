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
  const [song, setSong] = React.useState("");
  const [artist, setArtist] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [vote, setVote] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(song, artist, comment, vote);
    await fetch("http://localhost:8878/music", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ song, artist, comment, vote })
    });
    setSong("");
    setArtist("");
    setComment("");
    setVote("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Song
        <Input
          type="text"
          autoFocus
          value={song}
          onChange={event => setSong(event.target.value)}
          required
        />
      </Label>
      <Label>
        Artist
        <Input
          type="text"
          value={artist}
          onChange={event => setArtist(event.target.value)}
          required
        />
      </Label>
      <Label>
        Comment
        <Input
          type="textarea"
          rows="30"
          value={comment}
          onChange={event => setComment(event.target.value)}
        />
      </Label>
      <Label>
        Vote
        <Input
          type="number"
          value={vote}
          onChange={event => setVote(event.target.value)}
        />
      </Label>
      <button>Submit</button>
    </Form>
    // <div>AddMusicVote</div>
  );
}

export default AddMusicVote;
