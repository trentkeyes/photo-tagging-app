import { CharacterMenuItem } from './CharacterMenuItem';

const CharacterMenu = ({ userCoords }) => {
  console.log(userCoords);
  return (
    <div
      style={{
        top: `${userCoords.y-60}px`,
        left: `${userCoords.x + 30}px`,
      }}
      className="absolute bg-blue bg-opacity-90 rounded"
    >
      <CharacterMenuItem name={'Sharon Tate'} />
      <CharacterMenuItem name={'The Gimp'} />
      <CharacterMenuItem name={'Hans Landa'} />
    </div>
  );
};

export { CharacterMenu };
