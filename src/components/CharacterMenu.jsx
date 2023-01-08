import { CharacterMenuItem } from './CharacterMenuItem';

const CharacterMenu = ({ userCoords, play, foundCharacs }) => {
  return (
    <div
      style={{
        top: `${userCoords.y - 60}px`,
        left: `${userCoords.x + 30}px`,
      }}
      className="absolute bg-blue bg-opacity-90 rounded"
    >
      <CharacterMenuItem
        name={'Sharon Tate'}
        play={play}
        found={foundCharacs['Sharon Tate']}
      />
      <CharacterMenuItem
        name={'Hans Landa'}
        play={play}
        found={foundCharacs['Hans Landa']}
      />
      <CharacterMenuItem
        name={'The Gimp'}
        play={play}
        found={foundCharacs['The Gimp']}
      />
    </div>
  );
};

export { CharacterMenu };
