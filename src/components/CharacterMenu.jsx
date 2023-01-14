import { CharacterMenuItem } from './CharacterMenuItem';
import { FailMessage } from './FailMessage';

export const CharacterMenu = ({ userCoords, play, foundCharacs, fail }) => {
  const characs = Object.keys(foundCharacs);

  const charMenuItems = characs.map((item) => {
    return (
      <CharacterMenuItem
        key={item}
        name={item}
        play={play}
        found={foundCharacs[item]}
      />
    );
  });

  return (
    <div
      style={{
        top: `${userCoords.y - 60}px`,
        left: `${userCoords.x + 30}px`,
      }}
      className="absolute"
    >
      <div className="bg-blue bg-opacity-90 rounded">{charMenuItems}</div>
    </div>
  );
};
