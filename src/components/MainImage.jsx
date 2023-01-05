import TarantinoArt from '../assets/tarantino-bangzheng-du.jpg';
import { Character } from './Character';

export const MainImage = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(`You have clicked on ${e.target.id}`, e.target);
  };

  const handleImg = (e) => {
    console.log(e.target.offsetX);
  };

  const handleMouseMove = (e) => {
    console.log(
      'ScreenX:',
      e.screenX,
      'ScreenY:',
      e.screenY,
      'ClientX',
      e.clientX,
      'ClientY:',
      e.clientY,
      'OffsetX',
      e.pageX,
      e.pageY
    );
  };

  return (
    <div className="mx-auto w-max">
      <map name="clickableImg">
        <Character
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
        />
      </map>

      <img
        useMap="#clickableImg"
        src={TarantinoArt}
        alt="Where's Waldo style art with scenes from Tarantino films"
        onMouseMove={handleMouseMove}
      />
    </div>
  );
};
