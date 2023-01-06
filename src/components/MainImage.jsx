import TarantinoArt from '../assets/tarantino-bangzheng-du.jpg';
import { Character } from './Character';
import { getCharacterCoordinates } from '../firebaseCalls';
import { useState } from 'react';

export const MainImage = () => {
  const [userCoords, setUserCoords] = useState();
  const [userChoice, setUserChoice] = useState('sharonTate');

  const getUserCoordinates = async (e) => {
    const boundary = e.target.getBoundingClientRect();
    const x = e.clientX - boundary.left;
    const y = e.clientY - boundary.top;

    console.log('user', x, y);
    setUserCoords({ x, y });
    const data = await getCharacterCoordinates();
    const correct = data[userChoice];
    console.log('correct tate', correct.x, correct.y);
    if (Math.abs(x - correct.x) < 20) {
      console.log('good job');
    } else {
      console.log('nope');
    }
  };

  const checkCoordinates = async (e) => {
    const user = getUserCoordinates(e);

    console.log(correct);
  };

  return (
    <div className="mx-auto w-max cursor-pointer">
      {/* <Character
          name={'Sharon Tate'}
          coords={'660,265,40'}
          handleClick={handleClick}
        />
        <Character
          name={'The Gimp'}
          coords={'1263,143,40'}
          handleClick={handleClick}
        />
        <Character
          name={'Hans Landa'}
          coords={'209,715,40'}
          handleClick={handleClick}
        /> */}
      <img
        useMap="#clickableImg"
        src={TarantinoArt}
        alt="Where's Waldo style art with scenes from Tarantino films"
        onClick={getUserCoordinates}
      />
    </div>
  );
};
