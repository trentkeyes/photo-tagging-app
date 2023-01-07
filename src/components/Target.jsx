import { useEffect, useState } from 'react';
import { CharacterMenu } from './CharacterMenu';

export const Target = ({ userCoords }) => {
  return (
    <div
      style={{
        top: `${userCoords.y - 60}px`,
        left: `${userCoords.x - 20}px`,
      }}
      className={'absolute flex items-center gap-2'}
    >
      <div className="h-10 w-10 border-4 border-red rounded-full"></div>
      <CharacterMenu />
    </div>
  );
};
