import TarantinoArt from '../assets/tarantino-bangzheng-du.jpg';
import { Character } from './Character';
import { getCharacterCoordinates } from '../firebaseCalls';
import { useState } from 'react';
import { Target } from './Target';
import { CharacterMenu } from './CharacterMenu';

export const MainImage = () => {
  const [userCoords, setUserCoords] = useState();
  const [foundCharacs, setFoundCharacs] = useState({
    'Sharon Tate': false,
    'Hans Landa': false,
    'The Gimp': false,
  });

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

  const getUserCoordinates = (e) => {
    const boundary = e.target.getBoundingClientRect();
    const x = e.clientX - boundary.left;
    const y = e.clientY - boundary.top;
    setUserCoords({ x: x, y: y });
    return { x, y };
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
        console.log('You win!');
      }
    }
  };

  return (
    <div className="mx-auto w-max cursor-pointer relative">
      {userCoords && <Target userCoords={userCoords} />}
      {userCoords && (
        <CharacterMenu
          userCoords={userCoords}
          play={play}
          foundCharacs={foundCharacs}
        />
      )}
      <img
        useMap="#clickableImg"
        src={TarantinoArt}
        alt="Where's Waldo style art with scenes from Tarantino films"
        onClick={getUserCoordinates}
      />
    </div>
  );
};
