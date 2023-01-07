import TarantinoArt from '../assets/tarantino-bangzheng-du.jpg';
import { Character } from './Character';
import { getCharacterCoordinates } from '../firebaseCalls';
import { useState } from 'react';
import { Target } from './Target';

export const MainImage = () => {
  const [userCoords, setUserCoords] = useState();
  const [userChoice, setUserChoice] = useState('sharonTate');
  const [characs, setCharacs] = useState({
    1: {
      name: 'Sharon Tate',
      found: false,
    },
    2: {
      name: 'The Gimp',
      found: false,
    },
    3: {
      name: 'Hans Lanza',
      found: false,
    },
  });

  const checkCoordinates = async (user) => {
    const data = await getCharacterCoordinates();
    const correct = data['sharonTate'];
    if (Math.abs(user.x - correct.x) < 20) {
      return 'Found!';
    } else {
      return 'Nope!';
    }
  };

  const getUserCoordinates = (e) => {
    const boundary = e.target.getBoundingClientRect();
    const x = e.clientX - boundary.left;
    const y = e.clientY - boundary.top;
    return { x, y };
  };

  const play = async (e) => {
    const user = getUserCoordinates(e);
    const result = await checkCoordinates(user);
    setUserCoords({ x: user.x, y: user.y });
    console.log(result);
  };

  return (
    <div className="mx-auto w-max cursor-pointer relative">
      {userCoords && <Target userCoords={userCoords} />}
      <img
        useMap="#clickableImg"
        src={TarantinoArt}
        alt="Where's Waldo style art with scenes from Tarantino films"
        onClick={play}
      />
    </div>
  );
};
