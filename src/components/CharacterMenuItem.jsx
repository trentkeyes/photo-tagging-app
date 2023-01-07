import Tate from '../assets/tate.png';

export const CharacterMenuItem = ({ name, img }) => {
  return (
    <div className="p-2 hover:bg-tarantino-bg hover:bg-opacity-40">
      {/* <div className='w-4'>
        <img src={Tate} alt=""/>
      </div> */}
      <p className="font-bold">{name}</p>
    </div>
  );
};
