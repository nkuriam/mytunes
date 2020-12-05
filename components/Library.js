import LibrarySong from "./LibrarySong";
import styles from "../styles/library.module.css";

const open = styles["lib-open"];

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`${styles.library} ${libraryStatus ? open : ""}`}>
      <h2>Library</h2>
      <div className={styles["library-songs"]}>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            songs={songs}
            audioRef={audioRef}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
