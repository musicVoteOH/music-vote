import React from "react";
import Card from "../Card";
import styled from "@emotion/styled";
import getMusic from "../../api/getMusic";

const MusicVoteListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function MusicVoteList() {
  const [music, setMusic] = React.useState([]);

  async function refreshMusicList() {
    const foundMusic = await getMusic();
    console.log("foundMusic:", foundMusic);
    setMusic(foundMusic);
    // return music;
  }

  React.useEffect(() => {
    refreshMusicList();
  }, []);

  return (
    <MusicVoteListContainer>
      {music.map(song => (
        <Card
          key={song.id}
          song={song.song}
          artist={song.artist}
          comment={song.comment}
          vote={song.vote}
        />
      ))}
    </MusicVoteListContainer>
  );
}

export default MusicVoteList;
