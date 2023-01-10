export const NavCharacter = ({ name, img, found }) => {
  const foundClasses =
    'flex flex-col items-center text-white bg-green bg-opacity-100 rounded p-1 shadow-md';
  const unFoundClasses =
    'flex flex-col items-center text-white bg-tarantino-bg bg-opacity-60 rounded p-1 shadow-md';
  return (
    <div className={found ? foundClasses : unFoundClasses}>
      <div className="w-16">
        <img src={img} alt="" />
      </div>
      <h4 className="text-center font-bold text-large ">{name}</h4>
    </div>
  );
};
