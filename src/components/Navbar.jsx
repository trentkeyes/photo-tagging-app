import { NavCharacter } from './NavCharacter';

export const Navbar = () => {
  return (
    <nav className="bg-blue flex justify-between items-center">
      <h1 className="text-3xl ml-2">Find the Characters</h1>
      <div className="flex gap-2 mx-auto">
        <NavCharacter name={'Sharon Tate'} />
        <NavCharacter name={'Hans Landa'} /><NavCharacter name={'The Gimp'} />
        
      </div>
    </nav>
  );
};
