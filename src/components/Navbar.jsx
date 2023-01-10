import { NavCharacter } from './NavCharacter';
import { Timer } from './Timer';
import tate from '../assets/tate.png';
import landa from '../assets/landa.png';
import gimp from '../assets/gimp.png';

export const Navbar = ({ foundCharacs, winTime, setLeaderboardOpen }) => {
  const images = [tate, landa, gimp];
  const characElements = Object.entries(foundCharacs).map(
    ([name, found], index) => {
      return (
        <NavCharacter
          key={name}
          name={name}
          img={images[index]}
          found={found}
        />
      );
    }
  );

  return (
    <nav className="">
      <div className="max-w-[1360px] mx-auto bg-blue px-4 py-2 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl font-bold text-white bg-tarantino-bg bg-opacity-60 rounded p-2">
            Find the characters!
          </h1>
          <div className="flex items-end gap-4">{characElements}</div>
          <Timer winTime={winTime} />
        </div>

        <button
          onClick={() => setLeaderboardOpen(true)}
          className="text-white bg-tarantino-bg bg-opacity-60 rounded p-2 shadow-md"
        >
          Leaderboard
        </button>
      </div>
    </nav>
  );
};
