async function getMusic() {
  const response = await fetch("http://localhost:8878/music");
  const newMusic = await response.json();
  return newMusic;
}

export default getMusic;
