import TarantinoArt from '../assets/tarantino-bangzheng-du.jpg';
import { Target } from './Target';
import { CharacterMenu } from './CharacterMenu';

export const MainImage = ({
  foundCharacs,
  userCoords,
  setUserCoords,
  play,
}) => {
  const getUserCoordinates = (e) => {
    const boundary = e.target.getBoundingClientRect();
    const x = e.clientX - boundary.left;
    const y = e.clientY - boundary.top;
    setUserCoords({ x: x, y: y });
  };

  return (
    <div className="bg-tarantino-bg mt-[107px]">
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
    </div>
  );
};
