import styles from "../styles/library.module.css";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const { cover, name, artist } = song;

  const songSelectHandler = async () => {
    await setCurrentSong(song);

    const newSongs = songs.map((s) => {
      if (s.id === song.id) {
        return { ...s, active: true };
      } else {
        return { ...s, active: false };
      }
    });

    setSongs(newSongs);

    if (isPlaying) audioRef.current.play();
  };

  const selectedSong = styles.selected;

  return (
    <div
      className={`${styles["library-song"]} ${song.active ? selectedSong : ""}`}
      onClick={songSelectHandler}
    >
      <img src={cover} alt={`${name} by ${artist}`} />
      <div className={styles["song-description"]}>
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
