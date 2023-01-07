import React from 'react';
import { CharacterMenuItem } from './CharacterMenuItem';

export const CharacterMenu = () => {
  return (
    <div className="bg-blue bg-opacity-90 rounded">
      <CharacterMenuItem name={'Sharon Tate'} />
      <CharacterMenuItem name={'The Gimp'} />
      <CharacterMenuItem name={'Hans Landa'} />
    </div>
  );
};
