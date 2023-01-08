import { useEffect, useState } from 'react';
import { MainImage } from '../components/MainImage';
import { Navbar } from '../components/Navbar';
import { getCharacterCoordinates } from '../firebaseCalls';
import { useStopwatch } from 'react-timer-hook';

export const Game = () => {
  const { seconds, minutes, start, pause } = useStopwatch({ autoStart: true });

  const [foundCharacs, setFoundCharacs] = useState({
    'Sharon Tate': false,
    'Hans Landa': false,
    'The Gimp': false,
  });

  const [userCoords, setUserCoords] = useState();

  const [gameOver, setGameOver] = useState(false);
  const [winTime, setWinTime] = useState(false);

  useEffect(() => {
    if (!gameOver) {
      checkForWin();
    }
  }, [foundCharacs]);

  const checkCoordinates = async (charac) => {
    const data = await getCharacterCoordinates();
    const correct = data[charac];
    if (
      Math.abs(userCoords.x - correct.x) < 40 &&
      Math.abs(userCoords.y - correct.y) < 40
    ) {
      return true;
    } else {
      return false;
    }
  };

  const play = async (charac) => {
    const result = await checkCoordinates(charac);
    console.log(result);
    // mark character as found
    if (result) {
      setFoundCharacs((prev) => {
        return {
          ...prev,
          [charac]: true,
        };
      });
      if (Object.values(foundCharacs).every((val) => val)) {
      }
    }
  };

  const checkForWin = () => {
    if (Object.values(foundCharacs).every((val) => val)) {
      pause();
      setGameOver(true);
      setWinTime({ minutes, seconds });
    }
  };

  const pauseTimer = (pauseFunc) => {};
  return (
    <div className="bg-blue">
      <Navbar winTime={winTime} />
      <MainImage
        foundCharacs={foundCharacs}
        setFoundCharacs={setFoundCharacs}
        userCoords={userCoords}
        setUserCoords={setUserCoords}
        checkCoordinates={checkCoordinates}
        play={play}
      />
    </div>
  );
};
