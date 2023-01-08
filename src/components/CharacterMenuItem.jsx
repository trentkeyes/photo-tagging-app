import Tate from '../assets/tate.png';

export const CharacterMenuItem = ({ name, img, play, found }) => {
  const classes = found ? 'line-through decoration-red' : 'font-bold';

  return (
    <div
      id={name}
      className="p-2 hover:bg-tarantino-bg hover:bg-opacity-40"
      onClick={() => play(name)}
    >
      {/* <div className='w-4'>
        <img src={Tate} alt=""/>
      </div> */}
      <p className={classes}>{name}</p>
    </div>
  );
};
