import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/player.module.css";

const Player = ({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
}) => {
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((s) => {
      if (s.id === nextPrev.id) {
        return { ...s, active: true };
      } else {
        return { ...s, active: false };
      }
    });

    setSongs(newSongs);
  };

  const skipTrackHandler = async (direction) => {
    const index = songs.findIndex((s) => s.id === currentSong.id);
    if (direction === "forward") {
      // if (index === songs.length - 1) {
      //   await setCurrentSong(songs[0]);
      // } else {
      //   await setCurrentSong(songs[index + 1]);
      // }
      await setCurrentSong(songs[(index + 1) % songs.length]);
      activeLibraryHandler(songs[(index + 1) % songs.length]);
    } else if (direction === "back") {
      if (index === 0) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
      } else {
        await setCurrentSong(songs[index - 1]);
        activeLibraryHandler(songs[index - 1]);
      }
      /* 
        if ((currentIndex - 1) % songs.length === -1) {
          setCurrentSong(songs[songs.length - 1]);
          return;
        }
        setCurrentSong((index - 1) % songs.length);
      */
    }
    if (isPlaying) audioRef.current.play();
  };

  // Styles
  const trackAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className={styles.player}>
      <div className={styles["time-control"]}>
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          className={styles.track}
          style={{
            background: `linear-gradient(to right, ${currentSong.colors[0]}, ${currentSong.colors[1]})`,
          }}
        >
          <input
            className={styles.progress}
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div style={trackAnimation} className={styles["animate-track"]}></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className={styles["play-control"]}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipTrackHandler("back")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          size="2x"
          onClick={() => skipTrackHandler("forward")}
        />
      </div>
    </div>
  );
};

export default Player;
