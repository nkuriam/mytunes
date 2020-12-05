import React from "react";
import styles from "../styles/song.module.css";

const Song = ({ currentSong }) => {
  const { cover, name, artist } = currentSong;
  return (
    <div className={styles["song-container"]}>
      <img src={cover} alt={`${name} by ${artist}`} />
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  );
};

export default Song;
