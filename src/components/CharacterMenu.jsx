import { CharacterMenuItem } from './CharacterMenuItem';

export const CharacterMenu = ({ userCoords, play, foundCharacs }) => {
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
      className="absolute bg-blue bg-opacity-90 rounded"
    >
      {charMenuItems}
    </div>
  );
};
