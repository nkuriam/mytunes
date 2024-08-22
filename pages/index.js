import { useState, useEffect, useRef } from "react";
import Nav from "../components/Nav";
import Song from "../components/Song";
import Player from "../components/Player";
import Library from "../components/Library";
import getData from "../lib/data";
import Layout from "../components/Layout";

export default function Home({ data }) {
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  const audioRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1465)
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage,
    });
    // If current === duration, setIsPlaying(false);
  };

  const songEndHandler = async () => {
    const index = songs.findIndex((s) => s.id === currentSong.id);
    setCurrentSong(songs[(index + 1) % songs.length]);
    
    if (isPlaying) {
      try {
        await audioRef.current.play()
      } catch (e) {
        console.error('Error', e)
        console.log('Retrying...')
        await audioRef.current.play()
      }
    };
  };

  return (
    <Layout libraryStatus={libraryStatus}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} isLargeScreen={isLargeScreen} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        songs={songs}
        setSongs={setSongs}
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        setIsPlaying={setIsPlaying}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = getData();
  return { props: { data } };
}
