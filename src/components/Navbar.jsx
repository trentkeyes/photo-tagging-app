import { NavCharacter } from './NavCharacter';
import { Timer } from './Timer';

export const Navbar = ({ winTime }) => {
  return (
    <nav className="bg-blue flex justify-around items-center">
      <h1 className="text-3xl ml-2">
        Find the Characters. The clock is ticking!
      </h1>
      <Timer winTime={winTime} />

      <div className="flex gap-2 mx-auto">
        <NavCharacter name={'Sharon Tate'} />
        <NavCharacter name={'Hans Landa'} />
        <NavCharacter name={'The Gimp'} />
      </div>
    </nav>
  );
};
