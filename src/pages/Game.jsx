import { useEffect, useState } from 'react';
import { MainImage } from '../components/MainImage';
import { Navbar } from '../components/Navbar';
import { getCharacterCoordinates, getLeaderboard } from '../firebaseCalls';
import { useStopwatch } from 'react-timer-hook';
import { WinModal } from '../components/WinForm';
import { Leaderboard } from '../components/Leaderboard';

export const Game = () => {
  const { seconds, minutes, pause } = useStopwatch({ autoStart: true });
  const [foundCharacs, setFoundCharacs] = useState({
    'Sharon Tate': false,
    'Hans Landa': false,
    'The Gimp': false,
  });

  const [userCoords, setUserCoords] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [winTime, setWinTime] = useState(false);
  const [leaderboard, setLeaderboard] = useState();
  const [winFormIsOpen, setWinFormOpen] = useState(false);
  const [leaderboardIsOpen, setLeaderboardOpen] = useState(false);

  useEffect(() => {
    if (!gameOver) {
      checkForWin();
    }
  }, [foundCharacs]);

  useEffect(() => {
    getLeaderboard({ setLeaderboard });
  }, []);

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
      endGame();
    }
  };

  const endGame = () => {
    pause();
    setGameOver(true);
    setWinTime({ minutes, seconds });
    setWinFormOpen(true);
  };

  const closeWinForm = () => {
    setWinFormOpen(false);
    getLeaderboard({ setLeaderboard });
  };

  const closeLeaderboard = () => {
    setLeaderboardOpen(false);
  };

  return (
    <div className="bg-blue">
      <Navbar
        foundCharacs={foundCharacs}
        winTime={winTime}
        setLeaderboardOpen={setLeaderboardOpen}
      />
      <MainImage
        foundCharacs={foundCharacs}
        userCoords={userCoords}
        setUserCoords={setUserCoords}
        play={play}
      />
      <WinModal
        winFormIsOpen={winFormIsOpen}
        winTime={winTime}
        closeWinForm={closeWinForm}
        setLeaderboardOpen={setLeaderboardOpen}
      />
      {leaderboard && (
        <Leaderboard
          leaderboardIsOpen={leaderboardIsOpen}
          closeLeaderboard={closeLeaderboard}
          leaderboard={leaderboard}
        />
      )}
    </div>
  );
};
