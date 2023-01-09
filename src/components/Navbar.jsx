import { NavCharacter } from './NavCharacter';
import { Timer } from './Timer';
import tate from '../assets/tate.png';
import landa from '../assets/landa.png';
import gimp from '../assets/gimp.png';

export const Navbar = ({ winTime }) => {
  return (
    <nav className="">
      <div className="max-w-[1400px] mx-auto bg-blue py-2 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white bg-tarantino-bg bg-opacity-60 rounded p-2">
          Find the characters!
        </h1>
        <div className="flex items-end gap-4">
          <NavCharacter name={'Sharon Tate'} img={tate} />
          <NavCharacter name={'Hans Landa'} img={landa} />
          <NavCharacter name={'The Gimp'} img={gimp} />
        </div>{' '}
        <Timer winTime={winTime} />
      </div>
    </nav>
  );
};
